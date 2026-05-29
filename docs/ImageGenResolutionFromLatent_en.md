
# Documentation
- Class name: ImageGenResolutionFromLatent
- Category: ControlNet Preprocessors
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageGenResolutionFromLatent node is designed to calculate image generation resolution based on the dimensions of a given latent representation. It extracts the height and width from the shape of the latent representation and scales them to determine the resolution suitable for image generation. This process is crucial for ensuring that the generated image has the appropriate dimensions matching the input latent representation, thereby optimizing computational resource usage while maintaining image quality.

# Input types
## Required
- latent
    - The latent parameter is the core input of the ImageGenResolutionFromLatent node. It is a dictionary containing the latent representation, whose tensor shape is used to calculate the required output dimensions. The structure of this latent representation directly determines the final resolution of the generated image, thus playing a key role in the node's functionality.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- IMAGE_GEN_WIDTH (INT)
    - The output IMAGE_GEN_WIDTH parameter represents the image generation width calculated based on the latent representation dimensions. This integer value is appropriately scaled to ensure that the generated image has a suitable width, consistent with the input latent representation.
    - Comfy dtype: INT
    - Python dtype: int
- IMAGE_GEN_HEIGHT (INT)
    - The output IMAGE_GEN_HEIGHT parameter represents the image generation height calculated based on the latent representation dimensions. This integer value is also appropriately scaled to ensure that the generated image has a suitable height, consistent with the input latent representation.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [ImageScale](../../Comfy/Nodes/ImageScale.md)

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
