# Documentation
- Class name: DaSiWa_LLMAnalyze
- Category: DaSiWa/LLM
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

DaSiWa LLM Analyze: run a local text or vision-language model against connected text, image, or VHS/video frame batches and return a STRING response.

# Input types
## Required
- llm_config
    - The llm_config input is used by this node during execution.
    - Comfy dtype: DASIWA_LLM_CONFIG
    - Python dtype: object
- system_prompt_preset
    - The system_prompt_preset input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- system_prompt
    - The system_prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- max_new_tokens
    - The max_new_tokens input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- max_input_tokens
    - The max_input_tokens input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- temperature
    - The temperature input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- top_p
    - The top_p input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- repetition_penalty
    - The repetition_penalty input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- use_kv_cache
    - The use_kv_cache input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- max_frames
    - The max_frames input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- frame_stride
    - The frame_stride input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- frame_strategy
    - The frame_strategy input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resize_max_px
    - The resize_max_px input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- resize_algorithm
    - The resize_algorithm input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- memory_cleanup
    - The memory_cleanup input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- text_input
    - The text_input input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- response
    - The response output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- info
    - The info output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
