# Documentation
- Class name: CR_CycleImagesSimple
- Category: Animation
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_CycleImagesSimple node is designed to cycle through a list of images sequentially or randomly to create animation effects. It allows specifying frame intervals, loop counts, and the current frame to control the animation sequence. This node is particularly suitable for generating dynamic visual content from a set of images.

# Input types
## Required
- mode
    - The mode parameter determines the order of image cycling. It can be set to 'Sequential' to cycle images in a specific order, or random mode may be supported in future updates. This setting directly affects the animation sequence and user experience.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- frame_interval
    - The frame_interval parameter specifies the number of frames between each image change in the animation. It affects the speed of image cycling and is crucial for properly controlling the animation rhythm.
    - Comfy dtype: INT
    - Python dtype: int
- loops
    - The loops parameter sets the number of times the animation repeats. It is important for defining the duration of the animation sequence and can be used to create continuous or finite animations.
    - Comfy dtype: INT
    - Python dtype: int
- current_frame
    - The current_frame parameter indicates the starting point of the animation. It is crucial for synchronizing the animation with other elements or for setting a specific point in the animation sequence to start.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- image_1
    - The image_1 parameter is the first image that can be included in the animation cycle. It is important because it helps enrich the content and diversity of the animation sequence.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- image_list_simple
    - The image_list_simple parameter is a list of images that can be included in the animation cycle. It provides flexibility when adding multiple images to the sequence and enhances the overall animation effect.
    - Comfy dtype: IMAGE_LIST_SIMPLE
    - Python dtype: List[PIL.Image.Image]

# Output types
- IMAGE
    - The IMAGE output provides the current image in the animation cycle. It is the primary visual result of the node operation and is essential for displaying the animation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- show_help
    - The show_help output provides a URL to the documentation for further help and information about the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
