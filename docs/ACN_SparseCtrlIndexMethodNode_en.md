# Documentation
- Class name: SparseIndexMethodNode
- Category: Adv-ControlNet 🛂🅐🅒🅝/SparseCtrl
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

This node is used to retrieve sparse control networks by providing a series of unique indices. It ensures that the indices are valid integers and are used to reference specific elements in a larger dataset or structure.

# Input types
## Required
- indexes
    - The "indexes" parameter is a comma-separated string of integers used to uniquely identify elements in the dataset. It is critical to the node's operation, as it directly affects which elements are selected for processing.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- method
    - The output 'method' is an instance of SparseIndexMethod, customized based on the provided indices. It represents the core functionality of the SparseIndexMethodNode, enabling the selection and processing of specific elements in a sparse control network.
    - Comfy dtype: SPARSE_METHOD
    - Python dtype: SparseIndexMethod

# Usage tips
- Infra type: CPU

# Source code
```
class SparseIndexMethodNode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'indexes': ('STRING', {'default': '0'})}}
    RETURN_TYPES = ('SPARSE_METHOD',)
    FUNCTION = 'get_method'
    CATEGORY = 'Adv-ControlNet 🛂🅐🅒🅝/SparseCtrl'

    def get_method(self, indexes: str):
        idxs = []
        unique_idxs = set()
        str_idxs = [x.strip() for x in indexes.strip().split(',')]
        for str_idx in str_idxs:
            try:
                idx = int(str_idx)
                if idx in unique_idxs:
                    raise ValueError(f"'{idx}' is duplicated; indexes must be unique.")
                idxs.append(idx)
                unique_idxs.add(idx)
            except ValueError:
                raise ValueError(f"'{str_idx}' is not a valid integer index.")
        if len(idxs) == 0:
            raise ValueError(f'No indexes were listed in Sparse Index Method.')
        return (SparseIndexMethod(idxs),)
```