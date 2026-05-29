# Documentation
- Class name: stylesPromptSelector
- Category: EasyUse/Prompt
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node abstractly manages the selection and application of stylized prompts to guide the generation process, ensuring thematic consistency and stylistic diversity without involving specific implementation details.

# Input types
## Required
- styles
    - The "style" parameter is critical as it determines the stylistic direction of the output. It allows the node to select from a predefined set of styles, influencing the overall aesthetic and thematic outcome of the generated content.
    - Comfy dtype: COMBO[fooocus_styles, bar_styles, baz_styles]
    - Python dtype: Union[str, List[str]]
## Optional
- positive
    - The "positive" parameter serves as a guide for the node to include certain elements or themes in the output. It refines the generation process by focusing on desired aspects, enhancing the relevance and appeal of the final result.
    - Comfy dtype: STRING
    - Python dtype: Optional[str]
- negative
    - The "negative" parameter is essential in defining what should be excluded from the output. It helps the node avoid unwanted elements or themes, ensuring the final result aligns with the intended vision.
    - Comfy dtype: STRING
    - Python dtype: Optional[str]
- prompt
    - The "prompt" parameter is a hidden input that, when present in the "my_unique_id" section of the input, provides additional context for the node. It can contain specific instructions or preferences to further tailor the output to the user's needs.
    - Comfy dtype: PROMPT
    - Python dtype: Dict[str, Any]
- extra_pnginfo
    - When provided, the "extra_pnginfo" parameter can offer supplementary information that the node may utilize to enhance the detail and quality of the output. It plays a role in refining the generation process to meet specific user requirements.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Any
- my_unique_id
    - The "my_unique_id" parameter is a hidden input used to uniquely identify the request. It enables the node to manage and associate inputs for specific user requests, ensuring personalized and targeted output generation.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: Any

# Output types
- positive
    - The "positive" output represents the stylized prompts tailored and selected based on the input criteria. It is a critical component of the final output, ensuring the generated content aligns with the desired themes and elements.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - The "negative" output captures the elements or themes explicitly excluded from the generation process. This ensures the final result remains free from unwanted aspects, strictly adhering to the user's specifications.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class stylesPromptSelector:

    @classmethod
    def INPUT_TYPES(s):
        styles = ['fooocus_styles']
        styles_dir = FOOOCUS_STYLES_DIR
        for file_name in os.listdir(styles_dir):
            file = os.path.join(styles_dir, file_name)
            if os.path.isfile(file) and file_name.endswith('.json') and ('styles' in file_name.split('.')[0]):
                styles.append(file_name.split('.')[0])
        return {'required': {'styles': (styles, {'default': 'fooocus_styles'})}, 'optional': {'positive': ('STRING', {'forceInput': True}), 'negative': ('STRING', {'forceInput': True})}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO', 'my_unique_id': 'UNIQUE_ID'}}
    RETURN_TYPES = ('STRING', 'STRING')
    RETURN_NAMES = ('positive', 'negative')
    CATEGORY = 'EasyUse/Prompt'
    FUNCTION = 'run'
    OUTPUT_NODE = True

    def replace_repeat(self, prompt):
        prompt = prompt.replace('，', ',')
        arr = prompt.split(',')
        if len(arr) != len(set(arr)):
            all_weight_prompt = re.findall(re.compile('[(](.*?)[)]', re.S), prompt)
            if len(all_weight_prompt) > 0:
                return prompt
            else:
                for i in range(len(arr)):
                    arr[i] = arr[i].strip()
                arr = list(set(arr))
                return ', '.join(arr)
        else:
            return prompt

    def run(self, styles, positive='', negative='', prompt=None, extra_pnginfo=None, my_unique_id=None):
        values = []
        all_styles = {}
        (positive_prompt, negative_prompt) = ('', negative)
        if styles == 'fooocus_styles':
            file = os.path.join(RESOURCES_DIR, styles + '.json')
        else:
            file = os.path.join(FOOOCUS_STYLES_DIR, styles + '.json')
        f = open(file, 'r', encoding='utf-8')
        data = json.load(f)
        f.close()
        for d in data:
            all_styles[d['name']] = d
        if my_unique_id in prompt:
            if prompt[my_unique_id]['inputs']['select_styles']:
                values = prompt[my_unique_id]['inputs']['select_styles'].split(',')
        has_prompt = False
        if len(values) == 0:
            return (positive, negative)
        for (index, val) in enumerate(values):
            if 'prompt' in all_styles[val]:
                if '{prompt}' in all_styles[val]['prompt'] and has_prompt == False:
                    positive_prompt = all_styles[val]['prompt'].format(prompt=positive)
                    has_prompt = True
                else:
                    positive_prompt += ', ' + all_styles[val]['prompt'].replace(', {prompt}', '').replace('{prompt}', '')
            if 'negative_prompt' in all_styles[val]:
                negative_prompt += ', ' + all_styles[val]['negative_prompt'] if negative_prompt else all_styles[val]['negative_prompt']
        if has_prompt == False and positive:
            positive_prompt = positive + ', '
        positive_prompt = self.replace_repeat(positive_prompt) if positive_prompt else ''
        negative_prompt = self.replace_repeat(negative_prompt) if negative_prompt else ''
        return (positive_prompt, negative_prompt)
```