# Documentation
- Class name: DynamicDelayProcessor
- Category: ♾️Mixlab/Utils
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

DynamicDelayProcessor is a node designed to introduce controllable delays into a process. It allows adjusting execution time based on input parameters, providing flexibility for handling time-sensitive operations. This node is particularly suitable for scenarios where output generation timing needs to be synchronized with external events or controlled to match specific speeds.

# Input types
## Required
- delay_seconds
    - The delay_seconds parameter determines the base delay duration that the node will introduce before processing input. It is a fundamental aspect of node operation because it directly affects the timing of node execution and the moment of output generation.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- delay_by_text
    - The delay_by_text parameter allows adjusting the delay based on the length of the provided text. This is an optional feature that adds a layer of customization to the node's delay functionality, enabling it to adapt to various text-based inputs and their associated delays.
    - Comfy dtype: STRING
    - Python dtype: str
- words_per_seconds
    - The words_per_seconds parameter is used together with delay_by_text to calculate additional delay based on the length of the text. It plays a key role in fine-tuning the node's delay behavior to adapt to different text lengths and pacing requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- replace_output
    - The replace_output parameter determines whether the node's output after delay should be replaced with a specified value. This feature provides an additional level of control over the output, allowing the node to either pass through the original input or replace it with a predefined value.
    - Comfy dtype: COMBO
    - Python dtype: Union[str, None]
- replace_value
    - The replace_value parameter specifies the value to use if the replace_output parameter is set to 'enable'. It is essential for implementing the replacement functionality, ensuring the output is accurately modified according to user specifications.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output
    - The output parameter represents the result of the node's operation. Depending on the configuration, it can be a pass-through of the original input, or a replaced value as specified by the replace_output and replace_value parameters. It encapsulates the final result of the node's delayed processing.
    - Comfy dtype: ANY
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
