# Documentation
- Class name: LoadImagesFromDirectoryUpload
- Category: Video Helper Suite 🎥🅥🅗🅢
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The LoadImagesFromDirectoryUpload node is designed to load image data from a specified directory. It simplifies the process of accessing and preparing images for further processing or analysis, abstracting away the complexities of file handling and directory navigation.

# Input types
## Required
- directory
    - The 'directory' parameter specifies the source directory from which images are loaded. This is critical for determining the scope and content of the image data that the node will process.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- image_load_cap
    - The 'image_load_cap' parameter is optional and allows limiting the number of images loaded from the directory. It provides a way to control the volume of data processed, which can be important for optimizing resource usage.
    - Comfy dtype: INT
    - Python dtype: int
- skip_first_images
    - The 'skip_first_images' parameter enables the node to skip a specified number of images at the beginning of the directory. This can be useful when certain images are irrelevant to the current task or analysis.
    - Comfy dtype: INT
    - Python dtype: int
- select_every_nth
    - The 'select_every_nth' parameter is used to select images from the directory at fixed intervals defined by the parameter value. This helps streamline processing when only a subset of images is needed.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The 'IMAGE' output provides the loaded image data, which is the primary result of the node's operation. It represents the visual content that can be further manipulated or analyzed.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- MASK
    - The 'MASK' output provides binary or classification masks associated with the loaded images, where applicable. This is useful for tasks requiring segmentation or classification based on regions of interest within images.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- INT
    - The 'INT' output type, if present, may represent additional numerical data or metadata associated with the images. It can provide quantitative information that complements the visual data.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
