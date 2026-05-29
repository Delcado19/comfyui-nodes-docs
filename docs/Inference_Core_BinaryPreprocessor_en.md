
# Documentation
- Class name: Inference_Core_BinaryPreprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False

The Inference_Core_BinaryPreprocessor node is a specialized tool for image preprocessing, belonging to the ControlNet Preprocessor/Line Extractor category. Its primary function is to convert images to binary format based on a given threshold. This node applies binarization thresholding techniques to extract important lines or edges from images, providing a foundation for subsequent processing or analysis.

# Input types
## Required
- image
    - The input image to be processed. It serves as the primary data source for the binarization threshold operation, from which important lines or edges are extracted.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Optional
- bin_threshold
    - Specifies the threshold for image binarization conversion. It determines the critical point at which pixel values are classified as black or white, playing a key role in extracting lines or edges from the image.
    - Comfy dtype: INT
    - Python dtype: int
- resolution
    - The input image is resized to this resolution before applying the binarization threshold. This parameter can affect the level of detail in the extracted lines or edges.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The processed binary format image, where important lines or edges are highlighted according to the specified binarization threshold.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class Binary_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types(
            bin_threshold=("INT", {"default": 100, "min": 0, "max": 255, "step": 1})
        )

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Line Extractors"

    def execute(self, image, bin_threshold, resolution=512, **kwargs):
        from controlnet_aux.binary import BinaryDetector

        return (common_annotator_call(BinaryDetector(), image, bin_threshold=bin_threshold, resolution=resolution), )

```
