# Documentation
- Class name: LoadImgFromDirectoryBasedOnIndex
- Category: Mikey/Image
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

This node loads an image from a specified directory based on a provided index. It ensures the directory exists, then selects an image file from the sorted list of image files in that directory. The node’s functionality focuses on retrieving the image and converting it to a tensor format suitable for further processing.

# Input types
## Required
- image_directory
    - The `image_directory` parameter specifies the path to the directory containing image files. It is essential to the node’s operation because it determines the source of the images to load.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- seed
    - The `seed` parameter determines the index of the image file to load from the sorted file list. It influences the selection process and ensures a degree of randomness in image retrieval.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The `image` output provides the loaded image in tensor format, which is crucial for downstream tasks that require image data in numerical form.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- filename
    - The `filename` output returns the name of the loaded image file, useful for logging, tracking, or additional processing that requires file identification.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
