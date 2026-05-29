
# Documentation
- Class name: OneFormer-ADE20K-SemSegPreprocessor
- Category: ControlNet Preprocessors/Semantic Segmentation
- Output node: False

The OneFormer ADE20K Segmentor node is dedicated to semantic segmentation tasks and uses a OneFormer model pre‑trained on the ADE20K dataset. This node processes an input image, performs semantic segmentation, and identifies and classifies each pixel according to the predefined categories of the ADE20K dataset.

# Input types
## Required
- image
- The input image that requires semantic segmentation. The OneFormer model will process this image to identify and classify each pixel.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- resolution
- The resolution to which the input image is resized before processing. This affects the level of detail in the segmentation output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
- The output of the semantic segmentation process. This is an image where each pixel is assigned to a specific category defined by the ADE20K dataset.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class OneFormer_ADE20K_SemSegPreprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types()

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "semantic_segmentate"

    CATEGORY = "ControlNet Preprocessors/Semantic Segmentation"

    def semantic_segmentate(self, image, resolution=512):
        from controlnet_aux.oneformer import OneformerSegmentor

        model = OneformerSegmentor.from_pretrained(filename="250_16_swin_l_oneformer_ade20k_160k.pth")
        model = model.to(model_management.get_torch_device())
        out = common_annotator_call(model, image, resolution=resolution)
        del model
        return (out,)

```
