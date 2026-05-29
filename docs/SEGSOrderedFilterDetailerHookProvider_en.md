# Documentation
- Class name: SEGSOrderedFilterDetailerHookProvider
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SEGSOrderedFilterDetailerHookProvider node aims to apply specific filtering and sorting mechanisms to a set of segments. It allows customizing filtering criteria based on area size and spatial coordinates, and provides an option to sort the results in ascending or descending order. This node is particularly suitable for refining the output of segmentation tasks to meet specific requirements.

# Input types
## Required
- target
    - The target parameter defines the criteria for filtering segments. It can be based on the area, width, height, or corner coordinates of the segments. This parameter is critical as it directly affects which segments are selected for further processing.
    - Comfy dtype: COMBO[area(=w*h), width, height, x1, y1, x2, y2]
    - Python dtype: Union[str, int, Tuple[int, int]]
- order
    - The sort parameter determines the sorting order of the filtered segments. When set to True, the results are sorted in descending order; when set to False, they are sorted in ascending order. This is important for applications that require a specific order of segments.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- take_start
    - The take_start parameter specifies the starting index of the range of segments to consider. It is especially useful when only a subset of the filtered results is needed, allowing efficient data processing and reducing unnecessary computation.
    - Comfy dtype: INT
    - Python dtype: int
- take_count
    - The take_count parameter defines the number of segments to take from the filtered results starting from the index specified by take_start. It is crucial for controlling the amount of data processed and can be used to limit the output to a manageable size.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- DETAILER_HOOK
    - The output of the SEGSOrderedFilterDetailerHookProvider node is a refinement hook that encapsulates the logic for applying the specified filtering and sorting operations. This hook can be used downstream in the processing pipeline to further refine and organize the segmentation results.
    - Comfy dtype: DETAILER_HOOK
    - Python dtype: SEGSOrderedFilterDetailerHook

# Usage tips
- Infra type: CPU

# Source code
```
class SEGSOrderedFilterDetailerHookProvider:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'target': (['area(=w*h)', 'width', 'height', 'x1', 'y1', 'x2', 'y2'],), 'order': ('BOOLEAN', {'default': True, 'label_on': 'descending', 'label_off': 'ascending'}), 'take_start': ('INT', {'default': 0, 'min': 0, 'max': sys.maxsize, 'step': 1}), 'take_count': ('INT', {'default': 1, 'min': 0, 'max': sys.maxsize, 'step': 1})}}
    RETURN_TYPES = ('DETAILER_HOOK',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, target, order, take_start, take_count):
        hook = hooks.SEGSOrderedFilterDetailerHook(target, order, take_start, take_count)
        return (hook,)
```