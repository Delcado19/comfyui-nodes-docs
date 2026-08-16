# Documentation
- Class name: CheckpointLoaderKJ
- Category: KJNodes/model_loaders
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Experimental node for patching torch.nn.Linear with CublasLinear.

# Input types
## Required
- ckpt_name
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
    - Enable torch.backends.cuda.matmul.allow_fp16_accumulation, required minimum pytorch version 2.7.1
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- CLIP
    - The CLIP output is produced by this node.
    - Comfy dtype: CLIP
    - Python dtype: object
- VAE
    - The VAE output is produced by this node.
    - Comfy dtype: VAE
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
