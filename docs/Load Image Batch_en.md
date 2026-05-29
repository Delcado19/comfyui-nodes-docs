# Documentation
- Class name: WAS_Load_Image_Batch
- Category: WAS Suite/IO
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Load_Image_Batch node is designed to efficiently load and manage batches of image files. It provides functionality to load images in different modes such as single image, incremental image, or random selection. The node ensures proper image orientation and can handle RGBA to RGB conversion when needed. It can also remove file extensions from filenames based on specifications.

# Input types
## Required
- path
    - The 'path' parameter specifies the directory path where the image files are located. This is essential for the node to locate and access the image files to be processed.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- pattern
    - The 'pattern' parameter is used to filter image files based on a specific pattern. It is important for selecting a subset of images within the specified directory that meet the given criteria.
    - Comfy dtype: STRING
    - Python dtype: str
- index
    - The 'index' parameter is an integer representing the specific position of the image in the batch to be loaded. When the mode is set to 'single_image', it plays a key role in determining the exact image to retrieve.
    - Comfy dtype: INT
    - Python dtype: int
- mode
    - The 'mode' parameter determines the method of loading images. It can be 'single_image' for loading a specific image, 'incremental_image' for sequential access, or 'random' for random selection.
    - Comfy dtype: COMBO['single_image', 'incremental_image', 'random']
    - Python dtype: str
- label
    - The 'label' parameter is a string used to identify and classify the image batch. It helps organize and track different sets of images within the node's operations.
    - Comfy dtype: STRING
    - Python dtype: str
- allow_RGBA_output
    - The 'allow_RGBA_output' parameter determines whether the output image is allowed to have RGBA channels. If set to 'false', the node converts the image to RGB.
    - Comfy dtype: COMBO['false', 'true']
    - Python dtype: str
- filename_text_extension
    - The 'filename_text_extension' parameter indicates whether to include the file extension in the filename text output. It is useful when file extensions are not needed in the filenames.
    - Comfy dtype: COMBO['true', 'false']
    - Python dtype: str

# Output types
- image
    - The 'image' output provides the loaded images in the specified batch. It is the primary output for image processing tasks within the node's functionality.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- filename_text
    - The 'filename_text' output returns the names of the loaded image files, which can be used for reference or further processing outside the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
