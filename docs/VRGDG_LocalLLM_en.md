# Documentation
- Class name: VRGDG_LocalLLM
- Category: VRGDG/NanoBananaPro
- Output node: False
- Repo Ref: https://github.com/vrgamegirl19/comfyui-vrgamedevgirl

💻 VRGDG Local LLM 💻 is a ComfyUI node registered by `custom_nodes.comfyui-vrgamedevgirl`. The live metadata did not provide a longer description.

# Input types
## Required
- backend
    - The backend input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- base_url
    - The base_url input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- api_key
    - The api_key input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- model
    - The model input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- custom_model
    - The custom_model input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- system_prompt
    - The system_prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- temperature
    - The temperature input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- top_p
    - The top_p input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_tokens
    - The max_tokens input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- request_timeout_sec
    - The request_timeout_sec input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
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
- used_backend
    - The used_backend output is produced by this node.
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
