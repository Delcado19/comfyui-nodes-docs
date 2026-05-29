# Documentation
- Class name: ImpactWildcardEncode
- Category: ImpactPack/Prompt
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The "ImpactWildcardEncode" node is designed to integrate and manipulate text data with models and clips. It specifically handles text containing wildcards and utilizes advanced techniques like LoRA for text modification. This node is essential for applications requiring dynamic text generation and model conditioning.

# Input types
## Required
- model
    - The "model" parameter is critical for the node's operation, as it defines the model to be used for text processing. This is a fundamental component that directly affects the node's ability to generate and manipulate text data.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The "clip" parameter is required because it represents the multimedia clip to be processed alongside the text. It plays a key role in how the node integrates text and multimedia content.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- wildcard_text
    - The "wildcard_text" parameter allows placeholders to be included in the text, which can be dynamically filled based on context. This is a critical feature for applications requiring flexible text input.
    - Comfy dtype: STRING
    - Python dtype: str
- populated_text
    - The "populated_text" parameter is where the actual text to be processed resides. It is important because it is the primary input for text manipulation and directly affects the output.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- mode
    - The "mode" parameter determines whether the text will be populated or kept fixed. This is an important switch that changes the node's behavior based on the desired outcome.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- Select to add LoRA
    - The "Select to add LoRA" parameter allows LoRA to be added to the text, which can significantly enhance the expressiveness and adaptability of the text within the model context.
    - Comfy dtype: COMBO[Select the LoRA to add to the text]
    - Python dtype: str
- Select to add Wildcard
    - The "Select to add Wildcard" parameter is used to introduce wildcards into the text, providing a mechanism for dynamic text insertion and modification.
    - Comfy dtype: COMBO[Select the Wildcard to add to the text]
    - Python dtype: str
- seed
    - The "seed" parameter is important for ensuring the reproducibility of the node's operations, especially when dealing with random processes.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- model
    - The "model" output represents the updated model after processing the text and clip, available for further use or analysis.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The "clip" output is the processed multimedia clip that has been integrated with the text data.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- conditioning
    - The "conditioning" output provides contextual information derived from the text and clip, which can be used to guide further model operations.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, torch.Tensor]
- populated_text
    - The "populated_text" output is the final text after all processing steps, reflecting the dynamic changes made during the node's execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class ImpactWildcardEncode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'clip': ('CLIP',), 'wildcard_text': ('STRING', {'multiline': True, 'dynamicPrompts': False}), 'populated_text': ('STRING', {'multiline': True, 'dynamicPrompts': False}), 'mode': ('BOOLEAN', {'default': True, 'label_on': 'Populate', 'label_off': 'Fixed'}), 'Select to add LoRA': (['Select the LoRA to add to the text'] + folder_paths.get_filename_list('loras'),), 'Select to add Wildcard': (['Select the Wildcard to add to the text'],), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    CATEGORY = 'ImpactPack/Prompt'
    RETURN_TYPES = ('MODEL', 'CLIP', 'CONDITIONING', 'STRING')
    RETURN_NAMES = ('model', 'clip', 'conditioning', 'populated_text')
    FUNCTION = 'doit'

    @staticmethod
    def process_with_loras(**kwargs):
        return impact.wildcards.process_with_loras(**kwargs)

    @staticmethod
    def get_wildcard_list():
        return impact.wildcards.get_wildcard_list()

    def doit(self, *args, **kwargs):
        populated = kwargs['populated_text']
        (model, clip, conditioning) = impact.wildcards.process_with_loras(populated, kwargs['model'], kwargs['clip'])
        return (model, clip, conditioning, populated)
```