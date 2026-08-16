# Documentation
- Class name: AILab_QwenVL_GGUF
- Category: 🧪AILab/QwenVL
- Output node: False
- Repo Ref: https://github.com/1038lab/ComfyUI-QwenVL

ComfyUI-QwenVL custom node: Integrates the Qwen-VL series, including Qwen2.5-VL and the latest Qwen3-VL, with GGUF support for advanced multimodal AI in text generation, image understanding, and video analysis.

# Input types
## Required
- model_name
    - The model_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- preset_prompt
    - The preset_prompt input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- custom_prompt
    - The custom_prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- max_tokens
    - The max_tokens input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- keep_model_loaded
    - The keep_model_loaded input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- video
    - The video input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- RESPONSE
    - The RESPONSE output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/1038lab/ComfyUI-QwenVL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
