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
```
class CR_8ChannelIn:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {}, 'optional': {'pipe': (any_type,), 'ch1': (any_type,), 'ch2': (any_type,), 'ch3': (any_type,), 'ch4': (any_type,), 'ch5': (any_type,), 'ch6': (any_type,), 'ch7': (any_type,), 'ch8': (any_type,)}}
    RETURN_TYPES = ('PIPE_LINE', 'STRING')
    RETURN_NAMES = ('pipe', 'show_help')
    FUNCTION = 'load_data'
    CATEGORY = icons.get('Comfyroll/Pipe/Bus')

    def load_data(self, ch1=None, ch2=None, ch3=None, ch4=None, ch5=None, ch6=None, ch7=None, ch8=None, pipe=None):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Pipe-Nodes#cr-8-channel-in'
        (new_ch1, new_ch2, new_ch3, new_ch4, new_ch5, new_ch6, new_ch7, new_ch8) = (None, None, None, None, None, None, None, None)
        if pipe is not None:
            (new_ch1, new_ch2, new_ch3, new_ch4, new_ch5, new_ch6, new_ch7, new_ch8) = pipe
        new_ch1 = ch1 if ch1 is not None else new_ch1
        new_ch2 = ch2 if ch2 is not None else new_ch2
        new_ch3 = ch3 if ch3 is not None else new_ch3
        new_ch4 = ch4 if ch4 is not None else new_ch4
        new_ch5 = ch5 if ch5 is not None else new_ch5
        new_ch6 = ch6 if ch6 is not None else new_ch6
        new_ch7 = ch7 if ch7 is not None else new_ch7
        new_ch8 = ch8 if ch8 is not None else new_ch8
        new_pipe = (new_ch1, new_ch2, new_ch3, new_ch4, new_ch5, new_ch6, new_ch7, new_ch8)
        return (new_pipe, show_help)
```