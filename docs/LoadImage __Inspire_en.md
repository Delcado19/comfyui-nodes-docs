
# Documentation
- Class name: LoadImage __Inspire
- Category: InspirePack/image
- Output node: False

The LoadImage node is a component in the Inspire package designed to load and preprocess images for further use in image processing workflows. It loads images from a specified directory, applies necessary transformations (such as decoding, orientation correction, and normalization), and optionally generates masks for images with transparency.

# Input types
## Required
- image
    - Specify the image file to load. This input is critical for determining which image is processed and loaded into the workflow.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- image_data
    - Provide image data in base64-encoded string format. These data are decoded and processed to generate the image and its mask (if applicable). It serves as an alternative input method for image loading.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The processed image, usable for subsequent image processing tasks. It returns the image as a normalized tensor, reflecting the applied preprocessing steps.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - Optional output that provides a mask for the image, particularly useful for images with transparency. It indicates regions of interest or exclusion in further processing steps.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class LoadImageInspire:
    @classmethod
    def INPUT_TYPES(s):
        input_dir = folder_paths.get_input_directory()
        files = [f for f in os.listdir(input_dir) if os.path.isfile(os.path.join(input_dir, f))]
        return {"required": {
                                "image": (sorted(files) + ["#DATA"], {"image_upload": True}),
                                "image_data": ("STRING", {"multiline": False}),
                            }
                }

    CATEGORY = "InspirePack/image"

    RETURN_TYPES = ("IMAGE", "MASK")
    FUNCTION = "load_image"

    def load_image(self, image, image_data):
        image_data = base64.b64decode(image_data.split(",")[1])
        i = Image.open(BytesIO(image_data))
        i = ImageOps.exif_transpose(i)
        image = i.convert("RGB")
        image = np.array(image).astype(np.float32) / 255.0
        image = torch.from_numpy(image)[None,]
        if 'A' in i.getbands():
            mask = np.array(i.getchannel('A')).astype(np.float32) / 255.0
            mask = 1. - torch.from_numpy(mask)
        else:
            mask = torch.zeros((64, 64), dtype=torch.float32, device="cpu")
        return (image, mask.unsqueeze(0))

```
