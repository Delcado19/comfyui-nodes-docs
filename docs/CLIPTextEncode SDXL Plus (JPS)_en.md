
# Documentation
- Class name: CLIPTextEncode SDXL Plus (JPS)
- Category: JPS Nodes/Conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node aims to encode text inputs using a CLIP model customized for the SDXL architecture, thereby enhancing the text input for subsequent processing or generation tasks. It focuses on optimizing and conditioning the input text to meet aesthetic or specific size requirements, leveraging the advanced capabilities of the CLIP model to interpret and encode text information to optimize the synthesis and manipulation of high-resolution images.

# Input types
## Required
- width
    - Specifies the width of the output image, affecting the spatial dimensions of the conditional output.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Specifies the height of the output image, affecting the spatial dimensions of the conditional output.
    - Comfy dtype: INT
    - Python dtype: int
- res_factor
    - Specifies the adjustment factor for output resolution, affecting the overall quality and detail of the conditional output.
    - Comfy dtype: INT
    - Python dtype: float
- text_pos
    - The positive text input to be encoded, serving as a key component of the conditioning process to promote certain traits or themes.
    - Comfy dtype: STRING
    - Python dtype: str
- text_neg
    - The negative text input to be encoded, used to reduce or diminish the presence of certain traits or themes during the conditioning process.
    - Comfy dtype: STRING
    - Python dtype: str
- clip
    - The CLIP model instance used for text tokenization and encoding, which is core to the node's functionality.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module

# Output types
- cond_pos
    - The conditioned positive output, including the encoded text information, intended to promote the specified traits or themes.
    - Comfy dtype: CONDITIONING
    - Python dtype: list[dict]
- cond_neg
    - The conditioned negative output, including the encoded text information, intended to reduce or diminish the specified traits or themes.
    - Comfy dtype: CONDITIONING
    - Python dtype: list[dict]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
