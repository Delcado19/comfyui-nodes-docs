
# Documentation
- Class name: Power Lora Loader (rgthree)
- Category: rgthree
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Power Lora Loader node enhances models and CLIP by dynamically adding multiple Lora modifications. It offers a flexible interface to integrate Loras into existing structures, extending functionality and performance.

# Input types
## Required
- model
- The model parameter represents the model to which Loras will be added. It defines the base structure that will be enhanced with additional features.
    - Comfy dtype: MODEL
    - Python dtype: tuple
- clip
- The clip parameter indicates the clip to be modified by Loras. It plays a key role in specifying the enhancement target, ensuring correct application of modifications.
    - Comfy dtype: CLIP
    - Python dtype: tuple

# Output types
- MODEL
- Returns the modified model with applied Loras, reflecting the enhancements made.
    - Comfy dtype: MODEL
    - Python dtype: tuple
- CLIP
- Returns the enhanced clip integrated with Loras, showcasing the modifications applied.
    - Comfy dtype: CLIP
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RgthreePowerLoraLoader:
  """ The Power Lora Loader is a powerful, flexible node to add multiple loras to a model/clip."""

  NAME = get_name('Power Lora Loader')
  CATEGORY = get_category()

  @classmethod
  def INPUT_TYPES(cls):  # pylint: disable = invalid-name, missing-function-docstring
    return {
      "required": {
        "model": ("MODEL",),
        "clip": ("CLIP",),
      },
      # Since we will pass any number of loras in from the UI, this needs to always allow an
      "optional": ContainsAnyDict(),
      "hidden": {},
    }

  RETURN_TYPES = ("MODEL", "CLIP")
  RETURN_NAMES = ("MODEL", "CLIP")
  FUNCTION = "load_loras"

  def load_loras(self, model, clip, **kwargs):
    """Loops over the provided loras in kwargs and applies valid ones."""
    for key, value in kwargs.items():
      key = key.upper()
      if key.startswith('LORA_') and 'on' in value and 'lora' in value and 'strength' in value:
        strength_model = value['strength']
        # If we just passed one strtength value, then use it for both, if we passed a strengthTwo
        # as well, then our `strength` will be for the model, and `strengthTwo` for clip.
        strength_clip = value['strengthTwo'] if 'strengthTwo' in value and value[
          'strengthTwo'] is not None else strength_model
        if value['on'] and (strength_model != 0 or strength_clip != 0):
          lora = get_lora_by_filename(value['lora'], log_node=self.NAME)
          if lora is not None:
            model, clip = LoraLoader().load_lora(model, clip, lora, strength_model, strength_clip)

    return (model, clip)

```
