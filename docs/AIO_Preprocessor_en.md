
# Documentation
- Class name: AIO_Preprocessor
- Category: ControlNet Preprocessors
- Output node: False

The AIO_Preprocessor node is designed to dynamically select and apply specific auxiliary preprocessing operations to images based on the chosen preprocessor type. It supports multiple preprocessing options, automatically configuring and executing the appropriate auxiliary preprocessor to modify the image according to the requirements of the selected preprocessor.

# Input types
## Required
- image
    - The input image to be preprocessed. This image will be directly passed to the selected auxiliary preprocessor for modification.
    - Comfy dtype: IMAGE
    - Python dtype: Image

## Optional
- preprocessor
    - Specifies the type of preprocessing to apply to the image. This selection determines which auxiliary preprocessor logic will be executed, thereby affecting the final preprocessed result of the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
    - The resolution of the preprocessing operation, which some preprocessors may use to adjust the level of processing detail or output resolution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The preprocessed image modified by the selected auxiliary preprocessor.
    - Comfy dtype: IMAGE
    - Python dtype: Image


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [ControlNetApplyAdvanced](../../Comfy/Nodes/ControlNetApplyAdvanced.md)
    - [PreviewImage](../../Comfy/Nodes/PreviewImage.md)
    - [ControlNetApply](../../Comfy/Nodes/ControlNetApply.md)
    - [VHS_VideoCombine](../../ComfyUI-VideoHelperSuite/Nodes/VHS_VideoCombine.md)



## Source code
```python
class AIO_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types(preprocessor=(PREPROCESSOR_OPTIONS, {"default": "none"}))

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors"

    def execute(self, preprocessor, image, resolution=512):
        if preprocessor == "none":
            return (image, )
        else:
            aux_class = AUX_NODE_MAPPINGS[preprocessor]
            input_types = aux_class.INPUT_TYPES()
            input_types = {
                **input_types["required"],
                **(input_types["optional"] if "optional" in input_types else {})
            }
            params = {}
            for name, input_type in input_types.items():
                if name == "image":
                    params[name] = image
                    continue

                if name == "resolution":
                    params[name] = resolution
                    continue

                if len(input_type) == 2 and ("default" in input_type[1]):
                    params[name] = input_type[1]["default"]
                    continue

                default_values = { "INT": 0, "FLOAT": 0.0 }
                if input_type[0] in default_values:
                    params[name] = default_values[input_type[0]]

            return getattr(aux_class(), aux_class.FUNCTION)(**params)

```
