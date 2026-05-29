# 🚫[DEPR] Motion Model Settings 🎭🅐🅓①
## Documentation
- Class name: ADE_AnimateDiffModelSettings_Release
- Category: 
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is designed to configure the motion model settings in the AnimateDiff process, with a focus on advanced attention intensity adjustment. It aims to provide users with the ability to fine-tune the animation effects applied through the AnimateDiff framework.

## Input types
### Required
- min_motion_scale
    - Specify the minimum scale of motion, affecting the subtlety or intensity of the animation effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_motion_scale
    - Define the maximum scale of motion, affecting the range of motion intensity that can be applied to the animation.
    - Comfy dtype: FLOAT
    - Python dtype: float

### Optional
- mask_motion_scale
    - A mask tensor that allows fine-grained motion scaling for different regions of the input.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

## Output types
- ad_settings
    - Comfy dtype: AD_SETTINGS
    - The output is a configuration set for the AnimateDiff model, containing adjustments to the motion scale and potentially other parameters.
    - Python dtype: AnimateDiffSettings

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
