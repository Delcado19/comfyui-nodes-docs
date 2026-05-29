
# Documentation
- Class name: Power Prompt - Simple (rgthree)
- Category: rgthree
- Output node: False

The "Power Prompt - Simple (rgthree)" node aims to simplify the process of generating conditioning and text output based on a given prompt. It optionally integrates CLIP embeddings and allows insertion of pre-saved prompts or embeddings, streamlining the creation of customized text inputs for subsequent processing.

# Input types
## Required
- prompt
    - Primary text input for generating conditioning and text output. It serves as the base content for further modification or enhancement.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional
- opt_clip
    - Optional CLIP model input; if provided, it is used to generate conditioning output based on the prompt, improving the relevance or specificity of the generated text.
    - Comfy dtype: CLIP
    - Python dtype: Optional[str]
- insert_embedding
    - Allows insertion of pre-saved embeddings by name, enabling customization of the prompt with specific, predefined features.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Optional[str]
- insert_saved
    - Allows inclusion of pre-saved prompts by filename, facilitating reuse of previously crafted prompts in new generations.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Optional[str]

# Output types
- CONDITIONING
    - Conditioning output generated based on the prompt, optionally enhanced via the CLIP model, usable for further processing or optimization.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[torch.Tensor]
- TEXT
    - Original or modified prompt text, usable as input for subsequent operations or models.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RgthreePowerPromptSimple(RgthreePowerPrompt):

    NAME=get_name('Power Prompt - Simple')
    CATEGORY = get_category()

    @classmethod
    def INPUT_TYPES(cls):  # pylint: disable = invalid-name, missing-function-docstring
        SAVED_PROMPTS_FILES=folder_paths.get_filename_list('saved_prompts')
        SAVED_PROMPTS_CONTENT=[]
        for filename in SAVED_PROMPTS_FILES:
            with open(folder_paths.get_full_path('saved_prompts', filename), 'r') as f:
                SAVED_PROMPTS_CONTENT.append(f.read())
        return {
            'required': {
                'prompt': ('STRING', {'multiline': True}),
            },
            'optional': {
                "opt_clip": ("CLIP", ),
                'insert_embedding': (['CHOOSE',] + [os.path.splitext(x)[0] for x in folder_paths.get_filename_list('embeddings')],),
                'insert_saved': (['CHOOSE',] + SAVED_PROMPTS_FILES,),
            },
            'hidden': {
                'values_insert_saved': (['CHOOSE'] + SAVED_PROMPTS_CONTENT,),
            }
        }

    RETURN_TYPES = ('CONDITIONING', 'STRING',)
    RETURN_NAMES = ('CONDITIONING', 'TEXT',)
    FUNCTION = 'main'

    def main(self, prompt, opt_clip=None, insert_embedding=None, insert_saved=None, values_insert_saved=None):
        conditioning=None
        if opt_clip != None:
            conditioning = CLIPTextEncode().encode(opt_clip, prompt)[0]

        return (conditioning, prompt)

```
