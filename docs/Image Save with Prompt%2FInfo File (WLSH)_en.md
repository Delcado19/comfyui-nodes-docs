# Documentation
- Class name: WLSH_Image_Save_With_File_Info
- Category: WLSH Nodes/IO
- Output node: True
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The WLSH_Image_Save_With_File_Info node aims to save images to the file system along with file information. It provides functionality for saving images, allowing customization of file name, extension, and quality settings, and can include metadata such as prompts and model information.

# Input types
## Required
- images
    - The image parameter is crucial for the node as it defines the input images to be saved. The node processes and saves these images based on the other provided parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- filename
    - The filename parameter allows the user to specify a base name for the saved file. It plays an important role in organizing output files as it determines the initial part of the file name.
    - Comfy dtype: STRING
    - Python dtype: str
- path
    - The path parameter determines the directory where the images will be saved. It is important for organizing saved files into specific folders.
    - Comfy dtype: STRING
    - Python dtype: str
- extension
    - The extension parameter determines the file format in which the images will be saved. It is essential for defining the file extension type to be used for the output images.
    - Comfy dtype: COMBO['png', 'jpeg', 'tiff', 'gif']
    - Python dtype: str
- quality
    - The quality parameter is important for setting the compression level of the saved images, especially for formats like JPEG or WebP, where it affects the balance between image quality and file size.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- ui
    - The ui parameter in the output contains the path of the saved images, providing the user with a reference to the storage location of the images.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, List[Dict[str, str]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
