# Documentation
- Class name: TextSplitByDelimiter
- Category: ♾️Mixlab/GPT
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node splits text data based on specified delimiters, enabling extraction of structured information from unstructured text. It is designed to efficiently process large datasets, providing users with a simple yet powerful tool for text analysis and preprocessing tasks.

# Input types
## Required
- text
    - The input text is the primary data source for node operations. Its quality and format directly affect the effectiveness of the splitting process and the accuracy of extracted segments.
    - Comfy dtype: STRING
    - Python dtype: str
- delimiter
    - The delimiter parameter determines the criteria for text separation. It plays a crucial role in deciding how the text is split, thereby influencing the structure of the output.
    - Comfy dtype: COMBO
    - Python dtype: str
- start_index
    - The start_index parameter defines the position in the text where the splitting process begins. It affects the initial segment of the selected output and can be used to skip unwanted portions of the text.
    - Comfy dtype: INT
    - Python dtype: int
- skip_every
    - The skip_every parameter determines how often to skip segments during the splitting process. It plays an important role in controlling the density of the output and helps focus on specific areas of interest in the text.
    - Comfy dtype: INT
    - Python dtype: int
- max_count
    - The max_count parameter sets an upper limit on the number of extracted segments. It is important for managing the scope of output, ensuring that the node does not process excessive data.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- segmented_text
    - The output is a list of text segments extracted based on input parameters. Each segment represents a part of the original text, structured according to the specified delimiter and other input criteria.
    - Comfy dtype: STRING
    - Python dtype: List[str]

# Usage tips
- Infra type: CPU

# Source code
```
class TextSplitByDelimiter:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text': ('STRING', {'multiline': True, 'dynamicPrompts': False}), 'delimiter': (['newline', 'comma'],), 'start_index': ('INT', {'default': 0, 'min': 0, 'max': 1000, 'step': 1, 'display': 'number'}), 'skip_every': ('INT', {'default': 0, 'min': 0, 'max': 10, 'step': 1, 'display': 'number'}), 'max_count': ('INT', {'default': 10, 'min': 1, 'max': 1000, 'step': 1, 'display': 'number'})}}
    INPUT_IS_LIST = False
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'run'
    OUTPUT_IS_LIST = (True,)
    CATEGORY = '♾️Mixlab/GPT'

    def run(self, text, delimiter, start_index, skip_every, max_count):
        arr = []
        if delimiter == 'newline':
            arr = [line for line in text.split('\n') if line.strip()]
        elif delimiter == 'comma':
            arr = [line for line in text.split(',') if line.strip()]
        arr = arr[start_index:start_index + max_count * (skip_every + 1):skip_every + 1]
        return (arr,)
```