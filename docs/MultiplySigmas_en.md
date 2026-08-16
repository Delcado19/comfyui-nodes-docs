# Documentation
- Class name: MultiplySigmas
- Category: sampling/custom_sampling/sigmas
- Output node: False
- Repo Ref: https://github.com/Jonseed/ComfyUI-Detail-Daemon

A port of muerrilla's sd-webui-Detail-Daemon as a node for ComfyUI, to adjust sigmas that generally enhance details, and possibly remove unwanted bokeh or background blurring.

# Input types
## Required
- sigmas
    - The sigmas input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- factor
    - The factor input is used by this node during execution.
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

# Output types
- SIGMAS
    - The SIGMAS output is produced by this node.
    - Comfy dtype: SIGMAS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Jonseed/ComfyUI-Detail-Daemon)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
