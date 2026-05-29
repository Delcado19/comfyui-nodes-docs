
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
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
