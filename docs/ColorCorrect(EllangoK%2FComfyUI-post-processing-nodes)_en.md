# Documentation
- Class name: ColorCorrect
- Category: postprocessing/Color Adjustments
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

The ColorCorrect node is designed to adjust the color attributes of an image, enhancing its visual appeal and correcting color imbalances. It achieves the desired look by adjusting various aspects such as temperature, tint, brightness, contrast, saturation, and gamma, improving image quality and ensuring consistency across a set of images.

# Input types
## Required
- image
    - The image parameter is required because it is the primary input to the node's color correction process. It serves as the foundation for all adjustments, and its characteristics directly influence the final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- temperature
    - The temperature parameter adjusts the color tone of the image, simulating warmer or cooler color effects. It plays an important role in setting the mood and overall appearance of the image, contributing to the visual storytelling of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- hue
    - The tint parameter shifts the color spectrum of the image, allowing the dominant color to be changed without altering brightness or saturation. It affects the overall color balance of the image and can be used to match a desired aesthetic.
    - Comfy dtype: FLOAT
    - Python dtype: float
- brightness
    - The brightness parameter controls the overall brightness level of the image. By adjusting this parameter, the node can correct underexposed or overexposed issues, ensuring that the details of the image are clearly visible and well-balanced.
    - Comfy dtype: FLOAT
    - Python dtype: float
- contrast
    - The contrast parameter adjusts the difference between the brightest and darkest parts of the image, enhancing visual impact and depth. It is essential for making the image more prominent and eye-catching.
    - Comfy dtype: FLOAT
    - Python dtype: float
- saturation
    - The saturation parameter enhances or reduces the vibrancy of colors in the image. It is important for achieving the desired level of color richness and can significantly alter the mood of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- gamma
    - The gamma parameter adjusts the overall tonal range of the image, affecting the rendering of midtones and shadows. It is essential for achieving natural and visually pleasing color correction.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The output image is the result of the color correction process, reflecting all adjustments made to the input image. It represents the final product, showcasing enhanced visual appeal and corrected color balance.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/EllangoK/ComfyUI-post-processing-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
