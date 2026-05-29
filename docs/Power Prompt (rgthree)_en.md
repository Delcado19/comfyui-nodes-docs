
# Documentation
- Class name: Power Prompt (rgthree)
- Category: rgthree
- Output node: False

The Power Prompt node is designed to process text prompts, potentially enhancing them by adding additional context or modifications before further processing. It leverages utilities for handling specific text patterns and integrates with other text encoding components, aiming to prepare inputs for more complex text-to-image or text-to-text applications.

# Input types
## Required
- prompt
    - The primary text input processed by the node. Depending on the node's logic and additional parameters provided, it may undergo various transformations or enhancements.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional
- opt_model
    - An optional parameter allowing selection of a specific model to process the prompt, potentially influencing the result based on the model's characteristics.
    - Comfy dtype: MODEL
    - Python dtype: Optional[str]
- opt_clip
    - An optional parameter that, if provided, allows the prompt to be encoded together with this parameter's value using a CLIP model. This can be used to generate conditional vectors for further processing.
    - Comfy dtype: CLIP
    - Python dtype: Optional[str]
- insert_lora
    - Allows inclusion of LORA (Locally Optimized Receptive-field Attention) adjustments in the prompt, which can modify processing behavior based on the selected LORA's properties.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Optional[str]
- insert_embedding
    - Allows predefined embeddings to be inserted into the prompt, enhancing its context or specificity for subsequent processing.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Optional[str]
- insert_saved
    - Allows inclusion of saved prompts from a predefined list, potentially adding more depth or context to the primary prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Optional[str]

# Output types
- CONDITIONING
    - Conditional vectors generated from the prompt and the optional 'opt_clip' parameter using a CLIP model. This vector can be used for further processing in text-to-image or other generative tasks.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[torch.Tensor]
- MODEL
    - The model selected for processing the prompt (if any), which may influence the final output.
    - Comfy dtype: MODEL
    - Python dtype: Optional[str]
- CLIP
    - The CLIP model used to encode the prompt (if specified), which may affect the generated conditional vectors.
    - Comfy dtype: CLIP
    - Python dtype: Optional[str]
- TEXT
    - The processed or enhanced prompt, ready for further application or processing.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RgthreePowerPrompt:

  NAME = NODE_NAME
  CATEGORY = get_category()

  @classmethod
  def INPUT_TYPES(cls):  # pylint: disable = invalid-name, missing-function-docstring
    SAVED_PROMPTS_FILES = folder_paths.get_filename_list('saved_prompts')
    SAVED_PROMPTS_CONTENT = []
    for filename in SAVED_PROMPTS_FILES:
      with open(folder_paths.get_full_path('saved_prompts', filename), 'r') as f:
        SAVED_PROMPTS_CONTENT.append(f.read())
    return {
      'required': {
        'prompt': ('STRING', {
          'multiline': True
        }),
      },
      'optional': {
        "opt_model": ("MODEL",),
        "opt_clip": ("CLIP",),
        'insert_lora': (['CHOOSE', 'DISABLE LORAS'] +
                        [os.path.splitext(x)[0] for x in folder_paths.get_filename_list('loras')],),
        'insert_embedding': ([
          'CHOOSE',
        ] + [os.path.splitext(x)[0] for x in folder_paths.get_filename_list('embeddings')],),
        'insert_saved': ([
          'CHOOSE',
        ] + SAVED_PROMPTS_FILES,),
      },
      'hidden': {
        'values_insert_saved': (['CHOOSE'] + SAVED_PROMPTS_CONTENT,),
      }
    }

  RETURN_TYPES = (
    'CONDITIONING',
    'MODEL',
    'CLIP',
    'STRING',
  )
  RETURN_NAMES = (
    'CONDITIONING',
    'MODEL',
    'CLIP',
    'TEXT',
  )
  FUNCTION = 'main'

  def main(self,
           prompt,
           opt_model=None,
           opt_clip=None,
           insert_lora=None,
           insert_embedding=None,
           insert_saved=None,
           values_insert_saved=None):
    if insert_lora == 'DISABLE LORAS':
      prompt, loras = get_and_strip_loras(prompt, log_node=NODE_NAME, silent=True)
      log_node_info(
        NODE_NAME,
        f'Disabling all found loras ({len(loras)}) and stripping lora tags for TEXT output.')
    elif opt_model != None and opt_clip != None:
      prompt, loras = get_and_strip_loras(prompt, log_node=NODE_NAME)
      if len(loras):
        for lora in loras:
          opt_model, opt_clip = LoraLoader().load_lora(opt_model, opt_clip, lora['lora'],
                                                       lora['strength'], lora['strength'])
          log_node_success(NODE_NAME, f'Loaded "{lora["lora"]}" from prompt')
        log_node_info(NODE_NAME, f'{len(loras)} Loras processed; stripping tags for TEXT output.')
    elif '<lora:' in prompt:
      _prompt_stripped, loras = get_and_strip_loras(prompt, log_node=NODE_NAME, silent=True)
      if len(loras):
        log_node_warn(
          NODE_NAME, f'Found {len(loras)} lora tags in prompt but model & clip were not supplied!')
        log_node_info(NODE_NAME, 'Loras not processed, keeping for TEXT output.')

    conditioning = None
    if opt_clip != None:
      conditioning = CLIPTextEncode().encode(opt_clip, prompt)[0]

    return (conditioning, opt_model, opt_clip, prompt)

```
