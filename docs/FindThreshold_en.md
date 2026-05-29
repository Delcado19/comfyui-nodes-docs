
# Documentation
- Class name: FindThreshold
- Category: Bmad/CV/Thresholding
- Output node: False

The FindThreshold node aims to identify the optimal threshold for image segmentation or binarization based on specific conditions. It dynamically adjusts threshold parameters to meet the required conditions, improving the adaptability and precision of image processing tasks.

# Input types
## Required
- src
    - The source image to which threshold processing needs to be applied. Essential for determining the optimal threshold for segmentation or binarization.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- start_at
    - The starting point of the threshold range. Defines the lower bound of the search space for finding the optimal threshold.
    - Comfy dtype: INT
    - Python dtype: int
- end_at
    - The end point of the threshold range. Sets the upper bound of the search space for optimal threshold determination.
    - Comfy dtype: INT
    - Python dtype: int
- thresh_type
    - Specifies the type of threshold processing to be applied. Affects how the threshold operation is performed on the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- downscale_factor
    - The scale factor for image reduction. Helps reduce computational load during the threshold search process.
    - Comfy dtype: INT
    - Python dtype: int
- condition
    - The condition that the thresholded image must satisfy. Used to evaluate and select the optimal threshold.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The image after applying the found optimal threshold. Represents the segmented or binarized version of the source image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class FindThreshold:
    """
    simple cond examples:
        cv.countNonZero(t)  > 100  # the number of non black pixels (white when using binary thresh type)
        (t.size - cv.countNonZero(t)) / t.size > .50 # the percentage of black pixels is higher than 50%
        # TODO can detect some shape(s) (requires optional inputs, and for current output maybe not that useful
    if none is found, returns the last
    """

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "src": ("IMAGE",),
                "start_at": ("INT", {"default": 1, "min": 1, "max": 255, "step": 1}),
                "end_at": ("INT", {"default": 255, "min": 1, "max": 255, "step": 1}),
                "thresh_type": (thresh_types, {"default": thresh_types[0]}),
                "downscale_factor": ("INT", {"default": 2, "min": 1, "step": 1}),
                "condition": ("STRING", {"multiline": True, "default":
                    "# Some expression that returns True or False\n"}),
            },
        }  # TODO optional inputs

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "search"
    CATEGORY = "Bmad/CV/Thresholding"

    def search(self, src, start_at, end_at, thresh_type, downscale_factor, condition):
        import cv2
        import numpy
        import math

        o_img = tensor2opencv(src, 1)
        height, width = tuple(o_img.shape)
        img = cv.resize(o_img, (height // downscale_factor, width // downscale_factor), interpolation=cv.INTER_AREA)

        max_v = max(start_at, end_at)
        min_v = min(start_at, end_at)
        range_to_check = range(min_v, max_v + 1)
        if end_at < start_at:
            range_to_check = range_to_check.__reversed__()

        condition = prepare_text_for_eval(condition)
        cond_check = eval(f"lambda t: {condition}", {
            "__builtins__": {},
            "tuple": tuple, "list": list,
            'm': math, 'cv': cv2, 'np': numpy
        }, {})

        thresh_value = end_at
        for i in range_to_check:
            _, thresh = cv.threshold(img, i, 255, thresh_types_map[thresh_type])
            if cond_check(thresh):
                thresh_value = i
                break

        _, img = cv.threshold(o_img, thresh_value, 255, thresh_types_map[thresh_type])
        img = opencv2tensor(img)
        return (img,)

```
