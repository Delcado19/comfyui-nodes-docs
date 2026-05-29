
# Documentation
- Class name: DeepTranslatorCLIPTextEncodeNode
- Category: AlekPet Nodes/conditioning
- Output node: False

DeepTranslatorCLIPTextEncodeNode is a node that integrates translation services and CLIP text encoding. It translates text input into different languages and encodes those translations into a format suitable for conditional models. This node supplies foundational functionality for other nodes that require simultaneous translation and text encoding, simplifying text preparation for various AI-driven applications.

# Input types
## Required
- from_translate
- Specify the source language for translation, supporting dynamic language ranges based on the selected translation service. This parameter determines the initial language of the text to be translated.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- to_translate
- Define the target language for translation, allowing text to be converted into multiple languages supported by the chosen translation service. This parameter specifies the target language of the translation output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- add_proxies
- Indicate whether to enable proxy usage for the translation service, affecting how translation requests are sent.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- proxies
- Provide proxy settings (if proxy usage is enabled), facilitating translation requests through the specified proxy server.
    - Comfy dtype: STRING
    - Python dtype: str
- auth_data
- Include authorization data required by certain translation services, ensuring secure access to translation functionality.
    - Comfy dtype: STRING
    - Python dtype: str
- service
- Specify the translation service to use, allowing selection among various supported translation providers.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- text
- Text input to be translated and encoded. This parameter is the core of the node’s functionality, serving as the content that will be translated and subsequently encoded.
    - Comfy dtype: STRING
    - Python dtype: str
- clip
- CLIP model instance used to encode the translated text into a format compatible with conditional models. This parameter is essential for integrating translation output with downstream AI processing.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module

# Output types
- conditioning
- Encoded representation of the translated text, formatted for use in conditional models. This output is critical for applications requiring a specific encoded text input.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Dict[str, torch.Tensor]]
- string
- Translated text, providing the direct output of the translation process. This output is essential for understanding or further processing the translated content.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
# Built-in or C extension class, unable to automatically detect source code
```
