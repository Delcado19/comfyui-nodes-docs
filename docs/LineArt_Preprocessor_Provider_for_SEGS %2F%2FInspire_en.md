# Documentation
- Class name: LineArt_Preprocessor_Provider_for_SEGS
- Category: InspirePack/SEGS/ControlNet
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node abstractly represents the process of generating line art from an input image by applying stylized transformations, focusing on enhancing edges and contours to create a more artistic presentation.

# Input types
## Required
- coarse
    - This parameter controls the level of detail in line art generation; 'Enable' results in more detailed, sharper output, while 'Disable' yields a less detailed representation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- SEGS_PREPROCESSOR
    - The output is a processed line art image, refined and stylized according to the input parameters, ready for further segmentation tasks.
    - Comfy dtype: NODE
    - Python dtype: LineArtPreprocessor

# Usage tips
- Infra type: GPU

# Source code
```
class LineArt_Preprocessor_Provider_for_SEGS:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'coarse': ('BOOLEAN', {'default': False, 'label_on': 'enable', 'label_off': 'disable'})}}
    RETURN_TYPES = ('SEGS_PREPROCESSOR',)
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/SEGS/ControlNet'

    def doit(self, coarse):
        obj = LineArt_Preprocessor_wrapper(coarse)
        return (obj,)
```