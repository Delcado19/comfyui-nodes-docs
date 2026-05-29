# Documentation
- Class name: CR_CycleModels
- Category: Comfyroll/Animation/Legacy
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_CycleModels node is designed to manage and cycle through a list of models based on specified parameters such as mode, frame interval, and loop count. It provides functionality to select and process models sequentially or from a predefined list, making it a versatile tool for animation workflows that require model transitions.

# Input types
## Required
- mode
    - The mode parameter determines the cycling behavior of models. It can be set to 'Off' or 'Sequential', affecting how the node traverses the model list.
    - Comfy dtype: COMBO[string]
    - Python dtype: str
- model
    - The model parameter represents the initial model used in the animation sequence. It is essential for setting the baseline for subsequent model transitions.
    - Comfy dtype: MODEL
    - Python dtype: Any
- clip
    - The clip parameter is used to store a reference to a specific clip in the animation, which can be manipulated or replaced during model cycling.
    - Comfy dtype: CLIP
    - Python dtype: Any
- frame_interval
    - The frame_interval parameter specifies the interval at which models cycle in the animation. It is a key factor in controlling the rhythm of model transitions.
    - Comfy dtype: INT
    - Python dtype: int
- loops
    - The loops parameter defines how many times the model list should cycle. It is essential for controlling the duration of the animation sequence.
    - Comfy dtype: INT
    - Python dtype: int
- current_frame
    - The current_frame parameter indicates the current frame in the animation sequence. It is used to determine which model is used at any given time.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- model_list
    - The model_list parameter is a list of models that the node can cycle through. It provides flexibility in defining the sequence of models used in the animation.
    - Comfy dtype: MODEL_LIST
    - Python dtype: List[Any]

# Output types
- MODEL
    - The output MODEL represents the current model used in the animation sequence after cycling through the model list.
    - Comfy dtype: MODEL
    - Python dtype: Any
- CLIP
    - The output CLIP is the current clip associated with the animation after processing model transitions.
    - Comfy dtype: CLIP
    - Python dtype: Any
- VAE
    - The VAE output provides the variational autoencoder configuration for the selected model, which can be used for further processing or analysis.
    - Comfy dtype: VAE
    - Python dtype: Any
- show_help
    - The show_help output is a URL link to the node documentation, providing additional information and guidance on its usage.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_CycleModels:

    @classmethod
    def INPUT_TYPES(s):
        modes = ['Off', 'Sequential']
        return {'required': {'mode': (modes,), 'model': ('MODEL',), 'clip': ('CLIP',), 'model_list': ('MODEL_LIST',), 'frame_interval': ('INT', {'default': 30, 'min': 0, 'max': 999, 'step': 1}), 'loops': ('INT', {'default': 1, 'min': 1, 'max': 1000}), 'current_frame': ('INT', {'default': 0.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0})}}
    RETURN_TYPES = ('MODEL', 'CLIP', 'VAE', 'STRING')
    RETURN_NAMES = ('MODEL', 'CLIP', 'VAE', 'show_help')
    FUNCTION = 'cycle_models'
    CATEGORY = icons.get('Comfyroll/Animation/Legacy')

    def cycle_models(self, mode, model, clip, model_list, frame_interval, loops, current_frame):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Cycler-Nodes#cr-cycle-models'
        model_params = list()
        if model_list:
            for _ in range(loops):
                model_params.extend(model_list)
        if mode == 'Off':
            return (model, clip, show_help)
        elif mode == 'Sequential':
            if current_frame == 0:
                return (model, clip, show_help)
            else:
                current_model_index = current_frame // frame_interval % len(model_params)
                current_model_params = model_params[current_model_index]
                (model_alias, ckpt_name) = current_model_params
                print(f'[Info] CR Cycle Models: Current model is {ckpt_name}')
                ckpt_path = folder_paths.get_full_path('checkpoints', ckpt_name)
                out = comfy.sd.load_checkpoint_guess_config(ckpt_path, output_vae=True, output_clip=True, embedding_directory=folder_paths.get_folder_paths('embeddings'))
                return (out, show_help)
```