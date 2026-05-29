
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
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
