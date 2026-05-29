# Documentation
- Class name: InpaintWithModel
- Category: inpaint
- Output node: False
- Repo Ref: https://github.com/Acly/comfyui-inpaint-nodes

This node uses a deep learning model to perform image inpainting, effectively filling missing or masked regions in an image and generating content that blends with the surrounding areas. It adapts to different model architectures and ensures seamless integration of the output with the original image.

# Input types
## Required
- inpaint_model
    - The inpainting model is critical to the node's functionality, defining the specific deep learning architecture used to generate inpainted content. The model's architecture directly impacts the quality and accuracy of the inpainting results.
    - Comfy dtype: INPAINT_MODEL
    - Python dtype: PyTorchModel
- image
    - The input image is the primary data the node operates on, with the inpainting process aiming to preserve its overall structure and aesthetics while filling in missing portions. The image's quality and dimensions directly affect the inpainting results.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask defines the regions in the image that require inpainting. It is a critical parameter as it guides the model to focus on specific areas, ensuring the inpainting is targeted and relevant.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- output_image
    - The output image is the result of the inpainting process, where previously masked or missing regions are now filled with content that matches the surrounding areas. It represents the node's primary output and is essential for further image analysis or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/Acly/comfyui-inpaint-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
