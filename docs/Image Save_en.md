# Documentation
- Class name: WAS_Image_Save
- Category: WAS Suite/IO
- Output node: True
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Save node saves images to a specified output directory. It handles various file formats and offers naming and organization options, ensuring a streamlined image output management process.

# Input types
## Required
- images
- The image parameter is required; it defines the input image to save. It plays a key role during node execution because it directly affects the output.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image.Image]
## Optional
- output_path
- The output_path parameter specifies the directory for saving images. It is crucial for determining the final location of files within the file system.
    - Comfy dtype: STRING
    - Python dtype: str
- filename_prefix
- The filename_prefix creates a consistent naming convention for saved images, which aids in organizing and identifying files.
    - Comfy dtype: STRING
    - Python dtype: str
- filename_delimiter
- The filename_delimiter is a character that separates the prefix and numeric identifier in saved image filenames.
    - Comfy dtype: STRING
    - Python dtype: str
- filename_number_padding
- The filename_number_padding parameter sets the number of digits for the numeric identifier in filenames, ensuring consistency in the naming scheme.
    - Comfy dtype: INT
    - Python dtype: int
- extension
- The extension parameter indicates the file format for saved images, allowing generation of different image file types.
    - Comfy dtype: COMBO['png', 'jpg', 'jpeg', 'gif', 'tiff', 'webp', 'bmp']
    - Python dtype: str
- quality
- The quality parameter sets the compression level for saved images, affecting the balance between file size and image quality.
    - Comfy dtype: INT
    - Python dtype: int
- lossless_webp
- The lossless_webp parameter specifies whether to use lossless compression for WEBP images, preserving more image data at the cost of larger file sizes.
    - Comfy dtype: COMBO[false, true]
    - Python dtype: bool
- overwrite_mode
- The overwrite_mode parameter determines how the node handles existing files with the same name, either overwriting them or using the filename prefix as part of a new name.
    - Comfy dtype: COMBO[false, prefix_as_filename]
    - Python dtype: str
- show_history
- The show_history parameter controls whether to display the history of saved images, useful for reviewing past outputs.
    - Comfy dtype: COMBO[false, true]
    - Python dtype: bool
- show_history_by_prefix
- When the show_history_by_prefix parameter is true, it filters the displayed image history to only show images with the same filename prefix, enhancing organization.
    - Comfy dtype: COMBO[true, false]
    - Python dtype: bool
- embed_workflow
- The embed_workflow parameter indicates whether to embed workflow metadata in the image file, providing additional context about the image creation process.
    - Comfy dtype: COMBO[true, false]
    - Python dtype: bool
- show_previews
- The show_previews parameter decides whether to display image previews after saving, offering a quick way to view the result.
    - Comfy dtype: COMBO[true, false]
    - Python dtype: bool

# Output types
- ui
- The ui parameter contains UI elements shown after saving images, including previews and history if those options are enabled.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Union[List[Dict[str, Union[str, pathlib.Path]]], List[]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
