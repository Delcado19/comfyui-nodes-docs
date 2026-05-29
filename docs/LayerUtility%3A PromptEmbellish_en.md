# Documentation
- Class name: PromptEmbellish
- Category: 😺dzNodes/LayerUtility/Prompt
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Input simple prompts, output polished prompts, supports inputting images as reference. This node currently uses Google Gemini API as backend service, please ensure the network environment can use Gemini normally. Please apply for your API key at [Google AI Studio](https://makersuite.google.com/app/apikey), and fill it into api_key.ini, this file is located in the plugin root directory, default name is api_key.ini.example, for first use you need to change the file extension to .ini. Open with a text editor, fill your API key after google_api_key= and save.

# Input types

## Required

- api
    - API list.
    - Comfy dtype: ['google-gemini']
    - Python dtype: str

- token_limit
    - Token limit.
    - Comfy dtype: INT
    - Python dtype: int

- describe
    - Description.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

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
