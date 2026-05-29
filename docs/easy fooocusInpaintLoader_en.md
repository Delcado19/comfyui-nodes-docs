
# Documentation
- Class name: easy fooocusInpaintLoader
- Category: EasyUse/Inpaint
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The easy fooocusInpaintLoader node simplifies the loading and application of inpainting models and patches within the ComfyUI framework. It focuses on integrating inpainting capabilities into the model processing pipeline, enhancing or correcting images by applying learned inpainting patterns.

# Input types
## Required
- head
    - The head parameter represents the inpainting model head to be loaded. It plays a crucial role in determining inpainting behavior and output image quality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- patch
    - The patch parameter refers to the specific inpainting patch to be applied. This patch modifies the model's behavior, allowing targeted inpainting based on the provided patch information.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- patch
    - The output is a tuple containing the inpainting head model and LoRA patch, which can be directly applied to the model to perform inpainting tasks.
    - Comfy dtype: INPAINT_PATCH
    - Python dtype: Tuple[torch.nn.Module, dict]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
