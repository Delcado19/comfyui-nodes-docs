# Documentation
- Class name: CR_LoadFlowFrames
- Category: Comfyroll/Animation/IO
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_LoadFlowFrames node is designed to load and process image sequences for animation purposes. It sorts and selects frames in a directory based on user-defined criteria, ensuring a smooth workflow for frame-by-frame animation operations.

# Input types
## Required
- input_folder
    - The input_folder parameter specifies the directory containing the image sequence. It plays a key role in determining the source of animation images.
    - Comfy dtype: STRING
    - Python dtype: str
- sort_by
    - The sort_by parameter determines the method for sorting image files in the input folder. It is essential for maintaining the correct order of frames in the animation sequence.
    - Comfy dtype: STRING
    - Python dtype: str
- current_frame
    - The current_frame parameter indicates the starting frame for the image loading process. It is crucial for controlling where the node begins its operation in the animation sequence.
    - Comfy dtype: INT
    - Python dtype: int
- skip_start_frames
    - The skip_start_frames parameter allows users to skip a certain number of frames at the beginning of the sequence. This is useful for excluding initial frames not needed for the animation.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- input_path
    - The optional input_path parameter provides a specific path to an image file if it is not in the default input directory. It offers flexibility in file location for the animation process.
    - Comfy dtype: STRING
    - Python dtype: str
- file_pattern
    - The file_pattern parameter is used to define the pattern for selecting files within the input folder. It helps filter specific types of image files required for the animation.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- current_image
    - The current_image output provides the latest frame loaded from the image sequence. It is important for ongoing animation operations and display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- previous_image
    - The previous_image output provides the frame preceding the current frame in the sequence. It can be used for comparison or transition effects in animation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- current_frame
    - The current_frame output indicates the frame number currently being processed. This information is useful for tracking progress in the animation sequence.
    - Comfy dtype: INT
    - Python dtype: int
- show_help
    - The show_help output provides a link to documentation for further guidance on how to use the node. This is particularly helpful for users seeking more information about the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
