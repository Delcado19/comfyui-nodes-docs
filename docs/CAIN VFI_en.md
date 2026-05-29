# Documentation
- Class name: CAIN_VFI
- Category: ComfyUI-Frame-Interpolation/VFI
- Output node: False
- Repo Ref: https://github.com/Fannovel16/ComfyUI-Frame-Interpolation

The CAIN_VFI node is designed to perform frame interpolation on a sequence of images, enhancing the smoothness and continuity of transitions between frames. It uses the CAIN architecture to generate intermediate frames that do not exist in the original sequence, thus creating a denser and more detailed motion representation.

# Input types
## Required
- ckpt_name
    - The checkpoint name is crucial for loading the pre-trained model weights required for frame interpolation. It identifies the specific model to be used in the operation.
    - Comfy dtype: str
    - Python dtype: str
- frames
    - The input frames represent the image sequence that will be processed for frame interpolation. This input is essential as it forms the basis for generating new frames.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
## Optional
- clear_cache_after_n_frames
    - This parameter determines how often the cache is cleared during processing to manage memory usage. It affects the node's performance and memory efficiency.
    - Comfy dtype: int
    - Python dtype: int
- multiplier
    - The multiplier factor determines the number of intermediate frames to be generated between each pair of input frames. It directly affects the density of the output frame sequence.
    - Comfy dtype: int
    - Python dtype: int
- optional_interpolation_states
    - This optional parameter provides additional control over the frame interpolation process, allowing customization of the interpolation state.
    - Comfy dtype: InterpolationStateList
    - Python dtype: InterpolationStateList

# Output types
- output_frames
    - The output_frames parameter contains the generated interpolated frame sequence, which includes the original frames and the newly created intermediate frames.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/Fannovel16/ComfyUI-Frame-Interpolation)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
