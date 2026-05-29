# Documentation
- Class name: IFUnet_VFI
- Category: ComfyUI-Frame-Interpolation/VFI
- Output node: False
- Repo Ref: https://github.com/Fannovel16/ComfyUI-Frame-Interpolation

The IFUnet_VFI node performs video frame interpolation, enhancing smoothness and continuity of video transitions by generating intermediate frames. It uses a deep learning model to predict and insert frames between existing ones, improving overall visual quality and fluidity of the video sequence.

# Input types
## Required
- ckpt_name
    - The checkpoint name parameter is crucial for identifying the specific model weights used for frame interpolation. It directs the node to the correct pretrained model, ensuring accuracy and efficiency of the frame generation process.
    - Comfy dtype: str
    - Python dtype: str
- frames
    - The frames parameter is required because it provides the input video frames that the node will interpolate. The quality and resolution of the input frames directly affect the visual appearance of the output frames.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- clear_cache_after_n_frames
    - The clear_cache_after_n_frames parameter is vital for managing memory usage during interpolation. It clears the cache after processing a certain number of frames, helping maintain system performance.
    - Comfy dtype: INT
    - Python dtype: int
- multiplier
    - The multiplier parameter determines the number of intermediate frames generated between consecutive frames. It controls the density of interpolated frames, a key factor for video smoothness.
    - Comfy dtype: INT
    - Python dtype: int
- scale_factor
    - The scale_factor parameter adjusts the scaling of input frames before processing. This important factor can affect the detail and resolution of interpolated frames.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ensemble
    - The ensemble parameter enables an ensemble method to improve stability and quality of interpolated frames. It is optional and can enhance node performance under certain conditions.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- optional_interpolation_states
    - The optional_interpolation_states parameter provides additional control over the interpolation process, allowing customization of frame generation to meet specific requirements or constraints.
    - Comfy dtype: INTERPOLATION_STATES
    - Python dtype: InterpolationStateList

# Output types
- output_frames
    - The output_frames parameter represents the result of the frame interpolation process. It includes the original frames and newly generated intermediate frames, enhancing video continuity and visual appeal.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class IFUnet_VFI:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'ckpt_name': (CKPT_NAMES,), 'frames': ('IMAGE',), 'clear_cache_after_n_frames': ('INT', {'default': 10, 'min': 1, 'max': 1000}), 'multiplier': ('INT', {'default': 2, 'min': 2, 'max': 1000}), 'scale_factor': ('FLOAT', {'default': 1.0, 'min': 0.1, 'max': 100, 'step': 0.1}), 'ensemble': ('BOOLEAN', {'default': True})}, 'optional': {'optional_interpolation_states': ('INTERPOLATION_STATES',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'vfi'
    CATEGORY = 'ComfyUI-Frame-Interpolation/VFI'

    def vfi(self, ckpt_name: typing.AnyStr, frames: torch.Tensor, clear_cache_after_n_frames: typing.SupportsInt=1, multiplier: typing.SupportsInt=2, scale_factor: typing.SupportsFloat=1.0, ensemble: bool=True, optional_interpolation_states: InterpolationStateList=None, **kwargs):
        from .IFUNet_arch import IFUNetModel
        model_path = load_file_from_github_release(MODEL_TYPE, ckpt_name)
        interpolation_model = IFUNetModel()
        interpolation_model.load_state_dict(torch.load(model_path))
        interpolation_model.eval().to(get_torch_device())
        frames = preprocess_frames(frames)

        def return_middle_frame(frame_0, frame_1, timestep, model, scale_factor, ensemble):
            return model(frame_0, frame_1, timestep=timestep, scale=scale_factor, ensemble=ensemble)
        args = [interpolation_model, scale_factor, ensemble]
        out = postprocess_frames(generic_frame_loop(frames, clear_cache_after_n_frames, multiplier, return_middle_frame, *args, interpolation_states=optional_interpolation_states, dtype=torch.float32))
        return (out,)
```