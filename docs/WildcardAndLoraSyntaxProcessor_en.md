# Documentation
- Class name: WildcardAndLoraSyntaxProcessor
- Category: Mikey/Lora
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The WildcardAndLoraSyntaxProcessor node handles and processes complex text input by replacing wildcards and Lora syntax with specific values or files. It enhances workflow flexibility and customization by enabling dynamic content generation based on predefined patterns and external files.

# Input types
## Required
- model
- The model parameter is essential for node operation because it represents the core model the node will use. This required input directly affects the node’s ability to function properly.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
- The clip parameter is required and works in tandem with the model parameter. It provides additional context or data the model may need, playing a vital role in node execution.
    - Comfy dtype: CLIP
    - Python dtype: CLIP model instance
- text
- The text parameter is a key input because it contains the raw text to be processed. It may include special syntax for wildcards and Lora references, which the node will interpret and replace.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
- The seed parameter is important for the node’s randomization process. It ensures that random elements in the text are generated reproducibly, which is crucial for consistent results across runs.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- extra_pnginfo
- The extra_pnginfo parameter is optional but can provide additional information to further customize node behavior. It may contain metadata or other relevant data to enhance processing.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: str or dict
- prompt
- The prompt parameter is optional and can guide the node’s processing by providing specific instructions or context. It can influence decision making when handling complex text.
    - Comfy dtype: PROMPT
    - Python dtype: str or dict

# Output types
- model
- The node’s model output represents the processed model, updated or modified according to the node’s operations. It marks the completion of text processing and is ready for further use or analysis.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
- The clip output is the processed version of the input clip, reflecting any changes made during node execution. This result may be used in later workflow stages.
    - Comfy dtype: CLIP
    - Python dtype: CLIP model instance
- text
- The text output is the final processed text after all wildcards and Lora syntax have been replaced. It is the node’s primary output and the result of its core function.
    - Comfy dtype: STRING
    - Python dtype: str
- unprocessed_text
- The unprocessed text output provides the node’s original text input, unchanged by node operations. It serves as a reference for comparison or further analysis.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WildcardAndLoraSyntaxProcessor:

    def __init__(self):
        self.loaded_lora = None

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'clip': ('CLIP',), 'text': ('STRING', {'multiline': True, 'default': '<lora:filename:weight>'}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}, 'hidden': {'extra_pnginfo': 'EXTRA_PNGINFO', 'prompt': 'PROMPT'}}
    RETURN_TYPES = ('MODEL', 'CLIP', 'STRING', 'STRING')
    RETURN_NAMES = ('model', 'clip', 'text', 'unprocessed_text')
    FUNCTION = 'process'
    CATEGORY = 'Mikey/Lora'

    def extract_and_load_loras(self, text, model, clip):
        lora_re = '<lora:(.*?)(?::(.*?))?>'
        lora_prompts = re.findall(lora_re, text)
        stripped_text = text
        clip_lora = clip
        if len(lora_prompts) > 0:
            for lora_prompt in lora_prompts:
                lora_filename = lora_prompt[0]
                if '.safetensors' not in lora_filename:
                    lora_filename += '.safetensors'
                try:
                    lora_multiplier = float(lora_prompt[1]) if lora_prompt[1] != '' else 1.0
                except:
                    lora_multiplier = 1.0
                (model, clip) = load_lora(model, clip, lora_filename, lora_multiplier, lora_multiplier)
        stripped_text = re.sub(lora_re, '', stripped_text)
        return (model, clip, stripped_text)

    def process(self, model, clip, text, seed, extra_pnginfo=None, prompt=None):
        text = search_and_replace(text, extra_pnginfo, prompt)
        text = process_random_syntax(text, seed)
        text_ = find_and_replace_wildcards(text, seed, True)
        if len(text_) != len(text):
            seed = random.randint(0, 1000000)
        else:
            seed = 1
        (model, clip, stripped_text) = self.extract_and_load_loras(text_, model, clip)
        stripped_text = find_and_replace_wildcards(stripped_text, seed, True)
        return (model, clip, stripped_text, text_)
```