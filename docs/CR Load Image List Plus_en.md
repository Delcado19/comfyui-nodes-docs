# Documentation
- Class name: CR_LoadImageListPlus
- Category: Comfyroll/List/IO
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_LoadImageListPlus is a node for efficiently loading and processing a list of images from a specified directory. It can handle large batches of images, sort them, and provide additional metadata such as filenames and dimensions. This node is designed to simplify the process of further processing or displaying images in a ComfyUI workflow.

# Input types
## Required
- input_folder
    - The input_folder parameter specifies the directory from which images will be loaded. It is essential for the operation of the node as it determines the source of the images.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- start_index
    - The start_index parameter determines the starting point for loading in the image list. It is important because it allows selecting a specific range of images from the list.
    - Comfy dtype: INT
    - Python dtype: int
- max_images
    - The max_images parameter sets the maximum number of images to load from the directory. It plays a key role in controlling the batch size for processing.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- input_path
    - The optional input_path parameter allows specifying an alternative path for the image directory. It provides flexibility if the default directory does not meet the user's requirements.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The IMAGE output provides the loaded images suitable for further processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK
    - The MASK output includes binary masks derived from the images, which can be used for segmentation or other purposes.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- index
    - The index output represents the position of each image in the original list, providing a reference for the order of images.
    - Comfy dtype: INT
    - Python dtype: List[int]
- filename
    - The filename output provides the names of the loaded images, which is useful for identification and record keeping.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- width
    - The width output indicates the width of the image, which is crucial for understanding the dimensions of the loaded images.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output indicates the height of the image, complementing the width to provide a complete understanding of the image dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- list_length
    - The list_length output provides the total number of images loaded from the directory, which is important for tracking the dataset scope.
    - Comfy dtype: INT
    - Python dtype: int
- show_help
    - The show_help output provides a documentation link for further guidance on how to use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
