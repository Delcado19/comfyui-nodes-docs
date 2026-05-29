
# Documentation
- Class name: InstantID Mask Prepare Settings (JPS)
- Category: JPS Nodes/Settings
- Output node: False

InstantID Mask Prepare Settings (JPS) node prepares settings for image masking during the InstantID process. It configures various parameters such as mask type, resizing options, cropping, padding, and image interpolation, aiming to enhance and adjust input images for optimal InstantID generation.

# Input types
## Required
- mask_type
    - Specify the mask type to apply, such as "Mask Editor" or "Red from Image", which affects how the image is processed in InstantID.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: int
- resize_to
    - Determine the resizing strategy, such as "Keep Size" or "Resize to Target", which affects the dimensions of the processed image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resize_type
    - Define the resizing method, which can be "Crop" or "Stretch", to fit the specified dimensions.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- offset_width
    - Apply horizontal offset to the image, adjusting its position relative to the mask.
    - Comfy dtype: INT
    - Python dtype: int
- offset_height
    - Apply vertical offset to the image, adjusting its position relative to the mask.
    - Comfy dtype: INT
    - Python dtype: int
- crop_left
    - Specify the amount to crop from the left edge of the image, for customizing the visible area.
    - Comfy dtype: INT
    - Python dtype: int
- crop_right
    - Specify the amount to crop from the right edge of the image, for customizing the visible area.
    - Comfy dtype: INT
    - Python dtype: int
- crop_top
    - Specify the amount to crop from the top edge of the image, for customizing the visible area.
    - Comfy dtype: INT
    - Python dtype: int
- crop_bottom
    - Specify the amount to crop from the bottom edge of the image, for customizing the visible area.
    - Comfy dtype: INT
    - Python dtype: int
- padding_left
    - Add padding to the left side of the image, affecting the final image size.
    - Comfy dtype: INT
    - Python dtype: int
- padding_right
    - Add padding to the right side of the image, affecting the final image size.
    - Comfy dtype: INT
    - Python dtype: int
- padding_top
    - Add padding to the top of the image, affecting the final image size.
    - Comfy dtype: INT
    - Python dtype: int
- padding_bottom
    - Add padding to the bottom of the image, affecting the final image size.
    - Comfy dtype: INT
    - Python dtype: int
- interpolation
    - Specify the interpolation method for resizing, such as "lanczos" or "bilinear", which affects the quality of the resized image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sharpening
    - Apply sharpening to the image, enhancing its clarity and detail.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- imageprepare_settings
    - Comfy dtype: BASIC_PIPE
    - A tuple containing configured mask type, resizing, cropping, padding, and image processing parameters, ready for use in InstantID image preparation.
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class InstantIDMaskPrepare_Settings:

    masktypes = ["No Mask","Mask Editor","Mask Editor (inverted)","Red from Image","Green from Image","Blue from Image"]        

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "mask_type": (s.masktypes,),
                "resize_to": (["Resize to Target","Resize to Source","Keep Size"],),
                "resize_type": (["Crop","Stretch"],),
                "offset_width": ("INT", { "default": 0, "min": -99, "max": 99, "step": 1, "display": "number" }),
                "offset_height": ("INT", { "default": 0, "min": -99, "max": 99, "step": 1, "display": "number" }),
                "crop_left": ("INT", { "default": 0, "min": 0, "max": 90, "step": 1, "display": "number" }),
                "crop_right": ("INT", { "default": 0, "min": 0, "max": 90, "step": 1, "display": "number" }),
                "crop_top": ("INT", { "default": 0, "min": 0, "max": 90, "step": 1, "display": "number" }),
                "crop_bottom": ("INT", { "default": 0, "min": 0, "max": 90, "step": 1, "display": "number" }),
                "padding_left": ("INT", { "default": 0, "min": 0, "max": 500, "step": 1, "display": "number" }),
                "padding_right": ("INT", { "default": 0, "min": 0, "max": 500, "step": 1, "display": "number" }),
                "padding_top": ("INT", { "default": 0, "min": 0, "max": 500, "step": 1, "display": "number" }),
                "padding_bottom": ("INT", { "default": 0, "min": 0, "max": 500, "step": 1, "display": "number" }),
                "interpolation": (["lanczos", "nearest", "bilinear", "bicubic", "area", "nearest-exact"],),
                "sharpening": ("FLOAT", { "default": 0.0, "min": 0, "max": 1, "step": 0.05, "display": "number" }),
            }
        }
    RETURN_TYPES = ("BASIC_PIPE",)
    RETURN_NAMES = ("imageprepare_settings",)
    FUNCTION = "get_imageprepare"

    CATEGORY="JPS Nodes/Settings"

    def get_imageprepare(self,mask_type,resize_to,resize_type,offset_width,offset_height,crop_left,crop_right,crop_top,crop_bottom,padding_left,padding_right,padding_top,padding_bottom,interpolation,sharpening):

        resizeto = int (0)
        if(resize_to == "Keep Size"):
            resizeto = int(1)
        elif(resize_to == "Resize to Target"):
            resizeto = int(2)
        elif(resize_to == "Resize to Source"):
            resizeto = int(3)

        resizetype = "Crop"
        if(resize_type == "Stretch"):
            resizetype = "Stretch"

        masktype = int(0)
        if(mask_type == "Mask Editor"):
            masktype = int(1)
        elif(mask_type == "Mask Editor (inverted)"):
            masktype = int(2)
        elif(mask_type == "Red from Image"):
            masktype = int(3)
        elif(mask_type == "Green from Image"):
            masktype = int(4)
        elif(mask_type == "Blue from Image"):
            masktype = int(5)

        imageprepare_settings = masktype, resizeto, resizetype, offset_width,offset_height,crop_left,crop_right,crop_top,crop_bottom,padding_left,padding_right,padding_top,padding_bottom,interpolation,sharpening

        return(imageprepare_settings,)

```
