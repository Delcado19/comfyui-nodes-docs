# Documentation
- Class name: MakeBasicPipe
- Category: InspirePack/Prompt
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The MakeBasicPipe node is designed to simplify and manipulate text prompts for generative models. It processes both positive and negative prompts, integrating advanced encoding techniques to refine input data for model generation. The node abstracts the complexity of prompt construction, focusing on improving the quality and relevance of input data to enhance generative output.

# Input types
## Required
- ckpt_name
    - The checkpoint name is critical for identifying the specific model state used in the generation process. This is a required parameter that guides the node in locating and using the appropriate model weights and configuration.
    - Comfy dtype: STRING
    - Python dtype: str
- positive_wildcard_text
    - This parameter holds the positive wildcard text, serving as a guide to direct the generative model toward producing desired results. Its strategic use can significantly influence the quality of generated text.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_wildcard_text
    - The negative wildcard text provides the model with a framework for avoiding unwanted outputs. It is an essential component for steering the generative process in the intended direction.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- basic_pipe
    - The output represents a structured pipeline including the model, encoder, and processed prompts, ready for the generation process. It encapsulates the node's functionality in preparing data for effective model utilization.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[torch.nn.Module, CLIP, VAE, str]
- cache_key
    - This output is a unique identifier for cached checkpoint and prompt data, which can be used for subsequent retrieval and processing. It is critical for maintaining consistency and efficiency in generative workflows.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class MakeBasicPipe:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'ckpt_name': (folder_paths.get_filename_list('checkpoints'),), 'ckpt_key_opt': ('STRING', {'multiline': False, 'placeholder': "If empty, use 'ckpt_name' as the key."}), 'positive_wildcard_text': ('STRING', {'multiline': True, 'dynamicPrompts': False, 'placeholder': 'Positive Prompt (User Input)'}), 'negative_wildcard_text': ('STRING', {'multiline': True, 'dynamicPrompts': False, 'placeholder': 'Negative Prompt (User Input)'}), 'Add selection to': ('BOOLEAN', {'default': True, 'label_on': 'Positive', 'label_off': 'Negative'}), 'Select to add LoRA': (['Select the LoRA to add to the text'] + folder_paths.get_filename_list('loras'),), 'Select to add Wildcard': (['Select the Wildcard to add to the text'],), 'wildcard_mode': ('BOOLEAN', {'default': True, 'label_on': 'Populate', 'label_off': 'Fixed'}), 'positive_populated_text': ('STRING', {'multiline': True, 'dynamicPrompts': False, 'placeholder': 'Populated Positive Prompt (Will be generated automatically)'}), 'negative_populated_text': ('STRING', {'multiline': True, 'dynamicPrompts': False, 'placeholder': 'Populated Negative Prompt (Will be generated automatically)'}), 'token_normalization': (['none', 'mean', 'length', 'length+mean'],), 'weight_interpretation': (['comfy', 'A1111', 'compel', 'comfy++', 'down_weight'], {'default': 'comfy++'}), 'stop_at_clip_layer': ('INT', {'default': -2, 'min': -24, 'max': -1, 'step': 1}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}, 'optional': {'vae_opt': ('VAE',)}}
    CATEGORY = 'InspirePack/Prompt'
    RETURN_TYPES = ('BASIC_PIPE', 'STRING')
    RETURN_NAMES = ('basic_pipe', 'cache_key')
    FUNCTION = 'doit'

    def doit(self, **kwargs):
        pos_populated = kwargs['positive_populated_text']
        neg_populated = kwargs['negative_populated_text']
        clip_encoder = BNK_EncoderWrapper(kwargs['token_normalization'], kwargs['weight_interpretation'])
        if 'ImpactWildcardEncode' not in nodes.NODE_CLASS_MAPPINGS:
            utils.try_install_custom_node('https://github.com/ltdrdata/ComfyUI-Impact-Pack', "To use 'Make Basic Pipe (Inspire)' node, 'Impact Pack' extension is required.")
            raise Exception(f"[ERROR] To use 'Make Basic Pipe (Inspire)', you need to install 'Impact Pack'")
        (model, clip, vae, key) = CheckpointLoaderSimpleShared().doit(ckpt_name=kwargs['ckpt_name'], key_opt=kwargs['ckpt_key_opt'])
        clip = nodes.CLIPSetLastLayer().set_last_layer(clip, kwargs['stop_at_clip_layer'])[0]
        (model, clip, positive) = nodes.NODE_CLASS_MAPPINGS['ImpactWildcardEncode'].process_with_loras(wildcard_opt=pos_populated, model=model, clip=clip, clip_encoder=clip_encoder)
        (model, clip, negative) = nodes.NODE_CLASS_MAPPINGS['ImpactWildcardEncode'].process_with_loras(wildcard_opt=neg_populated, model=model, clip=clip, clip_encoder=clip_encoder)
        if 'vae_opt' in kwargs:
            vae = kwargs['vae_opt']
        basic_pipe = (model, clip, vae, positive, negative)
        return (basic_pipe, key)
```