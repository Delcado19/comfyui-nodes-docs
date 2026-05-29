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
```
class CR_SelectModel:

    @classmethod
    def INPUT_TYPES(cls):
        checkpoint_files = ['None'] + folder_paths.get_filename_list('checkpoints')
        return {'required': {'ckpt_name1': (checkpoint_files,), 'ckpt_name2': (checkpoint_files,), 'ckpt_name3': (checkpoint_files,), 'ckpt_name4': (checkpoint_files,), 'ckpt_name5': (checkpoint_files,), 'select_model': ('INT', {'default': 1, 'min': 1, 'max': 5})}}
    RETURN_TYPES = ('MODEL', 'CLIP', 'VAE', 'STRING', 'STRING')
    RETURN_NAMES = ('MODEL', 'CLIP', 'VAE', 'ckpt_name', 'show_help')
    FUNCTION = 'select_model'
    CATEGORY = icons.get('Comfyroll/Essential/Core')

    def select_model(self, ckpt_name1, ckpt_name2, ckpt_name3, ckpt_name4, ckpt_name5, select_model):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Core-Nodes#cr-select-model'
        model_list = list()
        if select_model == 1:
            model_name = ckpt_name1
        elif select_model == 2:
            model_name = ckpt_name2
        elif select_model == 3:
            model_name = ckpt_name3
        elif select_model == 4:
            model_name = ckpt_name4
        elif select_model == 5:
            model_name = ckpt_name5
        if model_name == 'None':
            print(f'CR Select Model: No model selected')
            return ()
        ckpt_path = folder_paths.get_full_path('checkpoints', model_name)
        (model, clip, vae, clipvision) = comfy.sd.load_checkpoint_guess_config(ckpt_path, output_vae=True, output_clip=True, embedding_directory=folder_paths.get_folder_paths('embeddings'))
        return (model, clip, vae, model_name, show_help)
```