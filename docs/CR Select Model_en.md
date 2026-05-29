# Documentation
- Class name: CR_SelectModel
- Category: Comfyroll/Essential/Core
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_SelectModel is a node for selecting and loading models based on user-defined criteria. It allows specifying multiple checkpoint files and selects the appropriate model according to the index provided by the user. The node is able to handle different checkpoint files and returns a tuple containing the selected model, its associated clip and vae objects, the checkpoint name, and a link to the documentation for further help.

# Input types
## Required
- ckpt_name1
    - The parameter 'ckpt_name1' is the first checkpoint file name that the user can select. It plays a crucial role in the node's operation, as it determines one of the potential models that the node can load.
    - Comfy dtype: STRING
    - Python dtype: str
- ckpt_name2
    - The parameter 'ckpt_name2' is the second checkpoint file name that the user can select. It plays an important role in providing the user with options when choosing a model.
    - Comfy dtype: STRING
    - Python dtype: str
- ckpt_name3
    - The parameter 'ckpt_name3' is the third checkpoint file name that the user can select. It helps increase the diversity of models that the node can handle.
    - Comfy dtype: STRING
    - Python dtype: str
- ckpt_name4
    - The parameter 'ckpt_name4' is the fourth checkpoint file name that the user can select. It is part of the set of available options for model selection.
    - Comfy dtype: STRING
    - Python dtype: str
- ckpt_name5
    - The parameter 'ckpt_name5' is the fifth checkpoint file name that the user can select. It increases the range of models that the node can load.
    - Comfy dtype: STRING
    - Python dtype: str
- select_model
    - The parameter 'select_model' is an integer that determines which checkpoint file will be used to load the model. It is very important, as it directly affects which model the node selects and subsequently loads.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MODEL
    - The output 'MODEL' is the model object loaded according to the user's selection. It is important, as it represents the core functionality of the node, enabling further processing or analysis.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- CLIP
    - The output 'CLIP' is the clip object associated with the selected model. It is important for providing additional context or functionality related to the model.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- VAE
    - The output 'VAE' is the variational autoencoder object in the model architecture. It is important for tasks involving generative models or latent space manipulation.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- ckpt_name
    - The output 'ckpt_name' provides the name of the checkpoint file used to load the model. It is useful for tracking purposes or further model management.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - The output 'show_help' is a URL linking to the node's documentation. It is helpful for users who need additional guidance or information about the node's usage.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
