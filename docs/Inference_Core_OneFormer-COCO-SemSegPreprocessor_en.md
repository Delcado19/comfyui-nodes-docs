
# Documentation
- Class name: Inference_Core_OneFormer-COCO-SemSegPreprocessor
- Category: ControlNet Preprocessors/Semantic Segmentation
- Output node: False

This node is specifically designed for semantic segmentation tasks using the OneFormer model, particularly models trained on the COCO dataset. It preprocesses images for semantic segmentation, leveraging a pre-trained OneFormer model to analyze the input image and segment it into distinct semantic categories.

# Input types
## Required
- image
    - Input image requiring semantic segmentation. This image will be processed by the OneFormer model to identify and classify different semantic elements within the image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- resolution
    - The resolution parameter specifies the desired output resolution of the segmented image. It affects the granularity and quality of the semantic segmentation performed by the OneFormer model.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is a semantically segmented image, where each pixel is classified into one of the semantic categories defined by the COCO dataset.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


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
