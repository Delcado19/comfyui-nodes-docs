# Documentation
- Class name: PixaromaSizes
- Category: 👑 Pixaroma/🔢 Values
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Sizes Pixaroma - your own list of favourite resolutions. Add the exact width x height sizes you use, pick one from the list, and it outputs width and height as INT.

The Portrait / Landscape buttons flip the chosen size, so you add a size like 1024 x 1536 once and reuse it in either orientation (square sizes are unaffected). A fresh node starts with just 1024 x 1024; open the settings (the gear) to add, remove, and reorder sizes, load a set of common sizes, or snap width and height to a multiple of 8, 16, 32, or 64 for VAE-friendly dimensions.

State saves and restores with the workflow.

# Input types
## Hidden
- SizesState
    - The SizesState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- width
    - The chosen width in pixels.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The chosen height in pixels.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
