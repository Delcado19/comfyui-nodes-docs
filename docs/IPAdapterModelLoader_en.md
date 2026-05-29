# Documentation
- Class name: IPAdapterModelLoader
- Category: ipadapter/loaders
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

IPAdapterModelLoader is designed to efficiently load and integrate IPAdapter models into the system, ensuring compatibility with the framework and seamless functionality.

# Input types
## Required
- ipadapter_file
    - `ipadapter_file` is a key parameter that specifies the path to the IPAdapter model file. It is crucial for the node to correctly load and process the model, affecting overall system performance and accuracy.
    - Comfy dtype: COMBO[string]
    - Python dtype: str

# Output types
- ipadapter
    - The output provides a structured representation of the loaded IPAdapter model, which is essential for subsequent processing and analysis within the system.
    - Comfy dtype: dict
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class IPAdapterModelLoader:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'ipadapter_file': (folder_paths.get_filename_list('ipadapter'),)}}
    RETURN_TYPES = ('IPADAPTER',)
    FUNCTION = 'load_ipadapter_model'
    CATEGORY = 'ipadapter/loaders'

    def load_ipadapter_model(self, ipadapter_file):
        ipadapter_file = folder_paths.get_full_path('ipadapter', ipadapter_file)
        return (ipadapter_model_loader(ipadapter_file),)
```