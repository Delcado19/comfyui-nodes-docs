# Documentation
- Class name: BuildJsonPromptIdeogram
- Category: text
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Build a JSON prompt for the Ideogram 4 model.

# Input types
## Required
- element
    - Prompt elements from the node Create Bounding Boxes.
    - Comfy dtype: ARRAY
    - Python dtype: object
- high_level_description
    - Optional description of the image in one or two sentences. Strongly recommended.
    - Comfy dtype: STRING
    - Python dtype: str
- background
    - Mandatory description of the image background or environment.
    - Comfy dtype: STRING
    - Python dtype: str
- style
    - The style input is used by this node during execution.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- aesthetics
    - Mandatory aesthetic keywords (e.g. moody, cinematic, desaturated).
    - Comfy dtype: STRING
    - Python dtype: str
- lighting
    - Mandatory lighting description (e.g. golden hour, rim light, dramatic shadows).
    - Comfy dtype: STRING
    - Python dtype: str
- medium
    - Mandatory medium type (e.g. photograph, illustration, 3d_render, painting, graphic_design). When style = photo, set to photograph.
    - Comfy dtype: STRING
    - Python dtype: str
- color_palette
    - Hex color codes that steer the image's dominant colors. Up to 16 entries.
    - Comfy dtype: COLORS
    - Python dtype: object

# Output types
- prompt
    - The prompt output is produced by this node.
    - Comfy dtype: DICT
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
