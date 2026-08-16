# Documentation
- Class name: LTXVPromptEnhancer
- Category: lightricks/LTXV
- Output node: False
- Repo Ref: https://github.com/Mattabyte/ComfyUI-LTXVideo-Registry_Mattabyte

Enhances text prompts for image generation using LLMs. Optionally incorporates reference images to create more contextually relevant descriptions.

# Input types
## Required
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt_enhancer
    - The prompt_enhancer input is used by this node during execution.
    - Comfy dtype: LTXV_PROMPT_ENHANCER
    - Python dtype: object
- max_resulting_tokens
    - The max_resulting_tokens input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- image_prompt
    - The image_prompt input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- str
    - The str output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Mattabyte/ComfyUI-LTXVideo-Registry_Mattabyte)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
