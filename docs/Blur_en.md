# Documentation
- Class name: BlurNode
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

The BlurNode class applies a Gaussian blur effect to images, simulating the soft-focus effect commonly used in photography and image processing. It uses the concept of a Gaussian kernel to smooth images, reducing the visibility of details and creating a more aesthetically pleasing visual effect.

# Input types
## Required
- image
    - The image parameter is the input image that the node will process. It is crucial because it is the primary data that the node operates on to achieve the blur effect. The quality and content of the image significantly affect the node's execution and the final result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- radius
    - The radius parameter defines the extent of the blur effect. It is crucial because it directly affects the size of the Gaussian kernel used for blurring, thereby influencing the degree of blur applied to the image.
    - Comfy dtype: INT
    - Python dtype: int
- sigma_factor
    - The sigma_factor parameter adjusts the standard deviation of the Gaussian kernel, allowing control over the smoothness of the blur. It plays an important role in fine-tuning the blur effect to meet specific visual requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- blurred_image
    - The blurred_image output parameter represents the processed image with the Gaussian blur effect applied. It is the result of the node's operation and reflects the modified visual appearance of the input image after blurring.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/BadCafeCode/masquerade-nodes-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
