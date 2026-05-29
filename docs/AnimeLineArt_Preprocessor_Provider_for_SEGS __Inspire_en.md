
# Documentation
- Class name: AnimeLineArt_Preprocessor_Provider_for_SEGS __Inspire
- Category: InspirePack/SEGS/ControlNet
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node provides a preprocessor specifically designed for anime line art in the SEGS framework. It helps prepare images for further processing or analysis. This preprocessor is especially suitable for handling anime-style line art, extracting and enhancing line features in images, and preparing them for subsequent segmentation or control network tasks.

# Input types
## Required
This node has no required input parameters. It is a standalone preprocessor provider that does not need external input to create a preprocessor instance.

# Output types
- segs_preprocessor
    - Outputs a preprocessor instance tailored for anime line art, ready for direct use in the SEGS framework. This preprocessor encapsulates specific image processing algorithms that efficiently handle and optimize anime-style line art.
    - Comfy dtype: SEGS_PREPROCESSOR
    - Python dtype: AnimeLineArt_Preprocessor_wrapper


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class AnimeLineArt_Preprocessor_Provider_for_SEGS:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {}}
    RETURN_TYPES = ("SEGS_PREPROCESSOR",)
    FUNCTION = "doit"

    CATEGORY = "InspirePack/SEGS/ControlNet"

    def doit(self):
        obj = AnimeLineArt_Preprocessor_wrapper()
        return (obj, )

```
