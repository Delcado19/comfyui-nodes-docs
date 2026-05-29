# Documentation
- Class name: QWenImage2Prompt
- Category: 😺dzNodes/LayerUtility/Prompt
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Reverse engineer the prompt from the image. This node is a repackaging of the UForm-Gen2 Qwen Node from [ComfyUI_VLM_nodes](https://github.com/gokayfem/ComfyUI_VLM_nodes), thanks to the original author. Please download the model from [huggingface](https://huggingface.co/unum-cloud/uform-gen2-qwen-500m) or [Baidu Netdisk](https://pan.baidu.com/s/1ztnVX_Sh800xsWZhMDe-Ww?pwd=esyt) to the ComfyUI/models/LLavacheckpoints/files_for_uform_gen2_qwen folder.

# Input types

## Required

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- question
    - Prompt for the UForm-Gen-QWen model.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types

- text
    - Text.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```python
class QWenImage2Prompt:
    def __init__(self):
        self.chat_model = UformGen2QwenChat()

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "image": ("IMAGE",),
                "question": ("STRING", {"multiline": False, "default": "describe this image",},),
            },
        }

    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("text",)
    FUNCTION = "uform_gen2_qwen_chat"
    CATEGORY = '😺dzNodes/LayerUtility/Prompt'

    def uform_gen2_qwen_chat(self, image, question):
        history = []  # Example empty history
        pil_image = ToPILImage()(image[0].permute(2, 0, 1))
        temp_path = files_for_uform_gen2_qwen / "temp.png"
        pil_image.save(temp_path)

        response = self.chat_model.chat_response(question, history, temp_path)
        return (response.split("assistant\n", 1)[1], )
```