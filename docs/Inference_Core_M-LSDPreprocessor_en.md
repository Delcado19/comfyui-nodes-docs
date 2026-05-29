
# Documentation
- Class name: Inference_Core_M-LSDPreprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False

The M-LSD preprocessor node is specifically used to extract line segments from images using the M-LSD (Multi-Level Line Segment Detector) model. It processes images to detect and depict line structures, aiding tasks that require understanding geometric shapes and structures in visual data.

# Input types
## Required
- image
    - Input image to be processed for line segment detection. It is the primary data for the M-LSD model's operation.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
## Optional
- score_threshold
    - Defines the confidence threshold for line segment detection. Lines with scores below this threshold are discarded, affecting the sensitivity of the detection process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- dist_threshold
    - Sets the distance threshold for separating line segments. This parameter helps distinguish closely arranged lines, affecting the granularity of detected lines.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resolution
    - Specifies the resolution for processing images. This affects the scale of detection and may influence line segment detection.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is an image annotated with detected line segments, visually showing the geometric structures identified by the M-LSD model.
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
