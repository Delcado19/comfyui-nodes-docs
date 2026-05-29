# Documentation
- Class name: From_SEG_ELT
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The From_SEG_ELT node is designed to process and convert SEG_ELT objects into a structured format containing images, masks, and various metadata. It plays a critical role in preparing data for further analysis and manipulation within the ImpactPack utility suite.

# Input types
## Required
- seg_elt
    - The seg_elt parameter is essential as it represents the core input to the node. It contains the image data and associated metadata used for processing. The node's functionality relies heavily on the integrity and format of the seg_elt input.
    - Comfy dtype: SEG_ELT
    - Python dtype: SEG_ELT

# Output types
- seg_elt
    - The seg_elt output is the original SEG_ELT object passed through the node, potentially enhanced or modified during processing.
    - Comfy dtype: SEG_ELT
    - Python dtype: SEG_ELT
- cropped_image
    - The cropped_image output provides a tensor representation of the image data, which is essential for machine learning models requiring tensor input format.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- cropped_mask
    - The cropped_mask output is a tensor depicting regions of interest within the image, a critical component for segmentation tasks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- crop_region
    - The crop_region output specifies the coordinates and dimensions of the cropped area within the image, essential for understanding the spatial context of the data.
    - Comfy dtype: SEG_ELT_crop_region
    - Python dtype: Tuple[int, int, int, int]
- bbox
    - The bbox output provides bounding box coordinates of objects of interest within the image, crucial for object detection and localization tasks.
    - Comfy dtype: SEG_ELT_bbox
    - Python dtype: List[int]
- control_net_wrapper
    - The control_net_wrapper output encapsulates additional control information or parameters that may be required for advanced processing or analysis.
    - Comfy dtype: SEG_ELT_control_net_wrapper
    - Python dtype: Any
- confidence
    - The confidence output reflects the certainty of the segmentation or classification result, important for assessing the reliability of model outputs.
    - Comfy dtype: FLOAT
    - Python dtype: float
- label
    - The label output assigns a classification identifier to the processed data, essential for classification and annotation purposes.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
