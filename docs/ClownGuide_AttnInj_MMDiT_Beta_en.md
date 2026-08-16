# Documentation
- Class name: ClownGuide_AttnInj_MMDiT_Beta
- Category: RES4LYF/sampler_extensions
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

ClownGuide AttnInj (HiDream) is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- weight
    - Set the strength of the guide by multiplying all other weights by this value.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_scheduler
    - The weight_scheduler input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- double_blocks
    - The double_blocks input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- double_weights
    - The double_weights input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- single_blocks
    - The single_blocks input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- single_weights
    - The single_weights input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- img_q
    - Set relative injection strength.
    - Comfy dtype: FLOAT
    - Python dtype: float
- img_k
    - Set relative injection strength.
    - Comfy dtype: FLOAT
    - Python dtype: float
- img_v
    - Set relative injection strength.
    - Comfy dtype: FLOAT
    - Python dtype: float
- txt_q
    - Set relative injection strength.
    - Comfy dtype: FLOAT
    - Python dtype: float
- txt_k
    - Set relative injection strength.
    - Comfy dtype: FLOAT
    - Python dtype: float
- txt_v
    - Set relative injection strength.
    - Comfy dtype: FLOAT
    - Python dtype: float
- img_q_norm
    - Set relative injection strength.
    - Comfy dtype: FLOAT
    - Python dtype: float
- img_k_norm
    - Set relative injection strength.
    - Comfy dtype: FLOAT
    - Python dtype: float
- img_v_norm
    - Set relative injection strength.
    - Comfy dtype: FLOAT
    - Python dtype: float
- txt_q_norm
    - Set relative injection strength.
    - Comfy dtype: FLOAT
    - Python dtype: float
- txt_k_norm
    - Set relative injection strength.
    - Comfy dtype: FLOAT
    - Python dtype: float
- txt_v_norm
    - Set relative injection strength.
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
- invert_mask
    - The invert_mask input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- guide
    - The guide input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- weights
    - The weights input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- guides
    - The guides input is used by this node during execution.
    - Comfy dtype: GUIDES
    - Python dtype: object

# Output types
- guides
    - The guides output is produced by this node.
    - Comfy dtype: GUIDES
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
