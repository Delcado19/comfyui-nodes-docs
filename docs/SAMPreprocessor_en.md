
# Documentation
- Class name: SAMPreprocessor
- Category: ControlNet Preprocessors/others
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SAMPreprocessor node is designed to segment images using the SAM(Segment Anything Model) method. It preprocesses the image to enhance its effect, preparing it for further processing or analysis, with a particular focus on segmentation tasks.

# Input types
## Required
- image
    - The input image that needs to be segmented. This is the main data for the SAMPreprocessor operation, aimed at identifying and segmenting various elements in the image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- resolution
    - Specifies the resolution to which the input image is adjusted before processing. This parameter may affect the accuracy and performance of the segmentation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is a segmented version of the input image, where different segments are identified and separated.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SAM_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types()

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/others"

    def execute(self, image, resolution=512, **kwargs):
        from controlnet_aux.sam import SamDetector

        mobile_sam = SamDetector.from_pretrained().to(model_management.get_torch_device())
        out = common_annotator_call(mobile_sam, image, resolution=resolution)
        del mobile_sam
        return (out, )

```
