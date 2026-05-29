# Documentation
- Class name: IPAdapterLoadEmbeds
- Category: ipadapter/embeds
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The `load` method of the IPAdapterLoadEmbeds node is designed to retrieve and process embedding data from a specified file. It is a critical component for handling embedding data in the system, ensuring that embedding data is correctly loaded and made available for downstream tasks.

# Input types
## Required
- embeds
    - The parameter 'embeds' is a list containing file paths where embedding data is stored. This parameter is essential as it guides the node to locate the correct data location, enabling the node to successfully load and process embedding data.
    - Comfy dtype: List[str]
    - Python dtype: List[str]

# Output types
- EMBEDS
    - The output parameter 'EMBEDS' represents the loaded embedding data as a tensor. This tensor is important because it is a processed form of the input data, ready for subsequent analysis or model training.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class IPAdapterLoadEmbeds:

    @classmethod
    def INPUT_TYPES(s):
        input_dir = folder_paths.get_input_directory()
        files = [os.path.relpath(os.path.join(root, file), input_dir) for (root, dirs, files) in os.walk(input_dir) for file in files if file.endswith('.ipadpt')]
        return {'required': {'embeds': [sorted(files)]}}
    RETURN_TYPES = ('EMBEDS',)
    FUNCTION = 'load'
    CATEGORY = 'ipadapter/embeds'

    def load(self, embeds):
        path = folder_paths.get_annotated_filepath(embeds)
        return (torch.load(path).cpu(),)
```