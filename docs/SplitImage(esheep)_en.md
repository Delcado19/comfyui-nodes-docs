# Documentation
- Class name: ImageSplitNode
- Category: util
- Output node: False
- Repo Ref: https://github.com/esheep/esheep_custom_nodes.git

This node aims to split a batch of images into smaller subsets by decomposing large image datasets into manageable chunks to facilitate processing. It enhances workflow by enabling parallel processing and can improve computational efficiency. The node maintains image integrity during the splitting process.

# Input types
## Required
- images
    - The input parameter 'images' is a set of image data that the node will process. It is essential to the node's operation as it serves as the primary input for the image splitting functionality. The quality and format of the images significantly impact subsequent processing and output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- split_images
    - The node's output consists of multiple image subsets, which are the result of the image splitting process. These subsets are ready for further processing and can be used in various downstream tasks such as feature extraction or model training.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/esheep/esheep_custom_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
