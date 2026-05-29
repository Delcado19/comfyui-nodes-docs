# Documentation
- Class name: FLAVR_VFI
- Category: ComfyUI-Frame-Interpolation/VFI
- Output node: False
- Repo Ref: https://github.com/Fannovel16/ComfyUI-Frame-Interpolation

The FLAVR_VFI node performs frame interpolation on input frame sequences to enhance animation smoothness and continuity. It uses an underlying model to generate intermediate frames, effectively doubling the frame rate. This node is essential for applications requiring smooth motion without heavy computational resources.

# Input types
## Required
- ckpt_name
    - The checkpoint_name parameter is critical for identifying the specific model weights used for frame interpolation. It ensures the correct model configuration is loaded to process frames.
    - Comfy dtype: str
    - Python dtype: str
- frames
    - The frames parameter is a key input containing the image sequence to be interpolated. It forms the foundation of the interpolation process, where the node generates additional frames between provided frames for smoother transitions.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
## Optional
- clear_cache_after_n_frames
    - The clear_cache_after_n_frames parameter determines how often the GPU cache is cleared during processing to maintain optimal performance. It helps manage memory usage efficiently, preventing potential slowdowns or crashes due to memory overload.
    - Comfy dtype: int
    - Python dtype: int
- multiplier
    - The multiplier parameter specifies the factor by which the frame rate should be increased. Currently, the node only supports a multiplier of 2, which doubles the frame rate of the input sequence.
    - Comfy dtype: int
    - Python dtype: int
- duplicate_first_last_frames
    - When set to true, the duplicate_first_last_frames parameter duplicates the first and last frames in the output sequence. This is useful for maintaining consistent start and end points in interpolated animations.
    - Comfy dtype: bool
    - Python dtype: bool
- optional_interpolation_states
    - The optional_interpolation_states parameter provides a way to customize the interpolation process by specifying which frames should be skipped or included. This allows fine-tuning interpolation to meet specific creative requirements.
    - Comfy dtype: InterpolationStateList
    - Python dtype: InterpolationStateList

# Output types
- interpolated_frames
    - The interpolated_frames output contains the resulting frame sequence after interpolation. These frames include both the original input frames and newly generated intermediate frames, delivering a smoother, more continuous visual output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/Fannovel16/ComfyUI-Frame-Interpolation)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
