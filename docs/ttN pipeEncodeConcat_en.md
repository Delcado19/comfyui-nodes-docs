
# Documentation
- Class name: ttN pipeEncodeConcat
- Category: ttN/pipe
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ttN pipeEncodeConcat node is designed to enhance and concatenate conditioning information within a pipeline, utilizing advanced encoding techniques to optimize and merge text conditioning inputs, thereby providing better model guidance. This node plays a key role in processing and integrating various conditioning inputs, offering more refined and targeted control over the generation process.

# Input types
## Required
- pipe
    - Represents the pipeline state, including the model, conditioning settings, and other relevant parameters, serving as the foundation for the encoding and concatenation process.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- toggle
    - A boolean flag that determines whether to execute the encoding and concatenation process.
    - Comfy dtype: COMBO[BOOLEAN]
    - Python dtype: bool

## Optional
- positive
    - Optional positive text input for conditioning, intended to guide the model in generating content consistent with specified attributes.
    - Comfy dtype: STRING
    - Python dtype: str
- positive_token_normalization
    - Specifies the method for token normalization in the positive conditioning, affecting how the model interprets and weights these tokens.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- positive_weight_interpretation
    - Defines how weights in the positive conditioning are interpreted, influencing the model's generation process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- negative
    - Optional negative text input for conditioning, guiding the model to avoid generating content with specified attributes.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_token_normalization
    - Specifies the method for token normalization in the negative conditioning, affecting how the model interprets and weights these tokens.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- negative_weight_interpretation
    - Defines how weights in the negative conditioning are interpreted, opposite to the positive conditioning, influencing the model's generation process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- optional_positive_from
    - Optional advanced positive conditioning input, allowing for more nuanced and specific model guidance.
    - Comfy dtype: CONDITIONING
    - Python dtype: list of tuples
- optional_negative_from
    - Optional advanced negative conditioning input, enabling more detailed and targeted model influence.
    - Comfy dtype: CONDITIONING
    - Python dtype: list of tuples
- optional_clip
    - Optional CLIP model parameters, which can be used to further optimize the conditioning process through visual guidance.
    - Comfy dtype: CLIP
    - Python dtype: object

# Output types
- pipe
    - Updated pipeline state, containing the newly encoded and concatenated conditioning information.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- positive
    - Enhanced and concatenated positive conditioning output, ready to guide the model's generation.
    - Comfy dtype: CONDITIONING
    - Python dtype: list of tuples
- negative
    - Enhanced and concatenated negative conditioning output, providing the model with refined guidance opposite to the positive conditioning.
    - Comfy dtype: CONDITIONING
    - Python dtype: list of tuples
- clip
    - CLIP model parameters, potentially updated during the encoding and concatenation process, used to further optimize visual guidance.
    - Comfy dtype: CLIP
    - Python dtype: object
- ui
    - A UI component that displays generated text, providing insight into the encoding and concatenation process.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ttN_pipeEncodeConcat:
    version = '1.0.2'
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
                    "pipe": ("PIPE_LINE",),
                    "toggle": ([True, False],),
                    },
                "optional": {
                    "positive": ("STRING", {"default": "Positive","multiline": True}),
                    "positive_token_normalization": (["none", "mean", "length", "length+mean"],),
                    "positive_weight_interpretation": (["comfy", "A1111", "compel", "comfy++", "down_weight"],),
                    "negative": ("STRING", {"default": "Negative","multiline": True}),
                    "negative_token_normalization": (["none", "mean", "length", "length+mean"],),
                    "negative_weight_interpretation": (["comfy", "A1111", "compel", "comfy++", "down_weight"],),
                    "optional_positive_from": ("CONDITIONING",),
                    "optional_negative_from": ("CONDITIONING",),
                    "optional_clip": ("CLIP",),
                    },
                "hidden": {
                    "ttNnodeVersion": ttN_pipeEncodeConcat.version, "my_unique_id": "UNIQUE_ID"
                    },
        }
    
    OUTPUT_NODE = True
    RETURN_TYPES = ("PIPE_LINE", "CONDITIONING", "CONDITIONING", "CLIP")
    RETURN_NAMES = ("pipe", "positive", "negative", "clip")
    FUNCTION = "concat"

    CATEGORY = "ttN/pipe"

    def concat(self, toggle, positive_token_normalization, positive_weight_interpretation,
               negative_token_normalization, negative_weight_interpretation,
                 pipe=None, positive='', negative='', seed=None, my_unique_id=None, optional_positive_from=None, optional_negative_from=None, optional_clip=None):
        
        if toggle == False:
            return (pipe, pipe["positive"], pipe["negative"], pipe["clip"])
        
        positive_from = optional_positive_from if optional_positive_from is not None else pipe["positive"] 
        negative_from = optional_negative_from if optional_negative_from is not None else pipe["negative"]
        samp_clip = optional_clip if optional_clip is not None else pipe["clip"]

        new_text = ''

        def enConcatConditioning(text, token_normalization, weight_interpretation, conditioning_from, new_text):
            out = []
            if "__" in text:
                text = loader.nsp_parse(text, pipe["seed"], title="encodeConcat", my_unique_id=my_unique_id)
                new_text += text

            conditioning_to, pooled = advanced_encode(samp_clip, text, token_normalization, weight_interpretation, w_max=1.0, apply_to_pooled='enable')
            conditioning_to = [[conditioning_to, {"pooled_output": pooled}]]

            if len(conditioning_from) > 1:
                ttNl.warn("encode and concat conditioning_from contains more than 1 cond, only the first one will actually be applied to conditioning_to")

            cond_from = conditioning_from[0][0]

            for i in range(len(conditioning_to)):
                t1 = conditioning_to[i][0]
                tw = torch.cat((t1, cond_from),1)
                n = [tw, conditioning_to[i][1].copy()]
                out.append(n)

            return out

        pos, neg = None, None
        if positive not in ['', None, ' ']:
            pos = enConcatConditioning(positive, positive_token_normalization, positive_weight_interpretation, positive_from, new_text)
        if negative not in ['', None, ' ']:
            neg = enConcatConditioning(negative, negative_token_normalization, negative_weight_interpretation, negative_from, new_text)

        pos = pos if pos is not None else pipe["positive"]
        neg = neg if neg is not None else pipe["negative"]
        
        new_pipe = {
                "model": pipe["model"],
                "positive": pos,
                "negative": neg,
                "vae": pipe["vae"],
                "clip": samp_clip,

                "samples": pipe["samples"],
                "images": pipe["images"],
                "seed": pipe["seed"],

                "loader_settings": pipe["loader_settings"],
            }
        del pipe

        return (new_pipe, new_pipe["positive"], new_pipe["negative"], samp_clip, { "ui": { "string": new_text } } )

```
