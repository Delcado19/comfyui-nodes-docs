
# Documentation
- Class name: SaveImageExtended
- Category: image
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaveImageExtended node extends the image saving functionality in ComfyUI, allowing more advanced customization and metadata processing. It supports saving images with custom filenames and paths, embedding metadata in image files, and optionally saving job-related data associated with the images. This node is suitable for advanced scenarios requiring detailed control over the image output process, including image metadata management and organization of saved images.

# Input types
## Required
- images
    - The collection of images to save. This parameter is critical as it directly affects the node's primary function - saving images to disk.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- filename_prefix
    - A prefix added to the filename for further customization, allowing more descriptive or organized file naming.
    - Comfy dtype: STRING
    - Python dtype: str
- filename_keys
    - Specifies keys from generation parameters to include in the filename, enabling dynamic naming based on specific generation attributes.
    - Comfy dtype: STRING
    - Python dtype: str
- foldername_prefix
    - A prefix for the folder name where images are saved, allowing organized grouping of images in the output directory.
    - Comfy dtype: STRING
    - Python dtype: str
- foldername_keys
    - Defines generation parameter keys to include in the folder name, facilitating organized storage based on specific attributes.
    - Comfy dtype: STRING
    - Python dtype: str
- delimiter
    - The character used to separate elements in filenames and folder names, allowing customization of file and folder naming schemes.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- save_job_data
    - Controls whether job-related data is saved alongside the image, enabling creation parameters or results to be associated with the saved image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- job_data_per_image
    - Determines whether job-related data is saved separately for each image or as a single file for all images, affecting the organization of job data.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- job_custom_text
    - Custom text to include in job-related data, providing a method to embed arbitrary information or annotations alongside the saved image.
    - Comfy dtype: STRING
    - Python dtype: str
- save_metadata
    - Controls whether metadata is embedded in the saved image. This affects the node's ability to include additional information such as prompts or custom data in the image file.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- counter_digits
    - Determines the number of digits for the image counter, affecting the format of the sequence number in the filename.
    - Comfy dtype: COMBO[INT]
    - Python dtype: str
- counter_position
    - Specifies the position of the counter in the filename, affecting the format and display of the sequence number.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- one_counter_per_folder
    - Specifies whether to use a single counter for all images in a folder or each folder has its own counter, affecting file organization.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- image_preview
    - Controls whether a preview of the saved image is displayed, enhancing the user's ability to visually verify the saved image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Optional
- positive_text_opt
    - Optional text related to the positive prompt, used to provide context or detailed information about image generation when saving job data.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_text_opt
    - Optional text related to the negative prompt, used to provide additional context or detailed information about image generation when saving job data.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- ui
    - Provides UI elements to display results, including saved images, their filenames, and subfolder paths, enhancing user interaction with the node output.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
