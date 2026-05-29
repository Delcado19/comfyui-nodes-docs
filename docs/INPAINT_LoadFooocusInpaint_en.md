# Documentation
- Class name: LoadFooocusInpaint
- Category: inpaint
- Output node: False
- Repo Ref: https://github.com/Acly/comfyui-inpaint-nodes

This node aims to load and integrate two key components for image inpainting tasks: the head model and patch data. It coordinates the process of loading the head model from a saved state dict and loading patch data from a specified file, ensuring both components are ready for the image inpainting process.

# Input types
## Required
- head
    - The 'head' parameter specifies the file path of the head model, which is critical for the image inpainting process. It is used to guide the generation of inpainted content.
    - Comfy dtype: str
    - Python dtype: str
- patch
    - The 'patch' parameter represents the file path of the patch data, which is indispensable for image inpainting tasks. It provides the information the model needs to understand the context of the area to be inpainted.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- INPAINT_PATCH
    - The output contains a pair: the loaded head model and patch data. These are critical for the image inpainting process, as they provide the structural and contextual information needed to generate the final inpainted result.
    - Comfy dtype: COMBO[(torch.nn.Module, Any)]
    - Python dtype: Tuple[torch.nn.Module, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Acly/comfyui-inpaint-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
