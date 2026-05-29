
# Documentation
- Class name: AV_LLMApiConfig
- Category: ArtVenture/LLM
- Output node: False

The AV_LLMApiConfig node is designed to generate configuration settings for language model APIs, focusing mainly on model selection, token limits, and temperature settings. It abstracts the complexity of configuring language models and provides a simplified interface for specifying key parameters for using language models in various applications.

# Input types
## Required
- model
    - Specify the language model to use, allowing selection from a predefined list of GPT and Claude models. The choice of model directly affects the behavior and capabilities of the generated language model configuration.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Union[List[str], str]
- max_token
    - Define the maximum number of tokens the language model can generate or process in a single request, setting a limit on output length.
    - Comfy dtype: INT
    - Python dtype: int
- temperature
    - Control the creativity or randomness of the language model's responses, with higher values resulting in more diverse outputs.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- llm_config
    - The generated language model configuration encapsulating model selection, token limits, and temperature settings.
    - Comfy dtype: LLM_CONFIG
    - Python dtype: LLMConfig


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMApiConfigNode:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "model": (gpt_models + claude_models, {"default": gpt_vision_models[0]}),
                "max_token": ("INT", {"default": 1024}),
                "temperature": ("FLOAT", {"default": 0, "min": 0, "max": 1.0, "step": 0.001}),
            }
        }

    RETURN_TYPES = ("LLM_CONFIG",)
    RETURN_NAMES = ("llm_config",)
    FUNCTION = "make_config"
    CATEGORY = "ArtVenture/LLM"

    def make_config(self, max_token, model, temperature):
        return (LLMConfig(model=model, max_token=max_token, temperature=temperature),)

```
