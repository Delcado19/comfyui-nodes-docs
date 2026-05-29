
# Documentation
- Class name: Noise Control Script
- Category: Efficiency Nodes/Scripts
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Noise Control Script node integrates and manages noise sources and seed variations within the ComfyUI framework. It allows custom noise generation and seed manipulation, enhancing control over randomness and variability in generated outputs. This node serves as a key element for adjusting noise characteristics and seed behavior, providing a nuanced approach to managing random elements in the generation process.

# Input types
## Required
- rng_source
    - Specify the random source for noise generation, allowing selection from CPU, GPU, or NV options. This choice affects the computational backend for noise generation, thereby influencing performance and compatibility.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- cfg_denoiser
    - A boolean flag to enable or disable the configuration denoiser, affecting noise filtering during generation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- add_seed_noise
    - Determines whether to introduce additional noise based on seed values, adding another layer of variability to the output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - The seed value for noise generation, providing reproducibility and a basis for variation in the applied noise.
    - Comfy dtype: INT
    - Python dtype: int
- weight
    - Defines the weight of seed noise, adjusting the intensity of the noise effect on the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- script
    - An optional script parameter that can be modified or extended via noise settings, offering flexibility for script-based customization.
    - Comfy dtype: SCRIPT
    - Python dtype: Dict

# Output types
- SCRIPT
    - Returns a modified or extended script with applied noise settings, facilitating custom noise control during generation.
    - Comfy dtype: SCRIPT
    - Python dtype: Dict


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [KSampler Adv. (Efficient)](../../efficiency-nodes-comfyui/Nodes/KSampler Adv. (Efficient).md)
    - [KSampler SDXL (Eff.)](../../efficiency-nodes-comfyui/Nodes/KSampler SDXL (Eff.).md)



## Source code
```python
class TSC_Noise_Control_Script:

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "rng_source": (["cpu", "gpu", "nv"],),
                "cfg_denoiser": ("BOOLEAN", {"default": False}),
                "add_seed_noise": ("BOOLEAN", {"default": False}),
                "seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                "weight": ("FLOAT", {"default": 0.015, "min": 0, "max": 1, "step": 0.001})},
            "optional": {"script": ("SCRIPT",)}
        }

    RETURN_TYPES = ("SCRIPT",)
    RETURN_NAMES = ("SCRIPT",)
    FUNCTION = "noise_control"
    CATEGORY = "Efficiency Nodes/Scripts"

    def noise_control(self, rng_source, cfg_denoiser, add_seed_noise, seed, weight, script=None):
        script = script or {}
        script["noise"] = (rng_source, cfg_denoiser, add_seed_noise, seed, weight)
        return (script,)

```
