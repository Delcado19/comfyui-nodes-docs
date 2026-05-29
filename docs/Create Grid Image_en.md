# Documentation
- Class name: WAS_Image_Grid_Image
- Category: WAS Suite/Image/Process
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Grid_Image node is designed to process a series of images into a single grid image. It intelligently arranges images into a specified number of columns, scales them to the maximum cell size, and optionally adds colored borders around each image to differentiate visual effects. This node is especially suitable for creating collages or thumbnails from an image directory.

# Input types
## Required
- images_path
- The 'images_path' parameter specifies the directory path where the images to be processed are located. This path is crucial because it directs the node to the source location of images that will be organized into a grid.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- pattern_glob
- The 'pattern_glob' parameter is used to match specific files in the directory. It allows filtering images based on a pattern, which is useful when not all files in the directory are images or when a specific set of images is needed.
    - Comfy dtype: STRING
    - Python dtype: str
- include_subfolders
- The 'include_subfolders' parameter determines whether to include images from subdirectories when creating the grid. Setting it to 'true' causes the node to scan and include images from all subfolders under the specified path.
    - Comfy dtype: COMBO[false, true]
    - Python dtype: Union[str, bool]
- number_of_columns
- The 'number_of_columns' parameter defines the number of columns in the resulting grid image. It decides how images are distributed across the grid's width, affecting the overall layout.
    - Comfy dtype: INT
    - Python dtype: int
- max_cell_size
- The 'max_cell_size' parameter sets the maximum size (in pixels) for each image cell in the grid. This ensures no image exceeds these dimensions after processing, maintaining visual consistency in the grid.
    - Comfy dtype: INT
    - Python dtype: int
- border_width
- The 'border_width' parameter specifies the width of the border added around each image in the grid, if borders are included. A value of 0 indicates no border.
    - Comfy dtype: INT
    - Python dtype: int
- border_red
- The 'border_red' parameter, together with 'border_green' and 'border_blue', determines the red component of the RGB color value for the border around each image.
    - Comfy dtype: INT
    - Python dtype: int
- border_green
- The 'border_green' parameter specifies the green component of the RGB color value for the border.
    - Comfy dtype: INT
    - Python dtype: int
- border_blue
- The 'border_blue' parameter specifies the blue component of the RGB color value for the border.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- grid_image
'grid_image' output is the resulting image containing the processed image grid. It represents the final visual layout as defined by the input parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
