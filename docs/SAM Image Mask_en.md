# Documentation
- Class name: WAS_SAM_Image_Mask
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `sam_image_mask` method of the WAS_SAM_Image_Mask node aims to apply a semantic-aware segmentation model to an input image, generating a corresponding mask. It leverages the SAM (Semantic Aware Masking) model to predict a segmentation, then uses that segmentation to create a mask overlay on the original image. This method is critical for applications requiring identification and isolation of specific regions in an image for further analysis or manipulation.

# Input types
## Required
- sam_model
    - The `sam_model` parameter is critical, as it represents the semantic-aware segmentation model that will be used to process the input image. This is a key component that determines the quality and accuracy of the generated mask.
    - Comfy dtype: SAM_MODEL
    - Python dtype: torch.nn.Module
- sam_parameters
    - The `sam_parameters` parameter contains the points and labels required by the SAM model to perform segmentation. This is a critical input that directly influences the outcome of the segmentation process.
    - Comfy dtype: SAM_PARAMETERS
    - Python dtype: Dict[str, Any]
- image
    - The `image` parameter is the input image that will be processed by the SAM model to generate a mask. It is the primary data source for the node's operation, and its format can significantly affect the segmentation result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The output `image` is the original input image with the predicted mask overlay applied. It represents the visual result of the semantic-aware segmentation process, allowing direct visual inspection of the masked regions.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The output `mask` is the binary representation of the segmentation mask, highlighting the regions identified by the SAM model. It is important for applications requiring more precise manipulation or analysis of specific image regions.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class WAS_SAM_Image_Mask:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        return {'required': {'sam_model': ('SAM_MODEL',), 'sam_parameters': ('SAM_PARAMETERS',), 'image': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE', 'MASK')
    FUNCTION = 'sam_image_mask'
    CATEGORY = 'WAS Suite/Image/Masking'

    def sam_image_mask(self, sam_model, sam_parameters, image):
        image = tensor2sam(image)
        points = sam_parameters['points']
        labels = sam_parameters['labels']
        from segment_anything import SamPredictor
        device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        sam_model.to(device=device)
        predictor = SamPredictor(sam_model)
        predictor.set_image(image)
        (masks, scores, logits) = predictor.predict(point_coords=points, point_labels=labels, multimask_output=False)
        sam_model.to(device='cpu')
        mask = np.expand_dims(masks, axis=-1)
        image = np.repeat(mask, 3, axis=-1)
        image = torch.from_numpy(image)
        mask = torch.from_numpy(mask)
        mask = mask.squeeze(2)
        mask = mask.squeeze().to(torch.float32)
        return (image, mask)
```