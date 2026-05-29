# Documentation
- Class name: LDSRUpscale
- Category: Flowty LDSR
- Output node: False
- Repo Ref: https://github.com/flowtyone/ComfyUI-Flowty-LDSR.git

This node class encapsulates advanced functionality for performing super-resolution on images using the LDSR model to increase image resolution, thereby enhancing image quality. It aims to improve visual fidelity and detail without compromising the fundamental content of the image.

# Input types
## Required
- upscale_model
    - The upscale_model parameter is critical as it defines the underlying model the node will use to perform the super-resolution task. This is essential for the node's proper functionality and producing accurate results.
    - Comfy dtype: UPSCALE_MODEL
    - Python dtype: str
- images
    - The images parameter is the primary input the node operates on, representing the images that need to be upscaled. Its role is crucial as the quality and type of input directly affect the appearance of the output and the effectiveness of the super-resolution process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
## Optional
- steps
    - The steps parameter affects the number of iterations the model performs during the upscaling process. It is a balancing factor between output quality and required computational resources. More steps generally yield better results but at a higher computational cost.
    - Comfy dtype: COMBO[25, 50, 100, 250, 500, 1000]
    - Python dtype: int
- pre_downscale
    - The pre_downscale parameter determines the downscaling ratio applied to the input image before the super-resolution process. This is particularly useful for managing computational load and memory usage, especially for very high-resolution images.
    - Comfy dtype: COMBO[None, 1/2, 1/4]
    - Python dtype: str
- post_downscale
    - The post_downscale parameter determines the downscaling operation after super-resolution is applied. It helps control the final output size and can be used to optimize the output for different use cases or requirements.
    - Comfy dtype: COMBO[None, Original Size, 1/2, 1/4]
    - Python dtype: str
- downsample_method
    - The downsample_method parameter specifies the downsampling technique used when reducing image size before or after the super-resolution process. It affects the quality of the resized image, with Lanczos generally providing better results but at a higher computational cost.
    - Comfy dtype: COMBO[Nearest, Lanczos]
    - Python dtype: str

# Output types
- images
    - The output images are the result of the super-resolution process, showcasing enhanced details and improved visual fidelity. They are the primary output of the node, directly reflecting the effectiveness of the upscaling model and the parameters used.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/flowtyone/ComfyUI-Flowty-LDSR)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
