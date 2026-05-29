# Documentation
- Class name: EmbeddingPrompt
- Category: ♾️Mixlab/Prompt
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node class generates prompts based on embeddings and associated weights, allowing users to adjust the impact of specific embeddings in the output.

# Input types
## Required
- embedding
    - The embedding parameter is crucial because it defines the base context or theme for generating the prompt. It selects from the list of available embeddings, ensuring the prompt is relevant to the chosen context.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- weight
    - The weight parameter adjusts the influence of the selected embedding on the final prompt, permitting fine‑grained control over how much the output emphasizes the embedding context.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- prompt
    - The output prompt is a string that integrates the chosen embedding and its weight, forming a concise, targeted statement that can serve as input for various applications.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class EmbeddingPrompt:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'embedding': (get_files_with_extension(embeddings_path, '.pt'),), 'weight': ('FLOAT', {'default': 1, 'min': -2, 'max': 2, 'step': 0.01, 'display': 'slider'})}}
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Prompt'
    OUTPUT_IS_LIST = (False,)

    def run(self, embedding, weight):
        weight = round(weight, 3)
        prompt = 'embedding:' + embedding
        if weight != 1:
            prompt = '(' + prompt + ':' + str(weight) + ')'
        prompt = ' ' + prompt + ' '
        return (prompt,)
```