# Documentation
- Class name: CLIPTextEncodeFluxUnguided
- Category: RES4LYF/conditioning
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

CLIPTextEncodeFluxUnguided is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- clip
    - The clip input is used by this node during execution.
    - Comfy dtype: CLIP
    - Python dtype: object
- clip_l
    - The clip_l input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- t5xxl
    - The t5xxl input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- conditioning
    - The conditioning output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- clip_l_end
    - The clip_l_end output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- t5xxl_end
    - The t5xxl_end output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
