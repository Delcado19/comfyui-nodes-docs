# Documentation
- Class name: OpenAIInputFiles
- Category: partner/text/OpenAI
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Loads and prepares input files (text, pdf, etc.) to include as inputs for the OpenAI Chat Node. The files will be read by the OpenAI model when generating a response. 🛈 TIP: Can be chained together with other OpenAI Input File nodes.

# Input types
## Required
- file
    - Input files to include as context for the model. Only accepts text (.txt) and PDF (.pdf) files for now.
    - Comfy dtype: COMBO
    - Python dtype: object
## Optional
- OPENAI_INPUT_FILES
    - An optional additional file(s) to batch together with the file loaded from this node. Allows chaining of input files so that a single message can include multiple input files.
    - Comfy dtype: OPENAI_INPUT_FILES
    - Python dtype: object

# Output types
- OPENAI_INPUT_FILES
    - The OPENAI_INPUT_FILES output is produced by this node.
    - Comfy dtype: OPENAI_INPUT_FILES
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
