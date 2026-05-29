
# Documentation
- Class name: AdainImage
- Category: image/filters
- Output node: False

The AdainImage node applies Adaptive Instance Normalization (AdaIN) to process a batch of images, using a reference image to adjust the style of the input images. This process involves normalizing the input images based on the statistical properties (mean and standard deviation) of the reference image, thereby achieving style transfer at a given intensity level.

# Input types
## Required
- images
    - The input images that need to be stylized. These are the primary subjects of the style transfer process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- reference
    - The reference image used to extract style features (mean and standard deviation), which will be applied for style transfer.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- factor
    - A factor controlling the intensity of style transfer, allowing blending between the original image and the stylized image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The stylized images processed through Adaptive Instance Normalization.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class AdainImage:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE", ),
                "reference": ("IMAGE", ),
                "factor": ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01,  "round": 0.01}),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "batch_normalize"

    CATEGORY = "image/filters"

    def batch_normalize(self, images, reference, factor):
        t = copy.deepcopy(images) # [B x H x W x C]
        
        t = t.movedim(-1,0) # [C x B x H x W]
        for c in range(t.size(0)):
            for i in range(t.size(1)):
                r_sd, r_mean = torch.std_mean(reference[i, :, :, c], dim=None) # index by original dim order
                i_sd, i_mean = torch.std_mean(t[c, i], dim=None)
                
                t[c, i] = ((t[c, i] - i_mean) / i_sd) * r_sd + r_mean
        
        t = torch.lerp(images, t.movedim(0,-1), factor) # [B x H x W x C]
        return (t,)

```
