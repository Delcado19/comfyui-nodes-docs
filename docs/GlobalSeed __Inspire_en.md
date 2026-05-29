
# Documentation
- Class name: GlobalSeed __Inspire
- Category: InspirePack/Prompt
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The GlobalSeed node is a component in the Inspire package that manages and operates the global seed values used by nodes in a workflow. It allows setting a seed value, selecting an operation to modify the seed (such as increase, decrease, randomize), and controlling the seed application mode (before or after generation). This feature is crucial for ensuring consistency, reproducibility, and output variation in the generation process.

# Input types
## Required
- value
    - Specify the initial seed value. It is essential for initializing the seed operation process and affects the starting point of any seed‑based operation.
    - Comfy dtype: INT
    - Python dtype: int
- mode
    - Determine whether the seed operation occurs before or after the generation process, affecting how and when the seed value influences the workflow.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- action
    - Define the operation performed on the seed value (such as fixed, increment, decrement, randomize), deciding how the seed changes over time or across nodes.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- last_seed
    - Save the last used seed value, allowing tracking and possibly restoring to a previous state.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
This node has no output types.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class GlobalSeed:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "value": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                "mode": ("BOOLEAN", {"default": True, "label_on": "control_before_generate", "label_off": "control_after_generate"}),
                "action": (["fixed", "increment", "decrement", "randomize",
                            "increment for each node", "decrement for each node", "randomize for each node"], ),
                "last_seed": ("STRING", {"default": ""}),
            }
        }

    RETURN_TYPES = ()
    FUNCTION = "doit"

    CATEGORY = "InspirePack/Prompt"

    OUTPUT_NODE = True

    def doit(self, **kwargs):
        return {}

```
