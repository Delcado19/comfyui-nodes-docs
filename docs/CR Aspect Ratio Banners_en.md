# Documentation
- Class name: CR_AspectRatioBanners
- Category: Comfyroll/Aspect Ratio
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_AspectRatioBanners node is designed to facilitate the creation and manipulation of image banners conforming to various aspect ratios. It allows users to input custom dimensions or select from a list of predefined banner sizes. The node also provides options to swap dimensions and apply scaling factors to meet specific requirements. Its primary goal is to simplify the process of generating visually consistent banners suitable for diverse display purposes.

# Input types
## Required
- width
    - The width parameter specifies the desired width of the banner. It plays a crucial role in determining the overall size of the output image, ensuring the banner fits the required constraints.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter defines the vertical extent of the banner. It is essential for maintaining the aspect ratio and achieving the desired appearance of the banner.
    - Comfy dtype: INT
    - Python dtype: int
- aspect_ratio
    - The aspect ratio determines the proportional relationship between the width and height of the banner. It is a key factor in ensuring the banner dimensions are visually appealing and suitable for the intended use.
    - Comfy dtype: STRING
    - Python dtype: str
- swap_dimensions
    - The swap_dimensions parameter allows interchangeability of width and height values, providing flexibility in interpreting and using banner dimensions.
    - Comfy dtype: STRING
    - Python dtype: str
- upscale_factor
    - The upscale_factor parameter is used to increase the size of the banner without altering its aspect ratio, thereby enhancing the visual quality of the banner on larger display devices.
    - Comfy dtype: FLOAT
    - Python dtype: float
- prescale_factor
    - The prescale_factor parameter allows adjustment of the banner size before further processing, optimizing the image size and performance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_size
    - The batch_size parameter defines the number of banners processed simultaneously, which can significantly improve efficiency when handling multiple banner creation tasks.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- width
    - The width output provides the final width of the banner after applying the selected aspect ratio and scaling factors.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output gives the final height of the banner considering the aspect ratio and scaling adjustments.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_factor
    - The upscale_factor output reflects the scaling factor used to enlarge the banner size.
    - Comfy dtype: FLOAT
    - Python dtype: float
- prescale_factor
    - The prescale_factor output indicates the initial scaling factor applied to the banner size before processing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_size
    - The batch_size output represents the number of banners processed in the current operation.
    - Comfy dtype: INT
    - Python dtype: int
- empty_latent
    - The empty_latent output is a placeholder for the latent representation of the banner for further processing or analysis.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- show_help
    - The show_help output provides a link to the documentation for further guidance on using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
