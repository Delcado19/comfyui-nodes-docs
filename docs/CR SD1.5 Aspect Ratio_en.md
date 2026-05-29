# Documentation
- Class name: CR_AspectRatioSD15
- Category: Comfyroll/Aspect Ratio
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_AspectRatioSD15 is a node for managing and adjusting image aspect ratios. It allows users to select predefined aspect ratios or input custom dimensions, and provides options for swapping dimensions and upscaling images. The main function of this node is to ensure images are correctly scaled and oriented to meet various display or printing requirements.

# Input types
## Required
- width
    - Width is a key parameter that defines the horizontal dimension of the image. It works together with the height parameter to determine the aspect ratio of the image. The node uses this value to calculate the correct scaling and dimensions for the output.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height is a key parameter that sets the vertical dimension of the image. When paired with the width parameter, it is essential for maintaining the desired aspect ratio. The node uses this parameter to ensure the vertical scaling of the image is accurate.
    - Comfy dtype: INT
    - Python dtype: int
- aspect_ratio
    - The aspect ratio parameter is critical because it determines the proportional relationship between the width and height of the image. It provides a selection of predefined ratios or the option for custom input, allowing flexibility in image format settings.
    - Comfy dtype: STRING
    - Python dtype: str
- swap_dimensions
    - The swap_dimensions parameter allows users to switch between width and height values. This feature is useful when the aspect ratio requires a different orientation or the user needs to manually swap dimensions.
    - Comfy dtype: STRING
    - Python dtype: str
- upscale_factor
    - The upscale_factor parameter is important for controlling the magnification level of the image. It multiplies the original dimensions to achieve a larger image size without affecting the aspect ratio.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_size
    - Batch size is an important parameter that determines the number of images processed simultaneously. It is particularly useful for optimizing performance when processing large numbers of images.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- width
    - The width output parameter represents the final horizontal dimension of the image after applying the selected aspect ratio and any scaling factors.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output parameter represents the final vertical dimension of the image after considering aspect ratio and scaling adjustments.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_factor
    - The upscale_factor output reflects the magnification level applied to the image to increase its size.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_size
    - The batch size output parameter indicates the number of images processed in a single batch, which is crucial for understanding the throughput of the node.
    - Comfy dtype: INT
    - Python dtype: int
- empty_latent
    - The empty_latent output parameter provides an empty latent space representation for the image batch, which can be used for further processing or analysis in downstream tasks.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- show_help
    - The show_help output parameter provides a URL link to the documentation page for additional guidance and information on using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
