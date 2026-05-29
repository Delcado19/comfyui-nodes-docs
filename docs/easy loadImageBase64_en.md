
# Documentation
- Class name: easy loadImageBase64
- Category: EasyUse/Image/LoadImage
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The easy loadImageBase64 node loads images in Base64 encoded format and converts them into a format suitable for further image processing or manipulation within the ComfyUI framework. It acts as a bridge between encoded image data and the internal image representation used in image processing workflows, facilitating the integration of images from external sources.

# Input types
## Required
- base64_data
    - The base64_data parameter is the Base64 encoded string of the image data. It is essential for decoding the image back into a format that can be processed and manipulated within the node.
    - Comfy dtype: STRING
    - Python dtype: str
- image_output
    - The image_output parameter specifies how the loaded image is handled, such as displaying, hiding, or saving the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- save_prefix
    - The save_prefix parameter determines the filename prefix when saving the processed image.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The output image is the processed image in tensor format, which can be further manipulated or analyzed within the ComfyUI framework.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The output mask provides an optional mask tensor, which is useful for subsequent image processing steps if the image contains transparency information.
    - Comfy dtype: MASK
    - Python dtype: Optional[torch.Tensor]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class loadImageBase64:
  @classmethod
  def INPUT_TYPES(s):
    return {
      "required": {
        "base64_data": ("STRING", {"default": ""}),
        "image_output": (["Hide", "Preview", "Save", "Hide/Save"], {"default": "Preview"}),
        "save_prefix": ("STRING", {"default": "ComfyUI"}),
      },
      "optional": {

      },
      "hidden": {"prompt": "PROMPT", "extra_pnginfo": "EXTRA_PNGINFO"},
    }

  RETURN_TYPES = ("IMAGE", "MASK")
  OUTPUT_NODE = True
  FUNCTION = "load_image"
  CATEGORY = "EasyUse/Image/LoadImage"

  def convert_color(self, image,):
    if len(image.shape) > 2 and image.shape[2] >= 4:
      return cv2.cvtColor(image, cv2.COLOR_BGRA2RGB)
    return cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

  def load_image(self, base64_data, image_output, save_prefix, prompt=None, extra_pnginfo=None):
    nparr = np.frombuffer(base64.b64decode(base64_data), np.uint8)

    result = cv2.imdecode(nparr, cv2.IMREAD_UNCHANGED)
    channels = cv2.split(result)
    if len(channels) > 3:
      mask = channels[3].astype(np.float32) / 255.0
      mask = torch.from_numpy(mask)
    else:
      mask = torch.ones(channels[0].shape, dtype=torch.float32, device="cpu")

    result = self.convert_color(result)
    result = result.astype(np.float32) / 255.0
    new_images = torch.from_numpy(result)[None,]

    results = easySave(new_images, save_prefix, image_output, None, None)
    mask = mask.unsqueeze(0)

    if image_output in ("Hide", "Hide/Save"):
      return {"ui": {},
              "result": (new_images, mask)}

    return {"ui": {"images": results},
            "result": (new_images, mask)}

```
