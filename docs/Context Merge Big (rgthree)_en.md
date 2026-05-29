
# Documentation
- Class name: Context Merge Big (rgthree)
- Category: rgthree
- Output node: False

The Context Merge Big (rgthree) node is designed to merge multiple context objects into a single comprehensive context. It intelligently combines inputs, with later contexts overriding earlier ones in cases of overlap, ensuring seamless integration of context data.

# Input types
## Required
## Optional
- ctx_i
    - This parameter represents the context objects to be merged. Multiple such inputs can exist, each integrated into the final context.
    - Comfy dtype: RGTHREE_CONTEXT
    - Python dtype: unknown

# Output types
- CONTEXT
    - Outputs the merged comprehensive context object.
    - Comfy dtype: RGTHREE_CONTEXT
    - Python dtype: unknown
- MODEL
    - Outputs model information that may be included.
    - Comfy dtype: MODEL
    - Python dtype: unknown
- CLIP
    - Outputs CLIP model information that may be included.
    - Comfy dtype: CLIP
    - Python dtype: unknown
- VAE
    - Outputs VAE model information that may be included.
    - Comfy dtype: VAE
    - Python dtype: unknown
- POSITIVE
    - Outputs positive conditioning information.
    - Comfy dtype: CONDITIONING
    - Python dtype: unknown
- NEGATIVE
    - Outputs negative conditioning information.
    - Comfy dtype: CONDITIONING
    - Python dtype: unknown
- LATENT
    - Outputs latent space information.
    - Comfy dtype: LATENT
    - Python dtype: unknown
- IMAGE
    - Outputs image information.
    - Comfy dtype: IMAGE
    - Python dtype: unknown
- SEED
    - Outputs the random seed value.
    - Comfy dtype: INT
    - Python dtype: unknown
- STEPS
    - Outputs step count information.
    - Comfy dtype: INT
    - Python dtype: unknown
- STEP_REFINER
    - Outputs step optimizer information.
    - Comfy dtype: INT
    - Python dtype: unknown
- CFG
    - Outputs CFG (configuration) information.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- CKPT_NAME
    - Outputs checkpoint name.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- SAMPLER
    - Outputs sampler information.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- SCHEDULER
    - Outputs scheduler information.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- CLIP_WIDTH
    - Outputs CLIP width information.
    - Comfy dtype: INT
    - Python dtype: unknown
- CLIP_HEIGHT
    - Outputs CLIP height information.
    - Comfy dtype: INT
    - Python dtype: unknown
- TEXT_POS_G
    - Outputs global positive text prompt.
    - Comfy dtype: STRING
    - Python dtype: unknown
- TEXT_POS_L
    - Outputs local positive text prompt.
    - Comfy dtype: STRING
    - Python dtype: unknown
- TEXT_NEG_G
    - Outputs global negative text prompt.
    - Comfy dtype: STRING
    - Python dtype: unknown
- TEXT_NEG_L
    - Outputs local negative text prompt.
    - Comfy dtype: STRING
    - Python dtype: unknown
- MASK
    - Outputs mask information.
    - Comfy dtype: MASK
    - Python dtype: unknown
- CONTROL_NET
    - Output ControlNet related information.
    - Comfy dtype: CONTROL_NET
    - Python dtype: unknown


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RgthreeContextMergeBig:
  """The Context Merge Big node."""

  NAME = get_name("Context Merge Big")
  CATEGORY = get_category()

  @classmethod
  def INPUT_TYPES(cls):  # pylint: disable = invalid-name, missing-function-docstring
    return {
      "required": {},
      "optional": {
        "ctx_01": ("RGTHREE_CONTEXT",),
        "ctx_02": ("RGTHREE_CONTEXT",),
        "ctx_03": ("RGTHREE_CONTEXT",),
        "ctx_04": ("RGTHREE_CONTEXT",),
        "ctx_05": ("RGTHREE_CONTEXT",),
      },
    }

  RETURN_TYPES = ALL_CTX_RETURN_TYPES
  RETURN_NAMES = ALL_CTX_RETURN_NAMES
  FUNCTION = "merge"

  def merge(self, ctx_01=None, ctx_02=None, ctx_03=None, ctx_04=None, ctx_05=None):
    """Merges any non-null passed contexts; later ones overriding earlier.
    """
    ctx = merge_new_context(ctx_01, ctx_02, ctx_03, ctx_04, ctx_05)

    return get_context_return_tuple(ctx)

```
