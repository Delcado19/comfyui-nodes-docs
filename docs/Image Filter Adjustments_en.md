# Documentation
- Class name: WAS_Image_Filters
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Filters node is designed to apply a comprehensive set of image processing filters to an input image to enhance or modify its visual characteristics. It provides functionality including adjusting brightness, contrast, and saturation, as well as applying sharpening, blurring, edge enhancement, and detail enhancement effects. The purpose of this node is to offer a versatile image processing tool that can be used for a wide range of applications, from simple adjustments to more complex visual transformations.

# Input types
## Required
- image
    - The 'image' parameter is the primary input to the node, representing the image data that will undergo filtering. It is critical because it determines the base content upon which all subsequent enhancements and modifications will be applied. The quality and format of the input image directly affect the execution of the node and the appearance of the final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- brightness
    - The 'brightness' parameter allows the user to adjust the overall brightness of the image. It is important because it can enhance visibility in low-light conditions or create stylized effects. The value of this parameter directly affects the node's output, with higher values increasing brightness and lower values decreasing it.
    - Comfy dtype: FLOAT
    - Python dtype: float
- contrast
    - The 'contrast' parameter is used to modify the color or tonal differences between parts of the image. It plays a significant role in making images look more vivid or reducing color intensity for a softer appearance. This adjustment can significantly alter the visual impact of the final image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- saturation
    - The 'saturation' parameter controls the intensity of colors in the image. It is essential for creating more colorful and rich images or producing more desaturated, vintage visual effects. The level of saturation can greatly influence the emotional response to the image and its overall aesthetic appeal.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sharpness
    - The 'sharpness' parameter is responsible for enhancing edges within the image, making them more defined. It is important for improving image clarity, especially useful when an image appears blurry or out of focus. Increasing sharpness can make details more prominent.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blur
    - The 'blur' parameter applies a blur effect to the image, which can be used to create a sense of depth or intentionally soften the image. It is important in scenes where a less sharp appearance is desired, such as for aesthetic purposes or to reduce image noise.
    - Comfy dtype: INT
    - Python dtype: int
- gaussian_blur
    - The 'gaussian_blur' parameter applies a Gaussian blur to the image, a smoothing technique that reduces detail and noise. It is particularly useful for creating a smooth, blurred appearance, controlled by the radius of the blur effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- edge_enhance
    - The 'edge_enhancement' parameter is used to emphasize edges within the image, making them more prominent. It plays a significant role in highlighting details and can be used creatively to alter the visual style of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- detail_enhance
    - The 'detail_enhancement' parameter, when set to true, applies a detail enhancement filter to the image. This can make subtle details more visible, particularly useful for images requiring higher clarity and definition.
    - Comfy dtype: COMBO['false', 'true']
    - Python dtype: Union[str, Literal['false', 'true']]

# Output types
- output_image
    - The 'output_image' parameter represents the processed image after all specified filters have been applied. It is the highest expression of the node's functionality, containing the results of the image processing pipeline. This output is important because it is the primary deliverable of the node, reflecting the collective impact of all adjustments.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
