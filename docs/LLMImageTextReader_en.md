
# Documentation
- Class name: LLMImageTextReader
- Category: SALT/Language Toolkit/Readers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LLMImageTextReader node reads and processes images, extracting text and additional information based on user-defined parameters. It leverages underlying image processing and text extraction technologies to facilitate analysis and interpretation of image content.

# Input types
## Required
- path
    - Specifies the image file path to process. This is a critical parameter as it determines the source image used for text extraction and further processing.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- parse_text
    - A boolean flag indicating whether text should be extracted from the image. This affects whether the node performs text parsing operations on the image.
    - Comfy dtype: COMBO[BOOLEAN]
    - Python dtype: bool
- extra_info
    - A JSON-formatted string containing additional information, which can be used to provide extra context or instructions for processing the image.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- documents
    - The output is a document containing the results of image processing and text extraction, structured in a format that facilitates further analysis or display.
    - Comfy dtype: DOCUMENT
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
