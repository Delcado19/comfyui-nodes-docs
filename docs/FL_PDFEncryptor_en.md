# Documentation
- Class name: FL_PDFEncryptor
- Category: 🏵️Fill Nodes/PDF
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- pdf
    - The pdf input is used by this node during execution.
    - Comfy dtype: PDF
    - Python dtype: object
- user_password
    - The user_password input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- owner_password
    - The owner_password input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- encryption_level
    - The encryption_level input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- allow_printing
    - The allow_printing input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- allow_commenting
    - The allow_commenting input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- allow_copying
    - The allow_copying input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- allow_content_extraction
    - The allow_content_extraction input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- allow_form_filling
    - The allow_form_filling input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- allow_document_assembly
    - The allow_document_assembly input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- allow_page_extraction
    - The allow_page_extraction input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- PDF
    - The PDF output is produced by this node.
    - Comfy dtype: PDF
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
