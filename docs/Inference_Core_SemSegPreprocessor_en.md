
# Documentation
- Class name: Inference_Core_SemSegPreprocessor
- Category: ControlNet Preprocessors/Semantic Segmentation
- Output node: False

The Inference_Core_SemSegPreprocessor node is designed to preprocess images for semantic segmentation tasks within the Detectron2 framework. It integrates custom modifications and configurations to adapt to specific segmentation needs, such as anime face segmentation, and ensures that images are properly formatted and augmented for optimal segmentation performance.

# Input types
## Required
- image
    - The image parameter is the primary input for semantic segmentation preprocessing, representing the image to be processed. It is essential for the node to perform necessary adjustments and augmentations to prepare the image for segmentation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- resolution
    - The resolution parameter specifies the target resolution required for image preprocessing. It plays a key role in resizing images to meet segmentation model requirements, affecting the quality and accuracy of segmentation results.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output image represents the preprocessed image, ready for semantic segmentation analysis. This output is the result of applying various preprocessing steps aimed at enhancing and formatting the image for optimal segmentation performance.
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
