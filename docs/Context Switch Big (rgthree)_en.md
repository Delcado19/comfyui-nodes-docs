
# Documentation
- Class name: Context Switch Big (rgthree)
- Category: rgthree
- Output node: False

The Context Switch Big node is designed to manage multiple context inputs, selecting the first non-empty context for output. This feature allows dynamic context switching in workflows, ensuring that valid context is always passed.

# Input types
## Required
## Optional
- ctx_i
    - This parameter represents multiple optional context inputs. The node will select the first non-empty context from these inputs as output. This design provides flexibility for workflows, allowing dynamic selection and switching of contexts.
    - Comfy dtype: RGTHREE_CONTEXT
    - Python dtype: unknown

# Output types
- CONTEXT
    - Outputs the selected non-empty context, which is the main output of the node, used to pass to subsequent nodes in the workflow.
    - Comfy dtype: RGTHREE_CONTEXT
    - Python dtype: unknown
- MODEL
    - Outputs model information related to the selected context.
    - Comfy dtype: MODEL
    - Python dtype: unknown
- CLIP
    - Outputs CLIP model information related to the selected context.
    - Comfy dtype: CLIP
    - Python dtype: unknown
- VAE
    - Outputs VAE model information related to the selected context.
    - Comfy dtype: VAE
    - Python dtype: unknown
- POSITIVE
    - Outputs positive condition information related to the selected context.
    - Comfy dtype: CONDITIONING
    - Python dtype: unknown
- NEGATIVE
    - Outputs negative condition information related to the selected context.
    - Comfy dtype: CONDITIONING
    - Python dtype: unknown
- LATENT
    - Outputs latent space information related to the selected context.
    - Comfy dtype: LATENT
    - Python dtype: unknown
- IMAGE
    - Outputs image information related to the selected context.
    - Comfy dtype: IMAGE
    - Python dtype: unknown
- SEED
    - Outputs random seed information related to the selected context.
    - Comfy dtype: INT
    - Python dtype: unknown
- STEPS
    - Outputs step count information related to the selected context.
    - Comfy dtype: INT
    - Python dtype: unknown
- STEP_REFINER
    - Outputs step refiner information related to the selected context.
    - Comfy dtype: INT
    - Python dtype: unknown
- CFG
    - Outputs CFG configuration information related to the selected context.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- CKPT_NAME
    - Outputs checkpoint name information related to the selected context.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- SAMPLER
    - Outputs sampler information related to the selected context.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- SCHEDULER
    - Outputs scheduler information related to the selected context.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- CLIP_WIDTH
    - Outputs CLIP width information related to the selected context.
    - Comfy dtype: INT
    - Python dtype: unknown
- CLIP_HEIGHT
    - Outputs CLIP height information related to the selected context.
    - Comfy dtype: INT
    - Python dtype: unknown
- TEXT_POS_G
    - Outputs global positive text information related to the selected context.
    - Comfy dtype: STRING
    - Python dtype: unknown
- TEXT_POS_L
    - Outputs local positive text information related to the selected context.
    - Comfy dtype: STRING
    - Python dtype: unknown
- TEXT_NEG_G
    - Outputs global negative text information related to the selected context.
    - Comfy dtype: STRING
    - Python dtype: unknown
- TEXT_NEG_L
    - Outputs local negative text information related to the selected context.
    - Comfy dtype: STRING
    - Python dtype: unknown
- MASK
    - Outputs mask information related to the selected context.
    - Comfy dtype: MASK
    - Python dtype: unknown
- CONTROL_NET
    - Output control network information related to the selected context.
    - Comfy dtype: CONTROL_NET
    - Python dtype: unknown
- ui
    - Node output, i.e., the non-empty context selected from the given input. This output is essential for passing valid context to subsequent nodes in the workflow.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RgthreeContextSwitchBig:
  """The Context Switch Big node."""

  NAME = get_name("Context Switch Big")
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
  FUNCTION = "switch"

  def switch(self, ctx_01=None, ctx_02=None, ctx_03=None, ctx_04=None, ctx_05=None):
    """Chooses the first non-empty Context to output.
    """
    ctx = None
    if not is_context_empty(ctx_01):
      ctx = ctx_01
    elif not is_context_empty(ctx_02):
      ctx = ctx_02
    elif not is_context_empty(ctx_03):
      ctx = ctx_03
    elif not is_context_empty(ctx_04):
      ctx = ctx_04
    elif not is_context_empty(ctx_05):
      ctx = ctx_05
    return get_context_return_tuple(ctx)

```
