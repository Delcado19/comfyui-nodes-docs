
# Documentation
- Class name: GoogleTranslateCLIPTextEncodeNode
- Category: AlekPet Nodes/conditioning
- Output node: False

This node integrates text translation and CLIP text encoding, allowing input text to be translated from one language to another and then encoded with the CLIP model for further processing or analysis.

# Input types
## Required
- from_translate
    - Specify the source language for translation, with options for automatic detection or selection from a predefined language list. This affects the initial step of translating the input text.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Union[str, List[str]]
- to_translate
    - Define the target language for the input text translation, determining the language into which the text will be translated.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- manual_translate
    - A boolean flag that determines whether translation should be performed automatically or skipped manually, influencing the translation process.
    - Comfy dtype: COMBO[BOOLEAN]
    - Python dtype: bool
- text
    - The input text to be translated and encoded, serving as the primary content for processing.
    - Comfy dtype: STRING
    - Python dtype: str
- clip
    - The CLIP model used to encode the translated text, enabling generation of embeddings or features from the text.
    - Comfy dtype: CLIP
    - Python dtype: CLIP

# Output types
- conditioning
    - Provides conditional information derived from the CLIP model’s encoding of the translated text, useful for downstream tasks.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, torch.Tensor]]]
- string
    - The translated text, representing the output of the translation step before encoding.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
# Built-in or C extension class, unable to automatically detect source code
```
