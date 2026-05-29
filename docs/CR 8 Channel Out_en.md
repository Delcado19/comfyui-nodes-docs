# Documentation
- Class name: CR_8ChannelOut
- Category: Comfyroll/Pipe/Bus
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_8ChannelOut node is designed to manage and distribute data to eight different channels. It plays a key role in ensuring smooth information flow within the pipeline, ensuring each channel receives appropriate data for further processing or analysis.

# Input types
## Required
- pipe
    - The 'pipe' parameter is crucial as it serves as the conduit for data passing and subsequent distribution among the eight channels. Its correct configuration is vital for the node's operation and the integrity of the data flow.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Tuple[Any, ...]

# Output types
- pipe
    - The 'pipe' output represents the original data pipeline, which has been processed and is now ready for further use or analysis by downstream nodes.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Tuple[Any, ...]
- ch1
    - Channel 1 'ch1' is one of the eight channels that receive data from 'pipe'. It is significant for specialized processing or handling of data related to this channel.
    - Comfy dtype: any_type
    - Python dtype: Any
- ch2
    - Channel 2 'ch2' is another channel that processes specific parts of data. It is suitable for the tasks assigned to this particular channel in the node's operation.
    - Comfy dtype: any_type
    - Python dtype: Any
- ch3
    - Channel 3 'ch3' is used for further demultiplexing data, allowing parallel processing or specialized handling of different data segments.
    - Comfy dtype: any_type
    - Python dtype: Any
- ch4
    - Channel 4 'ch4' is one of the multiple channels managed by the node, each playing a distinct role in data distribution and processing.
    - Comfy dtype: any_type
    - Python dtype: Any
- ch5
    - Channel 5 'ch5' is designated for a specific type of data processing, ensuring the node's functionality aligns with the specific requirements of the workflow.
    - Comfy dtype: any_type
    - Python dtype: Any
- ch6
    - Channel 6 'ch6' is part of the node's multi-channel architecture, catering to diverse data processing needs in complex systems.
    - Comfy dtype: any_type
    - Python dtype: Any
- ch7
    - Channel 7 'ch7' is a dedicated channel within the node, optimized to handle specific data flows to improve workflow efficiency.
    - Comfy dtype: any_type
    - Python dtype: Any
- ch8
    - Channel 8 'ch8' is the last channel in the node's suite, completing the distribution of data across all designated channels for comprehensive processing.
    - Comfy dtype: any_type
    - Python dtype: Any
- show_help
    - The 'show_help' output provides a URL link to the node documentation, offering users a direct way to reference the node guide and usage instructions.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
