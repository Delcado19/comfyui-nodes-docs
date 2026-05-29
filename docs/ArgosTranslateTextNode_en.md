
# Documentation
- Class name: ArgosTranslateTextNode
- Category: AlekPet Nodes/text
- Output node: False

ArgosTranslateTextNode is a node dedicated to text translation, leveraging the Argos Translate library for language conversion. It delivers accurate and efficient translation services across a wide range of languages.

# Input types
## Required
- from_translate
    - Specifies the source language code for translation, determining which language the text will be translated from.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- to_translate
    - Defines the target language code for translation, indicating which language the text will be translated into.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- text
    - The text to be translated, provided as a string. This is the main content that will undergo translation.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text
    - The translated text, returned as a string. This output reflects the result of translating the text from the source language to the target language.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Built-in or C extension class, unable to automatically detect source code
```
