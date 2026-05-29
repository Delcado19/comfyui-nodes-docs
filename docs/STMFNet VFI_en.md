# Documentation
- Class name: STMFNet_VFI
- Category: ComfyUI-Frame-Interpolation/VFI
- Output node: False
- Repo Ref: https://github.com/Fannovel16/ComfyUI-Frame-Interpolation

The STMFNet_VFI node is designed to perform video frame interpolation, enhancing the smoothness of transitions between frames in a video sequence. It does this by generating intermediate frames that do not exist in the original footage, thereby increasing the frame rate and improving overall visual quality.

# Input types
## Required
- ckpt_name
    - The checkpoint name is crucial for loading the pre-trained model weights required for the frame interpolation process. It ensures the model has the necessary parameters to generate accurate intermediate frames.
    - Comfy dtype: str
    - Python dtype: str
- frames
    - The input frames are the original video data that the node processes to create interpolated frames. The quality and resolution of these frames directly affect the output of the interpolation.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
## Optional
- clear_cache_after_n_frames
    - This parameter determines how often the system clears the cache during processing, which helps manage memory usage. It is especially important for long video sequences to prevent memory overload.
    - Comfy dtype: int
    - Python dtype: int
- multiplier
    - The multiplier is used to determine the factor by which the frame rate will be increased. However, the current implementation only supports a multiplier of 2.
    - Comfy dtype: int
    - Python dtype: int
- duplicate_first_last_frames
    - When enabled, it duplicates the first and last frames in the output, which can provide a smoother start and end for the interpolated video sequence.
    - Comfy dtype: bool
    - Python dtype: bool
- optional_interpolation_states
    - This optional parameter allows customizing the interpolation state, which can skip certain frames during the interpolation process based on specific criteria.
    - Comfy dtype: InterpolationStateList
    - Python dtype: InterpolationStateList

# Output types
- interpolated_frames
    - The output of the STMFNet_VFI node is the interpolated video frames. These frames are the result of the frame interpolation process and are ready for use in video editing or playback.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/Fannovel16/ComfyUI-Frame-Interpolation)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
