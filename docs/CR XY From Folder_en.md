# Documentation
- Class name: CR_XYFromFolder
- Category: Comfyroll/XY Grid
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_XYFromFolder node is designed to process and organize images from a specified folder into a grid layout. It facilitates the creation of a visually structured grid by allowing users to specify annotations for each image, set font sizes, and control the spacing between images. This node is particularly useful for generating annotated image grids for various purposes such as presentations, catalogs, or data visualization.

# Input types
## Required
- image_folder
    - The image folder parameter is critical for defining the source of images to be organized into a grid. It determines the directory from which the node retrieves and processes images.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- start_index
    - The start index is an optional parameter that determines the starting point of the image selection process. It allows control over which images are included in the grid, starting from a specific position.
    - Comfy dtype: INT
    - Python dtype: int
- end_index
    - The end index parameter specifies the ending point of image selection. It is used to define the range of images to be included in the final grid layout.
    - Comfy dtype: INT
    - Python dtype: int
- max_columns
    - The max columns parameter determines the number of columns in the grid. It is critical for defining the structure of the grid and ensuring a visually balanced layout.
    - Comfy dtype: INT
    - Python dtype: int
- x_annotation
    - The x_annotation parameter is used to provide annotations for the columns of the grid. It adds a layer of information and context to the visual representation of the images.
    - Comfy dtype: STRING
    - Python dtype: str
- y_annotation
    - The y_annotation parameter is similar to x_annotation but is used for the rows of the grid. It ensures that each row is properly labeled and annotated.
    - Comfy dtype: STRING
    - Python dtype: str
- font_size
    - The font size parameter controls the size of the text used for annotations. It is an important aspect of the node's functionality as it affects the readability and aesthetics of the grid.
    - Comfy dtype: INT
    - Python dtype: int
- gap
    - The spacing parameter defines the spacing between images in the grid. It plays a role in the overall visual presentation, ensuring that images are not too crowded.
    - Comfy dtype: INT
    - Python dtype: int
- trigger
    - The trigger parameter is an optional switch that, when activated, initiates image processing and grid creation. It provides a way to control when the node's operation is executed.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- IMAGE
    - The IMAGE output provides the final annotated image grid, ready for use in various applications. It represents the result of the node's processing and layout work.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- trigger
    - The trigger output indicates whether the node's operation was executed based on the input trigger. It serves as a feedback mechanism for the node's activation status.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- show_help
    - The show_help output provides a URL link to the node's documentation page. It offers users easy access to additional information and guidance on using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
