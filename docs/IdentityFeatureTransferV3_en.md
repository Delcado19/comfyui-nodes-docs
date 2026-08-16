# Documentation
- Class name: IdentityFeatureTransferV3
- Category: conditioning/flux2klein
- Output node: False
- Repo Ref: https://github.com/capitan01R/ComfyUI-Flux2Klein-Enhancer

FLUX.2 Klein Identity Feature Transfer V3 is a ComfyUI node registered by `custom_nodes.ComfyUI-Flux2Klein-Enhancer`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - Connect this after your checkpoint model. ReferenceLatent must also be connected in the conditioning path.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- preset
    - Pick how strongly the reference should hold. Any preset except custom ignores the manual settings below.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- reference_index
    - Which reference image to use. 0 means the first reference.
    - Comfy dtype: INT
    - Python dtype: int
- double_schedule
    - Custom preset only. Double block schedule.
    - Comfy dtype: STRING
    - Python dtype: str
- single_schedule
    - Custom preset only. Single block schedule.
    - Comfy dtype: STRING
    - Python dtype: str
- double_sim
    - Custom preset only. Higher means fewer double-block matches are allowed.
    - Comfy dtype: FLOAT
    - Python dtype: float
- single_sim
    - Custom preset only. Higher means fewer single-block matches are allowed.
    - Comfy dtype: FLOAT
    - Python dtype: float
- commit_margin
    - Custom preset only. Higher means the match has to be more obvious before it locks.
    - Comfy dtype: FLOAT
    - Python dtype: float
- commit_confirm
    - Custom preset only. How many times the same match must repeat before it locks.
    - Comfy dtype: INT
    - Python dtype: int
- commit_anchor
    - Custom preset only. How much pull remains after a token has locked.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_threshold
    - Used only when a mask is connected. Lower keeps more edge tokens. Higher keeps only the strongest mask area.
    - Comfy dtype: FLOAT
    - Python dtype: float
- debug
    - Print the active preset and schedules to the console.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- subject_mask
    - Optional mask for the reference image. Use it when the reference has more than one subject.
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
