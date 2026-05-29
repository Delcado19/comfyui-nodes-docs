# Documentation
- Class name: SEGS_Classify
- Category: ImpactPack/HuggingFace
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SEGS_Classify node is designed to classify image segments using a pre-trained transformer model. It processes segments, evaluates whether they meet a certain condition based on scores from the classifier, and filters the segments into two categories: those that meet the condition and those that do not. This node plays a key role in segment-based image analysis, enabling classification of image content based on complex criteria.

# Input types
## Required
- classifier
    - The classifier parameter is critical to the node's operation, as it defines the pre-trained model used to classify segments. The effectiveness of classification directly depends on the quality and applicability of the classifier.
    - Comfy dtype: TRANSFORMERS_CLASSIFIER
    - Python dtype: transformers.pipeline
- segs
    - The segs parameter holds the image segments that need to be classified. This is a fundamental input, as all processing by the node revolves around these segments.
    - Comfy dtype: SEGS
    - Python dtype: List[Segment]
- preset_expr
    - The preset_expr parameter allows the user to select a predefined expression for classification or choose a manual expression. It determines the condition that will be used to classify the segments.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- manual_expr
    - When preset_expr is set to 'Manual expr', this parameter is used to input a custom expression for classifying segments. It provides flexibility for users to define their own classification criteria.
    - Comfy dtype: STRING
    - Python dtype: str
- ref_image_opt
    - The optional ref_image_opt parameter provides a reference image that can be used to crop segments if the segment's cropped_image attribute is unavailable. It enhances the node's functionality by providing an alternative source for segment images when needed.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Output types
- filtered_SEGS
    - The filtered_SEGS output contains the segments that meet the user-specified classification condition. It is a key result of the node's operation, representing the content filtered based on the classification criteria.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[Segment, List[Segment]]
- remained_SEGS
    - The remained_SEGS output includes the segments that do not meet the classification condition. It is a complementary result to filtered_SEGS, providing insight into segments that were not classified according to the specified criteria.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[Segment, List[Segment]]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
