
# Documentation
- Class name: M-LSDPreprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False

M-LSD Preprocessor node is used to extract line segments from images using the M-LSD (Multiple Line Segment Detector) model. It processes images to detect and delineate line structures, which is essential for various computer vision tasks that require understanding of geometric shapes and boundaries.

# Input types
## Required
- image
    - Input image that requires line segment detection processing.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray

## Optional
- score_threshold
    - Threshold defining the confidence of line segment detection. Higher values result in fewer but more reliable line segments.
    - Comfy dtype: FLOAT
    - Python dtype: float
- dist_threshold
    - Distance threshold for separating line segments. Smaller values lead to finer segmentation of closely spaced lines.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resolution
    - Specifies the resolution to resize the input image before processing. Affects the scale of detected line segments.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Outputs an image with overlaid or highlighted detected line segments, facilitating further processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class MLSD_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types(
            score_threshold = ("FLOAT", {"default": 0.1, "min": 0.01, "max": 2.0, "step": 0.01}),
            dist_threshold = ("FLOAT", {"default": 0.1, "min": 0.01, "max": 20.0, "step": 0.01})
        )

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Line Extractors"

    def execute(self, image, score_threshold, dist_threshold, resolution=512, **kwargs):
        from controlnet_aux.mlsd import MLSDdetector

        model = MLSDdetector.from_pretrained().to(model_management.get_torch_device())
        out = common_annotator_call(model, image, resolution=resolution, thr_v=score_threshold, thr_d=dist_threshold)
        return (out, )

```
