# Documentation
- Class name: FILM_VFI
- Category: ComfyUI-Frame-Interpolation/VFI
- Output node: False
- Repo Ref: https://github.com/Fannovel16/ComfyUI-Frame-Interpolation

The FILM_VFI node aims to enhance video content through frame interpolation, increasing frame rate and smoothness without sacrificing visual quality. It achieves this via a complex model that uses machine learning techniques to generate intermediate frames between existing ones, bringing smoother, more realistic motion to video sequences.

# Input types
## Required
- ckpt_name
    - The ckpt name is a critical parameter for specifying the pretrained model used for frame interpolation. It directly affects the quality and accuracy of interpolated frames, as different models may be trained on different datasets or use different algorithms.
    - Comfy dtype: STRING
    - Python dtype: str
- frames
    - Input frames are the source material for the frame interpolation process. They are essential because they provide the visual context for the node to generate additional frames, enhancing the entire video sequence. The quality and resolution of these input frames play an important role in determining the visual fidelity of the output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- clear_cache_after_n_frames
    - This parameter helps manage computational resources by specifying how often the cache should be cleared during the frame interpolation process. It indirectly affects the node's performance and memory usage, ensuring it operates within available system resources.
    - Comfy dtype: INT
    - Python dtype: int
- multiplier
    - The multiplier parameter determines the number of additional frames to generate between each pair of input frames. It is crucial for controlling the density of the output video, with higher values enabling smoother motion at the cost of increased computational complexity.
    - Comfy dtype: INT
    - Python dtype: int
- optional_interpolation_states
    - This parameter allows customization of the frame interpolation process by specifying which frames should be skipped or not skipped. It provides a degree of control over the final output, enabling the node to cater to specific requirements or constraints of the video content.
    - Comfy dtype: INTERPOLATION_STATES
    - Python dtype: InterpolationStateList

# Output types
- output_frames
    - output_frames represent the result of the frame interpolation process, including the original input frames and newly generated intermediate frames. This output is important because it provides a higher frame rate video, enhancing the visual experience and smoothness of motion.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class FILM_VFI:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'ckpt_name': (['film_net_fp32.pt'],), 'frames': ('IMAGE',), 'clear_cache_after_n_frames': ('INT', {'default': 10, 'min': 1, 'max': 1000}), 'multiplier': ('INT', {'default': 2, 'min': 2, 'max': 1000})}, 'optional': {'optional_interpolation_states': ('INTERPOLATION_STATES',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'vfi'
    CATEGORY = 'ComfyUI-Frame-Interpolation/VFI'

    def vfi(self, ckpt_name: typing.AnyStr, frames: torch.Tensor, clear_cache_after_n_frames=10, multiplier: typing.SupportsInt=2, optional_interpolation_states: InterpolationStateList=None, **kwargs):
        interpolation_states = optional_interpolation_states
        model_path = load_file_from_github_release(MODEL_TYPE, ckpt_name)
        model = torch.jit.load(model_path, map_location='cpu')
        model.eval()
        model = model.to(DEVICE)
        dtype = torch.float32
        frames = preprocess_frames(frames)
        number_of_frames_processed_since_last_cleared_cuda_cache = 0
        output_frames = []
        for frame_itr in range(len(frames) - 1):
            if interpolation_states is not None and interpolation_states.is_frame_skipped(frame_itr):
                continue
            frame_0 = frames[frame_itr:frame_itr + 1].to(DEVICE).float()
            frame_1 = frames[frame_itr + 1:frame_itr + 2].to(DEVICE).float()
            relust = inference(model, frame_0, frame_1, multiplier - 1)
            output_frames.extend([frame.detach().cpu().to(dtype=dtype) for frame in relust[:-1]])
            number_of_frames_processed_since_last_cleared_cuda_cache += 1
            if number_of_frames_processed_since_last_cleared_cuda_cache >= clear_cache_after_n_frames:
                print('Comfy-VFI: Clearing cache...')
                soft_empty_cache()
                number_of_frames_processed_since_last_cleared_cuda_cache = 0
                print('Comfy-VFI: Done cache clearing')
            gc.collect()
        output_frames.append(frames[-1:].to(dtype=dtype))
        output_frames = [frame.cpu() for frame in output_frames]
        out = torch.cat(output_frames, dim=0)
        print('Comfy-VFI: Final clearing cache...')
        soft_empty_cache()
        print('Comfy-VFI: Done cache clearing')
        return (postprocess_frames(out),)
```