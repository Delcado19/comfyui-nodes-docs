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
```
class showSpentTime:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'pipe': ('PIPE_LINE',), 'spent_time': ('INFO', {'default': '推理完成后将显示推理时间', 'forceInput': False})}, 'hidden': {'unique_id': 'UNIQUE_ID', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    FUNCTION = 'notify'
    OUTPUT_NODE = True
    RETURN_TYPES = ()
    RETURN_NAMES = ()
    CATEGORY = 'EasyUse/Util'

    def notify(self, pipe, spent_time=None, unique_id=None, extra_pnginfo=None):
        if unique_id and extra_pnginfo and ('workflow' in extra_pnginfo):
            workflow = extra_pnginfo['workflow']
            node = next((x for x in workflow['nodes'] if str(x['id']) == unique_id), None)
            if node:
                spent_time = pipe['loader_settings']['spent_time'] if 'spent_time' in pipe['loader_settings'] else ''
                node['widgets_values'] = [spent_time]
        return {'ui': {'text': spent_time}, 'result': {}}
```