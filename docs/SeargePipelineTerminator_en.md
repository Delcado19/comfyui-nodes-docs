# Documentation
- Class name: SeargePipelineTerminator
- Category: UI.CATEGORY_MAGIC
- Output node: True
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

The SeargePipelineTerminator node is designed to manage and terminate ongoing data processing pipelines. It plays a critical role in ensuring that data flows are properly concluded without leaving any residual processes, thereby maintaining system efficiency and integrity.

# Input types
## Optional
- data
    - The 'data' parameter is essential for the node's operation because it provides the input data stream required to terminate the pipeline. Its presence ensures that the node can accurately identify and end the relevant data processing pipeline.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]

# Output types
- result
    - The 'result' output indicates the outcome of the pipeline termination process. It is important because it confirms that the pipeline has been successfully terminated, allowing the system to proceed without any pending data processing tasks.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, bool]

# Usage tips
- Infra type: CPU

# Source code
```
class SeargePipelineTerminator:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {}, 'optional': {'data': ('SRG_DATA_STREAM',)}}
    RETURN_TYPES = ()
    FUNCTION = 'trigger'
    OUTPUT_NODE = True
    CATEGORY = UI.CATEGORY_MAGIC

    def trigger(self, data=None):
        access = PipelineAccess(data)
        access.terminate_pipeline()
        return {}
```