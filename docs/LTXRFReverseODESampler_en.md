# Documentation
- Class name: LTXRFReverseODESampler
- Category: ltxtricks
- Output node: False
- Repo Ref: https://github.com/Mattabyte/ComfyUI-LTXVideo-Registry_Mattabyte

Custom nodes for LTX-Video support in ComfyUI - registry fix - forked by Mattabyte

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- latent_image
    - The latent_image input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- eta
    - The eta input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_step
    - The start_step input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- end_step
    - The end_step input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- eta_trend
    - The eta_trend input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- attn_inj
    - The attn_inj input is used by this node during execution.
    - Comfy dtype: ATTN_INJ
    - Python dtype: object
- order
    - The order input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- SAMPLER
    - The SAMPLER output is produced by this node.
    - Comfy dtype: SAMPLER
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Mattabyte/ComfyUI-LTXVideo-Registry_Mattabyte)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
