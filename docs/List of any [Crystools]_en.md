
# Documentation
- Class name: List of any [Crystools]
- Category: crystools 🪛/List
- Output node: False
- Repo Ref: https://github.com/crystian/ComfyUI-Crystools

This node is designed to integrate multiple inputs of any type into a single list, enabling unified processing of diverse data types. It emphasizes flexibility and inclusivity in data aggregation, allowing a wide range of input types.

# Input types
## Optional
- any_i
    - Represents optional inputs of any type to be included in the list. Their presence enhances the node's versatility in data aggregation, enabling a dynamic number of inputs.
    - Comfy dtype: *
    - Python dtype: Any

# Output types
- any_list
    - Outputs a list containing all provided inputs, encapsulating various data types within a unified structure.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CListAny:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
            },
            "optional": {
                "any_1": (any,),
                "any_2": (any,),
                "any_3": (any,),
                "any_4": (any,),
                "any_5": (any,),
                "any_6": (any,),
                "any_7": (any,),
                "any_8": (any,),
            }
        }

    CATEGORY = CATEGORY.MAIN.value + CATEGORY.LIST.value
    RETURN_TYPES = (any,),
    RETURN_NAMES = ("any_list",)
    OUTPUT_IS_LIST = (True,)

    FUNCTION = "execute"

    def execute(self,
                any_1=None,
                any_2=None,
                any_3=None,
                any_4=None,
                any_5=None,
                any_6=None,
                any_7=None,
                any_8=None):

        list_any = []

        if any_1 is not None:
            try:
                list_any.append(any_1)
            except Exception as e:
                logger.warn(e)
        if any_2 is not None:
            try:
                list_any.append(any_2)
            except Exception as e:
                logger.warn(e)
        if any_3 is not None:
            try:
                list_any.append(any_3)
            except Exception as e:
                logger.warn(e)
        if any_4 is not None:
            try:
                list_any.append(any_4)
            except Exception as e:
                logger.warn(e)
        if any_5 is not None:
            try:
                list_any.append(any_5)
            except Exception as e:
                logger.warn(e)
        if any_6 is not None:
            try:
                list_any.append(any_6)
            except Exception as e:
                logger.warn(e)
        if any_7 is not None:
            try:
                list_any.append(any_7)
            except Exception as e:
                logger.warn(e)
        if any_8 is not None:
            try:
                list_any.append(any_8)
            except Exception as e:
                logger.warn(e)

        # yes, double brackets are needed because of the OUTPUT_IS_LIST... ¯\_(ツ)_/¯
        return [[list_any]]

```
