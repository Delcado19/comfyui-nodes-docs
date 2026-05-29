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
[View source repository on GitHub](https://github.com/Fannovel16/ComfyUI-Frame-Interpolation)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
