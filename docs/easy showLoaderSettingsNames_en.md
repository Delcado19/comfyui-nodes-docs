# Documentation
- Class name: showLoaderSettingsNames
- Category: EasyUse/Util
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The “showLoaderSettingsNames” node is designed to extract and display the names of various components involved in pipeline settings, with a particular focus on checkpoints, VAEs, and LoRA names. It serves as a utility to inform users about the configuration details of the current workflow, enhancing transparency and ease of use.

# Input types
## Required
- pipe
    - The “pipe” parameter is crucial because it represents the pipeline that contains the settings to be extracted. This is a required input and plays a key role in the node's operation by providing context for the loader settings.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- names
    - The “names” parameter, although optional, can be used to provide additional context or default values for loader settings. It does not directly affect the node's execution but may influence how results are presented or interpreted.
    - Comfy dtype: INFO
    - Python dtype: Union[str, None]
- unique_id
    - The “unique_id” parameter is used to identify a specific node in the workflow. It is optional, and if provided, it can help the node more accurately locate and update the settings of a specific node.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: Union[str, None]
- extra_pnginfo
    - The “extra_pnginfo” parameter is an optional input that can contain additional information about the workflow. It is particularly useful when detailed workflow information is needed for the node to effectively perform its function.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Union[Dict[str, Any], None]

# Output types
- ckpt_name
    - The “ckpt_name” output provides the name of the checkpoint used in the pipeline, which is key information for users to understand the model configuration.
    - Comfy dtype: STRING
    - Python dtype: str
- vae_name
    - The “vae_name” output indicates the name of the VAE component in the pipeline, providing users with insight into the generative model being used.
    - Comfy dtype: STRING
    - Python dtype: str
- lora_name
    - The “lora_name” output displays the name of the LoRA model, which is important for users to understand the fine-tuning applied to the base model.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class showLoaderSettingsNames:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'pipe': ('PIPE_LINE',), 'names': ('INFO', {'default': '', 'forceInput': False})}, 'hidden': {'unique_id': 'UNIQUE_ID', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    RETURN_TYPES = ('STRING', 'STRING', 'STRING')
    RETURN_NAMES = ('ckpt_name', 'vae_name', 'lora_name')
    FUNCTION = 'notify'
    OUTPUT_NODE = True
    CATEGORY = 'EasyUse/Util'

    def notify(self, pipe, names=None, unique_id=None, extra_pnginfo=None):
        if unique_id and extra_pnginfo and ('workflow' in extra_pnginfo):
            workflow = extra_pnginfo['workflow']
            node = next((x for x in workflow['nodes'] if str(x['id']) == unique_id), None)
            if node:
                ckpt_name = pipe['loader_settings']['ckpt_name'] if 'ckpt_name' in pipe['loader_settings'] else ''
                vae_name = pipe['loader_settings']['vae_name'] if 'vae_name' in pipe['loader_settings'] else ''
                lora_name = pipe['loader_settings']['lora_name'] if 'lora_name' in pipe['loader_settings'] else ''
                if ckpt_name:
                    ckpt_name = os.path.basename(os.path.splitext(ckpt_name)[0])
                if vae_name:
                    vae_name = os.path.basename(os.path.splitext(vae_name)[0])
                if lora_name:
                    lora_name = os.path.basename(os.path.splitext(lora_name)[0])
                names = 'ckpt_name: ' + ckpt_name + '\n' + 'vae_name: ' + vae_name + '\n' + 'lora_name: ' + lora_name
                node['widgets_values'] = names
        return {'ui': {'text': names}, 'result': (ckpt_name, vae_name, lora_name)}
```