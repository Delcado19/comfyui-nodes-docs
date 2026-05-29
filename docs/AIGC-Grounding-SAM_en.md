# Documentation
- Class name: AIGCImageRemoveBackgroundRembg
- Category: AIGC
- Output node: False
- Repo Ref: https://github.com/esheep/esheep_custom_nodes.git

The AIGCImageRemoveBackgroundRembg node is designed to seamlessly remove image backgrounds using advanced image segmentation techniques. It leverages the SAM (Segment Anything Model) and GroundingDINO models to achieve high‑quality background removal, providing users with clean foreground objects for further use.

# Input types
## Required
- image
    - The image parameter is crucial for the node's operation, as it is the source from which the background will be removed. The image's quality and format directly affect the node's execution and the accuracy of the generated mask.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- text
    - The text parameter guides the segmentation process, ensuring that the regions of interest are correctly identified and retained. It plays a key role in the node's ability to understand and process the image content.
    - Comfy dtype: STRING
    - Python dtype: str
- sam_model_name
    - The sam_model_name parameter specifies the pre‑trained SAM model used for segmentation. The choice of model can impact the node's performance and the quality of the segmentation results.
    - Comfy dtype: COMBO["sam_vit_h_4b8939.pth", "sam_vit_l_0b3195.pth", "sam_vit_b_01ec64.pth"]
    - Python dtype: str
- groundingdino_model_name
    - The groundingdino_model_name parameter determines the GroundingDINO model applied to identify regions of interest within the image. This parameter is essential for precise object detection and segmentation.
    - Comfy dtype: COMBO["GroundingDINO_SwinT_OGC", "GroundingDINO_SwinB"]
    - Python dtype: str
## Optional
- dino_box_threshold
    - The dino_box_threshold parameter sets the threshold for the output of the GroundingDINO model. It influences which regions the node considers for segmentation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- highest_confidence_mode
    - The highest_confidence_mode parameter controls the node's behavior in selecting segmentation masks based on confidence scores. It is an important factor in determining the final output quality.
    - Comfy dtype: INT
    - Python dtype: int
- return_index
    - The return_index parameter indicates which of the generated masks should be returned. It allows the user to choose the desired output from multiple segmentation results.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- new_image
    - The new_image output contains the processed image with the background removed, ready for further use or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output provides a binary representation of the segmentation, highlighting the areas that have been removed from the original image.
    - Comfy dtype: MASK
    - Python dtype: np.ndarray

# Usage tips
- Infra type: GPU

# Source code
```
class AIGCImageRemoveBackgroundRembg:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'text': ('STRING', {'multiline': False}), 'sam_model_name': (['sam_vit_h_4b8939.pth', 'sam_vit_l_0b3195.pth', 'sam_vit_b_01ec64.pth'],), 'groundingdino_model_name': (['GroundingDINO_SwinT_OGC', 'GroundingDINO_SwinB'],), 'dino_box_threshold': ('FLOAT', {'default': 0.3, 'min': -100.0, 'max': 100.0, 'step': 0.1}), 'highest_confidence_mode': ('INT', {'default': 0, 'min': 0, 'max': 1, 'step': 1}), 'return_index': ('INT', {'default': 0})}}
    RETURN_TYPES = ('IMAGE', 'MASK')
    FUNCTION = 'sam'
    CATEGORY = 'AIGC'

    def sam(self, image, text: str, sam_model_name: str, groundingdino_model_name: str, dino_box_threshold: float, highest_confidence_mode: int, return_index: int):
        (new_image, mask) = sam_with_groundingdino(image, text, sam_model_name, groundingdino_model_name, dino_box_threshold, bool(highest_confidence_mode), return_index)
        return (new_image, mask)
```