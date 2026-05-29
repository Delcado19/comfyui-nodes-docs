# Documentation
- Class name: WAS_Image_Grid_Image_Batch
- Category: WAS Suite/Image/Process
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The 'smart_grid_image' function of the WAS_Image_Grid_Image_Batch node aims to intelligently arrange a batch of images into a grid layout. It dynamically adjusts the size of each image to fit the specified maximum cell size while maintaining the original aspect ratio. The node also provides options to add a colored border around each image for better visual distinction. Its main goal is to enable the creation of visually appealing and well-organized image grids, which is particularly useful for presentations and image collections.

# Input types
## Required
- images
    - The 'image' parameter is the collection of image tensors that the node will process to create the grid. This is a key input, as all operations of the node revolve around arranging these images. This parameter directly affects the composition and visual result of the output grid.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
## Optional
- number_of_columns
    - The 'number_of_columns' parameter specifies the number of columns in the generated grid. It plays an important role in determining the grid layout, affecting how images are distributed across the width of the grid. The default value is 6, but it can be adjusted based on the desired grid configuration.
    - Comfy dtype: INT
    - Python dtype: int
- max_cell_size
    - The 'max_cell_size' parameter sets the maximum size (in pixels) of each cell in the grid. It is important for controlling the overall size of the grid and ensuring that images are scaled appropriately. The default value is 256 pixels, but it can be modified for different display needs.
    - Comfy dtype: INT
    - Python dtype: int
- add_border
    - The 'add_border' parameter is a boolean flag that, when set to True, instructs the node to add a border around each image in the grid. This can enhance the visual separation between images, and is particularly useful for grids where individual images need to be distinguished.
    - Comfy dtype: BOOL
    - Python dtype: bool
- border_red
    - The 'border_red' parameter defines the red component of the border color when adding borders to images. It contributes to customizing the appearance of the border, and is used together with 'border_green' and 'border_blue' to create the complete border color.
    - Comfy dtype: INT
    - Python dtype: int
- border_green
    - The 'border_green' parameter sets the green component of the border color. When 'add_border' is enabled, it works with 'border_red' and 'border_blue' to determine the exact hue of the border.
    - Comfy dtype: INT
    - Python dtype: int
- border_blue
    - The 'border_blue' parameter specifies the blue component of the border color. It is one of three color components that, together with 'border_red' and 'border_green', determines the visual style of the border when applied to images.
    - Comfy dtype: INT
    - Python dtype: int
- border_width
    - The 'border_width' parameter determines the thickness of the border around each image. It is an important styling element that can influence the overall appearance of the grid, making images stand out more.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output_image
    - The 'output_image' is the resulting grid image composed of the input images arranged in a structured layout. It represents the final outcome of the node's processing, incorporating the visual arrangement and style choices made through the input parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
