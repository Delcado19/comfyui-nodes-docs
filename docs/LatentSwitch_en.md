# Documentation
- Class name: GeneralSwitch
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The GeneralSwitch node is designed to manage data flow based on a selection index. It determines the active input by evaluating the provided option index, then routes the corresponding input to the output. This node plays a key role in the decision-making process within a workflow, allowing conditional branching based on user-defined criteria.

# Input types
## Required
- select
    - The "select" parameter is essential for determining which input will be processed by the node. It specifies the index of the input that should be considered active. The node's functionality heavily relies on this parameter to perform its decision-making task.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- sel_mode
    - The "sel_mode" parameter determines whether the selection is based on the prompt or the execution context. This can influence how the node interprets the selection, thereby affecting the node's execution flow.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- input1
    - The "input1" parameter serves as an optional input provided to the node. Its role is to provide additional flexibility in the node's data processing capabilities, allowing for more diverse handling of various input scenarios.
    - Comfy dtype: ANY
    - Python dtype: Any
- unique_id
    - The "unique_id" parameter is used to identify the node within the workflow. It plays a crucial role in the node's ability to reference its own position and context within the larger system.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str
- extra_pnginfo
    - The "extra_pnginfo" parameter contains additional information that may be required for the node's normal operation. It provides the node with specific contextual details that can enhance its operational capabilities.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, Any]

# Output types
- selected_value
    - The "selected_value" output represents the input value chosen by the node based on the provided option index. It is a critical output as it carries the data that will be further processed or used downstream in the workflow.
    - Comfy dtype: ANY
    - Python dtype: Any
- selected_label
    - The "selected_label" output provides the label associated with the selected input. This is useful for providing a human-readable identifier for the selected data, enhancing the interpretability of the node's output.
    - Comfy dtype: STRING
    - Python dtype: str
- selected_index
    - The "selected_index" output indicates the index of the selected input. It serves as a record of the node's decision-making process and can be used for tracking or logging purposes within the workflow.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class GeneralSwitch:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'select': ('INT', {'default': 1, 'min': 1, 'max': 999999, 'step': 1}), 'sel_mode': ('BOOLEAN', {'default': True, 'label_on': 'select_on_prompt', 'label_off': 'select_on_execution', 'forceInput': False})}, 'optional': {'input1': (any_typ,)}, 'hidden': {'unique_id': 'UNIQUE_ID', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    RETURN_TYPES = (any_typ, 'STRING', 'INT')
    RETURN_NAMES = ('selected_value', 'selected_label', 'selected_index')
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, *args, **kwargs):
        selected_index = int(kwargs['select'])
        input_name = f'input{selected_index}'
        selected_label = input_name
        node_id = kwargs['unique_id']
        nodelist = kwargs['extra_pnginfo']['workflow']['nodes']
        for node in nodelist:
            if str(node['id']) == node_id:
                inputs = node['inputs']
                for slot in inputs:
                    if slot['name'] == input_name and 'label' in slot:
                        selected_label = slot['label']
                break
        if input_name in kwargs:
            return (kwargs[input_name], selected_label, selected_index)
        else:
            print(f'ImpactSwitch: invalid select index (ignored)')
            return (None, '', selected_index)
```