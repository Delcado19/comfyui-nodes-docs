# Documentation
- Class name: AMT_VFI
- Category: ComfyUI-Frame-Interpolation/VFI
- Output node: False
- Repo Ref: https://github.com/Fannovel16/ComfyUI-Frame-Interpolation

The AMT_VFI node is designed to perform video frame interpolation, enhancing the smoothness of transitions between frames and effectively increasing the frame rate of the video sequence. It utilizes a pre-trained model to generate intermediate frames that do not exist in the original footage, contributing to a smoother visual effect.

# Input types
## Required
- ckpt_name
    - The checkpoint name parameter is crucial for identifying the specific model configuration used for frame interpolation. It points the node to the correct pre-trained model, ensuring the desired output quality and performance.
    - Comfy dtype: str
    - Python dtype: str
- frames
    - The frames parameter is required because it represents the input video frames that the node will process for interpolation. The quality and resolution of the input frames directly affect the final interpolation output.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
## Optional
- clear_cache_after_n_frames
    - The clear_cache_after_n_frames parameter is used to optimize memory usage by clearing the cache after processing a specified number of frames. This helps prevent memory overload during intensive frame interpolation tasks.
    - Comfy dtype: int
    - Python dtype: int
- multiplier
    - The multiplier parameter determines the number of intermediate frames generated between two existing frames. Higher values result in a higher frame rate for the output video, but may also increase computational complexity.
    - Comfy dtype: int
    - Python dtype: int
- optional_interpolation_states
    - The optional_interpolation_states parameter provides additional control over the frame interpolation process, allowing customization of interpolation behavior for specific frames.
    - Comfy dtype: InterpolationStateList
    - Python dtype: InterpolationStateList

# Output types
- interpolated_frames
    - The interpolated_frames output contains the original video frames along with the newly generated intermediate frames, resulting in a smoother and higher frame rate video sequence.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class AMT_VFI:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'ckpt_name': (list(CKPT_CONFIGS.keys()),), 'frames': ('IMAGE',), 'clear_cache_after_n_frames': ('INT', {'default': 1, 'min': 1, 'max': 100}), 'multiplier': ('INT', {'default': 2, 'min': 2, 'max': 1000})}, 'optional': {'optional_interpolation_states': ('INTERPOLATION_STATES',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'vfi'
    CATEGORY = 'ComfyUI-Frame-Interpolation/VFI'

    def vfi(self, ckpt_name: typing.AnyStr, frames: torch.Tensor, clear_cache_after_n_frames: typing.SupportsInt=1, multiplier: typing.SupportsInt=2, optional_interpolation_states: InterpolationStateList=None, **kwargs):
        model_path = load_file_from_direct_url(MODEL_TYPE, f'https://huggingface.co/lalala125/AMT/resolve/main/{ckpt_name}')
        ckpt_config = CKPT_CONFIGS[ckpt_name]
        interpolation_model = ckpt_config['network'](**ckpt_config['params'])
        interpolation_model.load_state_dict(torch.load(model_path)['state_dict'])
        interpolation_model.eval().to(get_torch_device())
        frames = preprocess_frames(frames)
        padder = InputPadder(frames.shape, 16)
        frames = padder.pad(frames)

        def return_middle_frame(frame_0, frame_1, timestep, model):
            return model(frame_0, frame_1, embt=torch.FloatTensor([timestep] * frame_0.shape[0]).view(frame_0.shape[0], 1, 1, 1).to(get_torch_device()), scale_factor=1.0, eval=True)['imgt_pred']
        args = [interpolation_model]
        out = generic_frame_loop(frames, clear_cache_after_n_frames, multiplier, return_middle_frame, *args, interpolation_states=optional_interpolation_states, dtype=torch.float32)
        out = padder.unpad(out)
        out = postprocess_frames(out)
        return (out,)
```