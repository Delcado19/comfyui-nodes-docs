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
[View source repository on GitHub](https://github.com/Fannovel16/ComfyUI-Frame-Interpolation)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
