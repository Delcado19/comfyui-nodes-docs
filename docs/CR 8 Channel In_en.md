# Documentation
- Class name: CR_8ChannelIn
- Category: Comfyroll/Pipe/Bus
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_8ChannelIn node is designed to efficiently manage and organize multi-channel data input. It simplifies the workflow of subsequent data processing tasks by loading and combining data from eight different channels into a single pipeline structure.

# Input types
## Optional
- pipe
    - When the 'pipe' parameter is provided, it directly supplies data for all eight channels, bypassing the need for individual channel inputs. It is a tuple containing data for each channel, which is essential for maintaining data integrity and continuity between channels.
    - Comfy dtype: any_type
    - Python dtype: Tuple[Any, ...]
- ch1
    - The 'ch1' parameter represents the first channel of input data. It is optional and will only be used when provided; otherwise, the corresponding value from the 'pipe' input will be used if available.
    - Comfy dtype: any_type
    - Python dtype: Any
- ch2
    - The 'ch2' parameter is used for the second channel of data input. It operates similarly to 'ch1', allowing individual channel data to be specified while also being replaceable via the 'pipe' input.
    - Comfy dtype: any_type
    - Python dtype: Any
- ch3
    - The 'ch3' parameter represents the third channel of input data, operating in the same manner as 'ch1' and 'ch2', and can be overridden by the collective 'pipe' input.
    - Comfy dtype: any_type
    - Python dtype: Any
- ch4
    - The 'ch4' parameter is used for the fourth channel of data input, following the same operational principles as the first three channels.
    - Comfy dtype: any_type
    - Python dtype: Any
- ch5
    - The 'ch5' parameter represents the fifth channel of input data, maintaining the flexibility of individual channel input while being influenced by the collective 'pipe' input data.
    - Comfy dtype: any_type
    - Python dtype: Any
- ch6
    - The 'ch6' parameter is used for the sixth channel of data input, following the same pattern as previous channels and influenced by the 'pipe' input.
    - Comfy dtype: any_type
    - Python dtype: Any
- ch7
    - The 'ch7' parameter represents the seventh channel of input data, continuing the consistent approach to channel input and replaceable via the 'pipe' input.
    - Comfy dtype: any_type
    - Python dtype: Any
- ch8
    - The 'ch8' parameter is used for the eighth and final channel of data input, following the established input pattern and being part of the collective 'pipe' input data management.
    - Comfy dtype: any_type
    - Python dtype: Any

# Output types
- pipe
    - The 'pipe' output is a tuple containing combined data from all eight input channels. It is the primary output of the node, representing the structured data flow for further processing.
    - Comfy dtype: any_type
    - Python dtype: Tuple[Any, ...]
- show_help
    - The 'show_help' output provides a URL link to the node's documentation page, allowing users to directly access additional information and guidance on using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
