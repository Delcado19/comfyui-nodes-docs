# Documentation
- Class name: CannyEdgeMask
- Category: postprocessing/Masks
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

This type of node encapsulates the functionality of applying the Canny edge detection algorithm to the input image, generating a binary edge mask that highlights edges in the image according to the specified thresholds.

# Input types
## Required
- image
    - Input image to apply Canny edge detection. It is key to the node's operation as it is the main data processed by the algorithm to produce the edge mask.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- lower_threshold
    - The lower threshold parameter is crucial for controlling the sensitivity of edge detection. It works together with the upper threshold to determine which edges are strong enough to be included in the final edge mask.
    - Comfy dtype: INT
    - Python dtype: int
- upper_threshold
    - The upper threshold parameter, together with the lower threshold, plays an important role in defining the criteria for edge detection. It helps refine edges by including only those that meet or exceed this threshold.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- edge_mask
    - The output is a binary edge mask representing the edges detected by the Canny algorithm. This mask is very important as it is used for further image processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/EllangoK/ComfyUI-post-processing-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
