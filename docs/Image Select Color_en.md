# Documentation
- Class name: WAS_Image_Select_Color
- Category: WAS Suite/Image/Process
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Select_Color node is designed to process images by selecting pixels that match a specified color and its tolerance range. It enhances images by focusing on the desired color range, allowing thematic or stylistic emphasis on specific visual elements.

# Input types
## Required
- image
    - The image parameter is critical to the node's operation, as it is the input to be processed. It determines the visual content that the node will analyze and manipulate based on the specified color criteria.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- red
    - The red parameter defines the red component of the color to be selected in the image. It plays a key role in determining the final visual result by specifying the range of red values to be considered.
    - Comfy dtype: INT
    - Python dtype: int
- green
    - The green parameter specifies the green component of the target color. It is important for achieving the desired color selection and contributes to the overall color filtering process.
    - Comfy dtype: INT
    - Python dtype: int
- blue
    - The blue parameter sets the blue component of the color to be selected. It is a critical factor in the color selection process, ensuring that only pixels within the specified blue range are included.
    - Comfy dtype: INT
    - Python dtype: int
- variance
    - The tolerance parameter allows flexibility in color selection by defining the acceptable range of color deviation. It is significant for handling slight variations in color intensity within the image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- selected_image
    - The selected image output represents the processed image, where only pixels that meet the specified color criteria are retained. It is the result of the node's operation and reflects the intended thematic focus.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
