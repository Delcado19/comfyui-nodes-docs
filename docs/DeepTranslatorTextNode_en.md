
# Documentation
- Class name: `DeepTranslatorTextNode`
- Category: `AlekPet Nodes/text`
- Output node: `False`

DeepTranslatorTextNode is a node designed for cross‑language text translation, leveraging multiple translation services. The node abstracts the complexity of selecting and interacting with translation APIs, providing a simplified interface for text translation and supporting optional proxy settings.

# Input types
## Required
- from_translate
- Specify the source language for translation, or set to 'auto' to detect the language automatically based on the text content. This plays a key role in guiding the translation process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- to_translate
- Define the target language for translation, determining which language the text will be translated into.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- add_proxies
- A flag indicating whether proxy settings should be applied to translation requests, enabling translation in environments with restricted internet access.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- proxies
- If 'add_proxies' is set to True, provide proxy configuration details to route translation requests through the specified proxy server.
    - Comfy dtype: STRING
    - Python dtype: dict
- auth_data
- Include authentication data required by certain translation services, ensuring authorized access to their APIs.
    - Comfy dtype: STRING
    - Python dtype: dict
- service
- Choose the translation service to use, such as 'GoogleTranslator', 'MyMemoryTranslator', etc., allowing flexible selection of providers.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- text
- The text that needs to be translated, serving as input to the translation process.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text
- The translated text, delivering the result of the translation process.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [PreviewTextNode](../../ComfyUI_Custom_Nodes_AlekPet/Nodes/PreviewTextNode.md)
    - [CLIPTextEncode](../../Comfy/Nodes/CLIPTextEncode.md)



## Source code
```python
# Built-in or C extension class, unable to automatically detect source code
```
