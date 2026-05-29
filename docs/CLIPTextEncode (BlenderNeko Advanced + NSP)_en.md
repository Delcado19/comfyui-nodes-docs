
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
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
