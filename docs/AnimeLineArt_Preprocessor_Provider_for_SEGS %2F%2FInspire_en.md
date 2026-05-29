# Documentation
- Class name: AnimeLineArt_Preprocessor_Provider_for_SEGS
- Category: InspirePack/SEGS/ControlNet
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This type of node converts input images into anime-style line drawings, which is essential for stylizing visual effects consistently with anime aesthetics. It harnesses machine learning models to generate detailed, expressive line art from source images, enhancing the creative process in artistic generation tasks.

# Input types
## Required
- image
- The image parameter is required because it serves as the source for the derived anime line drawing. The quality and resolution of the input image directly affect the detail and accuracy of the generated line art.
    - Comfy dtype: image
    - Python dtype: PIL.Image or numpy.ndarray
## Optional
- mask
- The mask parameter is optional but can refine preprocessing by specifying which image regions should be prioritized or excluded during the line art conversion.
    - Comfy dtype: mask
    - Python dtype: numpy.ndarray

# Output types
- SEGS_PREPROCESSOR
- The output of this node is the image converted into an anime line drawing. This is a key component when creating stylized content, as visual appeal and artistic quality are crucial.
    - Comfy dtype: image
    - Python dtype: numpy.ndarray

# Usage tips
- Infra type: GPU

# Source code
```
class AnimeLineArt_Preprocessor_Provider_for_SEGS:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {}}
    RETURN_TYPES = ('SEGS_PREPROCESSOR',)
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/SEGS/ControlNet'

    def doit(self):
        obj = AnimeLineArt_Preprocessor_wrapper()
        return (obj,)
```