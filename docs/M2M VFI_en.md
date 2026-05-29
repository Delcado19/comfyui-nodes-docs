# Documentation
- Class name: M2M_VFI
- Category: ComfyUI-Frame-Interpolation/VFI
- Output node: False
- Repo Ref: https://github.com/Fannovel16/ComfyUI-Frame-Interpolation

The M2M_VFI node is designed to insert frames between two given video frames, enhancing the smoothness and continuity of the video sequence. It uses deep learning models to generate intermediate frames that do not exist in the original footage, creating a more fluid visual experience.

# Input types
## Required
- ckpt_name
    - The checkpoint name parameter is crucial for determining the specific pre-trained model used for frame interpolation. It ensures the correct weights and configuration are loaded to achieve the desired interpolation results.
    - Comfy dtype: str
    - Python dtype: str
- frames
    - The frames parameter is required as it represents the input video frames that the node will process for interpolation. The quality and resolution of the input frames directly affect the interpolation output, making this parameter essential for the node's execution.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
## Optional
- clear_cache_after_n_frames
    - The clear_cache_after_n_frames parameter determines how frequently the node clears the cache to manage memory usage. This is important for maintaining performance, especially when processing large amounts of video data.
    - Comfy dtype: int
    - Python dtype: int
- multiplier
    - The multiplier parameter affects the number of intermediate frames generated between input frames. A higher value results in more interpolated frames, enabling smoother transitions but potentially increasing computational requirements.
    - Comfy dtype: int
    - Python dtype: int
- optional_interpolation_states
    - The optional_interpolation_states parameter provides a way to customize the interpolation process by specifying certain states or conditions. This advanced feature allows for greater control over the output frames to meet specific project requirements.
    - Comfy dtype: InterpolationStateList
    - Python dtype: InterpolationStateList

# Output types
- output_frames
    - The output_frames parameter represents the result of the frame interpolation process. It includes the original frames along with the newly generated intermediate frames, providing a complete and enhanced video sequence.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class M2M_VFI:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'ckpt_name': (CKPT_NAMES,), 'frames': ('IMAGE',), 'clear_cache_after_n_frames': ('INT', {'default': 10, 'min': 1, 'max': 1000}), 'multiplier': ('INT', {'default': 2, 'min': 2, 'max': 1000})}, 'optional': {'optional_interpolation_states': ('INTERPOLATION_STATES',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'vfi'
    CATEGORY = 'ComfyUI-Frame-Interpolation/VFI'

    def vfi(self, ckpt_name: typing.AnyStr, frames: torch.Tensor, clear_cache_after_n_frames: typing.SupportsInt=1, multiplier: typing.SupportsInt=2, optional_interpolation_states: InterpolationStateList=None, **kwargs):
        from .M2M_arch import M2M_PWC
        model_path = load_file_from_github_release(MODEL_TYPE, ckpt_name)
        interpolation_model = M2M_PWC()
        interpolation_model.load_state_dict(torch.load(model_path))
        interpolation_model.eval().to(get_torch_device())
        frames = preprocess_frames(frames)

        def return_middle_frame(frame_0, frame_1, int_timestep, model):
            tenSteps = [torch.FloatTensor([int_timestep] * len(frame_0)).view(len(frame_0), 1, 1, 1).to(get_torch_device())]
            return model(frame_0, frame_1, tenSteps)[0]
        args = [interpolation_model]
        out = postprocess_frames(generic_frame_loop(frames, clear_cache_after_n_frames, multiplier, return_middle_frame, *args, interpolation_states=optional_interpolation_states, dtype=torch.float32))
        return (out,)
```