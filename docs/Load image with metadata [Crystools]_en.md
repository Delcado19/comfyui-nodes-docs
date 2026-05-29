
# Documentation
- Class name: Load image with metadata [Crystools]
- Category: crystools 🪛/Image
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node loads images and their associated metadata, integrating them into data processing or analysis workflows. It seamlessly handles images and inherent information, simplifying tasks requiring both visual and contextual data.

# Input types
## Required
- image
    - The image parameter represents the target image file to load. It is crucial to the node's operation as it determines the source of visual content and related metadata, essential for subsequent processing or analysis.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - Processed image data, available for further operations or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - Mask generated from the image, used for operations that require distinguishing image regions.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- prompt
    - Prompt information extracted from image metadata, providing context or instructions related to the image.
    - Comfy dtype: JSON
    - Python dtype: str
- Metadata RAW
    - Comprehensive metadata associated with the image, encapsulating all contextual information extracted during loading.
    - Comfy dtype: METADATA_RAW
    - Python dtype: dict


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class CImageLoadWithMetadata:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        input_dir = folder_paths.get_input_directory()
        exclude_folders = ["clipspace"]
        file_list = []

        for root, dirs, files in os.walk(input_dir):
            # Exclude specific folders
            dirs[:] = [d for d in dirs if d not in exclude_folders]

            for file in files:
                relpath = os.path.relpath(os.path.join(root, file), start=input_dir)
                # fix for windows
                relpath = relpath.replace("\\", "/")
                file_list.append(relpath)

        return {
            "required": {
                "image": (sorted(file_list), {"image_upload": True})
            },
        }

    CATEGORY = CATEGORY.MAIN.value + CATEGORY.IMAGE.value
    RETURN_TYPES = ("IMAGE", "MASK", "JSON", "METADATA_RAW")
    RETURN_NAMES = ("image", "mask", "prompt", "Metadata RAW")
    OUTPUT_NODE = True

    FUNCTION = "execute"

    def execute(self, image):
        image_path = folder_paths.get_annotated_filepath(image)

        img, prompt, metadata = buildMetadata(image_path)

        img = ImageOps.exif_transpose(img)
        image = img.convert("RGB")
        image = np.array(image).astype(np.float32) / 255.0
        image = torch.from_numpy(image)[None,]
        if 'A' in img.getbands():
            mask = np.array(img.getchannel('A')).astype(np.float32) / 255.0
            mask = 1. - torch.from_numpy(mask)
        else:
            mask = torch.zeros((64, 64), dtype=torch.float32, device="cpu")

        return image, mask.unsqueeze(0), prompt, metadata

    @classmethod
    def IS_CHANGED(cls, image):
        image_path = folder_paths.get_annotated_filepath(image)
        m = hashlib.sha256()
        with open(image_path, 'rb') as f:
            m.update(f.read())
        return m.digest().hex()

    @classmethod
    def VALIDATE_INPUTS(cls, image):
        if not folder_paths.exists_annotated_filepath(image):
            return "Invalid image file: {}".format(image)

        return True

```
