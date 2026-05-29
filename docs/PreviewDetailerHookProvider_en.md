# Documentation
- Class name: PreviewDetailerHookProvider
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The PreviewDetailerHookProvider node is designed to facilitate image enhancement and detailed preview. It adjusts image quality by applying hooks, ensuring the output is both detailed and visually clear. This node plays a key role in the preprocessing stage of image processing tasks, focusing on quality to meet specific requirements.

# Input types
## Required
- quality
    - The `quality` parameter is critical for determining the level of detail in the output image. It directly affects visual fidelity and file size, allowing a balance between quality and performance.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- unique_id
    - The `unique_id` parameter serves as a unique identifier for the operation, ensuring each process can be tracked and managed individually. It is especially important for asynchronous operations that may have multiple tasks running concurrently.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- DETAILER_HOOK
    - The `DETAILER_HOOK` output provides a mechanism for further processing and enhancing image details. It is essential for tasks that require complex operations and fine‑tuning of image quality.
    - Comfy dtype: DETAILER_HOOK
    - Python dtype: PreviewDetailerHook
- UPSCALER_HOOK
    - The `UPSCALER_HOOK` output is used to upscale images, increasing resolution without degrading clarity. It is crucial for applications that need high‑definition visual effects.
    - Comfy dtype: UPSCALER_HOOK
    - Python dtype: PreviewDetailerHook

# Usage tips
- Infra type: CPU

# Source code
```
class PreviewDetailerHookProvider:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'quality': ('INT', {'default': 95, 'min': 20, 'max': 100})}, 'hidden': {'unique_id': 'UNIQUE_ID'}}
    RETURN_TYPES = ('DETAILER_HOOK', 'UPSCALER_HOOK')
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, quality, unique_id):
        hook = hooks.PreviewDetailerHook(unique_id, quality)
        return (hook, hook)
```