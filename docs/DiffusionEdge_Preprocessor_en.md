
# Documentation
- Class name: DiffusionEdge_Preprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The DiffusionEdge_Preprocessor node is designed to preprocess images for edge detection using a diffusion-based edge detection model to extract edge maps. It supports environment-specific model loading and adjustable tiling processing for performance optimization.

# Input types
## Required
- image
    - Input image that needs edge detection processing.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
## Optional
- environment
    - Specifies the environmental context of the edge detection model ('indoor','urban','natural'), affecting model behavior and output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- patch_batch_size
    - Determines the batch size for processing image tiles, affecting the speed and VRAM usage of the edge detection operation.
    - Comfy dtype: INT
    - Python dtype: int
- resolution
    - The resolution to which the input image is resized before edge detection, affecting the level of detail in the output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is an image representing the detected edges in the input image, suitable for further processing or visualization.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class DiffusionEdge_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types(
            environment=(["indoor", "urban", "natrual"], {"default": "indoor"}),
            patch_batch_size=("INT", {"default": 4, "min": 1, "max": 16})
        )

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Line Extractors"

    def execute(self, image, environment="indoor", patch_batch_size=4, resolution=512, **kwargs):
        install_deps()
        from controlnet_aux.diffusion_edge import DiffusionEdgeDetector

        model = DiffusionEdgeDetector \
            .from_pretrained(filename = f"diffusion_edge_{environment}.pt") \
            .to(model_management.get_torch_device())
        out = common_annotator_call(model, image, resolution=resolution, patch_batch_size=patch_batch_size)
        del model
        return (out, )

```
