# String Function 🐍
## Documentation
- Class name: StringFunction|pysssss
- Category: utils
- Output node: True
- Repo Ref: https://github.com/pythongosssss/ComfyUI-Custom-Scripts

String Function node provides utilities for string manipulation, including appending, replacing, and optional tag cleaning. It abstracts complex string operations into a simple interface to meet various text processing needs.

## Input types
### Required
- action
    - Specify the string operation to perform, such as appending or replacing content in the text input.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Tuple[List[str], Dict]
- tidy_tags
    - Decide whether to clean HTML tags in the text input, offering options to sanitize or keep as-is.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Tuple[List[str], Dict]
- text_a
    - The primary text input for the operation.
    - Comfy dtype: STRING
    - Python dtype: str
- text_b
    - The secondary text input for the operation, used together with 'text_a'.
    - Comfy dtype: STRING
    - Python dtype: str

### Optional
- text_c
    - Optional third text input for the operation.
    - Comfy dtype: STRING
    - Python dtype: str

## Output types
- string
    - Comfy dtype: STRING
    - The result of the string operation, returned as a single string.
    - Python dtype: str

## Usage tips
- Infra type: CPU
<!-- - Common nodes:
    - [CLIPTextEncode](../../Comfy/Nodes/CLIPTextEncode.md) -->

## Source code
[View source repository on GitHub](https://github.com/pythongosssss/ComfyUI-Custom-Scripts)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
