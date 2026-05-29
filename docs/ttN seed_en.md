
# Documentation
- Class name: ttN seed
- Category: ttN/util
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ttN_SEED node is specifically used to manage and use seed values to ensure consistent and reproducible results across different runs. It is a fundamental element in processes that require deterministic output.

# Input types
## Required
- seed
    - The seed parameter is used to set a specific starting point for number generation, enabling deterministic behavior in operations. It plays a crucial role in ensuring result reproducibility.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- seed
    - This output represents the seed value used in the operation, allowing the process to be traced and reproduced.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [CLIPTextEncode (BlenderNeko Advanced + NSP)](../../was-node-suite-comfyui/Nodes/CLIPTextEncode (BlenderNeko Advanced + NSP).md)
    - [OneButtonPrompt](../../OneButtonPrompt/Nodes/OneButtonPrompt.md)
    - [KSamplerAdvanced](../../Comfy/Nodes/KSamplerAdvanced.md)
    - KRestartSamplerAdv
    - [DetailerForEachDebug](../../ComfyUI-Impact-Pack/Nodes/DetailerForEachDebug.md)



## Source code
```python
class ttN_SEED:
    version = '1.0.0'
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
                    "seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                },
                "hidden": {"ttNnodeVersion": ttN_SEED.version},
        }

    RETURN_TYPES = ("INT",)
    RETURN_NAMES = ("seed",)
    FUNCTION = "plant"
    OUTPUT_NODE = True

    CATEGORY = "ttN/util"

    @staticmethod
    def plant(seed):
        return seed,

```
