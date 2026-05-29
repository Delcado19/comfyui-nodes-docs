
# Documentation
- Class name: Conditioning Grid (string)
- Category: Bmad/conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Conditioning Grid (string) node automates the conditional generation process for grid layouts. It encodes each text input into conditions using the ClipTextEncode node, then applies them to the grid's AreaConditioners. This approach simplifies creating conditioned grids for generation tasks.

# Input types
## Required
- clip
    - The clip parameter is the CLIP model used to encode text inputs into conditions. It plays a key role in interpreting text and converting it into a format usable for conditioning.
    - Comfy dtype: CLIP
    - Python dtype: comfy.sd.CLIP
- base
    - The base parameter is the basic text input serving as the grid's base condition. This input is encoded and used as the starting point for further conditioning.
    - Comfy dtype: STRING
    - Python dtype: str
- columns
    - The columns parameter defines the number of columns in the grid. It determines the grid's horizontal dimension and affects how text inputs are organized and conditioned.
    - Comfy dtype: INT
    - Python dtype: int
- rows
    - The rows parameter defines the number of rows in the grid. It determines the grid's vertical dimension and affects how text inputs are organized and conditioned.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The width parameter sets the width of each cell in the grid (in pixels). This affects the spatial resolution of conditioning applied to each grid cell.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the height of each cell in the grid (in pixels). This affects the spatial resolution of conditioning applied to each grid cell.
    - Comfy dtype: INT
    - Python dtype: int
- strength
    - The strength parameter controls the intensity of conditioning applied to the grid. This parameter influences how strongly the conditioning affects the generated content.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- conditioning
    - The output conditioning is the final conditioned result of the grid, ready for use in generation tasks. It encapsulates the encoded text inputs applied to the grid layout.
    - Comfy dtype: CONDITIONING
    - Python dtype: CONDITIONING


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
