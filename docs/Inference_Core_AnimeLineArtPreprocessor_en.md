
# Documentation
- Class name: Inference_Core_AnimeLineArtPreprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False

This node is dedicated to preprocessing images to extract anime-style line art, using a specialized model to detect and enhance line art features in anime images. The node is designed for the ControlNet preprocessing workflow, focusing on converting input images into a format suitable for further anime-related image processing tasks.

# Input types
## Required
- image
- Input image that requires anime line art extraction processing. This image serves as the primary data input for the line art detection model, determining the quality and characteristics of the output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- resolution
- Specify the resolution of the output line art image, affecting the detail level and clarity of the extracted line art.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
- Image with anime-style line art extracted after processing, ready for subsequent processing stages.
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
