# Documentation
- Class name: WAS_Image_Batch
- Category: WAS Suite/Image
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Batch node is designed to process and batch multiple images for further operations. It ensures all input images have matching dimensions, then merges them into a single tensor, facilitating efficient batch processing of image data.

# Input types
## Optional
- images_a
    - The 'images_a' parameter provides a set of images to be batched. It plays a crucial role in the node's operation, as it directly affects what will be processed.
    - Comfy dtype: IMAGE
    - Python dtype: Union[torch.Tensor, List[torch.Tensor]]
- images_b
    - The 'images_b' parameter is an optional image source for the batch. It is important because it allows additional images to be processed alongside 'images_a'.
    - Comfy dtype: IMAGE
    - Python dtype: Union[torch.Tensor, List[torch.Tensor]]
- images_c
    - The 'images_c' parameter is another optional image input, enhancing the node's flexibility to accommodate more image data for batch processing.
    - Comfy dtype: IMAGE
    - Python dtype: Union[torch.Tensor, List[torch.Tensor]]
- images_d
    - The 'images_d' parameter provides further optional image input capability, allowing the node to process a broader array of images in a single batch operation.
    - Comfy dtype: IMAGE
    - Python dtype: Union[torch.Tensor, List[torch.Tensor]]

# Output types
- image
    - The 'image' output represents the processed and concatenated image tensor. It is essential for downstream tasks requiring a unified batch of image data.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
