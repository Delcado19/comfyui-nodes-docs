# Documentation
- Class name: FL_DepthBlur
- Category: 🏵️Fill Nodes/VFX
- Output node: True
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

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
- focal_depth
    - The focal_depth input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- focal_range
    - The focal_range input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_blur
    - The max_blur input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- depth_invert
    - The depth_invert input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- falloff_curve
    - The falloff_curve input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- near_blur_strength
    - The near_blur_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- far_blur_strength
    - The far_blur_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blur_mode
    - The blur_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- quality_steps
    - The quality_steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- depth_smoothing
    - The depth_smoothing input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- depth_remap_low
    - The depth_remap_low input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- depth_remap_high
    - The depth_remap_high input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bokeh_brightness_boost
    - The bokeh_brightness_boost input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_feather
    - The mask_feather input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- show_preview
    - The show_preview input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- protect_mask
    - The protect_mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- blur_amount_viz
    - The blur_amount_viz output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- in_focus_mask
    - The in_focus_mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
