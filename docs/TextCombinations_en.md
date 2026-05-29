# Documentation
- Class name: TextCombinations2
- Category: Mikey/Text
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The TextCombinations2 node is designed to generate a series of text operations that combine two input texts in a defined operation manner. It facilitates the creation of output text by performing specified operations on the inputs, providing flexibility in text processing.

# Input types
## Required
- text1
    - The 'text1' parameter is the first input text to be used in the combination operation. It plays a key role in determining the final output as it is one of the main elements being manipulated.
    - Comfy dtype: STRING
    - Python dtype: str
- text2
    - The 'text2' parameter is the second input text that is combined with 'text1' via the defined operation. Its content is crucial to the output generation process.
    - Comfy dtype: STRING
    - Python dtype: str
- operation
    - The 'operation' parameter defines the specific combination operation to be performed on the input texts. It is crucial because it determines how 'text1' and 'text2' are transformed into the desired output.
    - Comfy dtype: COMBO['text1 to output1', 'text2 to output2']
    - Python dtype: str
## Optional
- delimiter
    - The 'delimiter' parameter specifies the character or string to use when concatenating text components during the operation. It affects the format of the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- use_seed
    - The 'use_seed' parameter determines whether a seed value should be used to select an operation from a predefined list of operations. It adds randomness or specificity to the operation selection process.
    - Comfy dtype: COMBO['true', 'false']
    - Python dtype: str
- seed
    - The 'seed' parameter is an integer value used to offset the selection of operations when 'use_seed' is set to true. It ensures a specific operation is selected based on the provided integer.
    - Comfy dtype: INT
    - Python dtype: int
- extra_pnginfo
    - The 'extra_pnginfo' parameter holds additional information that may be needed for some operations. It is used to influence the node's behavior based on extra context data.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Union[Dict, str]
- prompt
    - The 'prompt' parameter provides guidance or additional context to the node, potentially altering how it processes input text. It is especially useful for nodes that require interactive or conditional behavior.
    - Comfy dtype: PROMPT
    - Python dtype: Union[Dict, str]

# Output types
- output1
    - The 'output1' parameter represents the first result text after the combination operation. It is the direct result of the inputs and the specified operation.
    - Comfy dtype: STRING
    - Python dtype: str
- output2
    - The 'output2' parameter represents the second result text after the combination operation. It is another output derived from the inputs and the performed operation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
