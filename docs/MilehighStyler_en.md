
# Documentation
- Class name: MilehighStyler
- Category: ali1234/stylers
- Output node: False

The MilehighStyler node dynamically generates and applies various style options to text prompts based on the user's selection from a predefined set of styles. It utilizes a series of templates to modify and enhance text input, aiming to tailor content according to specific aesthetic or thematic preferences.

# Input types
## Required
- text_positive
    - The positive text prompt used for styling. It plays a crucial role in determining the final styled output, providing the foundational content that will be enhanced according to the selected style.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text prompt used for styling. This input is used to specify content that should be styled in contrast to the positive prompt, allowing for nuanced and balanced output generation.
    - Comfy dtype: STRING
    - Python dtype: str
- milehigh
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- log_prompt
    - A boolean flag that, when enabled, logs the input prompts and their styled versions for debugging or analysis purposes. This helps in understanding how the selected style is applied to the text input.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
    - The enhanced version of the positive text prompt, styled according to the user's selection. It represents the result of applying aesthetic or thematic modifications to the original input.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The enhanced version of the negative text prompt, styled in contrast to the positive prompt according to the user's selection. This output demonstrates the flexibility of the styling process in generating diverse content.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [CLIPTextEncode](../../Comfy/Nodes/CLIPTextEncode.md)
    - [Efficient Loader](../../efficiency-nodes-comfyui/Nodes/Efficient Loader.md)
    - [ShowText|pysssss](../../ComfyUI-Custom-Scripts/Nodes/ShowText|pysssss.md)



## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
