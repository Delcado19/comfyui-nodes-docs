
# Documentation
- Class name: CLIPTextEncode (BlenderNeko Advanced + NSP)
- Category: WAS Suite/Conditioning
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

CLIPTextEncode (BlenderNeko Advanced + NSP) node is dedicated to encoding text input with an advanced CLIP model that has been improved by BlenderNeko and can optionally incorporate Noodle Soup Prompts (NSP) for dynamic text manipulation. It aims to provide finer‑grained, context‑aware text representations for downstream tasks such as image generation or text‑based conditional control.

# Input types
## Required
- mode
- Determine the mode of text manipulation, e.g., using Noodle Soup Prompts for dynamic text changes.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- noodle_key
- Keywords used in Noodle Soup Prompts to identify placeholders in the text that require dynamic replacement.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
- Seed for random elements in text manipulation, ensuring reproducibility of the text encoding.
    - Comfy dtype: INT
    - Python dtype: int
- clip
- CLIP model used for encoding the text. It is crucial for understanding the input text’s context and semantics.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- token_normalization
- Decide how tokens are normalized during encoding, affecting sensitivity of the representation to token frequency.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- weight_interpretation
- Control how weights are interpreted during encoding, influencing emphasis on certain aspects of the text.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- text
- Input text to be encoded. This text can be dynamically modified according to the selected mode, allowing creative and context‑sensitive representations.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- conditioning
- Encoded text representation, suitable for downstream tasks such as image generation.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[List[float]]
- parsed_text
- Text after node processing and possible modifications, reflecting dynamic changes or operations.
    - Comfy dtype: STRING
    - Python dtype: str
- raw_text
- Original input text before any processing or manipulation.
    - Comfy dtype: STRING
    - Python dtype: str
- ui
- User‑interface element displaying the processed text, providing insight into how the text was interpreted and manipulated.


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [KSamplerAdvanced](../../Comfy/Nodes/KSamplerAdvanced.md)
    - KRestartSamplerAdv



## Source code
```python
    class WAS_AdvancedCLIPTextEncode:
        @classmethod
        def INPUT_TYPES(s):
            return {
                "required": {
                    "mode": (["Noodle Soup Prompts", "Wildcards"],),
                    "noodle_key": ("STRING", {"default": '__', "multiline": False}),
                    "seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                    "clip": ("CLIP", ),
                    "token_normalization": (["none", "mean", "length", "length+mean"],),
                    "weight_interpretation": (["comfy", "A1111", "compel", "comfy++"],),
                    "text": ("STRING", {"multiline": True}),
                    }
                }

        RETURN_TYPES = ("CONDITIONING", TEXT_TYPE, TEXT_TYPE)
        RETURN_NAMES = ("conditioning", "parsed_text", "raw_text")
        OUTPUT_NODE = True
        FUNCTION = "encode"
        CATEGORY = "WAS Suite/Conditioning"

        DESCRIPTION = "A node based on Blenderneko's <a href='https://github.com/BlenderNeko/ComfyUI_ADV_CLIP_embw' target='_blank'>Advanced CLIP Text Encode</a>. This version adds the ability to use Noodle Soup Prompts and Wildcards. Wildcards are stored in WAS Node Suite root under the folder 'wildcards'. You can create the folder if it doesn't exist and move your wildcards into it."
        URL = {
            "Example Workflow": "https://github.com/WASasquatch/was-node-suite-comfyui",
        }
        IMAGES = [
            "https://i.postimg.cc/Jh4N2h5r/CLIPText-Encode-BLK-plus-NSP.png",
        ]

        def encode(self, clip, text, token_normalization, weight_interpretation, seed=0, mode="Noodle Soup Prompts", noodle_key="__"):

            BKAdvCLIP_dir = os.path.join(CUSTOM_NODES_DIR, "ComfyUI_ADV_CLIP_emb")
            sys.path.append(BKAdvCLIP_dir)

            from ComfyUI_ADV_CLIP_emb.nodes import AdvancedCLIPTextEncode

            if mode == "Noodle Soup Prompts":
                new_text = nsp_parse(text, int(seed), noodle_key)
            else:
                new_text = replace_wildcards(text, (None if seed == 0 else seed), noodle_key)

            new_text = parse_dynamic_prompt(new_text, seed)
            new_text, text_vars = parse_prompt_vars(new_text)
            cstr(f"CLIPTextEncode Prased Prompt:\n {new_text}").msg.print()

            encode = AdvancedCLIPTextEncode().encode(clip, new_text, token_normalization, weight_interpretation)

            sys.path.remove(BKAdvCLIP_dir)

            return ([[encode[0][0][0], encode[0][0][1]]], new_text, text, { "ui": { "string": new_text } } )

```
