# Documentation
- Class name: BatchCropResizeInplace
- Category: Mikey/Image
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The BatchCropResizeInplace node is designed to process a batch of image files by applying cropping, resizing, and upsampling operations. It efficiently handles image transformations in a directory, providing a streamlined approach to enhance image quality and dimensions, with the option to replace the original files.

# Input types
## Required
- image_directory
    - The image_directory parameter specifies the path to the directory containing the image files to be processed. It is essential for the node to locate and access the images for batch operations.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- subdirectories
    - The subdirectories parameter determines whether to include image files in subdirectories within the specified image_directory. This affects the scope of the batch processing.
    - Comfy dtype: COMBO[true, false]
    - Python dtype: str
- replace_original
    - The replace_original parameter indicates whether the original image files should be replaced with the processed images. This has significant implications for the permanence of the changes made.
    - Comfy dtype: COMBO[true, false]
    - Python dtype: str
- replace_suffix
    - The replace_suffix parameter defines the suffix to append to the image filename when the processed image does not replace the original file. This is important for distinguishing between original and processed images.
    - Comfy dtype: STRING
    - Python dtype: str
- upscale_method
    - The upscale_method parameter selects the algorithm used for upscaling images. The choice of method can significantly impact the quality of the upscaled image.
    - Comfy dtype: COMBO[nearest-exact, bilinear, area, bicubic]
    - Python dtype: str
- crop
    - The crop parameter determines the cropping method to apply to the images. It can disable cropping or apply center cropping based on the specified crop_amount.
    - Comfy dtype: COMBO[disabled, center]
    - Python dtype: str
- crop_amount
    - The crop_amount parameter specifies the proportion of the image to crop from each side. It is a key factor in controlling the extent of the cropping operation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- prompt
    - The prompt parameter is used for additional instructions or context that may be required for certain image processing tasks. It can influence how the node interprets and processes the images.
    - Comfy dtype: STRING
    - Python dtype: str
- extra_pnginfo
    - The extra_pnginfo parameter provides additional information that can be used to customize the PNG image processing process. It is particularly useful when specific metadata or attributes need to be considered.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- job_done
    - The job_done parameter indicates the completion of the batch processing and provides a summary of the number of images processed.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
