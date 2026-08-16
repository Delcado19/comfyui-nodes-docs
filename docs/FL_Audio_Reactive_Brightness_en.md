# Documentation
- Class name: FL_Audio_Reactive_Brightness
- Category: 🏵️Fill Nodes/Audio
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- frames
    - The frames input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- envelope_json
    - The envelope_json input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- base_brightness
    - The base_brightness input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- brightness_intensity
    - The brightness_intensity input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- invert
    - The invert input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- clamp_output
    - The clamp_output input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- frames
    - The frames output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
