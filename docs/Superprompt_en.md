
# Documentation
- Class name: Superprompt
- Category: KJNodes/text
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Superprompt node uses a T5 model fine-tuned on the SuperPrompt dataset to enhance text prompts with more detailed descriptions. This process aims to improve the performance of text-to-image models by providing them with more comprehensive prompts.

# Input types
## Required
- instruction_prompt
    - This is an instruction for guiding prompt expansion, setting the context for how to elaborate on the prompt. It plays a crucial role in determining the direction and style of the final expanded prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - This is the initial text prompt that will be expanded into a more detailed description. It is the core content processed by the Superprompt node, providing a foundation for generating richer and more specific descriptions.
    - Comfy dtype: STRING
    - Python dtype: str
- max_new_tokens
    - Specifies the maximum number of new tokens to generate, used to control the length of the expanded prompt. This parameter allows users to adjust the level of detail and complexity of the output as needed.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- string
    - The output is an enhanced version of the original text prompt, containing more details and descriptions. This expanded prompt aims to provide richer context for text-to-image models, potentially resulting in more precise or creative image outputs.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class Superprompt:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "instruction_prompt": ("STRING", {"default": 'Expand the following prompt to add more detail', "multiline": True}),
                "prompt": ("STRING", {"default": '', "multiline": True, "forceInput": True}),
                "max_new_tokens": ("INT", {"default": 128, "min": 1, "max": 4096, "step": 1}),
            } 
        }

    RETURN_TYPES = ("STRING",)
    FUNCTION = "process"
    CATEGORY = "KJNodes/text"
    DESCRIPTION = """
# SuperPrompt
A T5 model fine-tuned on the SuperPrompt dataset for  
upsampling text prompts to more detailed descriptions.  
Meant to be used as a pre-generation step for text-to-image  
models that benefit from more detailed prompts.  
https://huggingface.co/roborovski/superprompt-v1
"""

    def process(self, instruction_prompt, prompt, max_new_tokens):
        device = model_management.get_torch_device()
        from transformers import T5Tokenizer, T5ForConditionalGeneration

        checkpoint_path = os.path.join(script_directory, "models","superprompt-v1")
        tokenizer = T5Tokenizer.from_pretrained("google/flan-t5-small", legacy=False)

        model = T5ForConditionalGeneration.from_pretrained(checkpoint_path, device_map=device)
        model.to(device)
        input_text = instruction_prompt + ": " + prompt
        print(input_text)
        input_ids = tokenizer(input_text, return_tensors="pt").input_ids.to(device)
        outputs = model.generate(input_ids,  max_new_tokens=max_new_tokens)
        out = (tokenizer.decode(outputs[0]))
        out = out.replace('<pad>', '')
        out = out.replace('</s>', '')
        print(out)
        
        return (out, )

```
