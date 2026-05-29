# Documentation
- Class name: CR_LoadImageList
- Category: Comfyroll/List/IO
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_LoadImageList is a node that loads and processes a list of image files from a specified directory. It retrieves a subset of images based on a starting index and a maximum number of images to load, ensuring efficient operation and meeting user requirements. The node’s primary goal is to simplify image loading within the ComfyUI framework for further processing or analysis.

# Input types
## Required
- input_folder
- The input_folder parameter specifies the directory containing the images to load. It determines the range of images the node will operate on, directly affecting execution and the resulting image list.
    - Comfy dtype: STRING
    - Python dtype: str
- start_index
- The start_index parameter indicates the position in the sorted image list from which the node will begin loading images. It is essential for controlling the subset of images processed, allowing precise manipulation of the image sequence.
    - Comfy dtype: INT
    - Python dtype: int
- max_images
- The max_images parameter sets the maximum number of images the node will load starting from the specified start_index. It limits the size of the image list, optimizing the node’s operation for performance and resource management.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- input_path
- The optional input_path parameter allows users to specify a custom path to the image directory, overriding the default input directory. This provides flexibility in selecting the source of the image list and can integrate images from different locations.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
- The IMAGE output provides the loaded image data as tensors, which can be further processed or analyzed within the ComfyUI framework. It represents the main output of the CR_LoadImageList node, reflecting the core function of loading and preparing images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
- The show_help output supplies a URL link to a documentation page for additional guidance and assistance. It is a useful resource for users seeking more information on how to use the node effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
