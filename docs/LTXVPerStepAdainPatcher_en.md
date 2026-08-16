# Documentation
- Class name: LTXVPerStepAdainPatcher
- Category: Lightricks/latents
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

🅛🅣🅧 LTXV Per Step Adain Patcher is a ComfyUI node registered by `custom_nodes.ComfyUI-LTXVideo`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- factors
    - Comma-separated list of factors, each factor will be used for one step.
    - Comfy dtype: STRING
    - Python dtype: str
- reference
    - The reference input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
## Optional
- per_frame
    - The per_frame input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
