# Documentation
- Class name: CR_OutputFlowFrames
- Category: Comfyroll/Animation/IO
- Output node: True
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_OutputFlowFrames node is designed to manage the output process of image frames, facilitating the saving of images to specified directories. It supports direct image output and interpolated images, ensuring smooth transitions between frames. This node plays a key role in the final stage of the image processing pipeline, focusing on efficiently storing and organizing the generated frames.

# Input types
## Required
- output_folder
    - The output_folder parameter specifies the directory where the image frames will be saved. This is crucial for organizing the output and ensuring the frames are stored in the correct location.
    - Comfy dtype: STRING
    - Python dtype: str
- current_image
    - The current_image parameter represents the current frame image to be saved. It is a basic input to the node's operation, as it is the actual content that will be written to the file system.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- current_frame
    - The current_frame parameter indicates the current frame number being processed. It is essential for naming and sorting the saved images in a sequence that reflects the processing order.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- filename_prefix
    - The filename_prefix parameter is used to define the starting part of the filename for saved images. It helps in creating a consistent naming convention for output files, which can be beneficial for later identification and processing.
    - Comfy dtype: STRING
    - Python dtype: str
- interpolated_img
    - The interpolated_img parameter provides the option to include interpolated images in the output. This can enhance the visual transition between frames, providing a smoother animation effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- output_path
    - The output_path parameter allows specifying an alternative path to save images, overriding the default output directory. It provides flexibility in managing the storage location of output images.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- ui
    - The ui parameter in the output contains information about the saved images, including their filenames, subfolder locations, and output type. This data can be used for user interface display or further processing.
    - Comfy dtype: COMBO[Dict[str, List[Dict[str, Union[str, Dict[str, str]]]]]]
    - Python dtype: Dict[str, List[Dict[str, Union[str, Dict[str, str]]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
