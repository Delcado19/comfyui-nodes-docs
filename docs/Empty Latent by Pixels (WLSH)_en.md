# Documentation
- Class name: WLSH_Empty_Latent_Image_By_Pixels
- Category: WLSH Nodes/latent
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

WLSH_Empty_Latent_Image_By_Pixels node's 'generate' method aims to create an empty latent image representation based on specified pixel dimensions and aspect ratio. It intelligently calculates the width and height of the latent image to fit the desired megapixels and orientation, ensuring dimensions are optimized for processing efficiency.

# Input types
## Required
- aspect
    - “aspect” parameter defines the aspect ratio of the latent image. It is crucial because it directly affects the shape and dimensions of the generated image, which in turn impacts subsequent processing and analysis stages.
    - Comfy dtype: STRING
    - Python dtype: str
- direction
    - “direction” parameter specifies whether the image is in landscape or portrait mode. This is important because it determines the orientation of the latent image, which is essential for certain applications requiring a specific orientation.
    - Comfy dtype: STRING
    - Python dtype: str
- megapixels
    - “megapixels” parameter sets the resolution of the latent image in megapixels. It is an important factor because it determines the level of detail in the image and the required computational resources.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- batch_size
    - “batch_size” parameter determines the number of images processed in a single iteration. It is important for optimizing computational efficiency and can be adjusted based on available resources.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- latent
    - “latent” output provides the generated latent image representation. It is a key component because it forms the basis for further image processing and analysis within the system.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- width
    - “width” output represents the calculated width of the latent image in pixels. It is important because it provides spatial dimension information required for image manipulation and display.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - “height” output represents the calculated height of the latent image in pixels. Together with the width, it is essential for understanding the overall size of the image for various applications.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
