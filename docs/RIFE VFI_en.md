# Documentation
- Class name: RIFE_VFI
- Category: ComfyUI-Frame-Interpolation/VFI
- Output node: False
- Repo Ref: https://github.com/Fannovel16/ComfyUI-Frame-Interpolation

The RIFE_VFI node is designed to perform video frame interpolation using a specified checkpoint model. It generates interpolated frames between input video frames, effectively doubling the frame rate. The node operates by sequentially processing each frame and creating new ones, enhancing the smoothness and continuity of the video sequence.

# Input types
## Required
- ckpt_name
    - The ckpt_name parameter is critical for selecting the appropriate checkpoint model for frame interpolation. It determines the specific weights and architecture the node will apply to generate interpolated frames.
    - Comfy dtype: str
    - Python dtype: str
- frames
    - The frames parameter is required, as it contains the input video frames the node will process. The quality and resolution of the input frames directly impact the interpolation output, making this parameter essential to the node's operation.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
## Optional
- clear_cache_after_n_frames
    - clear_cache_after_n_frames is an optional setting that helps manage memory usage during interpolation. It specifies the number of frames to process before clearing the CUDA cache to prevent memory overflow, which can be adjusted based on system memory capacity and the number of input frames.
    - Comfy dtype: int
    - Python dtype: int
- multiplier
    - The multiplier parameter determines the factor by which input frames are multiplied to generate output frames. For example, with a multiplier of 2, each input frame produces two output frames, effectively creating one interpolated frame between them.
    - Comfy dtype: int
    - Python dtype: int
- fast_mode
    - The fast_mode parameter is an optional boolean flag that, when set to True, enables a faster but potentially less precise interpolation process. This is useful for quick previews or processing large numbers of frames.
    - Comfy dtype: bool
    - Python dtype: bool
- ensemble
    - The ensemble parameter allows combining multiple interpolation models to improve the quality of interpolated frames. When enabled, it may increase processing time but can result in more stable and higher-fidelity results.
    - Comfy dtype: bool
    - Python dtype: bool
- scale_factor
    - The scale_factor parameter adjusts the resolution of input frames before processing. It is particularly useful for handling different frame sizes and can influence the clarity and detail of the final output.
    - Comfy dtype: float
    - Python dtype: float
- optional_interpolation_states
    - The optional_interpolation_states parameter provides a way to customize the interpolation process using additional states. This can include specific instructions or conditions that affect how frames are interpolated, allowing for finer-grained control over the output.
    - Comfy dtype: INTERPOLATION_STATES
    - Python dtype: InterpolationStateList

# Output types
- interpolated_frames
    - The interpolated_frames parameter represents the output of the frame interpolation process. It contains the original input frames along with the newly generated intermediate frames, effectively creating a smoother video sequence.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/Fannovel16/ComfyUI-Frame-Interpolation)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
