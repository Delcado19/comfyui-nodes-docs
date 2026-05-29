# Documentation
- Class name: ApplyFooocusInpaint
- Category: inpaint
- Output node: False
- Repo Ref: https://github.com/Acly/comfyui-inpaint-nodes

This node facilitates the image inpainting process by applying patches to a given model, focusing on filling in missing or damaged parts of the data. It leverages latent representations and patch techniques to enhance the model's ability to generate coherent and contextually appropriate content in the target area.

# Input types
## Required
- model
    - The model parameter is crucial for the image inpainting process. It is the foundation for applying patches and integrating inpainting features.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_patcher.ModelPatcher
- patch
    - The patch parameter is crucial for the image inpainting process because it contains the specific inpainting head and settings required to generate patches to be applied to the model.
    - Comfy dtype: INPAINT_PATCH
    - Python dtype: Tuple[InpaintHead, dict[str, Tensor]]
- latent
    - The latent parameter is critical for the image inpainting process as it contains encoded information used to generate the content of the missing region.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, Any]

# Output types
- MODEL
    - The output is the patched model, now containing inpainted content, effectively filling in previously missing or damaged parts with contextually appropriate data.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_patcher.ModelPatcher

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/Acly/comfyui-inpaint-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
