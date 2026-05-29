# Documentation
- Class name: RIFE_VFI
- Category: ComfyUI-Frame-Interpolation/VFI
- Output node: False
- Repo Ref: https://github.com/Fannovel16/ComfyUI-Frame-Interpolation

The RIFE_VFI node is designed to perform video frame interpolation using a specified checkpoint model. It generates interpolated frames between input video frames, effectively doubling the frame rate. The node operates by sequentially processing each frame and creating new ones, enhancing the smoothness and continuity of the video sequence.

# Input types
## Required
- ckpt_name
    - The ckpt_name parameter is critical for selecting the appropriate checkpoint model for frame interpolation. It determines the specific weights and architecture the node will apply to generate interpolated frames.
    - Comfy dtype: str
    - Python dtype: str
- frames
    - The frames parameter is required, as it contains the input video frames the node will process. The quality and resolution of the input frames directly impact the interpolation output, making this parameter essential to the node's operation.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
## Optional
- clear_cache_after_n_frames
    - clear_cache_after_n_frames is an optional setting that helps manage memory usage during interpolation. It specifies the number of frames to process before clearing the CUDA cache to prevent memory overflow, which can be adjusted based on system memory capacity and the number of input frames.
    - Comfy dtype: int
    - Python dtype: int
- multiplier
    - The multiplier parameter determines the factor by which input frames are multiplied to generate output frames. For example, with a multiplier of 2, each input frame produces two output frames, effectively creating one interpolated frame between them.
    - Comfy dtype: int
    - Python dtype: int
- fast_mode
    - The fast_mode parameter is an optional boolean flag that, when set to True, enables a faster but potentially less precise interpolation process. This is useful for quick previews or processing large numbers of frames.
    - Comfy dtype: bool
    - Python dtype: bool
- ensemble
    - The ensemble parameter allows combining multiple interpolation models to improve the quality of interpolated frames. When enabled, it may increase processing time but can result in more stable and higher-fidelity results.
    - Comfy dtype: bool
    - Python dtype: bool
- scale_factor
    - The scale_factor parameter adjusts the resolution of input frames before processing. It is particularly useful for handling different frame sizes and can influence the clarity and detail of the final output.
    - Comfy dtype: float
    - Python dtype: float
- optional_interpolation_states
    - The optional_interpolation_states parameter provides a way to customize the interpolation process using additional states. This can include specific instructions or conditions that affect how frames are interpolated, allowing for finer-grained control over the output.
    - Comfy dtype: INTERPOLATION_STATES
    - Python dtype: InterpolationStateList

# Output types
- interpolated_frames
    - The interpolated_frames parameter represents the output of the frame interpolation process. It contains the original input frames along with the newly generated intermediate frames, effectively creating a smoother video sequence.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class RIFE_VFI:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'ckpt_name': (sorted(list(CKPT_NAME_VER_DICT.keys()), key=lambda ckpt_name: version.parse(CKPT_NAME_VER_DICT[ckpt_name])), {'default': 'rife47.pth'}), 'frames': ('IMAGE',), 'clear_cache_after_n_frames': ('INT', {'default': 10, 'min': 1, 'max': 1000}), 'multiplier': ('INT', {'default': 2, 'min': 1}), 'fast_mode': ('BOOLEAN', {'default': True}), 'ensemble': ('BOOLEAN', {'default': True}), 'scale_factor': ([0.25, 0.5, 1.0, 2.0, 4.0], {'default': 1.0})}, 'optional': {'optional_interpolation_states': ('INTERPOLATION_STATES',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'vfi'
    CATEGORY = 'ComfyUI-Frame-Interpolation/VFI'

    def vfi(self, ckpt_name: typing.AnyStr, frames: torch.Tensor, clear_cache_after_n_frames=10, multiplier: typing.SupportsInt=2, fast_mode=False, ensemble=False, scale_factor=1.0, optional_interpolation_states: InterpolationStateList=None, **kwargs):
        """
        Perform video frame interpolation using a given checkpoint model.
    
        Args:
            ckpt_name (str): The name of the checkpoint model to use.
            frames (torch.Tensor): A tensor containing input video frames.
            clear_cache_after_n_frames (int, optional): The number of frames to process before clearing CUDA cache
                to prevent memory overflow. Defaults to 10. Lower numbers are safer but mean more processing time.
                How high you should set it depends on how many input frames there are, input resolution (after upscaling),
                how many times you want to multiply them, and how long you're willing to wait for the process to complete.
            multiplier (int, optional): The multiplier for each input frame. 60 input frames * 2 = 120 output frames. Defaults to 2.
    
        Returns:
            tuple: A tuple containing the output interpolated frames.
    
        Note:
            This method interpolates frames in a video sequence using a specified checkpoint model. 
            It processes each frame sequentially, generating interpolated frames between them.
    
            To prevent memory overflow, it clears the CUDA cache after processing a specified number of frames.
        """
        from .rife_arch import IFNet
        model_path = load_file_from_github_release(MODEL_TYPE, ckpt_name)
        arch_ver = CKPT_NAME_VER_DICT[ckpt_name]
        interpolation_model = IFNet(arch_ver=arch_ver)
        interpolation_model.load_state_dict(torch.load(model_path))
        interpolation_model.eval().to(get_torch_device())
        frames = preprocess_frames(frames)

        def return_middle_frame(frame_0, frame_1, timestep, model, scale_list, in_fast_mode, in_ensemble):
            return model(frame_0, frame_1, timestep, scale_list, in_fast_mode, in_ensemble)
        scale_list = [8 / scale_factor, 4 / scale_factor, 2 / scale_factor, 1 / scale_factor]
        args = [interpolation_model, scale_list, fast_mode, ensemble]
        out = postprocess_frames(generic_frame_loop(frames, clear_cache_after_n_frames, multiplier, return_middle_frame, *args, interpolation_states=optional_interpolation_states, dtype=torch.float32))
        return (out,)
```