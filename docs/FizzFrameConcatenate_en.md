# Documentation
- Class name: FrameConcatenate
- Category: FizzNodes 📅🅕🅝/FrameNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

FrameConcatenate is a node designed to merge frame data into a single string representation. It takes a structured frame object as input and concatenates the positive and negative text associated with each frame number, creating a comprehensive text summary. This node plays a key role in converting complex frame data into a readable format for further analysis or presentation.

# Input types
## Required
- frame
    - The `frame` parameter is essential for the FrameConcatenate node because it serves as the primary input containing the frame data to be concatenated. The node relies on this parameter to generate the required output, making it a fundamental component of the node's functionality.
    - Comfy dtype: FIZZFRAME
    - Python dtype: A custom object that contains frame data structured in a specific way, expected to be compatible with the Fizz framework.

# Output types
- text_list
    - The `text_list` output is a string representing the concatenated frame data. It is the result of the node's processing and includes the positive and negative text associated with each frame number. This output is important because it provides a formatted summary that can be easily used for subsequent tasks.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class FrameConcatenate:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'frame': ('FIZZFRAME', {'forceInput': True})}}
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'frame_concatenate'
    CATEGORY = 'FizzNodes 📅🅕🅝/FrameNodes'

    def frame_concatenate(self, frame):
        text_list = ''
        for frame_digit in frame.frames:
            new_frame = frame.frames[frame_digit]
            text_list += f'''"{frame_digit}": "{new_frame['positive_text']}'''
            if new_frame.get('general_positive'):
                text_list += f", {new_frame['general_positive']}"
            if new_frame.get('negative_text') or new_frame.get('general_negative'):
                text_list += f', --neg '
                if new_frame.get('negative_text'):
                    text_list += f", {new_frame['negative_text']}"
                if new_frame.get('general_negative'):
                    text_list += f", {new_frame['general_negative']}"
            text_list += f'",\n'
        text_list = text_list[:-2]
        return (text_list,)
```