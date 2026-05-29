
# Documentation
- Class name: easy XYInputs: Checkpoint
- Category: EasyUse/XY Inputs
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node aims to simplify the processing and visualization of model checkpoint data, focusing on generating XY input values based on checkpoint names, CLIP skip values, and VAE names. It abstracts the complexity of handling multiple checkpoints and their associated parameters, allowing users to easily configure and visualize the impact of different checkpoints on model behavior.

# Input types
## Required
- input_mode
    - Specifies the input mode, determining how checkpoint names, CLIP skip values, and VAE names are processed and utilized. It affects the node's execution path and the generated XY values.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- ckpt_count
    - Defines the number of checkpoints to process, affecting the size and composition of the output XY values. It determines how many sets of checkpoint-related parameters are considered in the operation.
    - Comfy dtype: INT
    - Python dtype: int
- ckpt_name_i
    - Represents the name of a checkpoint. The 'i' in 'ckpt_name_i' ranges from 1 to the specified total number of checkpoints, allowing individual specification of multiple checkpoints.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- clip_skip_i
    - Indicates the CLIP skip value for each checkpoint. The 'i' in 'clip_skip_i' ranges from 1 to the total number of checkpoints, specifying the associated CLIP skip value for each checkpoint.
    - Comfy dtype: INT
    - Python dtype: int
- vae_name_i
    - Specifies the VAE name associated with each checkpoint. The 'i' in 'vae_name_i' ranges from 1 to the total number of checkpoints, allowing a specific VAE to be associated with each individual checkpoint.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Optional
- optional_lora_stack
    - An optional parameter; if provided, a LORA stack is added to the processing of checkpoint names, CLIP skip values, and VAE names, potentially altering the generated XY values.
    - Comfy dtype: LORA_STACK
    - Python dtype: str

# Output types
- X or Y
    - The output is a set of XY values derived from the processed checkpoint names, CLIP skip values, and VAE names, used for visualization or further analysis.
    - Comfy dtype: X_Y
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class XYplot_Checkpoint:

    modes = ["Ckpt Names", "Ckpt Names+ClipSkip", "Ckpt Names+ClipSkip+VAE"]

    @classmethod
    def INPUT_TYPES(cls):

        checkpoints = ["None"] + folder_paths.get_filename_list("checkpoints")
        vaes = ["Baked VAE"] + folder_paths.get_filename_list("vae")

        inputs = {
            "required": {
                "input_mode": (cls.modes,),
                "ckpt_count": ("INT", {"default": 3, "min": 0, "max": 10, "step": 1}),
            }
        }

        for i in range(1, 10 + 1):
            inputs["required"][f"ckpt_name_{i}"] = (checkpoints,)
            inputs["required"][f"clip_skip_{i}"] = ("INT", {"default": -1, "min": -24, "max": -1, "step": 1})
            inputs["required"][f"vae_name_{i}"] = (vaes,)

        inputs["optional"] = {
            "optional_lora_stack": ("LORA_STACK",)
        }
        return inputs

    RETURN_TYPES = ("X_Y",)
    RETURN_NAMES = ("X or Y",)
    FUNCTION = "xy_value"

    CATEGORY = "EasyUse/XY Inputs"

    def xy_value(self, input_mode, ckpt_count, **kwargs):

        axis = "advanced: Checkpoint"

        checkpoints = [kwargs.get(f"ckpt_name_{i}") for i in range(1, ckpt_count + 1)]
        clip_skips = [kwargs.get(f"clip_skip_{i}") for i in range(1, ckpt_count + 1)]
        vaes = [kwargs.get(f"vae_name_{i}") for i in range(1, ckpt_count + 1)]

        # Set None for Clip Skip and/or VAE if not correct modes
        for i in range(ckpt_count):
            if "ClipSkip" not in input_mode:
                clip_skips[i] = 'None'
            if "VAE" not in input_mode:
                vaes[i] = 'None'

        # Extend each sub-array with lora_stack if it's not None
        values = [checkpoint.replace(',', '*')+','+str(clip_skip)+','+vae.replace(',', '*') for checkpoint, clip_skip, vae in zip(checkpoints, clip_skips, vaes) if
                        checkpoint != "None"]

        optional_lora_stack = kwargs.get("optional_lora_stack") if "optional_lora_stack" in kwargs else []

        xy_values = {"axis": axis, "values": values, "lora_stack": optional_lora_stack}
        return (xy_values,)

```
