# Documentation
- Class name: SeargeSeparator
- Category: UI
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

The SeargeSeparator node is intended to serve as a placeholder in workflows, providing a means to separate and organize different process segments without performing any active computation or data manipulation. It acts as a structural component, allowing the workflow to have a clear and logical layout.

# Input types
## Required
- required
    - This parameter is a key component in the SeargeSeparator node, defining the structure of the input without specifying actual data requirements. It ensures the node integrates correctly within the workflow, contributing to overall organization.
    - Comfy dtype: COMBO[{}]
    - Python dtype: Dict[str, Any]

# Output types
- None
    - Since the node's FUNCTION is 'do_nothing', the output intentionally has no data. This reflects the node's role as a structural element rather than a data processing element.
    - Comfy dtype: None
    - Python dtype: None

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeSeparator:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {}}
    RETURN_TYPES = ()
    RETURN_NAMES = ()
    FUNCTION = 'do_nothing'
    CATEGORY = UI.CATEGORY_UI

    def do_nothing(self):
        return ()
```