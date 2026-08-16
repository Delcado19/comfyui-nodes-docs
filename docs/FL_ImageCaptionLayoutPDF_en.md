# Documentation
- Class name: FL_ImageCaptionLayoutPDF
- Category: 🏵️Fill Nodes/Captioning
- Output node: True
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- image_directory
    - The image_directory input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- images_per_row
    - The images_per_row input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- display_size
    - The display_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- caption_height
    - The caption_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- font_size
    - The font_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- padding
    - The padding input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- output_directory
    - The output_directory input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- output_filename
    - The output_filename input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- orientation
    - The orientation input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- STRING
    - The STRING output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- PDF
    - The PDF output is produced by this node.
    - Comfy dtype: PDF
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
