
# Documentation
- Class name: EnhanceDetail
- Category: image/filters
- Output node: False

The EnhanceDetail node aims to improve the visual quality of an image by applying a series of filters that enhance details, adjust sharpness, and potentially reduce noise. The node operates on the details of the image relative to the guided filter output, enabling fine control over the enhancement process.

# Input types
## Required
- images
    - The input image that needs enhancement. This parameter is critical as it directly affects the enhancement process, serving as the foundation for all subsequent operations.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- filter_radius
    - Specifies the filter radius applied during the enhancement process. A larger radius may result in more pronounced detail enhancement but may also increase processing time.
    - Comfy dtype: INT
    - Python dtype: int
- sigma
    - Controls the sigma parameter of the guided filter, affecting the degree of smoothing and detail preservation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- denoise
    - Determines the strength of the denoising filter. Higher values can reduce noise but may also weaken details.
    - Comfy dtype: FLOAT
    - Python dtype: float
- detail_mult
    - The multiplier for detail enhancement. Adjusting this value can fine-tune the intensity of the detail enhancement effect.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The output of the node, which is the enhanced image. These images are expected to have better detail representation and potentially reduced noise.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class EnhanceDetail:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE",),
                "filter_radius": ("INT", {
                    "default": 2,
                    "min": 1,
                    "max": 64,
                    "step": 1
                }),
                "sigma": ("FLOAT", {
                    "default": 0.1,
                    "min": 0.01,
                    "max": 100.0,
                    "step": 0.01
                }),
                "denoise": ("FLOAT", {
                    "default": 0.1,
                    "min": 0.0,
                    "max": 10.0,
                    "step": 0.01
                }),
                "detail_mult": ("FLOAT", {
                    "default": 2.0,
                    "min": 0.0,
                    "max": 100.0,
                    "step": 0.1
                }),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "enhance"

    CATEGORY = "image/filters"

    def enhance(self, images: torch.Tensor, filter_radius: int, sigma: float, denoise: float, detail_mult: float):
        
        if filter_radius == 0:
            return (images,)
        
        d = filter_radius * 2 + 1
        s = sigma / 10
        n = denoise / 10
        
        dup = copy.deepcopy(images.cpu().numpy())
        
        for index, image in enumerate(dup):
            imgB = image
            if denoise>0.0:
                imgB = cv2.bilateralFilter(image, d, n, d)
            
            imgG = np.clip(guidedFilter(image, image, d, s), 0.001, 1)
            
            details = (imgB/imgG - 1) * detail_mult + 1
            dup[index] = np.clip(details*imgG - imgB + image, 0, 1)
        
        return (torch.from_numpy(dup),)

```
