# Documentation
- Class name: WLSH_Image_Save_With_Prompt
- Category: WLSH Nodes/IO
- Output node: True
- Repo Ref: https://github.com/wallish77/wlsh_nodes

This node is designed to facilitate saving image data and can include additional prompts and metadata, enhancing the organization and description of saved images.

# Input types
## Required
- images
    - The image parameter is required because it provides the raw image data to be saved. It directly affects the node's primary function of saving images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- filename
    - The filename parameter is essential for defining the base name of the saved image. It plays a crucial role in organizing and retrieving images after they are saved.
    - Comfy dtype: STRING
    - Python dtype: str
- extension
    - The extension parameter determines the file format in which the image will be saved, affecting the compatibility and usability of the saved image.
    - Comfy dtype: COMBO
    - Python dtype: ['png', 'jpeg', 'tiff', 'gif']
- quality
    - The quality parameter is important when saving images in formats that support quality levels (such as JPEG). It affects image compression and file size.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- path
    - The path parameter specifies the directory where the image will be saved. It is important for organizing file structure and managing storage locations.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - The prompt parameter allows additional contextual information to be saved alongside the image, enhancing descriptive metadata and aiding future reference.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- ui
    - The ui output provides a structured representation of saved images, including their paths and other relevant metadata, which is crucial for managing and referencing images after saving.
    - Comfy dtype: DICTIONARY
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
