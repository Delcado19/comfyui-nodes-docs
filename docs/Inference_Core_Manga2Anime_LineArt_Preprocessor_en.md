
# Documentation
- Class name: Inference_Core_Manga2Anime_LineArt_Preprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False

This node is specifically designed for preprocessing manga images to extract line art, transforming them into a format suitable for animation-style visual enhancement. It utilizes specialized models to detect and optimize manga line art, ensuring the output is optimized for subsequent animation-style rendering processes.

# Input types
## Required
- image
    - Input image that needs to be processed to extract manga line art. The image is transformed to highlight important line art, preparing it for animation-style rendering.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- resolution
    - Specifies the resolution of the output line art image, allowing control over the level of detail in the extracted lines.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The processed image with manga line art extracted, ready for further animation-style rendering.
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
