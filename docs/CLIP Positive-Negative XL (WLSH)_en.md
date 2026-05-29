# Documentation
- Class name: WLSH_CLIP_Positive_Negative_XL
- Category: WLSH Nodes/conditioning
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

This node is designed to process and encode positive and negative image pairs for contrastive learning. It uses the CLIP model to extract visual features and align them with text descriptions, facilitating the creation of meaningful image-text associations.

# Input types
## Required
- width
Width is a key parameter that defines the horizontal resolution of input images. It is essential for the node to correctly process and adjust image dimensions, ensuring encoded features are extracted from the correct dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- height
Similar to width, height is an important parameter that specifies the vertical resolution of input images. It works together with width to ensure accurate image processing and feature encoding.
    - Comfy dtype: INT
    - Python dtype: int
- positive_g
The positive_g parameter is the text description associated with the positive image. It is essential for the node to create semantic connections between image content and text, which is crucial for the encoding process.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_g
negative_g is the text description for the negative image. This parameter is important because it provides the necessary contrast to the positive image, enhancing the node's ability to distinguish and learn from the two different image-text pairs.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- positive
The positive output contains the encoded features and metadata of the positive image. It is a key part of the node's output because it represents one aspect of the contrastive learning process.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Dict[str, Union[str, torch.Tensor]]]
- negative
The negative output corresponds to the positive output but is for the negative image. It is equally important because it provides the contrasting perspective necessary for effective contrastive learning.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Dict[str, Union[str, torch.Tensor]]]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
