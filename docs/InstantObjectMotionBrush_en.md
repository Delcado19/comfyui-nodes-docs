# Documentation
- Class name: InstantObjectMotionBrush
- Category: DragNUWA
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-DragNUWA.git

InstantObjectMotionBrush is designed to generate motion effects for objects in images or videos. This node identifies the trajectory of objects and applies motion brush effects based on specified parameters to enhance the visual representation of motion in creative or realistic ways.

# Input types
## Required
- model_length
    - Model length determines the duration of the motion effect, affecting the smoothness and detail of the motion trajectory.
    - Comfy dtype: INT
    - Python dtype: int
- brush_mask
    - Brush masks are essential for defining the regions of interest in the image where motion effects will be applied, ensuring precise control over the application of motion effects.
    - Comfy dtype: MASK
    - Python dtype: numpy.ndarray
- action
    - Motion parameters determine the type of motion to be simulated, such as zoom in, zoom out, move left, move right, up, or down, which directly affects the motion trajectory and the visual result of the motion effect.
    - Comfy dtype: COMBO
    - Python dtype: str
- speed
    - Speed adjusts the rate at which the motion effect is executed, affecting the intensity and realism of the motion.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- motion_brush
    - The output motion brush represents the calculated motion trajectory and displacement information, which is crucial for rendering the final motion effect.
    - Comfy dtype: MOTIONBRUSH
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-DragNUWA)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
