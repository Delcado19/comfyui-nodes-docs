# Documentation
- Class name: DWPreprocessor_Provider_for_SEGS
- Category: InspirePack/SEGS/ControlNet
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The DWPreprocessor_Provider_for_SEGS class facilitates preprocessing for semantic segmentation tasks using advanced pose estimation techniques. It integrates with the ComfyUI platform, enhancing segmentation accuracy by detecting and processing key features such as hands, body, and face. By providing detailed and refined input to segmentation models, this node improves the quality of output segmentations and contributes to the overall image analysis workflow.

# Input types
## Required
- detect_hand
    - This parameter controls whether hand detection is enabled during the preprocessing stage. Enabling this feature can significantly improve segmentation accuracy by identifying and processing hand-related features.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- detect_body
    - This parameter enables or disables body detection during preprocessing. Body detection is critical for semantic segmentation as it helps identify the overall structure and layout of the image, which is essential for accurate segmentation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- detect_face
    - The facial detection parameter allows identification and processing of facial features during the preprocessing stage. This is particularly useful for applications where facial features are a key component of the segmentation task.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- resolution_upscale_by
    - This parameter adjusts the resolution of the input image by a specified scaling factor. Upscaling can enhance image detail and clarity, potentially leading to better segmentation results.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- SEGS_PREPROCESSOR
    - The output of this node is a dictionary containing preprocessed image data, now ready for semantic segmentation. Preprocessing includes detection of hands, body, and face, and may also involve resolution upscaling, all of which contribute to improved segmentation quality.
    - Comfy dtype: DICTIONARY
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class DWPreprocessor_Provider_for_SEGS:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'detect_hand': ('BOOLEAN', {'default': True, 'label_on': 'enable', 'label_off': 'disable'}), 'detect_body': ('BOOLEAN', {'default': True, 'label_on': 'enable', 'label_off': 'disable'}), 'detect_face': ('BOOLEAN', {'default': True, 'label_on': 'enable', 'label_off': 'disable'}), 'resolution_upscale_by': ('FLOAT', {'default': 1.0, 'min': 0.5, 'max': 100, 'step': 0.1})}}
    RETURN_TYPES = ('SEGS_PREPROCESSOR',)
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/SEGS/ControlNet'

    def doit(self, detect_hand, detect_body, detect_face, resolution_upscale_by):
        obj = DWPreprocessor_wrapper(detect_hand, detect_body, detect_face, upscale_factor=resolution_upscale_by, bbox_detector='yolox_l.onnx', pose_estimator='dw-ll_ucoco_384_bs5.torchscript.pt')
        return (obj,)
```