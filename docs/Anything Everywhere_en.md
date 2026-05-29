
# Documentation
- Class name: Anything Everywhere
- Category: everywhere
- Output node: True

This node is designed to process and forward any type of input to a specified message handler, making it highly generic for various data types and structures. It can handle multiple optional inputs simultaneously, enabling flexible data processing and communication within the system.

# Input types
## Required

## Optional
- anything
    - Represents any optional input that the node can handle. This flexibility allows the node to process various data types and structures, thus adapting to different use cases.
    - Comfy dtype: *
    - Python dtype: object

# Output types
This node has no output types.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class AnythingEverywhere(Base):
    @classmethod
    def INPUT_TYPES(s):
        return {"required":{}, 
                "optional": { "anything" : ("*", {}), },
                 "hidden": {"id":"UNIQUE_ID"} }

    def func(self, id, **kwargs):
        for key in kwargs:
            message(id, kwargs[key],)
        return ()

```
