# Documentation
- Class name: CheckpointLoaderSimpleShared
- Category: InspirePack/Backend
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node facilitates retrieval and caching of model checkpoints, ensuring efficient access to models while minimizing unnecessary loading operations. By intelligently managing the cache based on provided keys and checkpoint names, it simplifies the model usage process.

# Input types
## Required
- ckpt_name
    - The checkpoint name is crucial for identifying the specific model to load. It serves as a unique reference in the cache system, allowing the node to retrieve or store the corresponding model data.
    - Comfy dtype: COMBO[folder_paths.get_filename_list('checkpoints'),]
    - Python dtype: Union[str, None]
## Optional
- key_opt
    - This optional parameter allows users to specify a custom key for caching the checkpoint. If not provided, the checkpoint name is used by default, offering flexibility in how the cache is organized and accessed.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- model
    - The model output represents the loaded machine learning or deep learning model, ready for further processing or inference. It is a core component of the node's functionality, enabling downstream tasks.
    - Comfy dtype: ANY
    - Python dtype: Any
- clip
    - The clip output is associated with a specific model component, often used for auxiliary tasks or additional processing. It complements the main model output, enhancing the overall capability of the node.
    - Comfy dtype: ANY
    - Python dtype: Any
- vae
    - VAE, a variational autoencoder, is a generative model that may be loaded by this node. It plays an important role in generating new data points or features based on learned distributions.
    - Comfy dtype: ANY
    - Python dtype: Any
- cache_key
    - The cache key is a unique identifier used to reference cached checkpoints in the system. It is crucial for the management and retrieval of checkpoints within the cache mechanism.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CheckpointLoaderSimpleShared(nodes.CheckpointLoaderSimple):

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'ckpt_name': (folder_paths.get_filename_list('checkpoints'),), 'key_opt': ('STRING', {'multiline': False, 'placeholder': "If empty, use 'ckpt_name' as the key."})}}
    RETURN_TYPES = ('MODEL', 'CLIP', 'VAE', 'STRING')
    RETURN_NAMES = ('model', 'clip', 'vae', 'cache key')
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/Backend'

    def doit(self, ckpt_name, key_opt):
        if key_opt.strip() == '':
            key = ckpt_name
        else:
            key = key_opt.strip()
        if key not in cache:
            res = self.load_checkpoint(ckpt_name)
            cache[key] = ('ckpt', (False, res))
            print(f"[Inspire Pack] CheckpointLoaderSimpleShared: Ckpt '{ckpt_name}' is cached to '{key}'.")
        else:
            (_, (_, res)) = cache[key]
            print(f"[Inspire Pack] CheckpointLoaderSimpleShared: Cached ckpt '{key}' is loaded. (Loading skip)")
        (model, clip, vae) = res
        return (model, clip, vae, key)
```