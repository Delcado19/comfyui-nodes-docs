# Documentation
- Class name: GMFSS_Fortuna_VFI
- Category: ComfyUI-Frame-Interpolation/VFI
- Output node: False
- Repo Ref: https://github.com/Fannovel16/ComfyUI-Frame-Interpolation

The GMFSS_Fortuna_VFI node aims to perform video frame interpolation using a deep learning model. It receives input video frames and increases the frame rate by generating additional frames between existing ones, creating smoother transitions and higher-quality video output.

# Input types
## Required
- ckpt_name
    - The checkpoint name is critical as it determines the specific model weights and architecture used for the frame interpolation process. It affects the quality and style of the interpolated frames.
    - Comfy dtype: str
    - Python dtype: str
- frames
    - Input video frames are the primary data required for interpolation. They are processed to generate intermediate frames, which are essential for achieving the desired video enhancement.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
## Optional
- clear_cache_after_n_frames
    - This parameter determines how often the CUDA cache is cleared during processing to prevent memory overflow. It balances memory usage and processing time.
    - Comfy dtype: int
    - Python dtype: int
- multiplier
    - The multiplier determines how many frames are generated between each pair of input frames. A higher multiplier results in a higher output frame rate.
    - Comfy dtype: int
    - Python dtype: int
- optional_interpolation_states
    - This optional parameter allows custom control over the interpolation process, such as skipping certain frames or applying specific interpolation techniques.
    - Comfy dtype: InterpolationStateList
    - Python dtype: InterpolationStateList

# Output types
- output_frames
    - The output_frames parameter contains the interpolated video frames. These frames are the result of the frame interpolation process and represent the enhanced video sequence.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class GMFSS_Fortuna_VFI:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'ckpt_name': (list(CKPTS_PATH_CONFIG.keys()),), 'frames': ('IMAGE',), 'clear_cache_after_n_frames': ('INT', {'default': 10, 'min': 1, 'max': 1000}), 'multiplier': ('INT', {'default': 2, 'min': 2, 'max': 1000})}, 'optional': {'optional_interpolation_states': ('INTERPOLATION_STATES',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'vfi'
    CATEGORY = 'ComfyUI-Frame-Interpolation/VFI'

    def vfi(self, ckpt_name: typing.AnyStr, frames: torch.Tensor, clear_cache_after_n_frames=10, multiplier: typing.SupportsInt=2, optional_interpolation_states: InterpolationStateList=None, **kwargs):
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
        interpolation_model = CommonModelInference(model_type=ckpt_name)
        interpolation_model.eval().to(get_torch_device())
        frames = preprocess_frames(frames)

        def return_middle_frame(frame_0, frame_1, timestep, model, scale):
            return model(frame_0, frame_1, timestep, scale)
        scale = 1
        args = [interpolation_model, scale]
        out = postprocess_frames(generic_frame_loop(frames, clear_cache_after_n_frames, multiplier, return_middle_frame, *args, interpolation_states=optional_interpolation_states, dtype=torch.float32))
        return (out,)
```