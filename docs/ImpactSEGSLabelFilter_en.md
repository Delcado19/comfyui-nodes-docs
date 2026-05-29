# Documentation
- Class name: SEGSLabelFilter
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SEGSLabelFilter node is designed to process and filter segments based on a predefined set of labels. It allows including specific segment types and handles the classification of segments into two groups: those that match the specified labels and those that do not. This node plays a key role in segment selection for further analysis or processing within the ImpactPack utility suite.

# Input types
## Required
- segs
    - The 'segs' parameter is critical as it represents the set of segments to be filtered. It directly affects the node's operation by determining the input dataset for processing.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[Any, List[impact.core.SEG]]
- preset
    - The 'preset' parameter specifies the list of preset detection labels that the node will use to filter segments. It is a key component in defining the filtering criteria.
    - Comfy dtype: STRING
    - Python dtype: str
- labels
    - The 'labels' parameter is a multiline string that allows users to list the segment types they wish to allow. It is important because it sets the filtering criteria based on user input.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- filtered_SEGS
    - The 'filtered_SEGS' output contains the segments that match the specified labels, which is the primary result of the filtering process.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[Any, List[impact.core.SEG]]
- remained_SEGS
    - The 'remained_SEGS' output includes the segments that do not match the specified labels, serving as a secondary result of the node's operation.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[Any, List[impact.core.SEG]]

# Usage tips
- Infra type: CPU

# Source code
```
class SEGSLabelFilter:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'segs': ('SEGS',), 'preset': (['all'] + defs.detection_labels,), 'labels': ('STRING', {'multiline': True, 'placeholder': 'List the types of segments to be allowed, separated by commas'})}}
    RETURN_TYPES = ('SEGS', 'SEGS')
    RETURN_NAMES = ('filtered_SEGS', 'remained_SEGS')
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    @staticmethod
    def filter(segs, labels):
        labels = set([label.strip() for label in labels])
        if 'all' in labels:
            return (segs, (segs[0], []))
        else:
            res_segs = []
            remained_segs = []
            for x in segs[1]:
                if x.label in labels:
                    res_segs.append(x)
                elif 'eyes' in labels and x.label in ['left_eye', 'right_eye']:
                    res_segs.append(x)
                elif 'eyebrows' in labels and x.label in ['left_eyebrow', 'right_eyebrow']:
                    res_segs.append(x)
                elif 'pupils' in labels and x.label in ['left_pupil', 'right_pupil']:
                    res_segs.append(x)
                else:
                    remained_segs.append(x)
        return ((segs[0], res_segs), (segs[0], remained_segs))

    def doit(self, segs, preset, labels):
        labels = labels.split(',')
        return SEGSLabelFilter.filter(segs, labels)
```