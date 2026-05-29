
# Documentation
- Class name: Get Date Time String (JPS)
- Category: JPS Nodes/Text
- Output node: False

This node generates a string representing the current date and time, formatted according to a style specified from a predefined format list. It is designed to provide a flexible way to capture the precise moment and present it in a format suitable for various application needs, such as logging, file naming, or data timestamping.

# Input types
## Required
- style
    - Specifies the format of the date and time string. The choice of format affects how the current timestamp is represented, to meet different formatting requirements.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- time_format
    - The date and time string formatted according to the specified style.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [SaveImageExtended](../../save-image-extended-comfyui/Nodes/SaveImageExtended.md)



## Source code
```python
class Get_Date_Time_String:
    time_format = ["%Y%m%d%H%M%S","%Y%m%d%H%M","%Y%m%d","%Y-%m-%d-%H_%M_%S","%Y-%m-%d-%H_%M","%Y-%m-%d","%Y-%m-%d %H_%M_%S","%Y-%m-%d %H_%M","%Y-%m-%d","%H%M","%H%M%S","%H_%M","%H_%M_%S"]
    def __init__(self):
        pass
    
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "style": (s.time_format,),
            }
        }
    
    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("time_format",)
    FUNCTION = "get_time"

    CATEGORY = "JPS Nodes/Text"

    def get_time(self, style):
        now = datetime.now()
        timestamp = now.strftime(style)

        return (timestamp,)

    @classmethod
    def IS_CHANGED(s, style):
        now = datetime.now()
        timestamp = now.strftime(style)
        return (timestamp,)

```
