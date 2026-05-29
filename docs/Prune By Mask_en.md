# Documentation
- Class name: PruneByMask
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

The PruneByMask node is designed to selectively filter images from a batch based on the quality of their associated masks. Specifically, it retains only those images whose masks have a mean pixel value meeting or exceeding a 0.5 threshold, ensuring subsequent processing focuses on images with sufficiently clear masks.

# Input types
## Required
- image
    - The images parameter represents the batch of images to be processed. This is a critical input, as the node's filtering operation depends entirely on the content of these images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The masks parameter corresponds to the associated masks for the images in the batch. The node evaluates the mean pixel value of these masks to determine which images to retain in the output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- filtered_images
    - The filtered_images output contains the subset of input images that passed the node's filtering criteria, based on the mean pixel value of their associated masks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/BadCafeCode/masquerade-nodes-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
