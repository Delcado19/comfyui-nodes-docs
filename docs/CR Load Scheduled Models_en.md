# Documentation
- Class name: CR_LoadScheduledModels
- Category: Comfyroll/Animation/Schedulers
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_LoadScheduledModels node is designed to manage the loading of models according to a predefined schedule. It allows selecting a default model or dynamically loading different models at specified frames, enhancing the flexibility and adaptability of model usage across various scenarios.

# Input types
## Required
- mode
    - The mode parameter determines whether to load the default model or select a model according to the schedule. It is critical to the node's operation as it dictates the model loading behavior.
    - Comfy dtype: COMBO[string]
    - Python dtype: str
- current_frame
    - The current frame parameter specifies the current frame in the animation or sequence, which is essential for determining which model to load based on the schedule.
    - Comfy dtype: INT
    - Python dtype: int
- default_model
    - The default model parameter sets the fallback model to use when no specific model is scheduled for the current frame.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- schedule_alias
    - The schedule alias parameter provides an identifier for a specific schedule within the node, influencing how the node interprets and applies the schedule for model loading.
    - Comfy dtype: STRING
    - Python dtype: str
- schedule_format
    - The schedule format parameter defines the structure and format of the schedule used by the node for model loading.
    - Comfy dtype: COMBO[string]
    - Python dtype: str
- model_list
    - The model list parameter contains a list of models with their respective aliases, used to match and load models based on the schedule alias.
    - Comfy dtype: MODEL_LIST
    - Python dtype: List[Tuple[str, str]]
- schedule
    - The schedule parameter represents the actual schedule of models to be loaded at specific frames, guiding the node's operation.
    - Comfy dtype: SCHEDULE
    - Python dtype: str

# Output types
- MODEL
    - The MODEL output provides the loaded model based on the schedule or default setting, which is the core functionality of the node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- CLIP
    - The CLIP output is associated with the context image processing model, which complements the main model's capabilities in understanding and generating images.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- VAE
    - The VAE output represents the variational autoencoder component, which is crucial for the model's ability to generate new data points.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- show_help
    - The show_help output provides a URL to the documentation for further assistance and guidance when using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_LoadScheduledModels:

    @classmethod
    def INPUT_TYPES(s):
        modes = ['Load default Model', 'Schedule']
        return {'required': {'mode': (modes,), 'current_frame': ('INT', {'default': 0.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'schedule_alias': ('STRING', {'default': '', 'multiline': False}), 'default_model': (folder_paths.get_filename_list('checkpoints'),), 'schedule_format': (['CR', 'Deforum'],)}, 'optional': {'model_list': ('MODEL_LIST',), 'schedule': ('SCHEDULE',)}}
    RETURN_TYPES = ('MODEL', 'CLIP', 'VAE', 'STRING')
    RETURN_NAMES = ('MODEL', 'CLIP', 'VAE', 'show_help')
    FUNCTION = 'schedule'
    CATEGORY = icons.get('Comfyroll/Animation/Schedulers')

    def schedule(self, mode, current_frame, schedule_alias, default_model, schedule_format, model_list=None, schedule=None):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Scheduler-Nodes#cr-load-scheduled-models'
        if mode == 'Load default Model':
            ckpt_path = folder_paths.get_full_path('checkpoints', default_model)
            out = comfy.sd.load_checkpoint_guess_config(ckpt_path, output_vae=True, output_clip=True, embedding_directory=folder_paths.get_folder_paths('embeddings'))
            print(f'[Debug] CR Load Scheduled Models. Loading default model.')
            return (out[:3], show_help)
        params = keyframe_scheduler(schedule, schedule_alias, current_frame)
        if params == '':
            print(f'[Warning] CR Load Scheduled Models. No model specified in schedule for frame {current_frame}. Using default model.')
            ckpt_path = folder_paths.get_full_path('checkpoints', default_model)
            out = comfy.sd.load_checkpoint_guess_config(ckpt_path, output_vae=True, output_clip=True, embedding_directory=folder_paths.get_folder_paths('embeddings'))
            return (out[:3], show_help)
        else:
            try:
                model_alias = str(params)
            except ValueError:
                print(f'[Warning] CR Load Scheduled Models. Invalid params: {params}')
                return ()
        for (ckpt_alias, ckpt_name) in model_list:
            if ckpt_alias == model_alias:
                model_name = ckpt_name
                break
        if model_name == '':
            print(f'[Info] CR Load Scheduled Models. No model alias match found for {model_alias}. Frame {current_frame} will produce an error.')
            return ()
        else:
            print(f'[Info] CR Load Scheduled Models. Model alias {model_alias} matched to {model_name}')
        ckpt_path = folder_paths.get_full_path('checkpoints', model_name)
        out = comfy.sd.load_checkpoint_guess_config(ckpt_path, output_vae=True, output_clip=True, embedding_directory=folder_paths.get_folder_paths('embeddings'))
        print(f'[Info] CR Load Scheduled Models. Loading new checkpoint model {model_name}')
        return (out[:3], show_help)
```