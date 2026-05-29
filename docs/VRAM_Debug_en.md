
# Documentation
- Class name: `VRAM_Debug`
- Category: `KJNodes/misc`
- Output node: `False`

The VRAM_Debug node monitors and manages video memory (VRAM) usage in the compute environment. It provides functions to clear memory caches, unload all models from memory, and perform garbage collection to free VRAM. This node is especially useful for optimizing memory usage and preventing out‑of‑memory errors during intensive compute tasks.

# Input types
## Required
- **`empty_cache`**
    - Specify whether to clear PyTorch's cache, which can release a large amount of VRAM.
    - Comfy dtype: `BOOLEAN`
    - Python dtype: `bool`
- **`gc_collect`**
    - Decide whether to perform garbage collection, helping release unused memory and optimize VRAM usage.
    - Comfy dtype: `BOOLEAN`
    - Python dtype: `bool`
- **`unload_all_models`**
    - Indicate whether all models should be unloaded from memory, which can significantly reduce VRAM consumption.
    - Comfy dtype: `BOOLEAN`
    - Python dtype: `bool`
## Optional
- **`any_input`**
    - Allow any additional inputs to be passed through the node, providing application flexibility.
    - Comfy dtype: `*`
    - Python dtype: `object`
- **`image_pass`**
    - Optional image data that can be passed through the node unchanged.
    - Comfy dtype: `IMAGE`
    - Python dtype: `torch.Tensor`
- **`model_pass`**
    - Optional model data that can be passed through the node unchanged.
    - Comfy dtype: `MODEL`
    - Python dtype: `object`

# Output types
- **`any_output`**
    - Comfy dtype: `*`
    - Return any additional inputs passed to the node, enabling flexible data flow.
    - Python dtype: `object`
- **`image_pass`**
    - Comfy dtype: `IMAGE`
    - Return optional image data passed through the node unchanged.
    - Python dtype: `torch.Tensor`
- **`model_pass`**
    - Comfy dtype: `MODEL`
    - Return optional model data passed through the node unchanged.
    - Python dtype: `object`
- **`freemem_before`**
    - Comfy dtype: `INT`
    - Provide the amount of VRAM available before executing the node operation.
    - Python dtype: `int`
- **`freemem_after`**
    - Comfy dtype: `INT`
    - Provide the amount of VRAM available after executing the node operation, highlighting the effectiveness of memory management.
    - Python dtype: `int`


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class VRAM_Debug:
    
    @classmethod
    
    def INPUT_TYPES(s):
      return {
        "required": {
            
            "empty_cache": ("BOOLEAN", {"default": True}),
            "gc_collect": ("BOOLEAN", {"default": True}),
            "unload_all_models": ("BOOLEAN", {"default": False}),
        },
        "optional": {
            "any_input": (any, {}),
            "image_pass": ("IMAGE",),
            "model_pass": ("MODEL",),
        }
	}
        
    RETURN_TYPES = (any, "IMAGE","MODEL","INT", "INT",)
    RETURN_NAMES = ("any_output", "image_pass", "model_pass", "freemem_before", "freemem_after")
    FUNCTION = "VRAMdebug"
    CATEGORY = "KJNodes/misc"
    DESCRIPTION = """
Returns the inputs unchanged, they are only used as triggers,  
and performs comfy model management functions and garbage collection,  
reports free VRAM before and after the operations.
"""

    def VRAMdebug(self, gc_collect,empty_cache, unload_all_models, image_pass=None, model_pass=None, any_input=None):
        freemem_before = model_management.get_free_memory()
        print("VRAMdebug: free memory before: ", freemem_before)
        if empty_cache:
            model_management.soft_empty_cache()
        if unload_all_models:
            model_management.unload_all_models()
        if gc_collect:
            import gc
            gc.collect()
        freemem_after = model_management.get_free_memory()
        print("VRAMdebug: free memory after: ", freemem_after)
        print("VRAMdebug: freed memory: ", freemem_after - freemem_before)
        return (any_input, image_pass, model_pass, freemem_before, freemem_after)

```
