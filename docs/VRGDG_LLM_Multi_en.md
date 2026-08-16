# Documentation
- Class name: VRGDG_LLM_Multi
- Category: VRGDG/NanoBananaPro
- Output node: False
- Repo Ref: https://github.com/vrgamegirl19/comfyui-vrgamedevgirl

🤖 VRGDG LLM Multi 🤖 is a ComfyUI node registered by `custom_nodes.comfyui-vrgamedevgirl`. The live metadata did not provide a longer description.

# Input types
## Required
- api_key
    - The api_key input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- provider
    - The provider input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- custom_model
    - The custom_model input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- image1
    - The image1 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image2
    - The image2 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image3
    - The image3 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image4
    - The image4 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- text
    - The text output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- used_provider
    - The used_provider output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- used_model
    - The used_model output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- status
    - The status output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/vrgamegirl19/comfyui-vrgamedevgirl)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
