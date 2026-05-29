
# Documentation
- Class name: Preview from metadata [Crystools]
- Category: crystools 🪛/Image
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node aims to generate a preview of image metadata, including details such as filename, resolution, date, and size. It can also process additional metadata related to the image, such as prompts and workflows, providing a comprehensive overview in text format. The goal of the node is to facilitate the visualization and understanding of image metadata by presenting it in a structured and easy-to-understand manner.

# Input types
## Optional
- metadata_raw
    - Raw metadata input containing image information, including file details and any related prompts or workflows. This metadata is essential for generating preview text and determining visualization content.
    - Comfy dtype: METADATA_RAW
    - Python dtype: Dict[str, Any]

# Output types
- Metadata RAW
    - Comfy dtype: METADATA_RAW
    - Output raw format of metadata, containing the processed image metadata information.
    - Python dtype: unknown
- ui
    - Output includes a text preview of image metadata and any related images, structured for display in the user interface. This facilitates easy interpretation and visualization of the metadata.
    - Comfy dtype: UI
    - Python dtype: Dict[str, Union[str, List[str]]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CImagePreviewFromMetadata(PreviewImage):
    def __init__(self):
        self.data_cached = None
        self.data_cached_text = None

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                # if it is required, in next node does not receive any value even the cache!
            },
            "optional": {
                "metadata_raw": METADATA_RAW,
            },
        }

    CATEGORY = CATEGORY.MAIN.value + CATEGORY.IMAGE.value
    RETURN_TYPES = ("METADATA_RAW",)
    RETURN_NAMES = ("Metadata RAW",)
    OUTPUT_NODE = True

    FUNCTION = "execute"

    def execute(self, metadata_raw=None):
        text = ""
        title = ""
        data = {
            "result": [''],
            "ui": {
                "text": [''],
                "images": [],
            }
        }

        if metadata_raw is not None and metadata_raw != '':
            promptFromImage = {}
            if "prompt" in metadata_raw:
              promptFromImage = metadata_raw["prompt"]

            title = "Source: Metadata RAW\n"
            text += buildPreviewText(metadata_raw)
            text += f"Prompt from image:\n"
            text += json.dumps(promptFromImage, indent=CONFIG["indent"])

            images = self.resolveImage(metadata_raw["fileinfo"]["filename"])
            result = metadata_raw

            data["result"] = [result]
            data["ui"]["images"] = images

            self.data_cached_text = text
            self.data_cached = data

        elif metadata_raw is None and self.data_cached is not None:
            title = "Source: Metadata RAW - CACHED\n"
            data = self.data_cached
            text = self.data_cached_text

        else:
            logger.debug("Source: Empty on CImagePreviewFromMetadata")
            text = "Source: Empty"

        data["ui"]["text"] = [title + text]
        return data

    def resolveImage(self, filename=None):
        images = []

        if filename is not None:
            image_input_folder = os.path.normpath(folder_paths.get_input_directory())
            image_input_folder_abs = Path(image_input_folder).resolve()

            image_path = os.path.normpath(filename)
            image_path_abs = Path(image_path).resolve()

            if Path(image_path_abs).is_file() is False:
                raise Exception(TEXTS.FILE_NOT_FOUND.value)

            try:
                # get common path, should be input/output/temp folder
                common = os.path.commonpath([image_input_folder_abs, image_path_abs])

                if common != image_input_folder:
                    raise Exception("Path invalid (should be in the input folder)")

                relative = os.path.normpath(os.path.relpath(image_path_abs, image_input_folder_abs))

                images.append({
                    "filename": Path(relative).name,
                    "subfolder": os.path.dirname(relative),
                    "type": "input"
                })

            except Exception as e:
                logger.warn(e)

        return images

```
