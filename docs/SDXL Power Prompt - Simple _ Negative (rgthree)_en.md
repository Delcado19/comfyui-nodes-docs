
# Documentation
- Class name: SDXL Power Prompt - Simple _ Negative (rgthree)
- Category: rgthree
- Output node: False

This node offers a simplified version of SDXL Power Prompt, specifically designed for negative condition scenarios. It streamlines the process by not loading Loras, making it more efficient when negative prompts are required.

# Input types
## Required
- prompt_g
- Global prompt used to generate or adjust output. It plays a crucial role in guiding the overall direction and theme of generation.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt_l
- Local prompt specifying more detailed or localized conditions. It supplements the global prompt by adding specific details to certain areas or aspects.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional
- opt_clip
- Optional CLIP model settings to adjust conditions based on visual concepts.
    - Comfy dtype: CLIP
    - Python dtype: str
- opt_clip_width
- Width of the CLIP model input. Crucial for defining the size of visual concepts to consider.
    - Comfy dtype: INT
    - Python dtype: float
- opt_clip_height
- Height of the CLIP model input. Crucial for determining the size of visual concepts to analyze.
    - Comfy dtype: INT
    - Python dtype: float
- insert_embedding
- Allows insertion of predefined embeddings into the prompt, enhancing modulation with additional context or information.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- insert_saved
- Allows inclusion of saved prompts, providing a way to reuse previously successful or preferred prompt configurations.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- target_width
- Defines the target width of the output, allowing specific size requirements to be set.
    - Comfy dtype: INT
    - Python dtype: int
- target_height
- Defines the target height of the output, enabling generated content to specify dimensions precisely.
    - Comfy dtype: INT
    - Python dtype: int
- crop_width
- Determines the width of the crop area, which can focus generation on a specific part of the visual concept.
    - Comfy dtype: INT
    - Python dtype: int
- crop_height
- Specifies the height of the crop area, allowing targeted focus generation within the visual concept.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- CONDITIONING
- Combines global and local prompts with optional parameters to guide the generation process and modulate output.
    - Comfy dtype: CONDITIONING
    - Python dtype: tuple
- TEXT_G
- Global prompt used for generation, returned as part of the output for reference.
    - Comfy dtype: STRING
    - Python dtype: str
- TEXT_L
- Local prompt used for generation, returned as part of the output for reference.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RgthreeSDXLPowerPromptSimple(RgthreeSDXLPowerPromptPositive):
  """A simpler SDXL Power Prompt that doesn't handle Loras."""

  NAME = NODE_NAME
  CATEGORY = get_category()

  @classmethod
  def INPUT_TYPES(cls):  # pylint: disable = invalid-name, missing-function-docstring
    saved_prompts_files = folder_paths.get_filename_list('saved_prompts')
    saved_promptes_content = []
    for fname in saved_prompts_files:
      with open(folder_paths.get_full_path('saved_prompts', fname), 'r', encoding="utf-8") as file:
        saved_promptes_content.append(file.read())

    return {
      'required': {
        'prompt_g': ('STRING', {
          'multiline': True
        }),
        'prompt_l': ('STRING', {
          'multiline': True
        }),
      },
      'optional': {
        "opt_clip": ("CLIP",),
        "opt_clip_width": ("INT", {
          "forceInput": True,
          "default": 1024.0,
          "min": 0,
          "max": MAX_RESOLUTION
        }),
        "opt_clip_height": ("INT", {
          "forceInput": True,
          "default": 1024.0,
          "min": 0,
          "max": MAX_RESOLUTION
        }),
        'insert_embedding': ([
          'CHOOSE',
        ] + [os.path.splitext(x)[0] for x in folder_paths.get_filename_list('embeddings')],),
        'insert_saved': ([
          'CHOOSE',
        ] + saved_prompts_files,),
        # We'll hide these in the UI for now.
        "target_width": ("INT", {
          "default": -1,
          "min": -1,
          "max": MAX_RESOLUTION
        }),
        "target_height": ("INT", {
          "default": -1,
          "min": -1,
          "max": MAX_RESOLUTION
        }),
        "crop_width": ("INT", {
          "default": -1,
          "min": -1,
          "max": MAX_RESOLUTION
        }),
        "crop_height": ("INT", {
          "default": -1,
          "min": -1,
          "max": MAX_RESOLUTION
        }),
      },
      'hidden': {
        'values_insert_saved': (['CHOOSE'] + saved_promptes_content,),
      }
    }

  RETURN_TYPES = ('CONDITIONING', 'STRING', 'STRING')
  RETURN_NAMES = ('CONDITIONING', 'TEXT_G', 'TEXT_L')
  FUNCTION = 'main'

  def main(self,
           prompt_g,
           prompt_l,
           opt_clip=None,
           opt_clip_width=None,
           opt_clip_height=None,
           insert_embedding=None,
           insert_saved=None,
           target_width=-1,
           target_height=-1,
           crop_width=-1,
           crop_height=-1,
           values_insert_saved=None):

    conditioning = self.get_conditioning(prompt_g, prompt_l, opt_clip, opt_clip_width,
                                         opt_clip_height, target_width, target_height, crop_width, crop_height)
    return (conditioning, prompt_g, prompt_l)

```
