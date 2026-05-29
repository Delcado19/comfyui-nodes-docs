# Documentation
- Class name: ImagePadForOutpaintMasked
- Category: image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The ImagePadForOutpaintMasked node is designed to extend the boundaries of an image, a process called outpainting. It does this by adding extra pixels that are intelligently computed to blend seamlessly with the original content. The node's functionality is particularly useful in scenarios where context beyond the image edges is important, such as in image editing or data augmentation tasks.

# Input types
## Required
- image
    - The image parameter is the main input of the node, representing the image that will be extended. It is essential for the node's operation because the entire process revolves around adding padding to this image. The quality of the final output heavily depends on the content of the original image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- left
    - The left parameter specifies the number of pixels to pad on the left side of the image. It plays an important role in determining the final dimensions of the extended image and the overall appearance of the outpainting area.
    - Comfy dtype: INT
    - Python dtype: int
- top
    - The top parameter determines the number of pixels to pad on the top of the image. It is an important input for controlling vertical padding and directly affects the height of the resulting image.
    - Comfy dtype: INT
    - Python dtype: int
- right
    - The right parameter sets the number of pixels to pad on the right side of the image. It is crucial for achieving the desired width of the extended image and affects the visual coherence of the outpainting area.
    - Comfy dtype: INT
    - Python dtype: int
- bottom
    - The bottom parameter determines the number of pixels to pad at the bottom of the image. It is a key factor in establishing the final height of the extended image and influences the overall appearance of the padded area.
    - Comfy dtype: INT
    - Python dtype: int
- feathering
    - The feathering parameter controls the smoothness of the transition between the original image and the padded area. It is especially important for creating a natural and seamless blend, enhancing the visual quality of the outpainting image.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- mask
    - The mask parameter is an optional input that defines a mask for the image. It is used to specify which areas of the image should be preserved during the outpainting process, ensuring those areas remain unchanged.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- new_image
    - The new_image output parameter represents the extended image with added padding. It is the main result of the node's operation, containing a seamless integration of the original image with the new padded areas.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- new_mask
    - The new_mask output parameter is the updated mask corresponding to the extended image. It is important for preserving the integrity of specific areas during the outpainting process and is especially useful when further image manipulation is needed.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
