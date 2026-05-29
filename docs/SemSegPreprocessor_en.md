
# Documentation
- Class name: SemSegPreprocessor
- Category: ControlNet Preprocessors/Semantic Segmentation
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SemSegPreprocessor node is an image preprocessing tool designed for semantic segmentation tasks. It utilizes the UniFormer model to perform semantic segmentation, transforming the input image into a segmented output, classifying each pixel based on its semantic category. This node is a key step in preparing images for further analysis or model training in the field of semantic segmentation.

# Input types
## Required
- image
    - The input image to be processed for semantic segmentation. This parameter is crucial because it represents the raw data that will be converted into a semantic segmentation image, enabling further analysis or model training.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- resolution
    - Specifies the resolution to which the input image is resized before semantic segmentation. This parameter affects the fineness of the segmentation output; higher resolution may produce more detailed segmentation results.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output result of the semantic segmentation process. This is the segmented version of the input image, where each pixel is classified according to its semantic category.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class Uniformer_SemSegPreprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types()

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "semantic_segmentate"

    CATEGORY = "ControlNet Preprocessors/Semantic Segmentation"

    def semantic_segmentate(self, image, resolution=512):
        from controlnet_aux.uniformer import UniformerSegmentor

        model = UniformerSegmentor.from_pretrained().to(model_management.get_torch_device())
        out = common_annotator_call(model, image, resolution=resolution)
        del model
        return (out, )

```
