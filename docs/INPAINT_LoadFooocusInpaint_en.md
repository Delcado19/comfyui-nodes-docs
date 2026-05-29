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
```
class LoadFooocusInpaint:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'head': (folder_paths.get_filename_list('inpaint'),), 'patch': (folder_paths.get_filename_list('inpaint'),)}}
    RETURN_TYPES = ('INPAINT_PATCH',)
    CATEGORY = 'inpaint'
    FUNCTION = 'load'

    def load(self, head: str, patch: str):
        head_file = folder_paths.get_full_path('inpaint', head)
        inpaint_head_model = InpaintHead()
        sd = torch.load(head_file, map_location='cpu')
        inpaint_head_model.load_state_dict(sd)
        patch_file = folder_paths.get_full_path('inpaint', patch)
        inpaint_lora = comfy.utils.load_torch_file(patch_file, safe_load=True)
        return ((inpaint_head_model, inpaint_lora),)
```