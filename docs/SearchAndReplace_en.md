# Documentation
- Class name: SearchAndReplace
- Category: Mikey/Utils
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The SearchAndReplace node is designed to perform text manipulation tasks by searching for specific patterns in a given text and replacing them with corresponding values. It can handle dynamic replacements such as dates and values from prompts or additional information, making it suitable for various use cases.

# Input types
## Required
- text
    - The 'text' parameter is the primary input of the node, containing the text on which search and replace operations will be performed. It can contain placeholders for dynamic content, which the node will replace with actual values.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - The 'seed' parameter is used to initialize or influence randomness in certain operations within the node. It is especially important when the node performs operations that require random or pseudo-random elements.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- prompt
    - The 'prompt' parameter is an optional input that provides additional context or data that the node can use to perform more complex replacements in the text. It is typically used to inject values from external sources.
    - Comfy dtype: STRING
    - Python dtype: Union[str, Dict[str, Any]]
- extra_pnginfo
    - The 'extra_pnginfo' parameter is another optional input that can contain additional information required for the node to perform its operations. It is particularly useful when additional data beyond what is provided by the 'prompt' is needed.
    - Comfy dtype: STRING
    - Python dtype: Union[str, Dict[str, Any]]

# Output types
- result
    - The 'result' output contains the text after all search and replace operations have been performed. It reflects the final state of the text, with all specified patterns replaced by their corresponding values.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
