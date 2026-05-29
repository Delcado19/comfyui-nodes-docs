
# Documentation
- Class name: OneFormer-COCO-SemSegPreprocessor
- Category: ControlNet Preprocessors/Semantic Segmentation
- Output node: False

The OneFormer COCO Segmentor node uses a pretrained OneFormer model trained on the COCO dataset to perform semantic segmentation on images. It aims to identify and delineate every semantic object in an image, thereby enhancing pixel‑level understanding of image content.

# Input types
## Required
- image
    - Input image for semantic segmentation. This parameter is critical because it directly affects the segmentation output, determining the objects and their boundaries in the image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- resolution
    - Resolution to which the input image is resized before segmentation. This parameter influences the level of detail in the segmentation output; higher resolution may yield more precise results.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Output of the semantic segmentation process, presented as an image where each pixel value corresponds to a semantic class.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [ImageToMask](../../Comfy/Nodes/ImageToMask.md)
    - [ControlNetApply](../../Comfy/Nodes/ControlNetApply.md)



## Source code
```python
class OneFormer_COCO_SemSegPreprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types()

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "semantic_segmentate"

    CATEGORY = "ControlNet Preprocessors/Semantic Segmentation"

    def semantic_segmentate(self, image, resolution=512):
        from controlnet_aux.oneformer import OneformerSegmentor

        model = OneformerSegmentor.from_pretrained(filename="150_16_swin_l_oneformer_coco_100ep.pth")
        model = model.to(model_management.get_torch_device())
        out = common_annotator_call(model, image, resolution=resolution)
        del model
        return (out,)

```
