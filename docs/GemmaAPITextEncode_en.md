# Documentation
- Class name: GemmaAPITextEncode
- Category: api node/text/Lightricks
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

🅛🅣🅧 Gemma API Text Encode is a ComfyUI node registered by `custom_nodes.ComfyUI-LTXVideo`. The live metadata did not provide a longer description.

# Input types
## Required
- api_key
    - API key for authentication
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - Text prompt to encode
    - Comfy dtype: STRING
    - Python dtype: str
- enhance_prompt
    - When enabled, the prompt is enhanced using Gemma 3 before encoding
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- ckpt_name
    - The name of the checkpoint (model) to load.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- conditioning
    - The conditioning output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
