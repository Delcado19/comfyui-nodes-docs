
# Documentation
- Class name: ArgosTranslateCLIPTextEncodeNode
- Category: AlekPet Nodes/conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

ArgosTranslateCLIPTextEncodeNode is a multifunctional node that combines the translation capabilities of the Argos Translate library with CLIP's text encoding functionality. It translates text from one language to another, then encodes the translated text into a format suitable for conditioning models. This node provides robust support for multilingual text processing and analysis.

# Input types
## Required
- from_translate
    - Specifies the source language code for translation. It determines which language the text will be translated from, affecting translation accuracy and the range of target language options.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- to_translate
    - Defines the target language code for translation. It determines the final language of the translated text, allowing users to convert text into various supported languages.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- text
    - The input text that needs to be translated. This text undergoes translation and then encoding, serving as the primary content for subsequent operations.
    - Comfy dtype: STRING
    - Python dtype: str
- clip
    - A CLIP model instance used to encode the translated text. It plays a key role in converting text into a format usable for conditioning, enhancing the node's utility in text analysis.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module

# Output types
- conditioning
    - The encoded representation of the translated text, suitable for conditioning models.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- string
    - The translated text, directly outputting the result of the translation process.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
# Built-in or C extension class, unable to automatically detect source code
```
