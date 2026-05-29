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
```python
class PromptTagger:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        api_list = ['gemini-pro-vision']

        return {
            "required": {
                "image": ("IMAGE", ),
                "api": (api_list,),
                "token_limit": ("INT", {"default": 80, "min": 2, "max": 1024, "step": 1}),
                "exclude_word": ("STRING", {"default": ""}),
                "replace_with_word": ("STRING", {"default": ""}),
            },
            "optional": {
            }
        }

    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("text",)
    FUNCTION = 'prompt_tagger'
    CATEGORY = '😺dzNodes/LayerUtility/Prompt'

    def prompt_tagger(self, image, api, token_limit, exclude_word, replace_with_word):
        import google.generativeai as genai
        replace_with_word = replace_with_word.strip()
        exclude_word = exclude_word.strip()
        _image = tensor2pil(image).convert('RGB')
        ret_text = ""
        prompt = ("You are creating a prompt for Stable Diffusion to generate an image. "
                  "First step: describe this image, then put description into text. "
                  "Second step: generate a text prompt for based on first step. "
                  "Only respond with the prompt itself, but embellish it. ")
        prompt = f"{prompt}As needed keep it under {token_limit} tokens."



        if api == 'gemini-pro-vision':
            model = genai.GenerativeModel(api,
                                          generation_config=gemini_generate_config,
                                          safety_settings=gemini_safety_settings)
            genai.configure(api_key=get_api_key('google_api_key'), transport='rest')
            log(f"{NODE_NAME}: Request to gemini-pro-vision...")
            response = model.generate_content([prompt, _image])
            ret_text = response.text
            ret_text = ret_text[ret_text.rfind(':') + 1:]
            log(f"{NODE_NAME}: Gemini response is:\n\033[1;36m{ret_text}\033[m")
            if len(exclude_word) > 0:
                if len(replace_with_word) > 0:
                    ret_text = replace_case(exclude_word, replace_with_word, ret_text)
                refine_model = genai.GenerativeModel('gemini-pro',
                                                     generation_config=gemini_generate_config,
                                                     safety_settings=gemini_safety_settings
                                                     )
                response = refine_model.generate_content(
                    f'You are creating a prompt for Stable Diffusion to generate an image. '
                    f'First step: Replace "{exclude_word}" and its synonyms with "{replace_with_word}" in the following text:{ret_text}'
                    f'Second step: Correct the grammar errors for based on first step.')
                ret_text = response.text
            if len(replace_with_word) > 0:
                ret_text = ret_text.replace(replace_with_word, f"({replace_with_word})")
            log(f"{NODE_NAME}: Tagger prompt is:\n\033[1;36m{ret_text}\033[m")

        log(f"{NODE_NAME} Processed.", message_type='finish')
        return (ret_text,)
```