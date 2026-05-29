
# Documentation
- Class name: Model Switch (JPS)
- Category: JPS Nodes/Switches
- Output node: False

The Model Switch node is designed to dynamically select one of multiple model inputs based on specified selection criteria. It flexibly integrates and switches between different models in a workflow, thus generating diverse outputs according to the selected model.

# Input types
## Required
- select
    - Determine which model to select as the output. The selection is based on an integer value, indicating the switch to output the corresponding model.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- model_i
    - Represents a generic model input option. Based on the value of the 'select' parameter, one of the available model inputs (model_1 to model_5) is chosen as output. This abstraction simplifies input specification by treating all model inputs uniformly.
    - Comfy dtype: MODEL
    - Python dtype: object

# Output types
- model_out
    - The model output selected based on the 'select' parameter. This output facilitates dynamic integration of different models in the workflow.
    - Comfy dtype: MODEL
    - Python dtype: object


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Model_Switch:

    CATEGORY = 'JPS Nodes/Switches'
    RETURN_TYPES = ("MODEL",)
    RETURN_NAMES = ("model_out",)
    FUNCTION = "get_model"

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "select": ("INT", {}),
            },
            "optional": {
                "model_1": ("MODEL",),
                "model_2": ("MODEL",),
                "model_3": ("MODEL",),
                "model_4": ("MODEL",),
                "model_5": ("MODEL",),
            }
        }

    def get_model(self,select,model_1,model_2=None,model_3=None,model_4=None,model_5=None,):
        
        model_out = model_1

        if (select == 2):
            model_out = model_2
        elif (select == 3):
            model_out  = model_3
        elif (select == 4):
            model_out = model_4
        elif (select == 5):
            model_out = model_5

        return (model_out,)

```
