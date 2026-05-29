# Documentation
- Class name: CR_CycleImages
- Category: Comfyroll/Animation/Legacy
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_CycleImages node is designed to cycle through a list of images, providing a mechanism to display images in sequence at a specified frame interval. It is particularly useful for creating animations or slideshows from a collection of images. The node operates by iterating through the image list a number of times determined by the 'loops' parameter, and selecting the current image based on the 'current_frame' and 'frame_interval' parameters.

# Input types
## Required
- mode
    - The mode parameter determines the order in which images are cycled. Currently, only the 'Sequential' mode is supported, which ensures that images are displayed in the order they appear in the image list.
    - Comfy dtype: STRING
    - Python dtype: str
- image_list
    - image_list is the collection of images to be cycled through. Each entry in the list should be a tuple containing the image alias and the image object itself.
    - Comfy dtype: IMAGE_LIST
    - Python dtype: List[Tuple[str, Image.Image]]
## Optional
- frame_interval
    - The frame_interval parameter specifies the frame delay between the display of each image. It is crucial for controlling the speed of the animation or slideshow.
    - Comfy dtype: INT
    - Python dtype: int
- loops
    - The loops parameter determines how many times the image list will be cycled through. It allows control over the duration of the animation or slideshow.
    - Comfy dtype: INT
    - Python dtype: int
- current_frame
    - The current_frame parameter indicates the current position in the cycle, used to determine which image is displayed at any given moment.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The IMAGE output provides the current cycled image based on the input parameters. It is the visual result of the node's operation and is central to the node's functionality.
    - Comfy dtype: IMAGE
    - Python dtype: Image.Image
- show_help
    - The show_help output provides a URL link to a documentation page for further help or detailed information on using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
