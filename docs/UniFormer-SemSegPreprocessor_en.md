
# Documentation
- Class name: UniFormer-SemSegPreprocessor
- Category: ControlNet Preprocessors/Semantic Segmentation
- Output node: False

The UniFormer-SemSegPreprocessor node is a processor dedicated to semantic segmentation tasks, belonging to the semantic segmentation category of ControlNet preprocessors. It uses the UniformerSegmentor model to process images, aiming to understand and divide images into different semantic regions based on learned representations.

# Input types
## Required
- image
    - Input images that require semantic segmentation. This parameter is critical because it is the primary data source for the model's segmentation operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- resolution
    - The resolution to which input images are resized before processing. This affects the level of detail in the segmentation output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output of the semantic segmentation process, an image segmented into different semantic regions.
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
