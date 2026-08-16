# Documentation
- Class name: DetailDaemonGraphSigmasNode
- Category: sampling/custom_sampling/sigmas
- Output node: True
- Repo Ref: https://github.com/Jonseed/ComfyUI-Detail-Daemon

A port of muerrilla's sd-webui-Detail-Daemon as a node for ComfyUI, to adjust sigmas that generally enhance details, and possibly remove unwanted bokeh or background blurring.

# Input types
## Required
- sigmas
    - The sigmas input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- detail_amount
    - The detail_amount input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start
    - The start input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end
    - The end input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bias
    - The bias input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- exponent
    - The exponent input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_offset
    - The start_offset input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_offset
    - The end_offset input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- fade
    - The fade input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- smooth
    - The smooth input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- cfg_scale
    - The cfg_scale input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
No outputs are defined in the live ComfyUI metadata.

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Jonseed/ComfyUI-Detail-Daemon)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
