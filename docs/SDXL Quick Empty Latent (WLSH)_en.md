# Documentation
- Class name: WLSH_SDXL_Quick_Empty_Latent
- Category: WLSH Nodes/latent
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The 'generate' method of the WLSH_SDXL_Quick_Empty_Latent node is responsible for creating an empty latent space representation of an image. It operates by accepting image resolution and direction parameters, then generates a latent tensor filled with zeros. This latent tensor is used in the image generation pipeline for further processing or analysis, providing a base structure that can be modified to represent various image features.

# Input types
## Required
- resolution
    - The 'resolution' parameter defines the size of the image for which the latent space is to be generated. It is a key determinant of the size and structure of the latent tensor, directly affecting the subsequent image generation process.
    - Comfy dtype: STR
    - Python dtype: str
- direction
    - The 'direction' parameter specifies the orientation of the image, which can be 'landscape' (horizontal) or 'portrait' (vertical). This affects how the width and height of the image are interpreted, and is therefore crucial for correctly generating the latent tensor.
    - Comfy dtype: STR
    - Python dtype: str
## Optional
- batch_size
    - The 'batch_size' parameter indicates the number of images to be processed in a single operation. It is an optional parameter that can be used to control processing efficiency, allowing multiple images to be processed simultaneously.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- latent
    - The 'latent' output provides the generated latent space tensor, which is the basis for image generation. It is a tensor filled with zeros that will be further manipulated to represent the desired image features.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- width
    - The 'width' output represents the adjusted width of the latent space, which is a multiple of 8. This value is important for understanding the dimensions of the generated latent tensor and is used in the image generation process.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' output represents the adjusted height of the latent space, also a multiple of 8. It is an important parameter of the latent tensor's dimensions and plays a role in the overall image generation workflow.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
