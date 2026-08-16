# Documentation
- Class name: DaSiWa_LLMModelSelector
- Category: DaSiWa/LLM
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

DaSiWa LLM Model Selector: choose a local transformers LLM/VLM folder from ComfyUI/models/llm and configure caching, dtype, device, and unload behavior.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- custom_path
    - The custom_path input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- hf_repo_id
    - The hf_repo_id input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- hf_revision
    - The hf_revision input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- download_if_missing
    - The download_if_missing input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- backend
    - The backend input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- task
    - The task input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- device
    - The device input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- dtype
    - The dtype input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- quantization
    - The quantization input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- cache_mode
    - The cache_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- trust_remote_code
    - The trust_remote_code input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- attention_implementation
    - The attention_implementation input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- llm_config
    - The llm_config output is produced by this node.
    - Comfy dtype: DASIWA_LLM_CONFIG
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
