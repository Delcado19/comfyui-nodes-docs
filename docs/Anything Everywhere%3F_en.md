
# Documentation
- Class name: Anything Everywhere?
- Category: everywhere
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Anything Everywhere? node is a highly flexible component designed to handle various types of input data. It can accept any form of input and apply operations to it, making it highly adaptable in different use cases. The core advantage of this node is its universality, as it can handle diverse data formats and structures, providing users with a powerful tool to process complex data flows.

# Input types
## Optional
- anything
    - This is the core input parameter of the node, which can accept any type of data. Its flexibility allows users to handle various data formats and structures, thus functioning in diverse application scenarios.
    - Comfy dtype: *
    - Python dtype: Any
- title_regex
    - This parameter accepts a regular expression in string form for matching titles. It enables users to filter and select based on title patterns, enhancing the node's applicability in specific contexts.
    - Comfy dtype: STRING
    - Python dtype: str
- input_regex
    - This parameter accepts a regular expression in string form for matching input data. It allows users to filter and select based on input patterns, further improving the node's versatility.
    - Comfy dtype: STRING
    - Python dtype: str
- group_regex
    - This parameter accepts a regular expression in string form for matching groups. It enables users to filter and select based on group patterns, expanding the node's range of practicality.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
The node has no specific output type.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class AnythingSomewhere(Base):
    @classmethod
    def INPUT_TYPES(s):
        return {"required":{}, 
                "optional": { 
                    "anything" : ("*", {}), 
                    "title_regex" : ("STRING", {"default":".*"}),
                    "input_regex" : ("STRING", {"default":".*"}),
                    "group_regex" : ("STRING", {"default":".*"}),
                    },
                 "hidden": {"id":"UNIQUE_ID"} }

    def func(self, id, title_regex=None, input_regex=None, group_regex=None, **kwargs):
        for key in kwargs:
            message(id, kwargs[key],)
        return ()

```
