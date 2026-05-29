
# Documentation
- Class name: `Manga2Anime_LineArt_Preprocessor`
- Category: `ControlNet Preprocessors/Line Extractors`
- Output node: `False`

This node aims to preprocess images by extracting line art from comic images, converting them into a format suitable for anime-style rendering. It utilizes specialized models to detect and highlight line art, ensuring the output is optimized for direct use in further processing or anime-style visual projects.

# Input types
## Required
- **`image`**
    - The input image that requires comic line art extraction. This image undergoes transformation to highlight the line art, making it suitable for anime-style rendering.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- **`resolution`**
    - Specifies the resolution to which the input image needs to be scaled before line art extraction. This parameter ensures the output can be optimized for the desired visual quality.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- **`image`**
    - The image with the comic line art extracted after processing, presented in a format suitable for anime-style rendering.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class Manga2Anime_LineArt_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types()

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Line Extractors"

    def execute(self, image, resolution=512, **kwargs):
        from controlnet_aux.manga_line import LineartMangaDetector

        model = LineartMangaDetector.from_pretrained().to(model_management.get_torch_device())
        out = common_annotator_call(model, image, resolution=resolution)
        del model
        return (out, )

```
