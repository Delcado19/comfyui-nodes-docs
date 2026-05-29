# Documentation
- Class name: MaskBoxDetect
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Detect the region where the mask is located and output its position and size.

# Input types

## Required

- mask
    - Mask image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- detect
    - Detection method: min_bounding_rect is the minimum bounding rectangle of the large shape, max_inscribed_rect is the maximum inscribed rectangle of the large shape, mask_area is the valid pixel area of the mask.
    - Optional values: ['min_bounding_rect', 'max_inscribed_rect', 'mask_area']
    - Comfy dtype: STRING
    - Python dtype: str

- x_adjust
    - Horizontal offset correction after detection.
    - Comfy dtype: INT
    - Python dtype: int

- y_adjust
    - Vertical offset correction after detection.
    - Comfy dtype: INT
    - Python dtype: int

- scale_adjust
    - Scale offset correction after detection.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types

- box_preview
    - Detection result preview. Red indicates the detected result, green indicates the output result after correction.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- x_percent
    - X-axis percentage position.
    - Comfy dtype: FLOAT
    - Python dtype: float

- y_percent
    - Y-axis percentage position.
    - Comfy dtype: FLOAT
    - Python dtype: float

- width
    - Box width.
    - Comfy dtype: INT
    - Python dtype: int

- height
    - Box height.
    - Comfy dtype: INT
    - Python dtype: int

- x
    - Top-left corner x-coordinate output.
    - Comfy dtype: INT
    - Python dtype: int

- y
    - Top-left corner y-coordinate output.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```python
class MaskBoxDetect:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        detect_mode = ['min_bounding_rect', 'max_inscribed_rect', 'mask_area']
        return {
            "required": {
                "mask": ("MASK", ),
                "detect": (detect_mode,),  # 探测类型：最小外接矩形/最大内接矩形/掩码区域
                "x_adjust": ("INT", {"default": 0, "min": -9999, "max": 9999, "step": 1}),  # x轴修正
                "y_adjust": ("INT", {"default": 0, "min": -9999, "max": 9999, "step": 1}),  # y轴修正
                "scale_adjust": ("FLOAT", {"default": 1.0, "min": 0.01, "max": 100, "step": 0.01}), # 比例修正
            },
            "optional": {
            }
        }

    RETURN_TYPES = ("IMAGE", "FLOAT", "FLOAT", "INT", "INT", "INT", "INT",)
    RETURN_NAMES = ("box_preview", "x_percent", "y_percent", "width", "height", "x", "y",)
    FUNCTION = 'mask_box_detect'
    CATEGORY = '😺dzNodes/LayerMask'

    def mask_box_detect(self, mask, detect, x_adjust, y_adjust, scale_adjust):

        if mask.dim() == 2:
            mask = torch.unsqueeze(mask, 0)

        if mask.shape[0] > 0:
            mask = torch.unsqueeze(mask[0], 0)

        _mask = mask2image(mask).convert('RGB')

        _mask = gaussian_blur(_mask, 20).convert('L')
        x = 0
        y = 0
        width = 0
        height = 0

        if detect == "min_bounding_rect":
            (x, y, width, height) = min_bounding_rect(_mask)
        elif detect == "max_inscribed_rect":
            (x, y, width, height) = max_inscribed_rect(_mask)
        else:
            (x, y, width, height) = mask_area(_mask)
        log(f"{NODE_NAME}: Box detected. x={x},y={y},width={width},height={height}")
        _width = width
        _height = height
        if scale_adjust != 1.0:
            _width = int(width * scale_adjust)
            _height = int(height * scale_adjust)
            x = x - int((_width - width) / 2)
            y = y - int((_height - height) / 2)
        x += x_adjust
        y += y_adjust
        x_percent = (x + _width / 2) / _mask.width * 100
        y_percent = (y + _height / 2) / _mask.height * 100
        preview_image = tensor2pil(mask).convert('RGB')
        preview_image = draw_rect(preview_image, x - x_adjust, y - y_adjust, width, height, line_color="#F00000", line_width=int(preview_image.height / 60))
        preview_image = draw_rect(preview_image, x, y, width, height, line_color="#00F000", line_width=int(preview_image.height / 40))
        log(f"{NODE_NAME} Processed.", message_type='finish')
        return ( pil2tensor(preview_image), round(x_percent, 2), round(y_percent, 2), _width, _height, x, y,)
```