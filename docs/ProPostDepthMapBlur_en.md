# Documentation
- Class name: ProPostDepthMapBlur
- Category: Pro Post/Blur Effects
- Output node: False
- Repo Ref: https://github.com/digitaljohn/comfyui-propost

blur_strength: Represents the blur strength. This parameter controls the overall intensity of the blur effect; the higher the value, the more blurred the image becomes.

    focal_depth: Represents the focal depth. This parameter is used to determine which depth level in the image should remain sharp, while other levels are blurred based on depth differences.

    focus_spread: Represents the focus spread range. This parameter controls the size of the blur transition area near the focal depth; the larger the value, the wider the transition area, and the smoother the blur effect spreads around the focus.

    steps: Represents the number of steps in the blur process. This parameter determines the calculation precision of the blur effect; the more steps, the finer the blur effect, but this also increases the computational load.

    focal_range: Represents the focal range. This parameter is used to adjust the depth range within the focal depth that remains sharp; the larger the value, the wider the area around the focal depth that remains sharp.
    
    mask_blur: Represents the mask blur strength for blurring the depth map. This parameter controls the intensity of the depth map's blur treatment, used for preprocessing the depth map before calculating the final blur effect, to achieve a more natural blur transition.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- depth_map
    - The depth_map input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- blur_strength
    - The blur_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- focal_depth
    - The focal_depth input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- focus_spread
    - The focus_spread input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- steps
    - The steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- focal_range
    - The focal_range input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_blur
    - The mask_blur input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/digitaljohn/comfyui-propost)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
