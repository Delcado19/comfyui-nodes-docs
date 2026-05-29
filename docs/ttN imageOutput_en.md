
# Documentation
- Class name: ttN imageOutput
- Category: ttN/image
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ttN_imageOutput node is designed to manage the image output process in custom workflows, focusing on advanced management of image saving, display, and modification according to user-defined settings. It abstracts the complexity involved in image processing, providing a simplified interface for operations related to image output.

# Input types
## Required
- image
    - Serves as the core input for operations such as saving or modification, being the center of the node's processing activities.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_output
    - Determines the processing method for image output, including options to save, hide, or display.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- output_path
    - Specifies the directory path for saving images, crucial for organizing saved images.
    - Comfy dtype: STRING
    - Python dtype: str
- save_prefix
    - Prefix added to saved images, aiding in image organization and retrieval.
    - Comfy dtype: STRING
    - Python dtype: str
- number_padding
    - Defines padding used for numbering saved images, facilitating systematic organization of images.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: int
- file_type
    - Determines the file format for saving images, affecting output compatibility and quality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- overwrite_existing
    - Controls whether existing images should be overwritten, affecting how new images are stored.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- embed_workflow
    - Indicates whether workflow information should be embedded in saved images, enhancing traceability.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool

# Output types
- image
    - Returns the processed image, which may be in modified or original form depending on the operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ui
    - Outputs the processed image results to the UI, facilitating user interaction and visualization.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ttN_imageOUPUT:
        version = '1.1.0'
        def __init__(self):
            pass
        
        @classmethod
        def INPUT_TYPES(s):
            return {"required": { 
                    "image": ("IMAGE",),
                    "image_output": (["Hide", "Preview", "Save", "Hide/Save"],{"default": "Preview"}),
                    "output_path": ("STRING", {"default": folder_paths.get_output_directory(), "multiline": False}),
                    "save_prefix": ("STRING", {"default": "ComfyUI"}),
                    "number_padding": (["None", 2, 3, 4, 5, 6, 7, 8, 9],{"default": 5}),
                    "file_type": (["PNG", "JPG", "JPEG", "BMP", "TIFF", "TIF"],{"default": "PNG"}),
                    "overwrite_existing": (["True", "False"],{"default": "False"}),
                    "embed_workflow": (["True", "False"],),

                    },
                    "hidden": {"prompt": "PROMPT", "extra_pnginfo": "EXTRA_PNGINFO", "my_unique_id": "UNIQUE_ID",
                               "ttNnodeVersion": ttN_imageOUPUT.version},
                }

        RETURN_TYPES = ("IMAGE",)
        RETURN_NAMES = ("image",)
        FUNCTION = "output"
        CATEGORY = "ttN/image"
        OUTPUT_NODE = True

        def output(self, image, image_output, output_path, save_prefix, number_padding, file_type, overwrite_existing, embed_workflow, prompt, extra_pnginfo, my_unique_id):
            ttN_save = ttNsave(my_unique_id, prompt, extra_pnginfo, number_padding, overwrite_existing, output_path)
            results = ttN_save.images(image, save_prefix, image_output, embed_workflow, file_type.lower())

            if image_output in ("Hide", "Hide/Save"):
                return (image,)

            # Output image results to ui and node outputs
            return {"ui": {"images": results},
                    "result": (image,)}

```
