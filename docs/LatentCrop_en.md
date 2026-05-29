# Documentation
- Class name: LatentCrop
- Category: latent/transform
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LatentCrop node is designed to manipulate and extract specific regions from a larger latent space representation. It plays a key role in focusing data attention on relevant areas for further processing or analysis, thereby enhancing the efficiency and precision of subsequent operations.

# Input types
## Required
- samples
    - The “samples” parameter is the core input of the LatentCrop node, representing the latent space data to be cropped. It is crucial for the node's operation as it determines the source material for the cropping process.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- width
    - The “width” parameter specifies the desired width of the cropping region in the latent space. It is a key determinant of the output size, directly affecting the extent of the extracted data.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The “height” parameter defines the desired height of the cropping region in the latent space. Together with “width”, it forms the dimensions of the final output, focusing the node's functionality on a specific portion of the data.
    - Comfy dtype: INT
    - Python dtype: int
- x
    - The “x” parameter sets the horizontal starting point of the cropping operation within the latent space. It is crucial in defining the exact position where data extraction begins.
    - Comfy dtype: INT
    - Python dtype: int
- y
    - The “y” parameter determines the vertical starting point of the cropping operation within the latent space. It works in coordination with the “x” parameter to precisely define the starting coordinates of the crop.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- cropped_samples
    - The “cropped_samples” output contains the result of the latent space data after the cropping operation. It represents a refined portion of the original data, adjusted according to the specified size and position parameters.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
