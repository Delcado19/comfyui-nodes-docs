
# Documentation
- Class name: DummyLatentOut
- Category: KJNodes/misc
- Output node: True

The DummyLatentOut node provides a simple latent data passthrough function, allowing visualization of workflow output in the user interface without persistent data storage. This node is primarily used for displaying output in workflows where saving data is not required.

# Input types
## Required
- latent
    - This parameter directly passes latent data, enabling output visualization without saving data. It is the core input of the node, determining the final displayed content.
    - Comfy dtype: LATENT
    - Python dtype: tuple

# Output types
- latent
    - Outputs the same latent data as the input, allowing seamless integration into workflows that require visualization but not data storage. This design enables the node to provide necessary visualization without affecting the data flow.
    - Comfy dtype: LATENT
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DummyLatentOut:

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
            "latent": ("LATENT",),
            }
        }

    RETURN_TYPES = ("LATENT",)
    FUNCTION = "dummy"
    CATEGORY = "KJNodes/misc"
    OUTPUT_NODE = True
    DESCRIPTION = """
Does nothing, used to trigger generic workflow output.    
A way to get previews in the UI without saving anything to disk.
"""

    def dummy(self, latent):
        return (latent,)

```
