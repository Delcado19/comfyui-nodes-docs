# Documentation
- Class name: PixaromaSwitchWH
- Category: 👑 Pixaroma/🔀 Logic & Flow
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Switch WH Pixaroma - pick width/height from one of two input sources with a single click. Wire two W/H pairs (for example a Load Image Pixaroma's WIDTH/HEIGHT and a Resolution Pixaroma's width/height) into the A and B inputs, then click A or B on the node to choose which pair flows through to the output. Lets you flip between the source image's native size and a manually chosen resolution without rewiring cables.

If only one pair is wired, that pair is used regardless of the toggle - so you can leave the unused inputs disconnected during early workflow setup.

# Input types
## Optional
- width_a
    - Width of source A (e.g. a Load Image Pixaroma's width). Click A on the node to send the A pair to the output.
    - Comfy dtype: INT
    - Python dtype: int
- height_a
    - Height of source A. Pairs with width_a.
    - Comfy dtype: INT
    - Python dtype: int
- width_b
    - Width of source B (e.g. a Resolution Pixaroma's width). Click B on the node to send the B pair to the output.
    - Comfy dtype: INT
    - Python dtype: int
- height_b
    - Height of source B. Pairs with width_b.
    - Comfy dtype: INT
    - Python dtype: int
## Hidden
- SwitchWHState
    - The SwitchWHState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- width
    - The width from the active (highlighted) source.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height from the active (highlighted) source.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
