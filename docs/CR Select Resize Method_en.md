# Documentation
- Class name: CR_SelectResizeMethod
- Category: Comfyroll/Utils/Other
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_SelectResizeMethod node provides a selection mechanism for different image scaling methods, such as 'Fit' and 'Crop'. It acts as a decision point in image processing workflows, allowing users to choose a method based on their specific image manipulation needs.

# Input types
## Required
- method
    - The 'method' parameter is critical for determining the approach used to resize the image. It decides whether the image will be resized to fit the given dimensions or cropped to match them exactly.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- method
    - The 'method' output represents the user's selected image scaling method. It is a key deciding factor for subsequent steps in the image processing pipeline.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - The 'show_help' output provides a URL link to documentation for further assistance. It is particularly useful for users who need more information about scaling methods or node functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
