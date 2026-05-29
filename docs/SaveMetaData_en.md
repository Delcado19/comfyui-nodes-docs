# Documentation
- Class name: SaveMetaData
- Category: Mikey/Meta
- Output node: True
- Repo Ref: https://github.com/bash-j/mikey_nodes

The `save_metadata` method is designed to organize and store metadata associated with an image. It creates a text file containing relevant information such as timestamps, filename prefixes, and additional details provided by the user. This method ensures that the metadata for each image is systematically recorded and easily accessible.

# Input types
## Required
- image
    - The image parameter is required because it is the visual content to which the metadata will be associated. This is a required input and plays a core role in the node's operation, as it is the subject of the metadata being saved.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or similar image object
## Optional
- filename_prefix
    - The filename prefix parameter is used to define the starting portion of the metadata file's filename. While it is not mandatory, it is important for organizing files in a meaningful way, and can be set to a default value if not provided.
    - Comfy dtype: STRING
    - Python dtype: str
- timestamp_prefix
    - The timestamp prefix parameter determines whether to include a timestamp in the filename. It provides a way to organize files chronologically, with a default setting of 'true', indicating that the timestamp should be included.
    - Comfy dtype: COMBO[true, false]
    - Python dtype: bool
- counter
    - The counter parameter is used to append a numerical counter to the filename, ensuring uniqueness and preventing file overwrites. The default setting is 'true', highlighting its importance in maintaining file integrity.
    - Comfy dtype: COMBO[true, false]
    - Python dtype: bool
- prompt
    - The prompt parameter is an optional input that can be used to provide additional context or information that may be relevant to the metadata. It can enhance the descriptiveness of the metadata, rather than being a mandatory requirement.
    - Comfy dtype: PROMPT
    - Python dtype: dict
- extra_pnginfo
    - The extra_png_info parameter is used to include image-specific additional information, such as annotations or other details. This optional input allows for saving a more comprehensive set of metadata.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: dict

# Output types
- save_metadata
    - The output of the save_metadata method is a dictionary containing the filename and subfolder of the saved metadata. This output provides confirmation of the save operation and the location of the saved metadata.
    - Comfy dtype: COMBO[filename, subfolder]
    - Python dtype: Dict[str, Union[str, Dict[str, str]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
