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
```
class CR_CycleImages:

    @classmethod
    def INPUT_TYPES(s):
        modes = ['Sequential']
        return {'required': {'mode': (modes,), 'image_list': ('IMAGE_LIST',), 'frame_interval': ('INT', {'default': 30, 'min': 0, 'max': 999, 'step': 1}), 'loops': ('INT', {'default': 1, 'min': 1, 'max': 1000}), 'current_frame': ('INT', {'default': 0.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('IMAGE', 'show_help')
    FUNCTION = 'cycle'
    CATEGORY = icons.get('Comfyroll/Animation/Legacy')

    def cycle(self, mode, image_list, frame_interval, loops, current_frame):
        image_params = list()
        if image_list:
            for _ in range(loops):
                image_params.extend(image_list)
        if mode == 'Sequential':
            current_image_index = current_frame // frame_interval % len(image_params)
            print(f'[Debug] CR Cycle Image:{current_image_index}')
            current_image_params = image_params[current_image_index]
            (image_alias, current_image_item) = current_image_params
            show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Cycler-Nodes#cr-cycle-images'
            return (current_image_item, show_help)
```