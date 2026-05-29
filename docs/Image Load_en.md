# Documentation
- Class name: WAS_Load_Image
- Category: WAS Suite/IO
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Load_Image node is designed to efficiently load and process images from a specified path or URL. It handles image conversion to the desired format and provides additional features such as creating masks from the alpha channel and extracting filenames.

# Input types
## Required
- image_path
    - The image_path parameter is critical as it determines the source of the image to be loaded. It can be a local file path or a URL for an online image. This parameter directly affects the node's ability to access and process image data.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- RGBA
    - The RGBA parameter specifies whether the image should be loaded with an alpha channel. This affects the transparency of the image, which can be very important for certain image processing tasks.
    - Comfy dtype: ['false', 'true']
    - Python dtype: str
- filename_text_extension
    - The filename_text_extension parameter determines whether to include the file extension in the filename text. This can be important for downstream processes that require specific naming conventions.
    - Comfy dtype: ['true', 'false']
    - Python dtype: str

# Output types
- image
    - The image output provides the loaded and processed image data. It is the foundational output for any subsequent image analysis or manipulation tasks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output is derived from the alpha channel of the image (if present) and is used to distinguish transparent areas in the image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- filename_text
    - The filename_text output is the text representation of the image filename. It can be used for logging, display, or other text-based operations.
    - Comfy dtype: TEXT_TYPE
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
