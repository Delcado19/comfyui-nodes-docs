
# Documentation
- Class name: `ShuffleChannels`
- Category: `image/filters`
- Output node: `False`

The ShuffleChannels node is designed to manipulate the color channels of an image. It allows the reassignment of color channels, including red, green, blue, and an optional alpha channel, mapping them to different color values or constant values. This feature can be used to create various visual effects or correct color channel misalignments in an image.

# Input types
## Required
- **`image`**
    - The input image to be processed. The color channels of this image will be rearranged according to the specified mapping.
    - Comfy dtype: `IMAGE`
    - Python dtype: `torch.Tensor`
- **`red`**
    - The mapping for the red channel in the output image. It can be mapped to another color channel or set to a constant value.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `str`
- **`green`**
    - The mapping for the green channel in the output image. It can be mapped to another color channel or set to a constant value.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `str`
- **`blue`**
    - The mapping for the blue channel in the output image. It can be mapped to another color channel or set to a constant value.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `str`
- **`alpha`**
    - Optional parameter specifying the mapping for the alpha (transparency) channel in the output image. It can be mapped to another channel, set to a constant value, or left unchanged.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `str`

# Output types
- **`image`**
    - The output image after rearranging the color channels according to the specified mapping.
    - Comfy dtype: `IMAGE`
    - Python dtype: `torch.Tensor`


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ShuffleChannels:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "image": ("IMAGE",),
                "red": (Channel_List, {"default": "red"}),
                "green": (Channel_List, {"default": "green"}),
                "blue": (Channel_List, {"default": "blue"}),
                "alpha": (Alpha_List, {"default": "none"}),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "shuffle"

    CATEGORY = "image/filters"

    def shuffle(self, image, red, green, blue, alpha):
        ch = 3 if alpha == "none" else 4
        t = torch.zeros((image.shape[0], image.shape[1], image.shape[2], ch), dtype=image.dtype, device=image.device)
        image_copy = image.detach().clone()
        
        ch_key = [red, green, blue, alpha]
        for i in range(ch):
            if ch_key[i] == "white":
                t[:,:,:,i] = 1
            elif ch_key[i] == "red":
                t[:,:,:,i] = image_copy[:,:,:,0]
            elif ch_key[i] == "green":
                t[:,:,:,i] = image_copy[:,:,:,1]
            elif ch_key[i] == "blue":
                t[:,:,:,i] = image_copy[:,:,:,2]
            elif ch_key[i] == "alpha":
                if image.shape[3] > 3:
                    t[:,:,:,i] = image_copy[:,:,:,3]
                else:
                    t[:,:,:,i] = 1
        
        return(t,)

```
