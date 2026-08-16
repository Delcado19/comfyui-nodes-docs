# Documentation
- Class name: LTXVGemmaEnhancePrompt
- Category: lightricks/LTXV
- Output node: True
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Enhance text prompts using Gemma 3 VLLM for improved video generation.

# Input types
## Required
- clip
    - The clip input is used by this node during execution.
    - Comfy dtype: CLIP
    - Python dtype: object
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- system_prompt
    - The system_prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- max_tokens
    - The max_tokens input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- bypass_i2v
    - The bypass_i2v input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- enhanced_prompt
    - The enhanced_prompt output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
