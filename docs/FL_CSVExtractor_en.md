# Documentation
- Class name: FL_CSVExtractor
- Category: 🏵️Fill Nodes/Captioning
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

# Input types
## Required
- csv_data
    - The csv_data input is used by this node during execution.
    - Comfy dtype: CSV
    - Python dtype: object
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- column_index
    - The column_index input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- skip_header
    - The skip_header input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- extracted_text
    - The extracted_text output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- selected_row
    - The selected_row output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- full_row_data
    - The full_row_data output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
