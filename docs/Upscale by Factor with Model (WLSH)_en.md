# Documentation
- Class name: WLSH_Upscale_By_Factor_With_Model
- Category: WLSH Nodes/upscaling
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The `upscale` method of the WLSH_Upscale_By_Factor_With_Model node is designed to enhance the resolution of input images through a specified scaling factor. It uses a pretrained model to perform upsampling and provides method options such as 'nearest-exact', 'bilinear', or 'area' for the upsampling process. The node's functionality focuses on improving the visual quality and details of images, making it an important tool in image enhancement tasks.

# Input types
## Required
- upscale_model
- The parameter `upscale_model` is crucial for the node's operation as it specifies the pretrained model used to upsample the image. The choice of model can significantly affect the quality of upsampling and the node's execution efficiency.
    - Comfy dtype: UPSCALE_MODEL
    - Python dtype: torch.nn.Module
- image
- The parameter `image` represents the input image that the node will process. This is a fundamental input because all of the node's operations revolve around enhancing the resolution of this image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- upscale_method
- The parameter `upscale_method` determines the algorithm used to upsample the image. Different methods may result in varying levels of detail and quality in the upsampled image, affecting the final output's appearance.
    - Comfy dtype: COMBO['nearest-exact', 'bilinear', 'area']
    - Python dtype: str
- factor
- The parameter `factor` defines the scaling factor by which the input image will be upsampled. It is essential for controlling the final size of the image and directly affects the node's output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- upscaled_image
- The output `upscaled_image` represents the processed image with enhanced resolution. It is the primary result of the node's operation, demonstrating the effectiveness of the selected upsampling model and method.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
