# Documentation
- Class name: CR_AspectRatioForPrint
- Category: Comfyroll/Aspect Ratio
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_AspectRatioForPrint node is intended to calculate and adjust the size of an image or print based on a specified aspect ratio. It allows swapping dimensions and applying a scaling factor to achieve the desired output size, meeting various printing requirements.

# Input types
## Required
- width
    - The width parameter determines the horizontal size of the image or print. It is essential for maintaining aspect ratio and correctly scaling the image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the vertical size of the image or print. It works together with width to ensure aspect ratio is maintained.
    - Comfy dtype: INT
    - Python dtype: int
- aspect_ratio
    - Aspect ratio defines the proportional relationship between width and height. It is a key factor in calculating the final size.
    - Comfy dtype: STRING
    - Python dtype: str
- swap_dimensions
    - The swap_dimensions parameter allows users to swap width and height values when needed, providing flexibility in size adjustment.
    - Comfy dtype: STRING
    - Python dtype: str
- upscale_factor
    - upscale_factor is used to enlarge image size. It is an important parameter for high‑resolution printing or digital enlargement.
    - Comfy dtype: FLOAT
    - Python dtype: float
- prescale_factor
    - The prescale_factor parameter is applied before aspect‑ratio adjustment, allowing an initial scaling of the image size.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_size
    - The batch_size parameter specifies the number of images processed at once. It is crucial for efficiently handling large volumes of images.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- width
    - Output width is the horizontal size of the image or print after applying aspect ratio and scaling factors.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Output height is the vertical size of the image or print after applying aspect ratio and scaling factors.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_factor
    - upscale_factor output reflects the scaling factor used to enlarge image size.
    - Comfy dtype: FLOAT
    - Python dtype: float
- prescale_factor
    - prescale_factor output indicates the initial scaling factor applied before aspect‑ratio adjustment.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_size
    - batch_size output displays the number of images being processed in the current operation.
    - Comfy dtype: INT
    - Python dtype: int
- empty_latent
    - empty_latent output provides an empty latent representation for processed images, which can be used for further image processing tasks.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- show_help
    - show_help output provides a link to documentation for further help and guidance on using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
