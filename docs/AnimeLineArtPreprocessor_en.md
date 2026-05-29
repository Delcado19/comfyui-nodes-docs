
# Documentation
- Class name: AnimeLineArtPreprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False

The AnimeLineArtPreprocessor node is specifically designed for extracting line art from anime images. It uses a specialized model to process the image and enhance its line art features, making it suitable for application scenarios that require clear and distinct line drawings.

# Input types
## Required
- image
    - The input image to be processed for line art extraction. This parameter is crucial as it determines the quality and characteristics of the output line art.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Optional
- resolution
    - Specifies the resolution of the output image. Higher resolution may result in more detailed line art, but it may also increase processing time.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The processed image with enhanced line art features. This output is ideal for further artistic creation or analysis applications.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class AnimeLineArt_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types()

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Line Extractors"

    def execute(self, image, resolution=512, **kwargs):
        from controlnet_aux.lineart_anime import LineartAnimeDetector

        model = LineartAnimeDetector.from_pretrained().to(model_management.get_torch_device())
        out = common_annotator_call(model, image, resolution=resolution)
        del model
        return (out, )

```
