# Documentation
- Class name: DiffusionModelLoaderKJ
- Category: KJNodes/model_loaders
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Node for patching torch.nn.Linear with CublasLinear.

# Input types
## Required
- model_name
    - The name of the checkpoint (model) to load.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- weight_dtype
    - The weight_dtype input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- compute_dtype
    - The compute dtype to use for the model.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- patch_cublaslinear
    - Enable or disable the cublas_ops arg
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- sage_attention
    - Patch comfy attention to use sageattn.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- enable_fp16_accumulation
    - Enable torch.backends.cuda.matmul.allow_fp16_accumulation, requires pytorch 2.7.0 nightly.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- extra_state_dict
    - The full path to an additional state dict to load, this will be merged with the main state dict. Useful for example to add VACE module to a WanVideoModel. You can use DiffusionModelSelector to easily get the path.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
