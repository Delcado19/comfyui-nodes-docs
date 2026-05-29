# Documentation
- Class name: SelectEveryNthMask
- Category: Video Helper Suite 🎥🅥🅗🅢/mask
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The `select_masks` method of the SelectEveryNthMask node aims to process a sequence of masks by selecting every n-th mask from the input. This is crucial for application scenarios where further processing or analysis of a subset of masks is required. The node effectively filters out the desired masks, ensuring that the output is a sequence of masks at the specified interval.

# Input types
## Required
- mask
    - The `mask` parameter is the mask sequence that the node will process. It plays a core role in the node's operation because it is the main input that determines subsequent outputs. The execution of the node and the generated masks are directly affected by the content and structure of the input mask sequence.
    - Comfy dtype: Tensor
    - Python dtype: torch.Tensor
- select_every_nth
    - The `select_every_nth` parameter determines the frequency of mask selection from the input sequence. It is an important part of the node's functionality because it dictates the interval for mask selection. The node's output is significantly influenced by this parameter as it controls the density of the returned mask sequence.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASK
    - The `MASK` output is a subset of the input masks selected based on the specified interval. It represents the filtered sequence of masks that the node has processed according to the user's selection criteria. This output is important for downstream tasks that require a reduced set of masks for improved efficiency or specificity.
    - Comfy dtype: Tensor
    - Python dtype: torch.Tensor
- count
    - The `count` output provides the number of masks selected from the input sequence. This is important information that indicates the efficiency of the selection process and can be used for further analysis or to inform subsequent steps in the workflow.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class SelectEveryNthMask:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'mask': ('MASK',), 'select_every_nth': ('INT', {'default': 1, 'min': 1, 'max': BIGMAX, 'step': 1})}}
    CATEGORY = 'Video Helper Suite 🎥🅥🅗🅢/mask'
    RETURN_TYPES = ('MASK', 'INT')
    RETURN_NAMES = ('MASK', 'count')
    FUNCTION = 'select_masks'

    def select_masks(self, mask: Tensor, select_every_nth: int):
        sub_mask = mask[0::select_every_nth]
        return (sub_mask, sub_mask.size(0))
```