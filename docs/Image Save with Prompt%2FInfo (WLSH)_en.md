# Documentation
- Class name: Image Save with Prompt/Info (WLSH)
- Category: WLSH Nodes/IO
- Output node: True
- Repo Ref: https://github.com/wallish77/wlsh_nodes

Image Save with Prompt/Info (WLSH) is a ComfyUI node registered by `custom_nodes.wlsh_nodes`. The live metadata did not provide a longer description.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- filename
    - The filename input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- path
    - The path input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- extension
    - The extension input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- quality
    - The quality input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - The negative input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- modelname
    - The modelname input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- counter
    - The counter input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- time_format
    - The time_format input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- info
    - The info input is used by this node during execution.
    - Comfy dtype: INFO
    - Python dtype: object
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
No outputs are defined in the live ComfyUI metadata.

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
