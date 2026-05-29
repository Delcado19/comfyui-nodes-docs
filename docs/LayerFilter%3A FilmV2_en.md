# Documentation
- Class name: FilmV2
- Category: 😺dzNodes/LayerFilter
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

An upgraded version of the Film node, adding the fastgrain method on top of the previous foundation, which speeds up grain generation by 10 times. The fastgrain code comes from the BetterFilmGrain section of github.com/spacepxl/ComfyUI-Image-Filters, thanks to the original author.

# Input types
## Required

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- center_x
    - Horizontal coordinate of the vignette and radial blur center, 0 is far left, 1 is far right, 0.5 is center.
    - Comfy dtype: FLOAT
    - Python dtype: float

- center_y
    - Vertical coordinate of the vignette and radial blur center, 0 is far left, 1 is far right, 0.5 is center.
    - Comfy dtype: FLOAT
    - Python dtype: float

- saturation
    - Color saturation, 1 is original value.
    - Comfy dtype: FLOAT
    - Python dtype: float

- vignette_intensity
    - Vignette intensity, 0 is original value.
    - Comfy dtype: FLOAT
    - Python dtype: float

- grain_power
    - Noise intensity. Higher values produce more visible noise.
    - Comfy dtype: FLOAT
    - Python dtype: float

- grain_scale
    - Noise grain size. Higher values produce larger grains.
    - Comfy dtype: FLOAT
    - Python dtype: float

- grain_sat
    - Noise color saturation. 0 is monochrome noise, higher values produce more visible color.
    - Comfy dtype: FLOAT
    - Python dtype: float

- grain_shadows
    - Noise shadow intensity. Higher values produce more visible shadows.
    - Comfy dtype: FLOAT
    - Python dtype: float

- grain_highs
    - Noise highlight intensity. Higher values produce more visible highlights.
    - Comfy dtype: FLOAT
    - Python dtype: float

- blur_strength
    - Blur intensity. 0 means no blur.
    - Comfy dtype: INT
    - Python dtype: int

- blur_focus_spread
    - Focus spread range. Higher values produce a larger sharp area.
    - Comfy dtype: FLOAT
    - Python dtype: float

- focal_depth
    - Simulated defocus focal distance. 0 means focus at farthest, 1 means focus at nearest. This setting only takes effect when depth_map is provided.
    - Comfy dtype: FLOAT
    - Python dtype: float

## Optional

- depth_map
    - Depth map input, used to simulate defocus effect. This is an optional input; if not provided, radial blur at image edges is simulated instead.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


# Output types

- image
    - Generated image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mask
    - Generated mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class FilmV2:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        grain_method_list = ["fastgrain", "filmgrainer", ]
        return {
            "required": {
                "image": ("IMAGE", ),  #
                "center_x": ("FLOAT", {"default": 0.5, "min": 0, "max": 1, "step": 0.01}),
                "center_y": ("FLOAT", {"default": 0.5, "min": 0, "max": 1, "step": 0.01}),
                "saturation": ("FLOAT", {"default": 1, "min": 0.01, "max": 3, "step": 0.01}),
                "vignette_intensity": ("FLOAT", {"default": 0.5, "min": 0, "max": 1, "step": 0.01}),
                "grain_method": (grain_method_list,),
                "grain_power": ("FLOAT", {"default": 0.15, "min": 0, "max": 1, "step": 0.01}),
                "grain_scale": ("FLOAT", {"default": 1, "min": 0.1, "max": 10, "step": 0.1}),
                "grain_sat": ("FLOAT", {"default": 0.5, "min": 0, "max": 1, "step": 0.01}),
                "filmgrainer_shadows": ("FLOAT", {"default": 0.6, "min": 0, "max": 1, "step": 0.01}),
                "filmgrainer_highs": ("FLOAT", {"default": 0.2, "min": 0, "max": 1, "step": 0.01}),
                "blur_strength": ("INT", {"default": 90, "min": 0, "max": 256, "step": 1}),
                "blur_focus_spread": ("FLOAT", {"default": 2.2, "min": 0.1, "max": 8, "step": 0.1}),
                "focal_depth": ("FLOAT", {"default": 0.9, "min": 0.0, "max": 1, "step": 0.01}),
            },
            "optional": {
                "depth_map": ("IMAGE",),  #
            }
        }

    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("image",)
    FUNCTION = 'film_v2'
    CATEGORY = '😺dzNodes/LayerFilter'

    def film_v2(self, image, center_x, center_y, saturation, vignette_intensity,
                  grain_method, grain_power, grain_scale, grain_sat, filmgrainer_shadows, filmgrainer_highs,
                  blur_strength, blur_focus_spread, focal_depth,
                  depth_map=None
                  ):

        ret_images = []

        for i in image:
            i = torch.unsqueeze(i, 0)
            _canvas = tensor2pil(i).convert('RGB')

            if saturation != 1:
                color_image = ImageEnhance.Color(_canvas)
                _canvas = color_image.enhance(factor= saturation)

            if blur_strength:
                if depth_map is not None:
                    depth_map = tensor2pil(depth_map).convert('RGB')
                    if depth_map.size != _canvas.size:
                        depth_map.resize((_canvas.size), Image.BILINEAR)
                    _canvas = depthblur_image(_canvas, depth_map, blur_strength, focal_depth, blur_focus_spread)
                else:
                    _canvas = radialblur_image(_canvas, blur_strength, center_x, center_y, blur_focus_spread * 2)

            if vignette_intensity:
                # adjust image gamma and saturation
                _canvas = gamma_trans(_canvas, 1 - vignette_intensity / 3)
                color_image = ImageEnhance.Color(_canvas)
                _canvas = color_image.enhance(factor= 1+ vignette_intensity / 3)
                # add vignette
                _canvas = vignette_image(_canvas, vignette_intensity, center_x, center_y)

            if grain_power:
                if grain_method == "fastgrain":
                    _canvas = image_add_grain(_canvas, grain_scale,grain_power, grain_sat, toe=0, seed=int(time.time()))
                elif grain_method == "filmgrainer":
                    _canvas = filmgrain_image(_canvas, grain_scale, grain_power, filmgrainer_shadows, filmgrainer_highs, grain_sat)

            ret_image = _canvas
            ret_images.append(pil2tensor(ret_image))

        log(f"{NODE_NAME} Processed {len(ret_images)} image(s).", message_type='finish')
        return (torch.cat(ret_images, dim=0),)
```