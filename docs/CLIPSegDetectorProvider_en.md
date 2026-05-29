# Documentation
- Class name: CLIPSegDetectorProvider
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The CLIPSegDetectorProvider node aims to create a bounding box detector based on the CLIPSeg model. It processes input text and image data to generate bounding boxes around objects of interest in an image. This node is particularly suitable for applications that require object detection functionality guided by text prompts.

# Input types
## Required
- text
    - The text parameter is crucial for guiding the detection process by providing a textual description of the objects to detect. It plays a key role in the accuracy and relevance of the generated bounding boxes.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- blur
    - The blur parameter adjusts the amount of blur to apply to the image, which may affect detection accuracy. It is an optional parameter that allows fine-tuning the detection process based on image characteristics.
    - Comfy dtype: FLOAT
    - Python dtype: float
- threshold
    - The threshold parameter determines the cutoff point for object detection. It is an optional input that can be used to control the sensitivity of detection, influencing which objects are identified as relevant.
    - Comfy dtype: FLOAT
    - Python dtype: float
- dilation_factor
    - The dilation factor is used to expand the boundaries of detected objects. It is an optional parameter that can enhance detection of larger or more dispersed objects in the image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- BBOX_DETECTOR
    - The output of CLIPSegDetectorProvider is a BBOX_DETECTOR object that contains the logic for detecting and generating bounding boxes around objects in an image based on the provided text prompts.
    - Comfy dtype: BBOX_DETECTOR
    - Python dtype: BBoxDetectorBasedOnCLIPSeg

# Usage tips
- Infra type: GPU

# Source code
```
class CLIPSegDetectorProvider:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text': ('STRING', {'multiline': False}), 'blur': ('FLOAT', {'min': 0, 'max': 15, 'step': 0.1, 'default': 7}), 'threshold': ('FLOAT', {'min': 0, 'max': 1, 'step': 0.05, 'default': 0.4}), 'dilation_factor': ('INT', {'min': 0, 'max': 10, 'step': 1, 'default': 4})}}
    RETURN_TYPES = ('BBOX_DETECTOR',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, text, blur, threshold, dilation_factor):
        if 'CLIPSeg' in nodes.NODE_CLASS_MAPPINGS:
            return (core.BBoxDetectorBasedOnCLIPSeg(text, blur, threshold, dilation_factor),)
        else:
            print("[ERROR] CLIPSegToBboxDetector: CLIPSeg custom node isn't installed. You must install biegert/ComfyUI-CLIPSeg extension to use this node.")
```