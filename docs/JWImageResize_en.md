
# Documentation
- Class name: JWImageResize
- Category: jamesWalker55
- Output node: False

The JWImageResize node is designed to resize images to specified width and height while using a selected interpolation method to maintain image quality.

# Input types
## Required
- image
    - Input image tensor that needs resizing. It is essential for defining the visual content that will be adjusted.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- height
    - Specifies the target height of the resized image, directly affecting the vertical dimension of the image.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - Determines the target width of the resized image, directly affecting the horizontal dimension of the image.
    - Comfy dtype: INT
    - Python dtype: int
- interpolation_mode
    - The method used for interpolation between pixel values when resizing the image, which affects the quality and appearance of the output image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The resized image tensor, adjusted according to the specified dimensions and interpolation quality.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [GroundingDinoSAMSegment (segment anything)](../../comfyui_segment_anything/Nodes/GroundingDinoSAMSegment (segment anything).md)
    - [IPAdapterEncoder](../../ComfyUI_IPAdapter_plus/Nodes/IPAdapterEncoder.md)
    - [CLIPVisionEncode](../../Comfy/Nodes/CLIPVisionEncode.md)
    - [VAEEncode](../../Comfy/Nodes/VAEEncode.md)
    - [FaceDetailer](../../ComfyUI-Impact-Pack/Nodes/FaceDetailer.md)
    - Reroute



## Source code
```python
@register_node("JWImageLoadRGB", "Image Load RGB")
class _:
    CATEGORY = "jamesWalker55"
    INPUT_TYPES = lambda: {
        "required": {
            "path": ("STRING", {"default": "./image.png"}),
        }
    }
    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    def execute(self, path: str):
        assert isinstance(path, str)

        img = load_image(path)
        return (img,)

```
