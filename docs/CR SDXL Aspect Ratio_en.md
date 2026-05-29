# Documentation
- Class name: CR_SDXLAspectRatio
- Category: Comfyroll/Aspect Ratio
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_SDXLAspectRatio node is designed to adjust image dimensions based on a specified aspect ratio. It allows users to select from a predefined list of aspect ratios or input custom dimensions. The node also provides options to swap dimensions and apply an upscale factor to the resulting image size. Its primary function is to ensure the output conforms to the desired aspect ratio, thereby facilitating image processing tasks that require specific dimensions.

# Input types
## Required
- width
    - The 'width' parameter sets the width of the image in pixels. This is a critical component as it directly affects the image's aspect ratio and final dimensions. In image processing workflows, this parameter is essential for achieving the desired visual output.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' parameter defines the height of the image in pixels. Together with the 'width' parameter, it determines the overall aspect ratio of the image. 'height' is crucial for aligning image dimensions with specific requirements or standards.
    - Comfy dtype: INT
    - Python dtype: int
- aspect_ratio
    - The 'aspect_ratio' parameter allows users to select a predefined aspect ratio or input a custom one. It plays a significant role in shaping the image dimensions according to the desired format, which is essential for various image processing and display purposes.
    - Comfy dtype: STRING
    - Python dtype: str
- swap_dimensions
    - The 'swap_dimensions' parameter provides an option to swap the width and height values. This feature can be useful when the input aspect ratio does not match the intended orientation of the image, allowing flexibility in dimension manipulation.
    - Comfy dtype: STRING
    - Python dtype: str
- upscale_factor
    - The 'upscale_factor' parameter is used to increase the size of the image by a specified factor. This is an important feature that can enhance image resolution without altering the aspect ratio, which is beneficial for high-quality image output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_size
    - The 'batch_size' parameter determines the number of images processed in a single operation. It is crucial for optimizing computational resources and improving the efficiency of image processing tasks, especially when handling large volumes of images.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- width
    - The 'width' output provides the final width of the image after applying the selected aspect ratio and any dimension swapping or upscale factors. It is a key result of the node's operation and is critical for subsequent image processing steps.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' output provides the final height of the image processed after the node's settings. It is key information for ensuring the image meets the required dimensions for display or further processing.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_factor
    - The 'upscale_factor' output reflects the scaling factor applied to the image. It helps track the relationship between the original and current size of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_size
    - The 'batch_size' output indicates the number of images that were processed. This can be important for downstream tasks that need to know the batch size for proper alignment or further calculations.
    - Comfy dtype: INT
    - Python dtype: int
- empty_latent
    - The 'empty_latent' output is a placeholder for a latent representation that might be used in more advanced image processing applications. It marks the node's ability to integrate with complex workflows, although in this context, it is returned as an empty structure.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- show_help
    - The 'show_help' output provides a URL link to the node's documentation page. It is a useful resource for users seeking more information or assistance on how to effectively use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
