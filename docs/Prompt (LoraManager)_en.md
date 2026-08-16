# Documentation
- Class name: Prompt (LoraManager)
- Category: Lora Manager/conditioning
- Output node: False
- Repo Ref: https://github.com/willmiao/ComfyUI-Lora-Manager

Encodes a text prompt using a CLIP model into an embedding that can be used to guide the diffusion model towards generating specific images. Supports dynamic trigger words inputs and runtime wildcard expansion.

# Input types
## Required
- text
    - The text to be encoded. Wildcard references inserted with /wildcard are expanded at runtime.
    - Comfy dtype: AUTOCOMPLETE_TEXT_PROMPT,STRING
    - Python dtype: object
- clip
    - The CLIP model used for encoding the text.
    - Comfy dtype: CLIP
    - Python dtype: object
## Optional
- seed
    - Optional seed for wildcard generation. Leave unconnected for non-deterministic wildcard expansion.
    - Comfy dtype: INT
    - Python dtype: int
- trigger_words1
    - Trigger words to prepend. Connect to add more inputs.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- CONDITIONING
    - A conditioning containing the embedded text used to guide the diffusion model.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- PROMPT
    - The PROMPT output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/willmiao/ComfyUI-Lora-Manager)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
