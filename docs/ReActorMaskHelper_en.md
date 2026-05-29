
# Documentation
- Class name: ReActorMaskHelper
- Category: 🌌 ReActor
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ReActorMaskHelper node is designed to assist the mask processing within the ReActor framework. It is primarily used to combine, dilate, and optimize masks for use in face swapping or inpainting tasks. The node utilizes specific detection prompts and mask operation techniques to optimize the mask processing for better results.

# Input types
## Required
- image
    - The 'image' parameter is the main input for mask-related operations, serving as the basis for detection, manipulation, and conversion processes.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- swapped_image
    - This parameter represents the image after face swapping operation, which may require further mask processing or adjustment.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- bbox_model_name
    - Specifies the model name used for bounding box detection, influencing the initial steps of mask generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- bbox_threshold
    - Threshold for bounding box detection, determining the model's sensitivity in identifying potential regions of interest.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bbox_dilation
    - Indicates the dilation factor applied to bounding boxes, potentially expanding the area considered for mask application.
    - Comfy dtype: INT
    - Python dtype: int
- bbox_crop_factor
    - Defines the extent of cropping around detected bounding boxes, affecting the coverage area of the final mask.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bbox_drop_size
    - Minimum size for bounding boxes to be considered, filtering out detections that are too small.
    - Comfy dtype: INT
    - Python dtype: int
- sam_model_name
    - Model name used for SAM (Semantic Attention Mask) prediction, crucial for refining mask details.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sam_dilation
    - Dilation factor specifically for SAM prediction, adjusting mask boundaries for better fit or coverage.
    - Comfy dtype: INT
    - Python dtype: int
- sam_threshold
    - Threshold for SAM prediction, determining which masks to include based on confidence scores.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bbox_expansion
    - Specifies how much bounding boxes extend beyond their detection boundaries, affecting the area covered by the mask.
    - Comfy dtype: INT
    - Python dtype: int
- mask_hint_threshold
    - Threshold for generating mask prompts, used in processes that require pre-identification of mask regions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_hint_use_negative
    - Indicates whether to use negative prompts (areas not needing mask) during mask generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- morphology_operation
    - Specifies the type of morphological operation (e.g., dilation, erosion) applied to the mask, affecting its shape and boundaries.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- morphology_distance
    - Distance parameter for morphological operations, determining the extent of transformation.
    - Comfy dtype: INT
    - Python dtype: int
- blur_radius
    - Radius for mask blur, used to soften edges or blend the mask more seamlessly with the image.
    - Comfy dtype: INT
    - Python dtype: int
- sigma_factor
    - Factor for calculating the sigma value in Gaussian blur, affecting the smoothness of the mask edges.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- mask_optional
    - Optional mask input, can be used for additional mask operations or adjustments.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- IMAGE
    - Processed image after applying mask modifications, usable for further use or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK
    - Final mask generated or modified by the node, suitable for masking or compositing operations.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- MASK_PREVIEW
    - Preview of the mask, typically used for visualization or debugging purposes.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- SWAPPED_FACE
    - Image after face swapping operation, possibly including mask adjustments to improve integration.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Built-in or C extension class, unable to automatically detect source code
```
