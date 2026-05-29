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
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
