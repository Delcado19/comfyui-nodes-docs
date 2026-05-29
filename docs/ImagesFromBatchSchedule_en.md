# Documentation
- Class name: ImagesFromBatchSchedule
- Category: FizzNodes 📅🅕🅝/ScheduleNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The 'animate' method of the ImagesFromBatchSchedule node is designed to generate a sequence of images based on the provided text prompt and the current frame, within a specified maximum frame range. It processes the input text to create a sequence of prompts and selects the appropriate image for each frame, ensuring smooth transitions between frames in the animation.

# Input types
## Required
- images
    - The 'image' parameter is the collection of image data that the node uses to generate the animation. It is essential to the node's operation as it directly affects the output animation sequence.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- text
    - The 'text' parameter contains descriptive text that the node uses to interpret and generate animation prompts. It is important as it defines the content and style of the animation.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- current_frame
    - The 'current_frame' parameter specifies the frame the node is currently processing. It is important as it determines the starting point for selecting images for the animation.
    - Comfy dtype: INT
    - Python dtype: int
- max_frames
    - The 'max_frames' parameter sets the upper limit on the number of frames in the animation. It is important as it limits the operational range for the node to generate the animation sequence.
    - Comfy dtype: INT
    - Python dtype: int
- print_output
    - The 'print_output' parameter is a flag that, when set to True, instructs the node to print output to the console. This is useful for debugging purposes to view intermediate results of the animation generation process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- selected_images
    - The 'selected_images' output contains the images selected for the current frame of the animation. This output is important as it represents the visual result of the node's operation for the given frame.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/FizzleDorf/ComfyUI_FizzNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
