
# Documentation
- Class name: CLIPTextEncode (NSP)
- Category: WAS Suite/Conditioning
- Output node: True
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The CLIPTextEncode (NSP) node specifically uses the CLIP model to encode text input, enhanced through Noodle Soup Prompts (NSP) or wildcard text transformations. It aims to provide flexible text encoding capabilities that can adapt to different prompt styles and needs, making it suitable for a wide range of text-to-image or text-based conditional applications.

# Input types
## Required
- mode
    - Decide whether to use Noodle Soup Prompts or wildcards for text transformation. This choice affects how the text is parsed and encoded.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- noodle_key
    - Keywords used for dynamic text replacement in Noodle Soup Prompts. It is essential for customizing the prompt transformation process.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - Seed for random number generation used in text transformation to ensure reproducibility or variability.
    - Comfy dtype: INT
    - Python dtype: int
- text
    - The text input to be encoded. This can include Noodle Soup Prompts or wildcards, which are then transformed according to the selected mode.
    - Comfy dtype: STRING
    - Python dtype: str
- clip
    - The CLIP model used to encode the text. It plays a crucial role in determining the quality and relevance of the encoded output.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module

# Output types
- conditioning
    - The encoded text output, suitable for text-to-image generation or other conditional contexts.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- parsed_text
    - The text processed through NSP or wildcard transformation, providing insight into how the input text was interpreted.
    - Comfy dtype: STRING
    - Python dtype: str
- raw_text
    - The original text input before any NSP or wildcard transformation, allowing comparison with the parsed text.
    - Comfy dtype: STRING
    - Python dtype: str
- ui
    - A user interface element displaying the parsed text, enhancing user interaction by showing how the input text was transformed.


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class WAS_NSP_CLIPTextEncoder:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "mode": (["Noodle Soup Prompts", "Wildcards"],),
                "noodle_key": ("STRING", {"default": '__', "multiline": False}),
                "seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                "text": ("STRING", {"multiline": True}),
                "clip": ("CLIP",),
            }
        }

    OUTPUT_NODE = True
    RETURN_TYPES = ("CONDITIONING", TEXT_TYPE, TEXT_TYPE)
    RETURN_NAMES = ("conditioning", "parsed_text", "raw_text")
    FUNCTION = "nsp_encode"

    CATEGORY = "WAS Suite/Conditioning"

    def nsp_encode(self, clip, text, mode="Noodle Soup Prompts", noodle_key='__', seed=0):

        if mode == "Noodle Soup Prompts":
            new_text = nsp_parse(text, seed, noodle_key)
        else:
            new_text = replace_wildcards(text, (None if seed == 0 else seed), noodle_key)

        new_text = parse_dynamic_prompt(new_text, seed)
        new_text, text_vars = parse_prompt_vars(new_text)
        cstr(f"CLIPTextEncode Prased Prompt:\n {new_text}").msg.print()
        CLIPTextEncode = nodes.CLIPTextEncode()
        encoded = CLIPTextEncode.encode(clip=clip, text=new_text)

        return (encoded[0], new_text, text, { "ui": { "string": new_text } })

```
