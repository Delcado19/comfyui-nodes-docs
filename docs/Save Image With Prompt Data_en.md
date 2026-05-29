# Documentation
- Class name: SaveImagesMikey
- Category: Mikey/Image
- Output node: True
- Repo Ref: https://github.com/bash-j/mikey_nodes

The SaveImagesMikey node is designed to process and save a series of images to a specified directory. It handles conversion of image data for saving and can embed metadata (such as prompts and parameters) into the image files for later reference. This node plays a key role in managing the output of image generation tasks.

# Input types
## Required
- images
    - The `images` parameter is essential because it represents the input images that the node will process and save. The node’s functionality revolves around handling these images, making this parameter a fundamental part of the node’s operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- filename_prefix
    - The `filename_prefix` parameter allows users to specify a prefix for the saved image files, which is useful for organizing and identifying files. This parameter helps customize the naming convention of output files.
    - Comfy dtype: STRING
    - Python dtype: str
- parameters
    - The `parameters` input is important because it enables the node to include additional information about the image generation process in the saved files. This is crucial for tracking and documenting the conditions under which images were created.
    - Comfy dtype: STRING
    - Python dtype: str
- positive_prompt
    - The `positive_prompt` parameter adds a positive creative direction to the image file’s metadata. It helps classify images according to the prompts that guided their creation.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - The `negative_prompt` parameter includes creative constraints in the image file’s metadata, which is important for understanding the limitations applied during image generation.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - The `prompt` parameter is hidden but important because it provides the context or description that influences image generation. It is used to add relevant information to the image metadata for future reference.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The `extra_pnginfo` parameter embeds additional PNG‑specific metadata into the saved image files. This can enrich the information available for each image and is especially useful for advanced image management.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: str

# Output types
- ui
    - The `ui` output provides a structured representation of the saved images, including their filenames and subfolders. This output is important because it enables easy tracking and management of saved image files.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, List[Dict[str, Union[str, int]]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
