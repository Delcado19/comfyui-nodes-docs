
# Documentation
- Class name: LLMImageCaptionReader
- Category: SALT/Language Toolkit/Readers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LLMImageCaptionReader node is designed to interpret and describe image files by generating captions that convert visual content into descriptive text documents. This process facilitates the integration of image data into text-based indexing and search systems, such as the llama_index document structure.

# Input types
## Required
- path
    - Specifies the path to the image file for which captions will be generated. This is a critical input as it determines the source image used for caption generation.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- prompt
    - An optional text input that can guide or influence the caption generation process, allowing for more customized or context-specific descriptions.
    - Comfy dtype: STRING
    - Python dtype: str
- extra_info
    - Optional additional information provided as a string, which can be used to pass extra parameters or context to the caption generation process.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- documents
    - The output is a document object containing the generated caption, encapsulating the image description in a structured text format.
    - Comfy dtype: DOCUMENT
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
