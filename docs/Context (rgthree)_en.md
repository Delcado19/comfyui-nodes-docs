
# Documentation
- Class name: Context (rgthree)
- Category: rgthree
- Output node: False

Context (rgthree) node is a fundamental context node, designed for high compatibility with version 1.5 applications and other context nodes. It primarily converts input context parameters into structured output to suit most use cases while maintaining forward and backward compatibility.

# Input types
## Required
## Optional
- base_ctx
    - Serves as the base context for conversion or enhancement. It is the starting point of the conversion process, allowing integration or modification of additional context parameters.
    - Comfy dtype: RGTHREE_CONTEXT
    - Python dtype: Optional[Dict[str, Any]]
- model
    - Specifies the model used in the context, enabling customization and flexible handling.
    - Comfy dtype: MODEL
    - Python dtype: str
- clip
    - Defines the CLIP model to merge into the context, enhancing processing capability.
    - Comfy dtype: CLIP
    - Python dtype: str
- vae
    - Indicates the VAE model to include in the context, contributes to the generation process.
    - Comfy dtype: VAE
    - Python dtype: str
- positive
    - Positive conditioning factor, used to guide generation toward the desired result.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
    - Negative conditioning factor, used to steer generation away from undesired results.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- latent
    - Specifies the latent space representation used in the context, supporting advanced operations.
    - Comfy dtype: LATENT
    - Python dtype: str
- images
    - Defines images to include in the context, allowing integration of visual data.
    - Comfy dtype: IMAGE
    - Python dtype: str
- seed
    - Sets the seed for random number generation, ensuring reproducibility of results.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- CONTEXT
    - Comfy dtype: RGTHREE_CONTEXT
    - Structured output context optimized for various applications.
    - Python dtype: Dict[str, Any]
- MODEL
    - Comfy dtype: MODEL
    - Model used in the context, reflecting the specified input.
    - Python dtype: str
- CLIP
    - Comfy dtype: CLIP
    - CLIP model merged into the context according to input specifications.
    - Python dtype: str
- VAE
    - Comfy dtype: VAE
    - VAE model included in the context based on input parameters.
    - Python dtype: str
- POSITIVE
    - Comfy dtype: CONDITIONING
    - Positive conditioning factor applied in the context, guiding the generation process.
    - Python dtype: str
- NEGATIVE
    - Comfy dtype: CONDITIONING
    - Negative conditioning factor used to avoid undesired results.
    - Python dtype: str
- LATENT
    - Comfy dtype: LATENT
    - Latent space representation for advanced operations.
    - Python dtype: str
- IMAGE
    - Comfy dtype: IMAGE
    - Images integrated into the context, containing visual data.
    - Python dtype: str
- SEED
    - Comfy dtype: INT
    - Seed for random number generation in the context, ensuring consistency.
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RgthreeContext:
  """The initial Context node.

  For now, this nodes' outputs will remain as-is, as they are perfect for most 1.5 application, but
  is also backwards compatible with other Context nodes.
  """

  NAME = get_name("Context")
  CATEGORY = get_category()

  @classmethod
  def INPUT_TYPES(cls):  # pylint: disable = invalid-name, missing-function-docstring
    return {
      "required": {},
      "optional": ORIG_CTX_OPTIONAL_INPUTS,
      "hidden": {
        "version": "FLOAT"
      },
    }

  RETURN_TYPES = ORIG_CTX_RETURN_TYPES
  RETURN_NAMES = ORIG_CTX_RETURN_NAMES
  FUNCTION = "convert"

  def convert(self, base_ctx=None, **kwargs):  # pylint: disable = missing-function-docstring
    ctx = new_context(base_ctx, **kwargs)
    return get_orig_context_return_tuple(ctx)

```
