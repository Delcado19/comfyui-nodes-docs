# Documentation
- Class name: EmptyLatentImage
- Category: latent
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

EmptyLatentImage node is designed to generate an empty latent space representation. It serves as a placeholder for images in latent space, providing a structured tensor filled with zeros that can be used as a starting point for further image generation processes.

# Input types
## Required
- width
    - The width parameter defines the width of the latent image. It is crucial for setting the horizontal resolution of the generated latent space and plays an important role in determining the overall structure of the image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter specifies the height of the latent image. It is essential for establishing the vertical resolution of the latent space and is a key factor in the final dimensions of the image.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- batch_size
    - The batch_size parameter determines the number of latent images generated at once. It is important for controlling the efficiency of the image generation process, especially when handling large amounts of data.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- samples
    - The samples output provides the generated latent space representation. It is a zero tensor that serves as the basis for subsequent image processing or generation tasks.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
