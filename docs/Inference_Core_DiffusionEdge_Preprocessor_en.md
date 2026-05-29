
# Documentation
- Class name: Inference_Core_DiffusionEdge_Preprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node aims to preprocess images by applying a diffusion edge detection algorithm for subsequent processing. It enhances edges in images based on the specified environment and patch batch size, suitable for tasks requiring detailed edge information, such as line extraction in control networks.

# Input types
## Required
- image
    - Input image to be processed through the diffusion edge detection algorithm.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- environment
    - Specifies the environment settings for the edge detection model, affecting the model's behavior and the resulting edge enhancement effect.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- patch_batch_size
    - Determines the number of image patches processed simultaneously, affecting execution speed and memory usage.
    - Comfy dtype: INT
    - Python dtype: int
- resolution
    - The resolution to which the input image is adjusted before processing, affecting the detail level of detected edges.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The processed image after edge enhancement, available for further processing or visualization.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


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
