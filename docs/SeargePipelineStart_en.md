# Documentation
- Class name: SeargePipelineStart
- Category: UI.CATEGORY_MAGIC
- Output node: True
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

SeargePipelineStart node is the entry point of the data processing pipeline. It initializes the pipeline using the specified workflow version and optional data stream. The node ensures the pipeline is correctly set up and configured before processing begins.

# Input types
## Required
- wf_version
    - The wf_version parameter specifies the workflow version the pipeline should use. This is essential for determining the correct settings and operations the pipeline will execute.
    - Comfy dtype: str
    - Python dtype: str
- data
    - The data parameter represents an optional data stream that can be input into the pipeline. It may contain the initial data required for processing, which is crucial for producing meaningful results.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Union[Dict, None]
- additional_data
    - The additional_data parameter provides a way to supply extra data to the pipeline. This can be used to enrich the main data stream with additional information.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Union[Dict, None]
- prompt
    - The prompt parameter is used to provide text prompts that may guide processing within the pipeline. It may be hidden and is typically used for internal guidance rather than direct processing.
    - Comfy dtype: str
    - Python dtype: Union[str, None]
- extra_pnginfo
    - The extra_pnginfo parameter supplies additional information for PNG images that the pipeline may process. It is optional and can contain metadata or other relevant details.
    - Comfy dtype: str
    - Python dtype: Union[str, None]

# Output types
- data
    - The data output by the SeargePipelineStart node represents the initialized data stream after the pipeline starts. It includes any modifications or settings applied by the node and serves as the basis for further processing within the pipeline.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict

# Usage tips
- Infra type: CPU

# Source code
```
class SeargePipelineStart:

    def __init__(self):
        self.pipeline = Pipeline()

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'wf_version': (Defs.WORKFLOW_VERSIONS,)}, 'optional': {'data': ('SRG_DATA_STREAM',), 'additional_data': ('SRG_DATA_STREAM',)}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    RETURN_TYPES = ('SRG_DATA_STREAM',)
    RETURN_NAMES = ('data',)
    FUNCTION = 'trigger'
    OUTPUT_NODE = True
    CATEGORY = UI.CATEGORY_MAGIC

    def trigger(self, wf_version, data=None, additional_data=None, prompt=None, extra_pnginfo=None):
        if data is None:
            print('Warning: Pipeline Start - missing data stream')
        else:
            if additional_data is not None:
                data = data | additional_data
            self.pipeline.start(data)
            access = PipelineAccess(data)
            self.pipeline.enable(access.get_active_setting(UI.S_OPERATING_MODE, UI.F_WORKFLOW_MODE) != UI.NONE)
            mb_hidden = {Names.F_MAGIC_BOX_PROMPT: prompt, Names.F_MAGIC_BOX_EXTRA_PNGINFO: extra_pnginfo}
            mb_version = {Names.F_MAGIC_BOX_EXTENSION: Defs.VERSION, Names.F_MAGIC_BOX_WORKFLOW: wf_version}
            access.update_in_pipeline(Names.S_MAGIC_BOX_HIDDEN, mb_hidden)
            access.update_in_pipeline(Names.S_MAGIC_BOX_VERSION, mb_version)
            if data is not None:
                data[Names.S_MAGIC_BOX_HIDDEN] = mb_hidden
                data[Names.S_MAGIC_BOX_VERSION] = mb_version
        return (data,)
```