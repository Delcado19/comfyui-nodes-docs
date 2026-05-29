# Documentation
- Class name: LoadLatent
- Category: _for_testing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is designed to retrieve and process latent data from a specified directory, ensuring the data is properly scaled and formatted for further use in the system.

# Input types
## Required
- latent
    - The 'latent' parameter is critical, as it specifies the latent file to load, which contains the data required for the node's operation.
    - Comfy dtype: COMBO[string]
    - Python dtype: List[str]

# Output types
- samples
    - The 'samples' output provides the processed latent data, already scaled and ready for use in the system.
    - Comfy dtype: dict
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class LoadLatent:

    @classmethod
    def INPUT_TYPES(s):
        input_dir = folder_paths.get_input_directory()
        files = [f for f in os.listdir(input_dir) if os.path.isfile(os.path.join(input_dir, f)) and f.endswith('.latent')]
        return {'required': {'latent': [sorted(files)]}}
    CATEGORY = '_for_testing'
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'load'

    def load(self, latent):
        latent_path = folder_paths.get_annotated_filepath(latent)
        latent = safetensors.torch.load_file(latent_path, device='cpu')
        multiplier = 1.0
        if 'latent_format_version_0' not in latent:
            multiplier = 1.0 / 0.18215
        samples = {'samples': latent['latent_tensor'].float() * multiplier}
        return (samples,)

    @classmethod
    def IS_CHANGED(s, latent):
        image_path = folder_paths.get_annotated_filepath(latent)
        m = hashlib.sha256()
        with open(image_path, 'rb') as f:
            m.update(f.read())
        return m.digest().hex()

    @classmethod
    def VALIDATE_INPUTS(s, latent):
        if not folder_paths.exists_annotated_filepath(latent):
            return 'Invalid latent file: {}'.format(latent)
        return True
```