
# Documentation
- Class name: LoraInfo
- Category: jitcoder
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LoraInfo node is designed to retrieve and provide detailed information about specific LoRa (Low-Power, Long-Range) configurations, including their output characteristics, trigger words, example prompts, and associated base models. This node acts as a bridge to access pre-stored or dynamically generated LoRa metadata, facilitating the integration and use of LoRa configurations in applications.

# Input types
## Required
- lora_name
    - The name of the LoRa configuration to request information about. It is critical for identifying the specific LoRa setup and retrieving its associated data.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- trigger_words
    - Trigger words associated with the specified LoRa configuration, providing insight into its usage.
    - Comfy dtype: STRING
    - Python dtype: str
- example_prompt
    - Example prompts associated with the specified LoRa configuration, demonstrating how to use it.
    - Comfy dtype: STRING
    - Python dtype: str
- ui
    - A structured representation of the LoRa information, including text output, model details, and optionally example images and prompts.
    - Comfy dtype: *未指定*
    - Python dtype: *未指定*


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LoraInfo:
    def __init__(self):
        pass
    
    @classmethod
    def INPUT_TYPES(s):
        LORA_LIST = sorted(folder_paths.get_filename_list("loras"), key=str.lower)
        return {
            "required": {
                "lora_name": (LORA_LIST, )
            },
        }

    RETURN_NAMES = ("trigger_words", "example_prompt")
    RETURN_TYPES = ("STRING", "STRING")
    FUNCTION = "lora_info"
    OUTPUT_NODE = True
    CATEGORY = "jitcoder"

    def lora_info(self, lora_name):
        (output, triggerWords, examplePrompt, baseModel) = get_lora_info(lora_name)
        return {"ui": {"text": (output,), "model": (baseModel,)}, "result": (triggerWords, examplePrompt)}

```
