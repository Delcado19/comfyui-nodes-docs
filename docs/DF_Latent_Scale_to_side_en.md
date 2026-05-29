
# Documentation
- Class name: DF_Latent_Scale_to_side
- Category: Derfuu_Nodes/Modded nodes/Latent
- Output node: False

This node resizes or modifies the latent representation based on a specified side length and edge (width, height, longest side, shortest side). It adjusts the dimensions while maintaining the aspect ratio of the latent representation, using various scaling methods with optional cropping.

# Input types
## Required
- latent
    - The latent representation to be scaled. This is the core input transformed according to the specified parameters.
    - Comfy dtype: LATENT
    - Python dtype: dict
- side_length
    - Specifies the target length for the selected edge (width, height, longest side, shortest side) of the latent representation, determining the scale to which the latent representation will be adjusted.
    - Comfy dtype: INT
    - Python dtype: int
- side
    - Determines which edge (width, height, longest side, shortest side) of the latent representation the side_length applies to, guiding the scaling process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scale_method
    - The method used to scale the latent representation dimensions. It affects the quality and characteristics of the output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- crop
    - Optional parameter specifying whether and how to crop the scaled latent representation, affecting the final output dimensions.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- latent
    - The scaled latent representation adjusted according to the specified side length, edge, scaling method, and cropping options.
    - Comfy dtype: LATENT
    - Python dtype: dict


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LatentScale_Side:
    scale_methods = scale_methods
    crop_methods = ["disabled", "center"]

    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "latent": Field.latent(),
                "side_length": Field.int(default=512),
                "side": Field.combo(["Longest", "Shortest", "Width", "Height"]),
                "scale_method": Field.combo(cls.scale_methods),
                "crop": Field.combo(cls.crop_methods)
            }
        }

    RETURN_TYPES = ("LATENT",)
    FUNCTION = "upscale"

    CATEGORY = TREE_LATENTS

    def upscale(self, latent, side_length: int, side: str, scale_method, crop):

        size = get_latent_size(latent, True)

        lat_width = size[0]
        lat_height = size[1]

        width = lat_width
        height = lat_height

        def determineSide(_side: str) -> tuple[int, int]:
            width, height = 0, 0
            if _side == "Width":
                heigh_ratio = lat_height / lat_width
                width = side_length
                height = heigh_ratio * width
            elif _side == "Height":
                width_ratio = lat_width / lat_height
                height = side_length
                width = width_ratio * height
            return width, height

        if side == "Longest":
            if width > height:
                width, height = determineSide("Width")
            else:
                width, height = determineSide("Height")
        elif side == "Shortest":
            if width < height:
                width, height = determineSide("Width")
            else:
                width, height = determineSide("Height")
        else:
            width, height = determineSide(side)


        width = math.ceil(width)
        height = math.ceil(height)

        cls = latent.copy()
        cls["samples"] = common_upscale(latent["samples"], width // 8, height // 8, scale_method, crop)
        return (cls,)

```
