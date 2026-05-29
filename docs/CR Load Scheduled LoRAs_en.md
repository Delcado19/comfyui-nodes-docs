# Documentation
- Class name: CR_LoadScheduledLoRAs
- Category: Comfyroll/Animation/Schedulers
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_LoadScheduledLoRAs is a node for managing and applying scheduled LoRAs (Low-Rank Adaptation) to models and clips. It allows users to specify operation modes, including disabling the function, loading default LoRA, or following a custom schedule. The node dynamically selects the appropriate LoRA based on the current frame, ensuring that models and clips are enhanced or modified according to the user's schedule.

# Input types
## Required
- mode
    - The mode parameter determines how the node handles LoRA loading. It can be set to off, load default LoRA, or load according to schedule.
    - Comfy dtype: COMBO
    - Python dtype: str
- model
    - The model to be processed.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The clip to be processed.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- current_frame
    - The current frame number, used to determine which LoRA to load according to the schedule.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- schedule_alias
    - The schedule alias, used to quickly select a set of predefined LoRA loading schedules.
    - Comfy dtype: STRING
    - Python dtype: str
- default_lora
    - The default LoRA name to use when no LoRA is specified for the current frame.
    - Comfy dtype: STRING
    - Python dtype: str
- strength_model
    - The model's strength factor, used to adjust the degree of influence of LoRA on the model.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength_clip
    - The clip's strength factor, used to adjust the degree of influence of LoRA on the clip.
    - Comfy dtype: FLOAT
    - Python dtype: float
- schedule_format
    - The schedule format, which determines how the LoRA loading schedule is parsed and applied.
    - Comfy dtype: COMBO
    - Python dtype: str
- lora_list
    - An optional LoRA list, providing a series of LoRA options for the schedule to choose from.
    - Comfy dtype: LORA_LIST
    - Python dtype: List[str]
- schedule
    - A custom LoRA loading schedule, specifying in detail which LoRA and its parameters should be loaded for each frame.
    - Comfy dtype: SCHEDULE
    - Python dtype: List[Tuple[str, str]]

# Output types
- MODEL
    - The processed model, which may have LoRA applied.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- CLIP
    - The processed clip, which may have LoRA applied.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- show_help
    - Provides a link to help documentation for users to find more information on how to use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_LoadScheduledLoRAs:

    @classmethod
    def INPUT_TYPES(s):
        modes = ['Off', 'Load default LoRA', 'Schedule']
        return {'required': {'mode': (modes,), 'model': ('MODEL',), 'clip': ('CLIP',), 'current_frame': ('INT', {'default': 0.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'schedule_alias': ('STRING', {'default': '', 'multiline': False}), 'default_lora': (folder_paths.get_filename_list('loras'),), 'strength_model': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01}), 'strength_clip': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01}), 'schedule_format': (['CR', 'Deforum'],)}, 'optional': {'lora_list': ('LORA_LIST',), 'schedule': ('SCHEDULE',)}}
    RETURN_TYPES = ('MODEL', 'CLIP', 'STRING')
    RETURN_NAMES = ('MODEL', 'CLIP', 'show_help')
    FUNCTION = 'schedule'
    CATEGORY = icons.get('Comfyroll/Animation/Schedulers')

    def schedule(self, mode, model, clip, current_frame, schedule_alias, default_lora, strength_model, strength_clip, schedule_format, lora_list=None, schedule=None):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Scheduler-Nodes#cr-load-scheduled-loras'
        if mode == 'Off':
            print(f'[Info] CR Load Scheduled LoRAs. Disabled.')
            return (model, clip, show_help)
        if mode == 'Load default LoRA':
            if default_lora == None:
                return (model, clip, show_help)
            if strength_model == 0 and strength_clip == 0:
                return (model, clip, show_help)
            (model, clip) = LoraLoader().load_lora(model, clip, default_lora, strength_model, strength_clip)
            print(f'[Info] CR Load Scheduled LoRAs. Loading default LoRA {lora_name}.')
            return (model, clip, show_help)
        params = keyframe_scheduler(schedule, schedule_alias, current_frame)
        if params == '':
            print(f'[Warning] CR Load Scheduled LoRAs. No LoRA specified in schedule for frame {current_frame}. Using default lora.')
            if default_lora != None:
                (model, clip) = LoraLoader().load_lora(model, clip, default_lora, strength_model, strength_clip)
            return (model, clip, show_help)
        else:
            parts = params.split(',')
            if len(parts) == 3:
                s_lora_alias = parts[0].strip()
                s_strength_model = float(parts[1].strip())
                s_strength_clip = float(parts[1].strip())
            else:
                print(f'[Warning] CR Simple Value Scheduler. Skipped invalid line: {line}')
                return ()
        for (l_lora_alias, l_lora_name, l_strength_model, l_strength_clip) in lora_list:
            print(l_lora_alias, l_lora_name, l_strength_model, l_strength_clip)
            if l_lora_alias == s_lora_alias:
                print(f'[Info] CR Load Scheduled LoRAs. LoRA alias match found for {s_lora_alias}')
                lora_name = l_lora_name
                break
        if lora_name == '':
            print(f'[Info] CR Load Scheduled LoRAs. No LoRA alias match found for {s_lora_alias}. Frame {current_frame}.')
            return ()
        else:
            print(f'[Info] CR Load Scheduled LoRAs. LoRA {lora_name}')
        (model, clip) = LoraLoader().load_lora(model, clip, lora_name, s_strength_model, s_strength_clip)
        print(f'[Debug] CR Load Scheduled LoRAs. Loading new LoRA {lora_name}')
        return (model, clip, show_help)
```