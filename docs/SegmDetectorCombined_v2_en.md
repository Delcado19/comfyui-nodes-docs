# Documentation
- Class name: SegmDetectorCombined
- Category: ImpactPack/Detector
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SegmDetectorCombined node aims to seamlessly integrate segmentation and detection functions. It uses a segmentation detector to process an image and generate a binary mask to distinguish objects of interest from the background. This node is essential for applications requiring precise localization and segmentation, such as in autonomous driving systems or medical imaging.

# Input types
## Required
- segm_detector
    - The segm_detector parameter is critical because it represents the core model that performs segmentation and detection tasks. It is essential for the node's operation because it directly affects the quality and accuracy of the generated mask.
    - Comfy dtype: SEGM_DETECTOR
    - Python dtype: torch.nn.Module
- image
    - The image parameter is the input processed by the node. It is a basic component because all operations of the node revolve around analyzing and manipulating this image to produce the desired mask.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- threshold
    - The threshold parameter is used to control the sensitivity of detection. It plays an important role in determining which objects are recognized and included in the final mask, thus affecting the node's output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- dilation
    - The dilation parameter allows expanding the detected object boundaries. It is important in refining the mask edges, especially useful in scenarios where precise boundary delineation is not critical.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASK
    - The MASK output is the main result of the SegmDetectorCombined node. It is a binary mask that marks the segmentation of objects of interest from the rest of the image, which is crucial for downstream processing tasks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
