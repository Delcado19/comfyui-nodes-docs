
# Documentation
- Class name: Inference_Core_InpaintPreprocessor
- Category: ControlNet Preprocessors/others
- Output node: False

The Inpaint Preprocessor node is designed for preprocessing in image restoration tasks. It applies a mask to identify regions needing repair, setting masked pixels to a specific value to prepare for subsequent processing.

# Input types
## Required
- image
    - The image parameter represents the input image to be preprocessed and is the primary data object for mask application.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask parameter specifies the region in the input image that requires restoration, indicating which pixels should be considered for modification.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- image
    - The output is a preprocessed image where the specified region is masked, ready for subsequent processing steps.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class InpaintPreprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": { "image": ("IMAGE",), "mask": ("MASK",)}}
    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "preprocess"

    CATEGORY = "ControlNet Preprocessors/others"

    def preprocess(self, image, mask):
        mask = torch.nn.functional.interpolate(mask.reshape((-1, 1, mask.shape[-2], mask.shape[-1])), size=(image.shape[1], image.shape[2]), mode="bilinear")
        mask = mask.movedim(1,-1).expand((-1,-1,-1,3))
        image = image.clone()
        image[mask > 0.5] = -1.0  # set as masked pixel
        return (image,)

```
