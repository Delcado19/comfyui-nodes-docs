# Documentation
- Class name: AssembleSEGS
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The AssembleSEGS node is designed to combine the segmentation header and elements into a coherent structure. It plays a key role in the process of aggregating segmentation data, ensuring that the header and elements are correctly assembled into a complete segmentation set.

# Input types
## Required
- seg_header
    - The 'seg_header' parameter is essential for defining the metadata of the segmentation process. It determines how the segmentation elements are interpreted and structured in the final output.
    - Comfy dtype: SEGS_HEADER
    - Python dtype: List[str]
- seg_elt
    - The 'seg_elt' parameter is required because it contains the actual data elements that need to be segmented. It influences the execution of the node by determining what the final segmentation will contain.
    - Comfy dtype: SEG_ELT
    - Python dtype: List[Any]

# Output types
- output
    - The output of the AssembleSEGS node is a structured segmentation set, which is the result of combining the segmentation header and elements. It is important because it represents the final form of the segmented data, ready for further processing or analysis.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[List[str], List[Any]]

# Usage tips
- Infra type: CPU

# Source code
```
class AssembleSEGS:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'seg_header': ('SEGS_HEADER',), 'seg_elt': ('SEG_ELT',)}}
    INPUT_IS_LIST = True
    RETURN_TYPES = ('SEGS',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, seg_header, seg_elt):
        return ((seg_header[0], seg_elt),)
```