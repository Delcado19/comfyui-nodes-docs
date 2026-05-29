
# Documentation
- Class name: SMPLShapeParameters
- Category: MotionDiff/smpl
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SMPLShapeParameters node aims to adjust the shape parameters of the SMPL model based on various anthropometric measurements. It encapsulates the functionality to modify the dimensions of the SMPL model, such as the size, thickness, and proportions of body parts, to achieve the desired appearance or match specific body characteristics.

# Input types
## Required
- smpl
    - SMPL model to be modified. This parameter is crucial because it serves as the base model whose shape parameters will be adjusted according to the provided measurements.
    - Comfy dtype: SMPL
    - Python dtype: dict
- size
    - Represents the overall size of the SMPL model, affecting its proportions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- thickness
    - Controls the thickness of the SMPL model, affecting its volume and chunkiness.
    - Comfy dtype: FLOAT
    - Python dtype: float
- upper_body_height
    - Adjusts the height of the upper body, changing the torso length.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lower_body_height
    - Modifies the height of the lower body, affecting leg length.
    - Comfy dtype: FLOAT
    - Python dtype: float
- muscle_mass
    - Determines the muscle mass of the SMPL model, affecting its muscle definition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- legs
    - Adjusts the leg proportions, affecting their shape and length.
    - Comfy dtype: FLOAT
    - Python dtype: float
- chest
    - Modifies the chest size, affecting the width and appearance of the torso.
    - Comfy dtype: FLOAT
    - Python dtype: float
- waist_height
    - Controls the waist height, affecting the overall proportions of the body.
    - Comfy dtype: FLOAT
    - Python dtype: float
- waist_width
    - Adjusts the waist width, affecting the silhouette of the model.
    - Comfy dtype: FLOAT
    - Python dtype: float
- arms
    - Modifies the length and shape of the arms, affecting their appearance and proportions.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- smpl
    - Modified SMPL model, whose shape parameters reflect the input measurements.
    - Comfy dtype: SMPL
    - Python dtype: dict


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
