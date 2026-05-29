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
[View source repository on GitHub](https://github.com/Fannovel16/ComfyUI-Frame-Interpolation)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
