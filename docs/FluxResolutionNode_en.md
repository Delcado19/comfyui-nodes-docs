# Documentation
- Class name: FluxResolutionNode
- Display name: Flux Resolution Calc
- Category: ControlAltAI Nodes/Flux
- Output node: True
- Repo Ref: https://github.com/gseth/ControlAltAI-Nodes

Calculates width and height dimensions for Flux image generation based on megapixel target, aspect ratio, and divisibility constraint. Outputs the computed resolution as integers and a preview image.

# Input types
## Required
- megapixel
    - Selects the target megapixel value used to derive output dimensions.
    - Comfy dtype: COMBO
    - Default: `"1.0"`
    - Options: `0.1`, `0.2`, `0.3`, `0.4`, `0.5`, `0.6`, `0.7`, `0.8`, `0.9`, `1.0`, `1.1`, `1.2`, `1.3`, `1.4`, `1.5`, `1.6`, `1.7`, `1.8`, `1.9`, `2.0`, `2.1`, `2.2`, `2.3`, `2.4`, `2.5`
- aspect_ratio
    - Chooses a preset aspect ratio that constrains the width-to-height proportion.
    - Comfy dtype: COMBO
    - Default: `"1:1 (Perfect Square)"`
    - Options: `1:1 (Perfect Square)`, `2:3 (Classic Portrait)`, `3:4 (Golden Ratio)`, `3:5 (Elegant Vertical)`, `4:5 (Artistic Frame)`, `5:7 (Balanced Portrait)`, `5:8 (Tall Portrait)`, `7:9 (Modern Portrait)`, `9:16 (Slim Vertical)`, `9:19 (Tall Slim)`, `9:21 (Ultra Tall)`, `9:32 (Skyline)`, `3:2 (Golden Landscape)`, `4:3 (Classic Landscape)`, `5:3 (Wide Horizon)`, `5:4 (Balanced Frame)`, `7:5 (Elegant Landscape)`, `8:5 (Cinematic View)`, `9:7 (Artful Horizon)`, `16:9 (Panorama)`, `19:9 (Cinematic Ultrawide)`, `21:9 (Epic Ultrawide)`, `32:9 (Extreme Ultrawide)`
- divisible_by
    - Sets the value that both width and height must be evenly divisible by.
    - Comfy dtype: COMBO
    - Default: `"64"`
    - Options: `8`, `16`, `32`, `64`
- custom_ratio
    - Toggles use of a custom aspect ratio string instead of the preset selection.
    - Comfy dtype: BOOLEAN
    - Default: `false`
## Optional
- custom_aspect_ratio
    - Provides a custom aspect ratio in 'W:H format when custom_ratio is enabled.
    - Comfy dtype: STRING
    - Default: `"1:1"`

# Output types
- width
    - The computed width in pixels.
    - Comfy dtype: INT
- height
    - The computed height in pixels.
    - Comfy dtype: INT
- resolution
    - A human-readable resolution string in WxH format.
    - Comfy dtype: STRING
- preview
    - A preview image displaying the calculated dimensions.
    - Comfy dtype: IMAGE

# Source code
[View source repository on GitHub](https://github.com/gseth/ControlAltAI-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
