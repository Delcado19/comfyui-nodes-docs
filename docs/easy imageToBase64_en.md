
# Documentation
- Class name: easy imageToBase64
- Category: EasyUse/Image
- Output node: True

The easy imageToBase64 node converts an image from tensor format to a Base64‑encoded string. This is essential for web applications and APIs that need to transmit images as text over the internet.

# Input types
## Required
- image
    - The image parameter is the input tensor representing the image to be converted. It is crucial in the conversion because it provides the source image that will be turned into a Base64‑encoded string.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- string
    - The output is the Base64‑encoded string representation of the input image. This format is widely used to embed images in HTML or CSS files, or to transmit images over networks that do not support binary data transfer.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class imageToBase64:
    @classmethod
    def INPUT_TYPES(s):
        return {
        "required": {
            "image": ("IMAGE",),
        },
        }

    RETURN_TYPES = ("STRING",)
    FUNCTION = "to_base64"
    CATEGORY = "EasyUse/Image"
    OUTPUT_NODE = True

    def to_base64(self, image, ):
      import base64
      from io import BytesIO

      # 将张量图像转换为PIL图像
      pil_image = tensor2pil(image)

      buffered = BytesIO()
      pil_image.save(buffered, format="JPEG")
      image_bytes = buffered.getvalue()

      base64_str = base64.b64encode(image_bytes).decode("utf-8")
      return {"result": (base64_str,)}

```
