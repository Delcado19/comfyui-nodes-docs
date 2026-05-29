# Documentation
- Class name: WAS_Image_Crop_Square_Location
- Category: WAS Suite/Image/Process
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Crop_Square_Location node processes images by cropping them into a square based on specified position coordinates. It intelligently adjusts the crop region to ensure the resulting image is square, even if the specified area is not perfectly square. This node is particularly useful for applications requiring uniform image dimensions, such as social media posts or data inputs for machine learning models.

# Input types
## Required
- image
    - The image parameter is the input image that the node will process. It is essential to the node's operation, as it is the subject of the crop action. The content and dimensions of the image will directly affect the outcome of the cropping process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
## Optional
- x
    - The x parameter specifies the horizontal coordinate from which the crop operation will center. It plays a critical role in determining the position of the cropped region within the image. If no specific value is provided, the default value ensures a center crop.
    - Comfy dtype: INT
    - Python dtype: int
- y
    - The y parameter defines the vertical coordinate from which the crop operation will center. Similar to the x parameter, it is crucial for precisely locating the crop position within the image. If no user-specified value is provided, the default value ensures a center crop.
    - Comfy dtype: INT
    - Python dtype: int
- size
    - The size parameter determines the side length of the square crop. It is a key factor in achieving the desired output dimensions. The node ensures the crop is as close to this size as possible without exceeding the image boundaries.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- cropped_image
    - The cropped image output is the result of the cropping process. It is a square image derived from the input image, centered on the specified position coordinates. This output is important for applications requiring standardized image formats.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- crop_data
    - The crop_data output provides metadata about the cropping process, including the size of the cropped image and the coordinates of the crop region. This information may be useful for further image processing or analysis.
    - Comfy dtype: CROP_DATA
    - Python dtype: Tuple[int, Tuple[int, int, int, int]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
