# Documentation
- Class name: SeargeImage2ImageAndInpainting
- Category: UI_INPUTS
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

The SeargeImage2ImageAndInpainting node is designed to facilitate image-to-image conversion and inpainting tasks. It accepts parameters that define the denoising level and inpainting mask characteristics, and outputs a structured data flow suitable for further processing in an image processing workflow.

# Input types
## Required
- denoise
    - The 'denoise' parameter controls the level of denoising applied to the image. It is crucial for enhancing image quality by reducing unwanted noise while preserving important details.
    - Comfy dtype: FLOAT
    - Python dtype: float
- inpaint_mask_blur
    - The 'inpaint_mask_blur' parameter determines the blur radius of the inpainting mask, which is important for the smoothness of inpainted areas in the image.
    - Comfy dtype: INT
    - Python dtype: int
- inpaint_mask_mode
    - The 'inpaint_mask_mode' parameter selects the operation mode of the inpainting mask, affecting how the inpainting process is applied to the image.
    - Comfy dtype: UI.MASK_MODES
    - Python dtype: str
- data
    - The 'data' parameter is an optional input that allows users to provide an existing data flow for processing, enhancing the flexibility of the node's application.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: dict

# Output types
- data
    - The 'data' output is a structured data flow that encapsulates the results of the image-to-image conversion and inpainting process, ready for downstream tasks.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: dict

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
