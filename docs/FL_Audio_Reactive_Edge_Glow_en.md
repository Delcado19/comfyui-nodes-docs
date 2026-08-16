# Documentation
- Class name: FL_Audio_Reactive_Edge_Glow
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
- edge_frames
    - The edge_frames input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- edge_threshold
    - The edge_threshold input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- glow_intensity
    - The glow_intensity input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- envelope_intensity
    - The envelope_intensity input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- glow_color
    - The glow_color input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- blend_mode
    - The blend_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

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
