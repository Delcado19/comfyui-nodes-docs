# Documentation
- Class name: WAS_Image_Median_Filter
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Median_Filter node applies a median filter to the input image, a nonlinear operation that replaces each pixel with the median of surrounding pixels. This is highly useful for reducing image noise while preserving edges. The node is designed to process a batch of images, providing a robust solution for image preprocessing tasks.

# Input types
## Required
- image
    - The image parameter is the core input of the node, representing the image data to be processed. It is essential for node execution, as it determines the target of the median filtering operation. The quality and characteristics of the input image directly influence the result of the filtering process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- diameter
    - The diameter parameter specifies the size of the filter kernel used during median filtering. This is an important tuning parameter that affects the degree of noise reduction and preservation of image details. A larger diameter results in stronger noise suppression but may also lead to loss of finer details.
    - Comfy dtype: INT
    - Python dtype: int
- sigma_color
    - The sigma_color parameter defines the sensitivity of the filter to color variations within the image. This is a key parameter controlling the color aspect of the filtering process, allowing adjustments based on specific characteristics of the input image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sigma_space
    - The sigma_space parameter controls the sensitivity of the filter to spatial variations within the image. It is crucial for fine-tuning the spatial aspect of median filtering, ensuring the operation adapts to the content and structure of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output_image
    - output_image is the result of applying the median filter to the input image. It represents the processed image with reduced noise and preserved edges, suitable for further analysis or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
