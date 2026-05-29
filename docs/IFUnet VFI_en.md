# Documentation
- Class name: IFUnet_VFI
- Category: ComfyUI-Frame-Interpolation/VFI
- Output node: False
- Repo Ref: https://github.com/Fannovel16/ComfyUI-Frame-Interpolation

The IFUnet_VFI node performs video frame interpolation, enhancing smoothness and continuity of video transitions by generating intermediate frames. It uses a deep learning model to predict and insert frames between existing ones, improving overall visual quality and fluidity of the video sequence.

# Input types
## Required
- ckpt_name
    - The checkpoint name parameter is crucial for identifying the specific model weights used for frame interpolation. It directs the node to the correct pretrained model, ensuring accuracy and efficiency of the frame generation process.
    - Comfy dtype: str
    - Python dtype: str
- frames
    - The frames parameter is required because it provides the input video frames that the node will interpolate. The quality and resolution of the input frames directly affect the visual appearance of the output frames.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- clear_cache_after_n_frames
    - The clear_cache_after_n_frames parameter is vital for managing memory usage during interpolation. It clears the cache after processing a certain number of frames, helping maintain system performance.
    - Comfy dtype: INT
    - Python dtype: int
- multiplier
    - The multiplier parameter determines the number of intermediate frames generated between consecutive frames. It controls the density of interpolated frames, a key factor for video smoothness.
    - Comfy dtype: INT
    - Python dtype: int
- scale_factor
    - The scale_factor parameter adjusts the scaling of input frames before processing. This important factor can affect the detail and resolution of interpolated frames.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ensemble
    - The ensemble parameter enables an ensemble method to improve stability and quality of interpolated frames. It is optional and can enhance node performance under certain conditions.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- optional_interpolation_states
    - The optional_interpolation_states parameter provides additional control over the interpolation process, allowing customization of frame generation to meet specific requirements or constraints.
    - Comfy dtype: INTERPOLATION_STATES
    - Python dtype: InterpolationStateList

# Output types
- output_frames
    - The output_frames parameter represents the result of the frame interpolation process. It includes the original frames and newly generated intermediate frames, enhancing video continuity and visual appeal.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/Fannovel16/ComfyUI-Frame-Interpolation)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
