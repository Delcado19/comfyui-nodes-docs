# Documentation
- Class name: LTXVPromptEnhancerLoader
- Category: lightricks/LTXV
- Output node: False
- Repo Ref: https://github.com/Mattabyte/ComfyUI-LTXVideo-Registry_Mattabyte

Downloads and initializes LLM and image captioning models from Hugging Face to enhance text prompts for image generation.

# Input types
## Required
- llm_name
    - The hugging face name of the llm model to load.
    - Comfy dtype: STRING
    - Python dtype: str
- image_captioner_name
    - The hugging face name of the image captioning model to load.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- prompt_enhancer
    - The prompt_enhancer output is produced by this node.
    - Comfy dtype: LTXV_PROMPT_ENHANCER
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Mattabyte/ComfyUI-LTXVideo-Registry_Mattabyte)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
