# Documentation
- Class name: WAS_Text_Shuffle
- Category: WAS Suite/Text/Operations
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `shuffle` method of the WAS_Text_Shuffle node is designed to rearrange the order of elements within a given text string. It operates by splitting the text into a list of elements using a specified delimiter, randomly shuffling that list, and then recombining the elements into a new string. This method is particularly useful for tasks requiring randomization of text elements, such as data augmentation or creating diverse outputs from a fixed set of inputs.

# Input types
## Required
- text
    - The 'text' parameter represents the input text to be shuffled. It is the fundamental part of the node's operation, as the entire process revolves around rearranging the elements of this text. The importance of this parameter lies in its direct impact on the output, determining the content and structure of the shuffled text.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- separator
    - The 'separator' parameter defines the delimiter used to split the input text into individual elements before shuffling. It is crucial for determining how the text is divided and how elements are rearranged. The default value is a comma, but it can be adjusted to any character or string based on the specific requirements of the text being processed.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - The 'seed' parameter is an optional integer used to initialize the random number generator, ensuring the shuffled order is reproducible. This is particularly important in scenarios where consistent results are desired across multiple executions of the node. By providing a seed, users can control the randomness and obtain the same shuffled order each time the node is run with the same input and seed value.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- shuffled_text
    - The output parameter 'shuffled_text' represents the text obtained after the shuffling process. It is a direct reflection of the input text with its elements randomly rearranged. This output is important as it is the primary result of the node's operation and serves as the basis for any subsequent processing or analysis.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
