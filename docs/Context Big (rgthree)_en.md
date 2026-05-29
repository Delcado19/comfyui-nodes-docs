[Thought] First, I need to refer to the translation process in the Example, paying special attention to the comparison between the source and translation to accurately grasp the translation requirements. Next, I will translate the original text word by word, using fluent modern Chinese to paraphrase the original without omitting any information. Then I will carefully review the translation to eliminate deviations and deficiencies, making the translation more idiomatic and easier to understand. Finally, I will ensure that the translation format fully matches the format of the translation in the Example, including punctuation, code blocks, lists, headings, etc.

【Translation】

# Documentation
- Class name: Context Big (rgthree)
- Category: rgthree
- Output node: False

The Context Big node is a comprehensive interface for managing context within the system. It provides extensive flexibility, allowing all context fields to serve as both inputs and outputs. This node ensures backward compatibility with other context nodes, facilitating seamless integration and interaction between different parts of the system.

# Input types
## Required
## Optional
- base_ctx
    - Serves as a base context on which additional context parameters can be overlaid, enabling aggregation and modification of context data.
    - Comfy dtype: RGTHREE_CONTEXT
    - Python dtype: dict or None
- model
    - Specifies the model to use, helping tailor the context based on model characteristics.
    - Comfy dtype: MODEL
    - Python dtype: str or None
- clip
    - Defines the CLIP model to integrate into the context, allowing the incorporation of CLIP functionality.
    - Comfy dtype: CLIP
    - Python dtype: str or None
- vae
    - Indicates the VAE model to include, facilitating the use of VAE features within the context.
    - Comfy dtype: VAE
    - Python dtype: str or None
- positive
    - Sets positive conditions for the context, enhancing the specificity of the context toward desired outcomes.
    - Comfy dtype: CONDITIONING
    - Python dtype: str or None
- negative
    - Establishes negative conditions for the context, helping exclude unwanted elements from results.
    - Comfy dtype: CONDITIONING
    - Python dtype: str or None
- latent
    - Provides latent vectors to use, enriching the context with predefined latent space representations.
    - Comfy dtype: LATENT
    - Python dtype: str or None
- images
    - Includes images in the context, allowing the integration of visual data.
    - Comfy dtype: IMAGE
    - Python dtype: str or None
- seed
    - Determines the seed for random number generation, ensuring reproducibility of results.
    - Comfy dtype: INT
    - Python dtype: int or None
- steps
    - Specifies the number of steps for the operation, defining the granularity of the process.
    - Comfy dtype: INT
    - Python dtype: int or None
- step_refiner
    - Sets the step refiner value, fine-tuning the operation steps for enhanced control.
    - Comfy dtype: INT
    - Python dtype: int or None
- cfg
    - Configures the CFG scale, adjusting the influence of conditions on the generation process.
    - Comfy dtype: FLOAT
    - Python dtype: float or None
- ckpt_name
    - Selects a checkpoint name from available options, customizing the context based on a specific model checkpoint.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str or None
- sampler
    - Chooses the sampler to use, tailoring the sampling process to specific requirements.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str or None
- scheduler
    - Selects the scheduler for the operation, optimizing the process flow according to the chosen scheduling strategy.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str or None
- clip_width
    - Sets the width for CLIP processing, adjusting the dimensions of the CLIP model input.
    - Comfy dtype: INT
    - Python dtype: int or None
- clip_height
    - Defines the height for CLIP processing, customizing the size of the CLIP model input.
    - Comfy dtype: INT
    - Python dtype: int or None
- text_pos_g
    - Provides global positive text conditions, enhancing the context with global positive text cues.
    - Comfy dtype: STRING
    - Python dtype: str or None
- text_pos_l
    - Provides local positive text conditions, refining the context with local positive text cues.
    - Comfy dtype: STRING
    - Python dtype: str or None
- text_neg_g
    - Provides global negative text conditions, improving the context by excluding global negative text elements.
    - Comfy dtype: STRING
    - Python dtype: str or None
- text_neg_l
    - Provides local negative text conditions, perfecting the context by avoiding local negative text aspects.
    - Comfy dtype: STRING
    - Python dtype: str or None
- mask
    - Includes a mask for selective processing, enabling targeted modifications within the context.
    - Comfy dtype: MASK
    - Python dtype: str or None
