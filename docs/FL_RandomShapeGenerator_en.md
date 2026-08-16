# Documentation
- Class name: FL_RandomShapeGenerator
- Category: 🏵️Fill Nodes/utility
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - The batch_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- num_shapes
    - The num_shapes input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- min_shape_size
    - The min_shape_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- max_shape_size
    - The max_shape_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- shape_types
    - The shape_types input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- color_mode
    - The color_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- opacity_min
    - The opacity_min input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- opacity_max
    - The opacity_max input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- background_color
    - The background_color input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- latent
    - The latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
