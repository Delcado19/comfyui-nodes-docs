
# Documentation
- Class name: SaltBatchCropDataExtractor
- Category: SALT/Masking/Process
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltBatchCropDataExtractor node processes a batch of crop data, extracting specific indexed crop information and dimensions from the batch. It is designed to facilitate manipulation and analysis of crop data by providing detailed metrics such as width, height, and boundary coordinates.

# Input types
## Required
- crop_data_batch
    - The batch of crop data to be processed. It is critical for determining the specific crop information and dimensions to extract.
    - Comfy dtype: CROP_DATA_BATCH
    - Python dtype: List[Tuple[Tuple[int, int], Tuple[int, int, int, int]]]
- index
    - The index within the crop data batch from which to extract crop information. It determines the specific crop data to be processed.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- crop_data_batch
    - The extracted crop data at the specified index, including dimensions and boundary coordinates.
    - Comfy dtype: CROP_DATA_BATCH
    - Python dtype: List[Tuple[Tuple[int, int], Tuple[int, int, int, int]]]
- width
    - The width of the crop region.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height of the crop region.
    - Comfy dtype: INT
    - Python dtype: int
- top
    - The top boundary coordinate of the crop region.
    - Comfy dtype: INT
    - Python dtype: int
- left
    - The left boundary coordinate of the crop region.
    - Comfy dtype: INT
    - Python dtype: int
- right
    - The right boundary coordinate of the crop region.
    - Comfy dtype: INT
    - Python dtype: int
- bottom
    - The bottom boundary coordinate of the crop region.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltBatchCropDataExtractor:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "crop_data_batch": ("CROP_DATA_BATCH",),
                "index": ("INT", {"min": 0}),
            }
        }

    RETURN_TYPES = ("CROP_DATA_BATCH", "INT", "INT", "INT", "INT", "INT", "INT")
    RETURN_NAMES = ("crop_data_batch", "width", "height", "top", "left", "right", "bottom")

    FUNCTION = "extract"
    CATEGORY = f"{NAME}/Masking/Process"

    def extract(self, crop_data_batch, index):
        if index < 0 or index >= len(crop_data_batch):
            raise ValueError("Index out of range")

        try:
            crop_size, (crop_left, crop_top, crop_right, crop_bottom) = crop_data_batch[index]
            width = crop_right - crop_left
            height = crop_bottom - crop_top
            single_crop_data = [(crop_size, (crop_left, crop_top, crop_right, crop_bottom))]
            return single_crop_data, width, height, crop_top, crop_left, crop_right, crop_bottom
        except Exception as e:
            print(e)
            return [((0, 0), (0, 0, 0, 0))], 0, 0, 0, 0, 0, 0

```