- control_net
    - Integrate control network, extending context functionality with additional control mechanisms.
    - Comfy dtype: CONTROL_NET
    - Python dtype: str or None

# Output types
- CONTEXT
    - Comfy dtype: RGTHREE_CONTEXT
    - Return combined context, encapsulating all specified context fields.
    - Python dtype: dict
- MODEL
    - Comfy dtype: MODEL
    - Provide model context, reflecting the specified model settings.
    - Python dtype: str
- CLIP
    - Comfy dtype: CLIP
    - Pass CLIP model context, indicating integration of CLIP functionality.
    - Python dtype: str
- VAE
    - Comfy dtype: VAE
    - Output VAE model context, showing inclusion of VAE characteristics.
    - Python dtype: str
- POSITIVE
    - Comfy dtype: CONDITIONING
    - Generate positive condition context, highlighting desired elements.
    - Python dtype: str
- NEGATIVE
    - Comfy dtype: CONDITIONING
    - Present negative condition context, detailing elements to exclude.
    - Python dtype: str
- LATENT
    - Comfy dtype: LATENT
    - Provide latent vector context, describing the latent space representation used.
    - Python dtype: str
- IMAGE
    - Comfy dtype: IMAGE
    - Provide image context, displaying integrated visual data.
    - Python dtype: str
- SEED
    - Comfy dtype: INT
    - Return used seed value, ensuring reproducibility of the context.
    - Python dtype: int
- STEPS
    - Comfy dtype: INT
    - Provide step count context, defining the granularity of the process.
    - Python dtype: int
- STEP_REFINER
    - Comfy dtype: INT
    - Pass step refiner context, fine‑tuning operation steps.
    - Python dtype: int
- CFG
    - Comfy dtype: FLOAT
    - Output CFG scale context, adjusting conditional influence.
    - Python dtype: float
- CKPT_NAME
    - Comfy dtype: COMBO[STRING]
    - Present checkpoint name context, customizing based on a specific model checkpoint.
    - Python dtype: str
- SAMPLER
    - Comfy dtype: COMBO[STRING]
    - Provide sampler context, customizing the sampling process.
    - Python dtype: str
- SCHEDULER
    - Comfy dtype: COMBO[STRING]
    - Provide scheduler context, optimizing the process flow.
    - Python dtype: str
- CLIP_WIDTH
    - Comfy dtype: INT
    - Return CLIP width context, adjusting input dimensions.
    - Python dtype: int
- CLIP_HEIGHT
    - Comfy dtype: INT
    - Provide CLIP height context, customizing input size.
    - Python dtype: int
- TEXT_POS_G
    - Comfy dtype: STRING
    - Pass global positive text context, enhancing with global positive cues.
    - Python dtype: str
- TEXT_POS_L
    - Comfy dtype: STRING
    - Output local positive text context, refining with local positive cues.
    - Python dtype: str
- TEXT_NEG_G
    - Comfy dtype: STRING
    - Present global negative text context, improving by excluding global negative elements.
    - Python dtype: str
- TEXT_NEG_L
    - Comfy dtype: STRING
    - Provide local negative text context, perfecting by avoiding local negative aspects.
    - Python dtype: str
- MASK
    - Comfy dtype: MASK
    - Provide mask context, enabling targeted modifications.
    - Python dtype: str
- CONTROL_NET
    - Comfy dtype: CONTROL_NET
    - Return control network context, extending functionality with additional control.
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RgthreeBigContext:
  """The Context Big node.

  This context node will expose all context fields as inputs and outputs. It is backwards compatible
  with other context nodes and can be intertwined with them.
  """

  NAME = get_name("Context Big")
  CATEGORY = get_category()

  @classmethod
  def INPUT_TYPES(cls):  # pylint: disable = invalid-name,missing-function-docstring
    return {
      "required": {},
      "optional": ALL_CTX_OPTIONAL_INPUTS,
      "hidden": {},
    }

  RETURN_TYPES = ALL_CTX_RETURN_TYPES
  RETURN_NAMES = ALL_CTX_RETURN_NAMES
  FUNCTION = "convert"

  def convert(self, base_ctx=None, **kwargs):  # pylint: disable = missing-function-docstring
    ctx = new_context(base_ctx, **kwargs)
    return get_context_return_tuple(ctx)

```
