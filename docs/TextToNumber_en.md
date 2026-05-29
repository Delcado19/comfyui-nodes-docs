# Documentation
- Class name: TextToNumber
- Category: ♾️Mixlab/Utils
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node abstracts the process of converting text data into numerical values, facilitating the analysis and processing of text-based information. It emphasizes converting input text into numerical representations, which can be further used for various computational tasks.

# Input types
## Required
- text
    - The text parameter is crucial as it serves as the source for extracting numerical values. The quality and content of the text directly affect the node's output.
    - Comfy dtype: STRING
    - Python dtype: str
- random_number
    - This parameter determines whether a random number generation process is applied after extracting numerical values from the text, adding variability to the result.
    - Comfy dtype: COMBO
    - Python dtype: str
- max_num
    - The max_num parameter sets the upper limit for random number generation, ensuring that the generated numbers stay within the specified range.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- seed
    - The seed parameter is crucial for ensuring the reproducibility of the random number generation process, allowing consistent results under the same conditions.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- ui.text
    - This output contains the original text input, retained for reference and context, which is important for understanding the origin of the numerical results.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- ui.num
    - The ui.num output represents the numerical value extracted from the text or the result of random number generation. This is the main output of the node and is crucial for subsequent computations.
    - Comfy dtype: INT
    - Python dtype: List[int]
- result
    - The result output is the final numerical value, which is the crystallized product of node processing and is essential for further analysis or manipulation.
    - Comfy dtype: INT
    - Python dtype: Tuple[int]

# Usage tips
- Infra type: CPU

# Source code
```
class TextToNumber:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text': ('STRING', {'multiline': False, 'default': '1'}), 'random_number': (['enable', 'disable'],), 'max_num': ('INT', {'default': 10, 'min': 2, 'max': 10000000000, 'step': 1, 'display': 'number'})}, 'optional': {'seed': (any_type, {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('INT',)
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Utils'
    INPUT_IS_LIST = False
    OUTPUT_IS_LIST = (False,)

    def run(self, text, random_number, max_num, seed=0):
        numbers = re.findall('\\d+', text)
        result = 0
        for n in numbers:
            result = int(n)
        if random_number == 'enable' and result > 0:
            result = random.randint(1, max_num)
        return {'ui': {'text': [text], 'num': [result]}, 'result': (result,)}
```