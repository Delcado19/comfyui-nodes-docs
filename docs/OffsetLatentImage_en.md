
# Documentation
- Class name: OffsetLatentImage
- Category: latent
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The OffsetLatentImage node is designed to manipulate the latent space representation of an image by applying a specified offset to each channel. This operation allows for low-level adjustment and fine-tuning of generated image features, providing a method to explore variations in the image generation process.

# Input types
## Required
- width
    - Specifies the width of the latent image to be generated. This parameter directly affects the dimensions of the output latent representation.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Determines the height of the latent image. Similar to width, it influences the size of the latent output, allowing control over the aspect ratio of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - Controls the number of latent images to generate in a single batch, facilitating batch processing for improved efficiency.
    - Comfy dtype: INT
    - Python dtype: int
- offset_i
    - Applies a specific offset to the i-th channel of the latent representation, thereby altering its characteristics. The index i ranges from 0 to 3, allowing detailed customization of each channel in the latent space.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- latent
    - Returns the modified latent representation of the image with offsets applied, ready for further processing or image generation.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class OffsetLatentImage:
    def __init__(self):
        self.device = comfy.model_management.intermediate_device()

    @classmethod
    def INPUT_TYPES(s):
        return {"required": { "width": ("INT", {"default": 512, "min": 16, "max": MAX_RESOLUTION, "step": 8}),
                              "height": ("INT", {"default": 512, "min": 16, "max": MAX_RESOLUTION, "step": 8}),
                              "batch_size": ("INT", {"default": 1, "min": 1, "max": 4096}),
                              "offset_0": ("FLOAT", {"default": 0.0, "min": -10.0, "max": 10.0, "step": 0.1,  "round": 0.1}),
                              "offset_1": ("FLOAT", {"default": 0.0, "min": -10.0, "max": 10.0, "step": 0.1,  "round": 0.1}),
                              "offset_2": ("FLOAT", {"default": 0.0, "min": -10.0, "max": 10.0, "step": 0.1,  "round": 0.1}),
                              "offset_3": ("FLOAT", {"default": 0.0, "min": -10.0, "max": 10.0, "step": 0.1,  "round": 0.1}),
                              }}
    RETURN_TYPES = ("LATENT",)
    FUNCTION = "generate"

    CATEGORY = "latent"

    def generate(self, width, height, batch_size, offset_0, offset_1, offset_2, offset_3):
        latent = torch.zeros([batch_size, 4, height // 8, width // 8], device=self.device)
        latent[:,0,:,:] = offset_0
        latent[:,1,:,:] = offset_1
        latent[:,2,:,:] = offset_2
        latent[:,3,:,:] = offset_3
        return ({"samples":latent}, )

```
