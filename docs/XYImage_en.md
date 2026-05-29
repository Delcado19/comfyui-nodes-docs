
# Documentation
- Class name: `XYImage`
- Category: `List Stuff`
- Output node: `True`
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The XYImage node is designed for complex image generation and manipulation tasks, including image segmentation, flipping, and batch stacking. It supports adding labels on different axes and can process images in a multidimensional (z-axis enabled) environment, making it suitable for various image processing and visualization needs.

# Input types
## Required
- images
    - The list of images to process. This parameter is crucial as it is the main data that the node will process through segmentation, flipping, and stacking operations.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- splits
    - Defines how to segment the images. This parameter directly affects the structure and layout of the output images, influencing how they are segmented and organized.
    - Comfy dtype: INT
    - Python dtype: List[int]
- flip_axis
    - Specifies along which axes to flip the images. This parameter allows adjusting image orientation, enhancing flexibility in image display and analysis.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- batch_stack_mode
    - Determines how to batch stack the images together. This parameter is crucial for defining the overall structure and layout of the combined image output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- z_enabled
    - Indicates whether to enable the z-axis for image processing. This parameter enables multidimensional image processing, allowing for more complex image manipulation and visualization.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]

## Optional
- x_main_label
    - The main label for the x-axis. This optional parameter allows adding a descriptive label for the x-axis, enhancing the interpretability of the image.
    - Comfy dtype: STRING
    - Python dtype: Optional[List[str]]
- y_main_label
    - The main label for the y-axis. Similar to x_main_label, this enhances the interpretability of the image by adding a descriptive label for the y-axis.
    - Comfy dtype: STRING
    - Python dtype: Optional[List[str]]
- z_main_label
    - The main label for the z-axis, used when z_enabled is True. This enhances the interpretability of multidimensional images by adding a descriptive label for the z-axis.
    - Comfy dtype: STRING
    - Python dtype: Optional[List[str]]
- x_labels
    - Labels for each segment on the x-axis. This parameter adds detailed descriptions to various parts of the image, aiding in its analysis and understanding.
    - Comfy dtype: *
    - Python dtype: Optional[List[str]]
- y_labels
    - Labels for each segment on the y-axis, similar to x_labels, providing detailed descriptions for parts of the image.
    - Comfy dtype: *
    - Python dtype: Optional[List[str]]
- z_labels
    - Labels for each segment on the z-axis, used when z_enabled is True. This adds detailed descriptions to parts of multidimensional images.
    - Comfy dtype: *
    - Python dtype: Optional[List[str]]

# Output types
- Image
    - The processed image after applying segmentation, flipping, and stacking operations. This output is important as it represents the culmination of the node's image manipulation capabilities and can be used for further use or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
