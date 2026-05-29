# Documentation
- Class name: Image Resize (rgthree)
- Category: rgthree
- Output node: False
- Repo Ref: https://github.com/rgthree/rgthree-comfy

Resize the image.

# Input types
## Required
- image
    - Comfy dtype: IMAGE
- measurement
    - Comfy dtype: COMBO
    - Options: `pixels`, `percentage`
- width
    - The width of the desired resize. A pixel value if measurement is 'pixels' or a 100% scale percentage value if measurement is 'percentage'. Passing '0' will calculate the dimension based on the height.
    - Comfy dtype: INT
    - Default: `0`
- height
    - Comfy dtype: INT
    - Default: `0`
- fit
    - 'crop' resizes so the image covers the desired width and height, and center-crops the excess, returning exactly the desired width and height.
'pad' resizes so the image fits inside the desired width and height, and fills the empty space returning exactly the desired width and height.
'contain' resizes so the image fits inside the desired width and height, and returns the image with it's new size, with one side liekly smaller than the desired.

Note, if either width or height is '0', the effective fit is 'contain'.
    - Comfy dtype: COMBO
    - Options: `crop`, `pad`, `contain`
- method
    - Comfy dtype: COMBO
    - Options: `nearest-exact`, `bilinear`, `area`, `bicubic`, `lanczos`

# Output types
- IMAGE
    - Comfy dtype: IMAGE
- WIDTH
    - Comfy dtype: INT
- HEIGHT
    - Comfy dtype: INT

# Source code
[View source repository on GitHub](https://github.com/rgthree/rgthree-comfy)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
