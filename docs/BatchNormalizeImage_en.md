
# Documentation
- Class name: BatchNormalizeImage
- Category: image/filters
- Output node: False

The BatchNormalizeImage node is used to normalize a batch of images based on a given factor. It adjusts the pixel values of each image so that their standard deviation and mean are closer to the overall characteristics of the entire batch. This process enhances the consistency of the image data, making it more suitable for further processing or analysis.

# Input types
## Required
- images
    - The images parameter represents the batch of images to be normalized. It is crucial to the normalization process because it directly affects the calculation of the mean and standard deviation used for normalization.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- factor
    - The factor parameter controls the degree of mixing between the original image and its normalized version. It plays an important role in determining the final appearance of the normalized image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The output is a batch of images normalized according to the specified factor, which may enhance their applicability in subsequent image processing tasks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class BatchNormalizeImage:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE", ),
                "factor": ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01,  "round": 0.01}),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "batch_normalize"

    CATEGORY = "image/filters"

    def batch_normalize(self, images, factor):
        t = copy.deepcopy(images) # [B x H x W x C]
        
        t = t.movedim(-1,0) # [C x B x H x W]
        for c in range(t.size(0)):
            c_sd, c_mean = torch.std_mean(t[c], dim=None)
            
            for i in range(t.size(1)):
                i_sd, i_mean = torch.std_mean(t[c, i], dim=None)
                
                t[c, i] = (t[c, i] - i_mean) / i_sd
            
            t[c] = t[c] * c_sd + c_mean
        
        t = torch.lerp(images, t.movedim(0,-1), factor) # [B x H x W x C]
        return (t,)

```
