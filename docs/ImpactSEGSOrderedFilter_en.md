# Documentation
- Class name: SEGSOrderedFilter
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SEGSOrderedFilter node is designed to process and sort a collection of SEGS (Semantically Enriched Geographic Segments) based on specified criteria such as area, width, height, or coordinates. It allows users to define the sort order and the range of SEGS to extract. The node's functionality centers on organizing SEGS in a meaningful way for further analysis or visualization.

# Input types
## Required
- segs
    - The 'segs' parameter is the collection of SEGS objects that the node will process. It is critical as it forms the basis for all sorting operations performed by the node. This parameter directly affects the results of the node's execution, determining which SEGS are sorted and how they are ordered.
    - Comfy dtype: SEGS
    - Python dtype: List[impact.core.SEG]
- target
    - The 'target' parameter determines which attribute of the SEGS will be used for sorting. It can be the area, width, height of the cropped region, or the coordinates of its corners. This parameter is critical as it defines the sorting criterion, influencing the final sorted list of SEGS.
    - Comfy dtype: COMBO['area(=w*h)', 'width', 'height', 'x1', 'y1', 'x2', 'y2']
    - Python dtype: str
## Optional
- order
    - The 'order' parameter specifies whether sorting by the 'target' attribute will be in descending or ascending order. It is important as it controls the direction of the sort, which is critical for certain applications where the order of SEGS matters.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- take_start
    - The 'take_start' parameter defines the starting index from which the node will extract SEGS after sorting. It is important as it allows selecting a specific range of SEGS from the sorted list, which is useful for focusing on particular subsets of data.
    - Comfy dtype: INT
    - Python dtype: int
- take_count
    - The 'take_count' parameter specifies the number of SEGS to extract from the sorted list, starting from the 'take_start' index. It is important as it determines the size of the extracted SEGS subset, which is important for managing the volume of data being processed.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- filtered_SEGS
    - The 'filtered_SEGS' output contains the subset of SEGS sorted and selected according to the 'take_start' and 'take_count' parameters. It is important as it represents the primary result of the node's operation, providing a filtered view of the input data.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[impact.core.SEG, List[impact.core.SEG]]
- remained_SEGS
    - The 'remained_SEGS' output includes the SEGS not selected by the node's filtering process. These are the remaining SEGS after extracting the 'filtered_SEGS'. This output is important for applications that need to consider both selected and unselected data.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[impact.core.SEG, List[impact.core.SEG]]

# Usage tips
- Infra type: CPU

# Source code
```
class SEGSOrderedFilter:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'segs': ('SEGS',), 'target': (['area(=w*h)', 'width', 'height', 'x1', 'y1', 'x2', 'y2'],), 'order': ('BOOLEAN', {'default': True, 'label_on': 'descending', 'label_off': 'ascending'}), 'take_start': ('INT', {'default': 0, 'min': 0, 'max': sys.maxsize, 'step': 1}), 'take_count': ('INT', {'default': 1, 'min': 0, 'max': sys.maxsize, 'step': 1})}}
    RETURN_TYPES = ('SEGS', 'SEGS')
    RETURN_NAMES = ('filtered_SEGS', 'remained_SEGS')
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, segs, target, order, take_start, take_count):
        segs_with_order = []
        for seg in segs[1]:
            x1 = seg.crop_region[0]
            y1 = seg.crop_region[1]
            x2 = seg.crop_region[2]
            y2 = seg.crop_region[3]
            if target == 'area(=w*h)':
                value = (y2 - y1) * (x2 - x1)
            elif target == 'width':
                value = x2 - x1
            elif target == 'height':
                value = y2 - y1
            elif target == 'x1':
                value = x1
            elif target == 'x2':
                value = x2
            elif target == 'y1':
                value = y1
            else:
                value = y2
            segs_with_order.append((value, seg))
        if order:
            sorted_list = sorted(segs_with_order, key=lambda x: x[0], reverse=True)
        else:
            sorted_list = sorted(segs_with_order, key=lambda x: x[0], reverse=False)
        result_list = []
        remained_list = []
        for (i, item) in enumerate(sorted_list):
            if take_start <= i < take_start + take_count:
                result_list.append(item[1])
            else:
                remained_list.append(item[1])
        return ((segs[0], result_list), (segs[0], remained_list))
```