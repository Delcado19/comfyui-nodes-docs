# Documentation
- Class name: ImageAutoCrop
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Automatically cutout the subject and crop the image according to the mask. The background color, aspect ratio and size of the generated image can be specified. This node is designed for generating image materials for training models.
*Refer to [SegmentAnythingUltra](https://github.com/chflame163/ComfyUI_LayerStyle/blob/main/README_CN.MD#SegmentAnythingUltra) and [RemBgUltra](https://github.com/chflame163/ComfyUI_LayerStyle/blob/main/README_CN.MD#RemBgUltra) node model installation methods to install models.

# Input types
## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- background_color
    - Background color.
    - Comfy dtype: STRING
    - Python dtype: str

- aspect_ratio
    - Output aspect ratio. Common aspect ratios are provided here, "custom" for custom ratio.
    - Comfy dtype: STRING
    - Python dtype: str

- proportional_width
    - Ratio width. If aspect_ratio option is not "custom", this setting will be ignored.
    - Comfy dtype: INT
    - Python dtype: int

- proportional_height
    - Ratio height. If aspect_ratio option is not "custom", this setting will be ignored.
    - Comfy dtype: INT
    - Python dtype: int

- scale_to_longest_side
    - Allow scaling by longest side length.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

- longest_side
    - When scale_to_longest_side is set to True, this will be the length of the image's longest side.
    - Comfy dtype: INT
    - Python dtype: int

- detect
    - Detection method, min_bounding_rect is minimum bounding rectangle, max_inscribed_rect is maximum inscribed rectangle.
    - Comfy dtype: STRING
    - Python dtype: str

- border_reserve
    - Keep border. Expand cropping range beyond the detected mask subject area.
    - Comfy dtype: INT
    - Python dtype: int

- ultra_detail_range
    - Ultra-fine processing range for mask edges, 0 to disable, saves generation time.
    - Comfy dtype: INT
    - Python dtype: int

- matting_method
    - Mask generation method. Two methods: Segment Anything and RMBG 1.4. RMBG 1.4 runs faster.
    - Comfy dtype: STRING
    - Python dtype: str

- sam_model
    - Select the SAM model used by Segment Anything.
    - Comfy dtype: STRING
    - Python dtype: str

- grounding_dino_model
    - Select the grounding_dino model used by Segment Anything.
    - Comfy dtype: STRING
    - Python dtype: str

- sam_threshold
    - Segment Anything threshold.
    - Comfy dtype: FLOAT
    - Python dtype: float

- sam_prompt
    - Segment Anything prompt.
    - Comfy dtype: STRING
    - Python dtype: str


# Output types

- cropped_image
    - Cropped and background-replaced image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- box_preview
    - Crop position preview.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- cropped_mask
    - Cropped mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
