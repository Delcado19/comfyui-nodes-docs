
# Documentation
- Class name: Context Switch (rgthree)
- Category: rgthree
- Output node: False

The Context Switch (rgthree) node is designed to simplify context management by selecting the first non-empty context from a set of provided contexts. This feature ensures that the active context for subsequent operations is effectively determined, enabling smoother transitions and management across various processing workflows.

# Input types
## Required
## Optional
- ctx_i
    - Serves as a generic placeholder for any context provided to the node. The node evaluates each context in order until it finds the first non-empty context, then selects that context as the output. This approach allows for flexible and dynamic context switching based on the availability of context content.
    - Comfy dtype: RGTHREE_CONTEXT
    - Python dtype: dict

# Output types
- CONTEXT
    - Comprehensive context output, including aspects such as model configuration, image processing parameters, and conditioning information, based on the first non-empty context found.
    - Comfy dtype: RGTHREE_CONTEXT
    - Python dtype: dict
- MODEL
    - Outputs model-related context information.
    - Comfy dtype: MODEL
    - Python dtype: str
- CLIP
    - Outputs CLIP model configuration context.
    - Comfy dtype: CLIP
    - Python dtype: str
- VAE
    - Outputs VAE model configuration context.
    - Comfy dtype: VAE
    - Python dtype: str
- POSITIVE
    - Outputs positive conditioning context.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- NEGATIVE
    - Outputs negative conditioning context.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- LATENT
    - Outputs latent space configuration context.
    - Comfy dtype: LATENT
    - Python dtype: str
- IMAGE
    - Outputs image processing context.
    - Comfy dtype: IMAGE
    - Python dtype: str
- SEED
    - Outputs the seed value for random number generation context.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RgthreeContextSwitch:
  """The initial Context Switch node.

  For now, this will remain as-is but is otherwise backwards compatible with other Context nodes
  outputs.
  """

  NAME = get_name("Context Switch")
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

  RETURN_TYPES = ORIG_CTX_RETURN_TYPES
  RETURN_NAMES = ORIG_CTX_RETURN_NAMES
  FUNCTION = "switch"

  def switch(self, ctx_01=None, ctx_02=None, ctx_03=None, ctx_04=None, ctx_05=None):
    """Chooses the first non-empty Context to output.

    As of right now, this returns the "original" context. We could expand it, or create another
    "Context Big Switch" and have all the outputs...
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
    return get_orig_context_return_tuple(ctx)

```
