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
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
