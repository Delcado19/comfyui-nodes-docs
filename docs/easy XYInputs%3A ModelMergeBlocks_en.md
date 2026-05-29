
# Documentation
- Class name: easy XYInputs: ModelMergeBlocks
- Category: EasyUse/XY Inputs
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The easy XYInputs: ModelMergeBlocks node provides an easy-to-use interface for model merging, used to specify the models to be merged and the parameters that control the merging process. It abstracts the complexities involved in model merging, allowing users to conveniently combine different models to achieve enhanced or specific functionality.

# Input types
## Required
- ckpt_name_i
    - Specifies the checkpoint name of the subsequent model to be merged. This parameter allows users to select additional model versions or states for combination, thereby creating a new merged model.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- vae_use
    - Determines which model's VAE (Variational Autoencoder) to use in the merged model, or allows selecting a specific VAE from the available options.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- preset
    - Allows users to select a preset configuration for the model merging process, simplifying setup by providing predefined parameter values.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- values
    - Defines specific values for merging parameters, such as input, middle, and output block weights, allowing detailed customization of the merging process.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- X or Y
    - The output is a merged model, which may be model X or Y, depending on the merging parameters and conditions specified by the user.
    - Comfy dtype: X_Y
    - Python dtype: object


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class XYplot_ModelMergeBlocks:

    @classmethod
    def INPUT_TYPES(s):
        checkpoints = folder_paths.get_filename_list("checkpoints")
        vae = ["Use Model 1", "Use Model 2"] + folder_paths.get_filename_list("vae")

        preset = ["Preset"]  # 20
        preset += load_preset("mmb-preset.txt")
        preset += load_preset("mmb-preset.custom.txt")

        default_vectors = "1,0,0; \n0,1,0; \n0,0,1; \n1,1,0; \n1,0,1; \n0,1,1; "
        return {
            "required": {
                "ckpt_name_1": (checkpoints,),
                "ckpt_name_2": (checkpoints,),
                "vae_use": (vae, {"default": "Use Model 1"}),
                "preset": (preset, {"default": "preset"}),
                "values": ("STRING", {"default": default_vectors, "multiline": True, "placeholder": 'Support 2 methods:\n\n1.input, middle, out in same line and insert values seperated by "; "\n\n2.model merge block number seperated by ", " in same line and insert values seperated by "; "'}),
            },
            "hidden": {"my_unique_id": "UNIQUE_ID"}
        }

    RETURN_TYPES = ("X_Y",)
    RETURN_NAMES = ("X or Y",)
    FUNCTION = "xy_value"

    CATEGORY = "EasyUse/XY Inputs"

    def xy_value(self, ckpt_name_1, ckpt_name_2, vae_use, preset, values, my_unique_id=None):

        axis = "advanced: ModelMergeBlocks"
        if ckpt_name_1 is None:
            raise Exception("ckpt_name_1 is not found")
        if ckpt_name_2 is None:
            raise Exception("ckpt_name_2 is not found")

        models = (ckpt_name_1, ckpt_name_2)

        xy_values = {"axis":axis, "values":values, "models":models, "vae_use": vae_use}
        return (xy_values,)

```
