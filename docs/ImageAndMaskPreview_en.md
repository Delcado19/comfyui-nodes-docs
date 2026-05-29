
# Documentation
- Class name: `ImageAndMaskPreview`
- Category: `KJNodes`
- Output node: `True`
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageAndMaskPreview node is designed to generate previews for images, with optional application of masks. It can adjust the opacity and color of the mask before overlaying it on the image, or return only the image or mask if one of them is not provided. This feature is very useful for visually checking the effect of a mask on an image in a workflow.

# Input types
## Required
- mask_opacity
    - Specifies the opacity level when applying the mask to the image, affecting the visibility of the mask overlay.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_color
    - Defines the color of the mask in the format 'R, G, B'. Used to colorize the mask before applying it to the image when both mask and image are provided.
    - Comfy dtype: STRING
    - Python dtype: str
- pass_through
    - Determines whether to directly return the processed preview or save it to a file. When true, returns the preview; otherwise, saves it.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- image
    - The image to which the mask may be applied. If only the image is provided, it will be returned as a preview.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask to apply to the image. If only the mask is provided, it will be converted to a preview format.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- composite
    - When both image and mask are provided, the node returns a composite image with the mask applied to the image using the specified opacity and color adjustments.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ui
    - Provides a UI element that displays the result based on the provided inputs, including the node's processed or saved image.


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageAndMaskPreview(SaveImage):
    def __init__(self):
        self.output_dir = folder_paths.get_temp_directory()
        self.type = "temp"
        self.prefix_append = "_temp_" + ''.join(random.choice("abcdefghijklmnopqrstupvxyz") for x in range(5))
        self.compress_level = 4

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "mask_opacity": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 1.0, "step": 0.01}),
                "mask_color": ("STRING", {"default": "255, 255, 255"}),
                "pass_through": ("BOOLEAN", {"default": False}),
             },
            "optional": {
                "image": ("IMAGE",),
                "mask": ("MASK",),                
            },
            "hidden": {"prompt": "PROMPT", "extra_pnginfo": "EXTRA_PNGINFO"},
        }
    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("composite",)
    FUNCTION = "execute"
    CATEGORY = "KJNodes"
    DESCRIPTION = """
Preview an image or a mask, when both inputs are used  
composites the mask on top of the image.
with pass_through on the preview is disabled and the  
composite is returned from the composite slot instead,  
this allows for the preview to be passed for video combine  
nodes for example.
"""

    def execute(self, mask_opacity, mask_color, pass_through, filename_prefix="ComfyUI", image=None, mask=None, prompt=None, extra_pnginfo=None):
        if mask is not None and image is None:
            preview = mask.reshape((-1, 1, mask.shape[-2], mask.shape[-1])).movedim(1, -1).expand(-1, -1, -1, 3)
        elif mask is None and image is not None:
            preview = image
        elif mask is not None and image is not None:
            mask_adjusted = mask * mask_opacity
            mask_image = mask.reshape((-1, 1, mask.shape[-2], mask.shape[-1])).movedim(1, -1).expand(-1, -1, -1, 3).clone()

            color_list = list(map(int, mask_color.split(', ')))
            print(color_list[0])
            mask_image[:, :, :, 0] = color_list[0] // 255 # Red channel
            mask_image[:, :, :, 1] = color_list[1] // 255 # Green channel
            mask_image[:, :, :, 2] = color_list[2] // 255 # Blue channel
            
            preview, = ImageCompositeMasked.composite(self, image, mask_image, 0, 0, True, mask_adjusted)
        if pass_through:
            return (preview, )
        return(self.save_images(preview, filename_prefix, prompt, extra_pnginfo))

```
