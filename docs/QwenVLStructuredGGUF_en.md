# Documentation
- Class name: QwenVLStructuredGGUF
- Category: QwenVL Structured GGUF
- Output node: False
- Repo Ref: https://github.com/Delcado19/comfyui-qwenvl-structured-gguf

QwenVL Structured (GGUF) is a ComfyUI node registered by `custom_nodes.comfyui-qwenvl-structured-gguf`. The live metadata did not provide a longer description.

# Input types
## Required
- model_path
    - The model_path input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- mmproj_path
    - The mmproj_path input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- json_schema
    - The json_schema input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- max_tokens
    - The max_tokens input is used by this node during execution.
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
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- ctx
    - The ctx input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- gpu_layers
    - The gpu_layers input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- keep_model_loaded
    - The keep_model_loaded input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- free_vram_before_load
    - The free_vram_before_load input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- image
    - The image input is used by this node during execution.
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

# Output types
- RESPONSE
    - The RESPONSE output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Delcado19/comfyui-qwenvl-structured-gguf)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
