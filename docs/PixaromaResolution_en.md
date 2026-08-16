# Documentation
- Class name: PixaromaResolution
- Category: 👑 Pixaroma/🔢 Values
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Resolution Pixaroma - a one-click resolution picker. The on-node UI shows a 3x3 ratio chip grid (1:1, 16:9, 9:16, 2:1, 3:2, 2:3, 4:3, 3:4, 4:5) with the 8 most-popular sizes for each ratio. Covers SDXL, AI video, and social-media-ready dimensions. Click a chip, click a size, done.

Custom Ratio mode lets you type any W:H (21:9, 16:10, anything) and get auto-computed AI-friendly sizes. Custom Resolution mode lets you type exact dimensions; math expressions like '1024+128' or '512*2' work in the W / H fields. The Snap chips (16 / 32 / 64 / no snap) round outputs to multiples that VAE encoders prefer.

Outputs width and height as INT. State saves and restores with the workflow.

All UI lives on the JS side; the only Python input is a hidden serialized state string that gets injected at execution time.

# Input types
## Hidden
- ResolutionState
    - The ResolutionState input is used by this node during execution.
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
