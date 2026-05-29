# Documentation
- Class name: BrushMotion
- Category: DragNUWA
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-DragNUWA.git

The BrushMotion node dynamically adjusts visual content by scaling and interpolating input motion data according to a specified mask, thereby generating motion effects.

# Input types
## Required
- model
    - The model parameter is critical, as it defines the underlying structure and characteristics of the motion effect to be generated.
    - Comfy dtype: DragNUWA
    - Python dtype: torchvision.models.video.DragNUWA
- motion_brush
    - The motion brush parameter is essential for providing raw motion data, which will be processed and scaled according to the mask.
    - Comfy dtype: MotionBrush
    - Python dtype: torch.Tensor
- brush_mask
    - The brush mask parameter is important because it determines the area of the motion effect to be modified, ensuring precise control over visual adjustments.
    - Comfy dtype: MASK
    - Python dtype: numpy.ndarray

# Output types
- results
    - The result parameter contains the final motion effect, showing the adjusted motion according to the input mask and model specifications.
    - Comfy dtype: MotionBrush
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-DragNUWA)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
