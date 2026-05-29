# Documentation
- Class name: WildcardEncodeInspire
- Category: InspirePack/Prompt
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The WildcardEncodeInspire node processes and encodes text input containing wildcard and LoRa (low-rank adaptation) blocks, integrating them into the model and CLIP conditions for Stable Diffusion. It fills wildcards by dynamically generating prompts based on user input or fixed text, enhancing output creativity and adaptability. This node is essential for users seeking to improve AI‑generated content quality and relevance with advanced text‑encoding techniques.

# Input types
## Required
- model
    - Model parameters are critical because they define the base AI model used for text encoding and processing. They directly affect the quality and characteristics of the generated content, ensuring the output aligns with the model’s capabilities and training data.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - CLIP parameters are crucial for merging text with visual context, enabling the node to produce prompts that are coherent textually and relevant visually. They play a key role in keeping AI output consistent with the desired visual elements.
    - Comfy dtype: CLIP
    - Python dtype: CLIPModel
- token_normalization
    - The token_normalization parameter is important for preprocessing text tokens before encoding. It standardizes token values, improving the efficiency and accuracy of the encoding process and helping the AI model better understand the input.
    - Comfy dtype: COMBO
    - Python dtype: str
- weight_interpretation
    - The weight_interpretation parameter determines how the node interprets and applies weights during encoding. It influences emphasis on different text parts, significantly affecting the focus and detail of the final output.
    - Comfy dtype: COMBO
    - Python dtype: str
- wildcard_text
    - The wildcard_text parameter is core to the node’s function because it contains the template with wildcards that will be filled or replaced during encoding. It forms the basis for generating dynamic and adaptable prompts.
    - Comfy dtype: STRING
    - Python dtype: str
- populated_text
    - The populated_text parameter stores the final text after wildcard processing, used for actual encoding and AI content generation. It is the result of the node’s main function and directly impacts the output.
    - Comfy dtype: STRING
    - Python dtype: str
- mode
    - The mode parameter controls whether the node generates dynamic prompts (Populate) based on user input or uses fixed text (Fixed). This setting is vital for determining the flexibility and adaptability of the generated prompts.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - The seed parameter introduces randomness into the encoding process, allowing for diverse and unique outputs. It ensures that even with identical input, different results can be produced, increasing output variability.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- Select to add LoRA
    - The 'Select Add LoRA' parameter lets users incorporate specific LoRA blocks into the text, enhancing the encoding process with additional context. This can markedly improve the relevance and depth of AI‑generated content.
    - Comfy dtype: COMBO
    - Python dtype: str
- Select to add Wildcard
    - This parameter allows users to add specific wildcards to the text, which can be dynamically filled or replaced during encoding. It is a key aspect of customizing output to meet particular creative or thematic requirements.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- model
    - Model output is the updated AI model with encoded text and conditions, ready to generate content based on the input and processing parameters. It represents the result of the node’s encoding work.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - CLIP output integrates the input visual context, enhancing the AI’s ability to generate content that is not only textually coherent but also aligned with the provided CLIP visuals.
    - Comfy dtype: CLIP
    - Python dtype: CLIPModel
- conditioning
    - Conditional output provides the AI model with additional context and guidance, ensuring the generated content matches the specified theme and requirements. It is a key component for achieving targeted and relevant AI output.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, torch.Tensor]
- populated_text
    - The populated_text output is the final processed text with wildcards filled or replaced, ready for use in the AI model’s generation process. It is the direct result of the node’s encoding and processing activities.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
```
class WildcardEncodeInspire:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'clip': ('CLIP',), 'token_normalization': (['none', 'mean', 'length', 'length+mean'],), 'weight_interpretation': (['comfy', 'A1111', 'compel', 'comfy++', 'down_weight'], {'default': 'comfy++'}), 'wildcard_text': ('STRING', {'multiline': True, 'dynamicPrompts': False, 'placeholder': 'Wildcard Prompt (User Input)'}), 'populated_text': ('STRING', {'multiline': True, 'dynamicPrompts': False, 'placeholder': 'Populated Prompt (Will be generated automatically)'}), 'mode': ('BOOLEAN', {'default': True, 'label_on': 'Populate', 'label_off': 'Fixed'}), 'Select to add LoRA': (['Select the LoRA to add to the text'] + folder_paths.get_filename_list('loras'),), 'Select to add Wildcard': (['Select the Wildcard to add to the text'],), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    CATEGORY = 'InspirePack/Prompt'
    RETURN_TYPES = ('MODEL', 'CLIP', 'CONDITIONING', 'STRING')
    RETURN_NAMES = ('model', 'clip', 'conditioning', 'populated_text')
    FUNCTION = 'doit'

    def doit(self, *args, **kwargs):
        populated = kwargs['populated_text']
        clip_encoder = BNK_EncoderWrapper(kwargs['token_normalization'], kwargs['weight_interpretation'])
        if 'ImpactWildcardEncode' not in nodes.NODE_CLASS_MAPPINGS:
            utils.try_install_custom_node('https://github.com/ltdrdata/ComfyUI-Impact-Pack', "To use 'Wildcard Encode (Inspire)' node, 'Impact Pack' extension is required.")
            raise Exception(f"[ERROR] To use 'Wildcard Encode (Inspire)', you need to install 'Impact Pack'")
        (model, clip, conditioning) = nodes.NODE_CLASS_MAPPINGS['ImpactWildcardEncode'].process_with_loras(wildcard_opt=populated, model=kwargs['model'], clip=kwargs['clip'], clip_encoder=clip_encoder)
        return (model, clip, conditioning, populated)
```