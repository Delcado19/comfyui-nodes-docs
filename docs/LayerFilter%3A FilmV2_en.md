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
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
