
# Documentation
- Class name: Inference_Core_DensePosePreprocessor
- Category: ControlNet Preprocessors/Faces and Poses Estimators
- Output node: False

The DensePose Preprocessor node is designed to estimate human poses using the DensePose model and overlay them on images. It supports different models and color maps for visualization, providing a flexible approach to pose estimation and visualization.

# Input types
## Required
- image
    - The input image on which human poses will be estimated and visualized.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Optional
- model
    - Specifies the DensePose model used for pose estimation. The choice of model may affect the accuracy and performance of pose estimation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- cmap
    - Determines the color map used for visualizing the pose estimation results. Different color maps can be used to enhance the visual distinction of pose estimates.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
    - The resolution to which the input image is resized before pose estimation. Affects the level of detail in pose estimation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is an image with estimated and visualized human poses.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class DensePose_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types(
            model=(["densepose_r50_fpn_dl.torchscript", "densepose_r101_fpn_dl.torchscript"], {"default": "densepose_r50_fpn_dl.torchscript"}),
            cmap=(["Viridis (MagicAnimate)", "Parula (CivitAI)"], {"default": "Viridis (MagicAnimate)"})
        )

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Faces and Poses Estimators"

    def execute(self, image, model, cmap, resolution=512):
        from controlnet_aux.densepose import DenseposeDetector
        model = DenseposeDetector \
                    .from_pretrained(filename=model) \
                    .to(model_management.get_torch_device())
        return (common_annotator_call(model, image, cmap="viridis" if "Viridis" in cmap else "parula", resolution=resolution), )

```
