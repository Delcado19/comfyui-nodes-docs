
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
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
