# Documentation
- Class name: showSpentTime
- Category: EasyUse/Util
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The showSpentTime node is designed to provide feedback on workflow processing time. It captures the time spent on reasoning and displays it in the UI, giving users insight into system efficiency. This node is critical for monitoring performance and identifying potential bottlenecks in the execution pipeline.

# Input types
## Required
- pipe
    - The pipe parameter is critical because it represents the data pipeline being processed. It contains all the information the node needs to function properly, including loader settings that may contain spent_time.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
## Optional
- spent_time
    - If this parameter is provided, it will be used to display the time spent in the UI. If not provided, the node will attempt to retrieve the time spent from the pipe's loader settings.
    - Comfy dtype: INFO
    - Python dtype: Union[str, None]
- unique_id
    - The unique_id parameter is used to identify a specific node in the workflow. This is critical for associating the time spent with the correct node in the workflow.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str
- extra_pnginfo
    - This parameter contains additional information about the image processing workflow, including the workflow itself. It is used to locate the specific node associated with unique_id.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, Any]

# Output types
- ui
    - The ui output is a dictionary containing the text to be displayed in the user interface, providing information about the time spent.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, str
- result
    - The result output is an empty dictionary, indicating that the primary purpose of this node is to display information rather than to pass data for further processing.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
