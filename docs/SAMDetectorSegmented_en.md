# Documentation
- Class name: SAMDetectorSegmented
- Category: ImpactPack/Detector
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SAMDetectorSegmented node is designed to detect and segment objects in images using the SAM (Segmentation and Masking) model. It processes input images and segmentation prompts, generating a combined mask and a batch of individual masks, which are crucial for further analysis and manipulation within the ImpactPack framework.

# Input types
## Required
- sam_model
    - The SAM model parameter is critical because it defines the machine learning model to be used for segmentation tasks. It directly affects the node's ability to accurately detect and segment objects in the image.
    - Comfy dtype: SAM_MODEL
    - Python dtype: torch.nn.Module
- segs
    - The segs parameter contains segmentation prompts that guide the SAM model to detect specific regions in the image. It plays an important role in improving node performance by focusing the detection process on areas of interest.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]
- image
    - The image parameter is the input processed by the node. It is the main data source for segmentation and detection tasks and is a fundamental aspect of the node's functionality.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- detection_hint
    - The detection prompt parameter provides a way to refine the detection process. It allows specifying different detection strategies, which is crucial for optimizing node performance based on the characteristics of the input image.
    - Comfy dtype: COMBO['center-1', 'horizontal-2', 'vertical-2', 'rect-4', 'diamond-4', 'mask-area', 'mask-points', 'mask-point-bbox', 'none']
    - Python dtype: str
- dilation
    - The dilation parameter is used to control the expansion of detected masks. It may be important for adjusting the node's output to better fit the requirements of subsequent processing steps.
    - Comfy dtype: INT
    - Python dtype: int
- threshold
    - The threshold parameter determines the confidence level at which a detection is considered valid. It is a key factor in controlling the precision-recall balance in node operation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bbox_expansion
    - The bbox_expansion parameter allows expanding the bounding box used in detection. This can be useful for ensuring that the detected mask contains the entire object of interest.
    - Comfy dtype: INT
    - Python dtype: int
- mask_hint_threshold
    - The mask_hint_threshold parameter is used to set the sensitivity of mask hints. It affects how the node interprets and responds to the provided segmentation prompts, influencing the quality of segmentation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_hint_use_negative
    - The mask_hint_use_negative parameter specifies how negative mask hints should be used. It may significantly affect the node's ability to distinguish objects from the background in the image.
    - Comfy dtype: COMBO['False', 'Small', 'Outter']
    - Python dtype: str

# Output types
- combined_mask
    - The combined_mask output parameter represents the aggregated result of the segmentation process. It is a single mask containing all detected objects, providing an integrated view of the segmentation results.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- batch_masks
    - The batch_masks output parameter provides an array of individual masks corresponding to each detected object. This allows detailed analysis and manipulation of each object in the segmentation context.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
