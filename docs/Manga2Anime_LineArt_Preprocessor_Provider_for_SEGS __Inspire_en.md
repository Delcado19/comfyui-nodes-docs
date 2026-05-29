
# Documentation
- Class name: Manga2Anime_LineArt_Preprocessor_Provider_for_SEGS __Inspire
- Category: InspirePack/SEGS/ControlNet
- Output node: False

This node provides a preprocessor specifically designed to convert manga line art for use in SEGS (Semantic Edge-Guided Synthesis) applications. It focuses on adapting manga-style illustrations into a format suitable for anime-style image generation or modification.

# Input types
## Required
This node has no required input parameters.

# Output types
- segs_preprocessor
    - The output is a preprocessor configured to convert manga line art into an anime-style format, ready for downstream processing or generation tasks within SEGS applications.
    - Comfy dtype: SEGS_PREPROCESSOR
    - Python dtype: AnimeLineArt_Preprocessor_wrapper


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Manga2Anime_LineArt_Preprocessor_Provider_for_SEGS:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {}}
    RETURN_TYPES = ("SEGS_PREPROCESSOR",)
    FUNCTION = "doit"

    CATEGORY = "InspirePack/SEGS/ControlNet"

    def doit(self):
        obj = Manga2Anime_LineArt_Preprocessor_wrapper()
        return (obj, )

```
