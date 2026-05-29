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
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
