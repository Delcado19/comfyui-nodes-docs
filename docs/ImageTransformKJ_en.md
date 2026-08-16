# Documentation
- Class name: ImageTransformKJ
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Interactive image transform node: crop, resize, pad, and rotate.  
Connect an image input — the preview appears automatically.  

Cropping:  
Click + drag to draw a crop region.  
Drag inside to move, drag edges/corners to resize.  
Right-click to delete a region.  
Ctrl to snap to grid.  
Shift + resize to constrain aspect ratio.  
Alt + resize to resize symmetrically.  

Padding:  
Shift + drag to adjust padding position.

Rotate button enables rotation cross (drag to rotate, right-click to reset).  
Set target_width/height to resize output (0 = keep original).  
Use keep_proportion to control how the image fits the target.  
Use extra_padding to add padding with color or edge fill (clamp/repeat/mirror).

# Input types
## Required
- image
    - The image or mask to transform.
    - Comfy dtype: COMFY_MATCHTYPE_V3
    - Python dtype: object
- target_width
    - Target output width. 0 = keep original dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- target_height
    - Target output height. 0 = keep original dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_method
    - Interpolation method for resizing.
    - Comfy dtype: COMBO
    - Python dtype: object
- keep_proportion
    - The keep_proportion input is used by this node during execution.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- divisible_by
    - The divisible_by input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- extra_padding
    - The extra_padding input is used by this node during execution.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- invert_crop
    - The invert_crop input is used by this node during execution.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- bboxes
    - The bboxes input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- mask
    - Optional mask to transform alongside the image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- output
    - The output output is produced by this node.
    - Comfy dtype: COMFY_MATCHTYPE_V3
    - Python dtype: object
- output_mask
    - The output_mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- bbox
    - The bbox output is produced by this node.
    - Comfy dtype: BBOX
    - Python dtype: object
- bbox_mask
    - The bbox_mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- width
    - Width of the output image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height of the output image.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
