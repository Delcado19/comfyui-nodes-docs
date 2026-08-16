# Documentation
- Class name: FL_GeminiImageGenADV
- Category: 🏵️Fill Nodes/AI
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Generates images using Gemini based on multiple image/prompt pairs.
Each pair triggers an asynchronous API call. Results are batched.

# Input types
## Required
- inputcount
    - The inputcount input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- api_key
    - The api_key input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- aspect_ratio
    - The aspect_ratio input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- image_size
    - Resolution size (2K/4K only supported by gemini-3-pro-image-preview)
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- always_square
    - The always_square input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- temperature
    - The temperature input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_retries
    - The max_retries input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- prompt_1
    - The prompt_1 input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- image_1
    - The image_1 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- retry_indefinitely
    - The retry_indefinitely input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- API_responses
    - The API_responses output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
