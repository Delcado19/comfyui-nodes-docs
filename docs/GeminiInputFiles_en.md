# Documentation
- Class name: GeminiInputFiles
- Category: partner/text/Gemini
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Loads and prepares input files to include as inputs for Gemini LLM nodes. The files will be read by the Gemini model when generating a response. The contents of the text file count toward the token limit. 🛈 TIP: Can be chained together with other Gemini Input File nodes.

# Input types
## Required
- file
    - Input files to include as context for the model. Only accepts text (.txt) and PDF (.pdf) files for now.
    - Comfy dtype: COMBO
    - Python dtype: object
## Optional
- GEMINI_INPUT_FILES
    - An optional additional file(s) to batch together with the file loaded from this node. Allows chaining of input files so that a single message can include multiple input files.
    - Comfy dtype: GEMINI_INPUT_FILES
    - Python dtype: object

# Output types
- GEMINI_INPUT_FILES
    - The GEMINI_INPUT_FILES output is produced by this node.
    - Comfy dtype: GEMINI_INPUT_FILES
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
