# Documentation
- Class name: IdentityFeatureTransferFinal
- Category: conditioning/flux2klein
- Output node: False
- Repo Ref: https://github.com/capitan01R/ComfyUI-Flux2Klein-Enhancer

Identity Feature Transfer Final is a ComfyUI node registered by `custom_nodes.ComfyUI-Flux2Klein-Enhancer`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- preset
    - The preset input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- enabled
    - The enabled input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- reference_index
    - The reference_index input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- reference_indices
    - The reference_indices input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- similarity_floor
    - The similarity_floor input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- softmax_temperature
    - The softmax_temperature input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_threshold
    - The mask_threshold input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- double_blocks
    - The double_blocks input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- single_blocks
    - The single_blocks input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- debug
    - The debug input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- mask_behavior
    - focus_only preserves the original masking behavior: the mask limits this node's reference bank while Klein still sees the complete reference. zero_unmasked_tokens blocks each wired reference's unmasked tokens as attention sources in every block. References without a wired mask remain complete and unchanged.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- sigmas
    - Optional sampler sigma schedule. When connected, the existing block strengths decay per sampling step by delta_sigma_0 / delta_sigma_step.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- subject_mask_1
    - The subject_mask_1 input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- subject_mask_2
    - The subject_mask_2 input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- subject_mask_3
    - The subject_mask_3 input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- subject_mask_4
    - The subject_mask_4 input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- subject_mask_5
    - The subject_mask_5 input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- subject_mask_6
    - The subject_mask_6 input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- subject_mask_7
    - The subject_mask_7 input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- subject_mask_8
    - The subject_mask_8 input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/capitan01R/ComfyUI-Flux2Klein-Enhancer)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
