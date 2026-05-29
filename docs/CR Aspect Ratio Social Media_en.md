# Documentation
- Class name: CR_AspectRatioSocialMedia
- Category: icons.get('Comfyroll/Aspect Ratio')
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

This node is designed to process and resize images according to the requirements of specific social media platforms, ensuring optimal display and user engagement.

# Input types
## Required
- width
    - Width is the fundamental parameter that determines the horizontal dimension of the image, affecting its aspect ratio and overall appearance across different social media platforms.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height is the key parameter that defines the vertical dimension of the image, working together with width to meet the aspect ratio requirements of social media platforms.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- aspect_ratio
    - Aspect ratio presets allow quick selection of sizes optimized for various social media platforms, simplifying the image preparation process.
    - Comfy dtype: COMBO
    - Python dtype: str
- swap_dimensions
    - The swap dimensions option allows width and height to be interchanged, providing flexibility to meet specific requirements of certain social media platforms.
    - Comfy dtype: COMBO
    - Python dtype: str
- upscale_factor
    - The upscale factor is used to enlarge image dimensions, which can improve image quality and visibility when displayed on social media platforms.
    - Comfy dtype: FLOAT
    - Python dtype: float
- prescale_factor
    - The pre-scale factor is used to adjust the initial image size before further processing, affecting the final output resolution and performance on social media.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_size
    - Batch size determines the number of images processed simultaneously, which can improve efficiency and throughput when handling multiple social media image adjustments.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- width
    - Adjusted image width, optimized for the selected social media platform, ensuring proper display and engagement.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Adjusted image height, customized to meet the requirements of the selected social media platform for optimal display.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_factor
    - The original upscale factor used for the image, indicating the degree of enlargement applied to the dimensions for optimal social media display.
    - Comfy dtype: FLOAT
    - Python dtype: float
- prescale_factor
    - The original pre-scale factor used for the image, representing the initial size adjustment performed before further processing for social media optimization.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_size
    - The number of images processed in the batch, reflecting the efficiency of handling multiple social media platform image adjustments.
    - Comfy dtype: INT
    - Python dtype: int
- empty_latent
    - A placeholder latent representation of the image, used for potential further processing or analysis within the social media optimization workflow.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- show_help
    - A link to documentation for further guidance and understanding of how to use the node for social media aspect ratio optimization.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
