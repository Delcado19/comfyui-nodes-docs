
# Documentation
- Class name: Inference_Core_ImageGenResolutionFromLatent
- Category: ControlNet Preprocessors
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node aims to calculate image generation resolution based on latent space representation. It extracts height and width from latent samples and scales them to determine the optimal resolution for image generation.

# Input types
## Required
- latent
    - Latent representation used to derive image generation resolution. It influences the output by determining base dimensions that will be scaled to calculate the final image resolution.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- IMAGE_GEN_WIDTH (INT)
    - Output image generation width, in pixels.
    - Comfy dtype: INT
    - Python dtype: int
- IMAGE_GEN_HEIGHT (INT)
    - Output image generation height, in pixels.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageGenResolutionFromLatent:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": { "latent": ("LATENT", ) }
        }
    
    RETURN_TYPES = ("INT", "INT")
    RETURN_NAMES = ("IMAGE_GEN_WIDTH (INT)", "IMAGE_GEN_HEIGHT (INT)")
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors"

    def execute(self, latent):
        _, _, H, W = latent["samples"].shape
        return (W * 8, H * 8)

```
