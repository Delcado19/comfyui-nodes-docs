
# Documentation
- Class name: ImageGenResolutionFromImage
- Category: ControlNet Preprocessors
- Output node: False

This node aims to calculate the generation resolution based on the input image. It analyzes the dimensions of the provided image and computes the width and height applied to image generation, ensuring the output resolution is directly derived from the size of the input image.

# Input types
## Required
- image
    - Input image for which the generation resolution needs to be calculated. This parameter is critical as it directly affects the output resolution by analyzing the image dimensions.
    - Comfy dtype: IMAGE
    - Python dtype: np.ndarray

# Output types
- IMAGE_GEN_WIDTH (INT)
    - Width for image generation calculated from the input image dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- IMAGE_GEN_HEIGHT (INT)
    - Height for image generation calculated from the input image dimensions.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [SVD_img2vid_Conditioning](../../Comfy/Nodes/SVD_img2vid_Conditioning.md)



## Source code
```python
class ImageGenResolutionFromImage:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": { "image": ("IMAGE", ) }
        }
    
    RETURN_TYPES = ("INT", "INT")
    RETURN_NAMES = ("IMAGE_GEN_WIDTH (INT)", "IMAGE_GEN_HEIGHT (INT)")
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors"

    def execute(self, image):
        _, H, W, _ = image.shape
        return (W, H)

```
