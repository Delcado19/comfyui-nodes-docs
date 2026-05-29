# Documentation
- Class name: EmptyLatentImagePresets
- Category: KJNodes
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The EmptyLatentImagePresets node is designed to generate presets for latent images. It receives parameters such as dimensions, inversion status, and batch size to produce a latent image array along with corresponding width and height.

# Input types
## Required
- dimensions
    - The size parameter specifies the dimensions of the latent images to be generated. It is crucial as it determines the spatial resolution of the output images.
    - Comfy dtype: STRING
    - Python dtype: str
- batch_size
    - The batch size parameter defines the number of latent images to generate in a single batch. It is important for optimizing computational resources when processing large amounts of data.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- invert
    - The inversion parameter allows users to swap the width and height dimensions of the latent images. This may be important in applications where image orientation matters.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- Latent
    - The latent parameter represents the generated latent image array. It is important as it forms the core output of the node's functionality.
    - Comfy dtype: ARRAY
    - Python dtype: torch.Tensor
- Width
    - The width parameter indicates the width of the generated latent images. This is important information for further image processing tasks.
    - Comfy dtype: INT
    - Python dtype: int
- Height
    - The height parameter indicates the height of the generated latent images. Together with the width, it provides the complete dimensions of the latent images.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
