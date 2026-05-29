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
[View source repository on GitHub](https://github.com/Fannovel16/ComfyUI-Frame-Interpolation)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
