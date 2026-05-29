# Documentation
- Class name: PromptTagger
- Category: 😺dzNodes/LayerUtility/Prompt
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Reverse engineer prompts from images, you can set replacement words. This node currently uses the Google Gemini API as the backend service, please ensure that your network environment can use Gemini normally. Please apply for your API key at [Google AI Studio](https://makersuite.google.com/app/apikey), and fill it into api_key.ini. This file is located in the plugin root directory, and the default name is api_key.ini.example. When using it for the first time, you need to change the file extension to .ini. Open it with a text editor, fill in your API key after google_api_key= and save.

# Input types

## Required

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- api
    - API list.
    - Comfy dtype: ['gemini-pro-vision']
    - Python dtype: str

- token_limit
    - Token limit.
    - Comfy dtype: INT
    - Python dtype: int

- exclude_word
    - Excluded words.
    - Comfy dtype: STRING
    - Python dtype: str

- replace_with_word
    - Replacement words.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional

- None

# Output types

- text
    - Text.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
