# Documentation
- Class name: IFRNet_VFI
- Category: ComfyUI-Frame-Interpolation/VFI
- Output node: False
- Repo Ref: https://github.com/Fannovel16/ComfyUI-Frame-Interpolation

The IFRNet_VFI node aims to perform video frame interpolation, enhancing the smoothness of transitions between frames in a video sequence. It utilizes a deep learning model to generate intermediate frames, thereby increasing the frame rate without sacrificing visual quality. This node is particularly suitable for applications requiring high frame rate videos for better motion clarity.

# Input types
## Required
- ckpt_name
    - The checkpoint_name parameter is crucial for loading the pre-trained model weights required for the frame interpolation process. It determines the specific model architecture and its corresponding weights that the node will use.
    - Comfy dtype: str
    - Python dtype: str
- frames
    - The frames parameter is required as it represents the input video frames that the node will process for interpolation. The quality and resolution of the input frames directly affect the output of the frame interpolation.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
## Optional
- clear_cache_after_n_frames
    - The clear_cache_after_n_frames parameter is used to optimize memory usage during the frame interpolation process. It specifies the number of frames after which the cache is cleared to free memory.
    - Comfy dtype: int
    - Python dtype: int
- multiplier
    - The multiplier parameter defines the rate at which new frames are inserted between original frames. A higher multiplier results in a higher frame rate for the output video.
    - Comfy dtype: int
    - Python dtype: int
- scale_factor
    - The scale_factor parameter is used to adjust the resolution of input frames before processing. It can be used to scale frames up or down as needed.
    - Comfy dtype: float
    - Python dtype: float
- optional_interpolation_states
    - The optional_interpolation_states parameter provides additional control over the frame interpolation process. It allows specifying custom states or conditions for certain frames during interpolation.
    - Comfy dtype: InterpolationStateList
    - Python dtype: InterpolationStateList

# Output types
- output_frames
    - The output_frames parameter represents the result of the frame interpolation process. It contains the original frames as well as the newly generated intermediate frames, resulting in a smoother video sequence.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class IFRNet_VFI:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'ckpt_name': (CKPT_NAMES,), 'frames': ('IMAGE',), 'clear_cache_after_n_frames': ('INT', {'default': 10, 'min': 1, 'max': 1000}), 'multiplier': ('INT', {'default': 2, 'min': 2, 'max': 1000}), 'scale_factor': ([0.25, 0.5, 1.0, 2.0, 4.0], {'default': 1.0})}, 'optional': {'optional_interpolation_states': ('INTERPOLATION_STATES',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'vfi'
    CATEGORY = 'ComfyUI-Frame-Interpolation/VFI'

    def vfi(self, ckpt_name: typing.AnyStr, frames: torch.Tensor, clear_cache_after_n_frames: typing.SupportsInt=1, multiplier: typing.SupportsInt=2, scale_factor: typing.SupportsFloat=1.0, optional_interpolation_states: InterpolationStateList=None, **kwargs):
        from .IFRNet_S_arch import IRFNet_S
        from .IFRNet_L_arch import IRFNet_L
        model_path = load_file_from_github_release(MODEL_TYPE, ckpt_name)
        interpolation_model = IRFNet_S() if 'S' in ckpt_name else IRFNet_L()
        interpolation_model.load_state_dict(torch.load(model_path))
        interpolation_model.eval().to(get_torch_device())
        frames = preprocess_frames(frames)

        def return_middle_frame(frame_0, frame_1, timestep, model, scale_factor):
            return model(frame_0, frame_1, timestep, scale_factor)
        args = [interpolation_model, scale_factor]
        out = postprocess_frames(generic_frame_loop(frames, clear_cache_after_n_frames, multiplier, return_middle_frame, *args, interpolation_states=optional_interpolation_states, dtype=torch.float32))
        return (out,)
```