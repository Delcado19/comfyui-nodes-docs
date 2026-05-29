
# Documentation
- Class name: ShufflePreprocessor
- Category: ControlNet Preprocessors/T2IAdapter-only
- Output node: False

The ShufflePreprocessor node preprocesses images by applying a content rearrangement detection algorithm. This preprocessing step is essential for tasks that need to identify or manipulate rearranged content in images, enhancing the model’s ability to recognize and handle such patterns.

# Input types
## Required
- image
    - The input image to be processed. It is the primary data for the content rearrangement detection algorithm.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image或numpy.ndarray
- resolution
    - The resolution to which the input image will be resized before processing. This parameter may affect detection accuracy and performance.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed value for random number generation, ensuring reproducibility of the rearrangement detection process.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The processed image after applying the content rearrangement detection algorithm. It displays the rearranged content detected in the original image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image或numpy.ndarray


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Shuffle_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": dict(
                image=("IMAGE",),
                resolution=("INT", {"default": 512, "min": 64, "max": MAX_RESOLUTION, "step": 64}),
                seed=("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff})
            )
        }
    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "preprocess"

    CATEGORY = "ControlNet Preprocessors/T2IAdapter-only"

    def preprocess(self, image, resolution=512, seed=None):
        from controlnet_aux.shuffle import ContentShuffleDetector

        return (common_annotator_call(ContentShuffleDetector(), image, resolution=resolution, seed=seed), )

```
