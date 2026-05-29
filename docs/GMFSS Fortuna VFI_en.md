# Documentation
- Class name: GMFSS_Fortuna_VFI
- Category: ComfyUI-Frame-Interpolation/VFI
- Output node: False
- Repo Ref: https://github.com/Fannovel16/ComfyUI-Frame-Interpolation

The GMFSS_Fortuna_VFI node aims to perform video frame interpolation using a deep learning model. It receives input video frames and increases the frame rate by generating additional frames between existing ones, creating smoother transitions and higher-quality video output.

# Input types
## Required
- ckpt_name
    - The checkpoint name is critical as it determines the specific model weights and architecture used for the frame interpolation process. It affects the quality and style of the interpolated frames.
    - Comfy dtype: str
    - Python dtype: str
- frames
    - Input video frames are the primary data required for interpolation. They are processed to generate intermediate frames, which are essential for achieving the desired video enhancement.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
## Optional
- clear_cache_after_n_frames
    - This parameter determines how often the CUDA cache is cleared during processing to prevent memory overflow. It balances memory usage and processing time.
    - Comfy dtype: int
    - Python dtype: int
- multiplier
    - The multiplier determines how many frames are generated between each pair of input frames. A higher multiplier results in a higher output frame rate.
    - Comfy dtype: int
    - Python dtype: int
- optional_interpolation_states
    - This optional parameter allows custom control over the interpolation process, such as skipping certain frames or applying specific interpolation techniques.
    - Comfy dtype: InterpolationStateList
    - Python dtype: InterpolationStateList

# Output types
- output_frames
    - The output_frames parameter contains the interpolated video frames. These frames are the result of the frame interpolation process and represent the enhanced video sequence.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/Fannovel16/ComfyUI-Frame-Interpolation)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
