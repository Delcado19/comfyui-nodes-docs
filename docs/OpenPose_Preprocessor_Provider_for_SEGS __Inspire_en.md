
# Documentation
- Class name: OpenPose_Preprocessor_Provider_for_SEGS __Inspire
- Category: InspirePack/SEGS/ControlNet
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The OpenPose Preprocessor Provider (SEGS) node provides a preprocessor using OpenPose for SEGS (semantic segmentation). This node is capable of detecting and processing human hands, bodies, and faces in images. It allows adjusting detection functions and image resolution scaling to prepare images for further processing or analysis.

# Input types
## Required
- detect_hand
    - Enable or disable hand detection in images. This affects the node's ability to recognize and process hand-related features.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- detect_body
    - Enable or disable body detection in images. This affects the node's ability to recognize and process body-related features.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- detect_face
    - Enable or disable face detection in images. This affects the node's ability to recognize and process face-related features.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- resolution_upscale_by
    - Adjust the image resolution by a specified upscaling factor. This affects the sharpness and detail of the processed image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- segs_preprocessor
    - Provide a preprocessed image object specifically tailored for SEGS applications, which can be used for semantic segmentation tasks.
    - Comfy dtype: SEGS_PREPROCESSOR
    - Python dtype: OpenPose_Preprocessor_wrapper


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class OpenPose_Preprocessor_Provider_for_SEGS:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "detect_hand": ("BOOLEAN", {"default": True, "label_on": "enable", "label_off": "disable"}),
                "detect_body": ("BOOLEAN", {"default": True, "label_on": "enable", "label_off": "disable"}),
                "detect_face": ("BOOLEAN", {"default": True, "label_on": "enable", "label_off": "disable"}),
                "resolution_upscale_by": ("FLOAT", {"default": 1.0, "min": 0.5, "max": 100, "step": 0.1}),
            }
        }
    RETURN_TYPES = ("SEGS_PREPROCESSOR",)
    FUNCTION = "doit"

    CATEGORY = "InspirePack/SEGS/ControlNet"

    def doit(self, detect_hand, detect_body, detect_face, resolution_upscale_by):
        obj = OpenPose_Preprocessor_wrapper(detect_hand, detect_body, detect_face, upscale_factor=resolution_upscale_by)
        return (obj, )

```
