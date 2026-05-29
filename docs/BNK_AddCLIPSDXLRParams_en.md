# Documentation
- Class name: AddCLIPSDXLRParams
- Category: conditioning/advanced
- Output node: False
- Repo Ref: https://github.com/BlenderNeko/ComfyUI_ADV_CLIP_emb

The AddCLIPSDXLRParams node is designed to enhance input conditioning data for advanced encoding tasks. It receives conditioning data and applies specified dimensions and aesthetic scores to each element, preparing it for subsequent processing.

# Input types
## Required
- conditioning
    - The conditioning parameter is critical for providing the initial data that will be transformed by the node. It is the core input that determines the node's subsequent processing and output.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Any]
- width
    - The width parameter specifies the width dimension to be applied to each element in the conditioning data. It plays a key role in determining the resolution of the encoded data.
    - Comfy dtype: INT
    - Python dtype: float
- height
    - The height parameter sets the height dimension for elements in the conditioning data. It is important for controlling the vertical resolution of the encoded output.
    - Comfy dtype: INT
    - Python dtype: float
- ascore
    - The aesthetic_score parameter assigns an aesthetic value to each element, which can influence the encoding process based on the desired aesthetic criteria.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- conditioning
    - The output conditioning is a transformed version of the input, now equipped with the specified dimensions and aesthetic scores, ready for advanced encoding.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/BlenderNeko/ComfyUI_ADV_CLIP_emb)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
