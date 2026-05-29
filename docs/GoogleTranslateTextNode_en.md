
# Documentation
- Class name: GoogleTranslateTextNode
- Category: AlekPet Nodes/text
- Output node: False

This node provides the functionality to translate text from one language to another, with an option to manually skip translation. It can perform translation using either the Google Translate API or the built-in translator, depending on the configuration.

# Input types
## Required
- from_translate
    - Specifies the source language code for translation. If set to 'auto', the source language will be automatically detected.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- to_translate
    - Specifies the target language code for translation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- manual_translate
    - A boolean flag that, when set to true, skips the translation process and returns the original text. Useful for manual control over the translation process.
    - Comfy dtype: COMBO[BOOLEAN]
    - Python dtype: bool
- text
    - The text to be translated. Supports multi-line input.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text
    - The translated text.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Built-in or C extension class, unable to automatically detect source code
```
