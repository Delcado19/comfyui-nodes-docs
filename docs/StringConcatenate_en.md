# Documentation
- Class name: StringConcatenate
- Category: FizzNodes 📅🅕🅝/FrameNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The StringConcatenate node efficiently concatenates strings with related frame numbers. It combines text inputs and their corresponding frames, playing a key role in creating structured data representations. The node simplifies generating formatted string outputs for various applications.

# Input types
## Required
- text_a
- The 'text_a' parameter is a required string input representing the first text to be concatenated. It is essential to the node’s operation, forming the initial part of the structured data.
    - Comfy dtype: STRING
    - Python dtype: str
- frame_a
- The 'frame_a' parameter is an integer specifying the frame number associated with 'text_a'. This is crucial for organizing text data in a frame-specific manner.
    - Comfy dtype: INT
    - Python dtype: int
- text_b
- The 'text_b' parameter is another required string input representing the second text to be concatenated. It is important for extending the structured data with additional information.
    - Comfy dtype: STRING
    - Python dtype: str
- frame_b
- The 'frame_b' parameter is an integer specifying the frame number associated with 'text_b'. It plays a significant role in organizing text data based on frames.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- text_c
- The 'text_c' parameter is an optional string input that can be included for further concatenation. It provides flexibility to add more text content to the structured data.
    - Comfy dtype: STRING
    - Python dtype: str
- frame_c
- The 'frame_c' parameter is an optional integer that, if 'text_c' is provided, specifies a frame number. It is used to organize additional text data by frame.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result
- The 'result' parameter represents the node’s concatenated string output. It is the result of combining all provided text inputs and their respective frame numbers into a single structured format.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class StringConcatenate:

    def __init__(self):
        pass
    defaultPrompt = '"0" :"",\n    "12" :"",\n    "24" :"",\n    "36" :"",\n    "48" :"",\n    "60" :"",\n    "72" :"",\n    "84" :"",\n    "96" :"",\n    "108" :"",\n    "120" :""\n    '

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'text_a': ('STRING', {'forceInput': True, 'multiline': True, 'default': ''}), 'frame_a': ('INT', {'default': 0}), 'text_b': ('STRING', {'forceInput': True, 'multiline': True, 'default': ''}), 'frame_b': ('INT', {'default': 12})}, 'optional': {'text_c': ('STRING', {'forceInput': True, 'multiline': True, 'default': ''}), 'frame_c': ('INT', {'default': 24}), 'text_d': ('STRING', {'forceInput': True, 'multiline': True, 'default': ''}), 'frame_d': ('INT', {'default': 36}), 'text_e': ('STRING', {'forceInput': True, 'multiline': True, 'default': ''}), 'frame_e': ('INT', {'default': 48}), 'text_f': ('STRING', {'forceInput': True, 'multiline': True, 'default': ''}), 'frame_f': ('INT', {'default': 60}), 'text_g': ('STRING', {'forceInput': True, 'multiline': True, 'default': ''}), 'frame_g': ('INT', {'default': 72})}}
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'frame_concatenate_list'
    CATEGORY = 'FizzNodes 📅🅕🅝/FrameNodes'

    def frame_concatenate_list(self, text_a, frame_a, text_b, frame_b, text_c=None, frame_c=None, text_d=None, frame_d=None, text_e=None, frame_e=None, text_f=None, frame_f=None, text_g=None, frame_g=None):
        text_a = text_a.replace('\n', '')
        text_b = text_b.replace('\n', '')
        text_c = text_c.replace('\n', '') if text_c is not None else None
        text_d = text_d.replace('\n', '') if text_d is not None else None
        text_e = text_e.replace('\n', '') if text_e is not None else None
        text_f = text_f.replace('\n', '') if text_f is not None else None
        text_g = text_g.replace('\n', '') if text_g is not None else None
        text_list = f'"{frame_a}": "{text_a}",'
        text_list += f'"{frame_b}": "{text_b}",'
        if frame_c is not None and text_c is not None:
            text_list += f'"{frame_c}": "{text_c}",'
        if frame_d is not None and text_d is not None:
            text_list += f'"{frame_d}": "{text_d}",'
        if frame_e is not None and text_e is not None:
            text_list += f'"{frame_e}": "{text_e}",'
        if frame_f is not None and text_f is not None:
            text_list += f'"{frame_f}": "{text_f}",'
        if frame_g is not None and text_g is not None:
            text_list += f'"{frame_g}": "{text_g}",'
        return (text_list,)
```