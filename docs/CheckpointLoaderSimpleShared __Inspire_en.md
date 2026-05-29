
# Documentation
- Class name: CheckpointLoaderSimpleShared __Inspire
- Category: InspirePack/Backend
- Output node: False

CheckpointLoaderSimpleShared node manages model checkpoint loading and caching in a shared manner. It checks whether a checkpoint is cached before loading from disk, enabling efficient reuse. The node supports read‑only and overwrite modes for different scenarios.

# Input types
## Required
- ckpt_name
- Name of the checkpoint to load. This parameter is essential for identifying the checkpoint file to retrieve and load.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- key_opt
- Optional key that uniquely identifies the checkpoint in the cache. This allows more flexible caching strategies, such as caching the same checkpoint under different keys.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- mode
- Cache mode, such as "read‑only" or "overwrite cache", which determines how checkpoint caching is handled.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- model
- Model loaded from the checkpoint.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
- CLIP model associated with the checkpoint (if available).
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- vae
- VAE model associated with the checkpoint (if available).
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- cache key
- Cache key for the checkpoint. Useful for referencing in subsequent operations.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CheckpointLoaderSimpleShared(nodes.CheckpointLoaderSimple):
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
                    "ckpt_name": (folder_paths.get_filename_list("checkpoints"), ),
                    "key_opt": ("STRING", {"multiline": False, "placeholder": "If empty, use 'ckpt_name' as the key."}),
                },
                "optional": {
                    "mode": (['Auto', 'Override Cache', 'Read Only'],),
                }}

    RETURN_TYPES = ("MODEL", "CLIP", "VAE", "STRING")
    RETURN_NAMES = ("model", "clip", "vae", "cache key")
    FUNCTION = "doit"

    CATEGORY = "InspirePack/Backend"

    def doit(self, ckpt_name, key_opt, mode='Auto'):
        if mode == 'Read Only':
            if key_opt.strip() == '':
                raise Exception("[CheckpointLoaderSimpleShared] key_opt cannot be omit if mode is 'Read Only'")
            key = key_opt.strip()
        elif key_opt.strip() == '':
            key = ckpt_name
        else:
            key = key_opt.strip()

        if key not in cache or mode == 'Override Cache':
            res = self.load_checkpoint(ckpt_name)
            update_cache(key, "ckpt", (False, res))
            cache_kind = 'ckpt'
            print(f"[Inspire Pack] CheckpointLoaderSimpleShared: Ckpt '{ckpt_name}' is cached to '{key}'.")
        else:
            cache_kind, (_, res) = cache[key]
            print(f"[Inspire Pack] CheckpointLoaderSimpleShared: Cached ckpt '{key}' is loaded. (Loading skip)")

        if cache_kind == 'ckpt':
            model, clip, vae = res
        elif cache_kind == 'unclip_ckpt':
            model, clip, vae, _ = res
        else:
            raise Exception(f"[CheckpointLoaderSimpleShared] Unexpected cache_kind '{cache_kind}'")

        return model, clip, vae, key

    @staticmethod
    def IS_CHANGED(ckpt_name, key_opt, mode='Auto'):
        if mode == 'Read Only':
            if key_opt.strip() == '':
                raise Exception("[CheckpointLoaderSimpleShared] key_opt cannot be omit if mode is 'Read Only'")
            key = key_opt.strip()
        elif key_opt.strip() == '':
            key = ckpt_name
        else:
            key = key_opt.strip()

        if mode == 'Read Only':
            return (None, cache_weak_hash(key))
        elif mode == 'Override Cache':
            return (ckpt_name, key)

        return (None, cache_weak_hash(key))

```
