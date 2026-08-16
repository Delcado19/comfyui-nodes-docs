# Documentation
- Class name: VRGDG_LoadAudioSplit_SRTOnly
- Category: VRGDG
- Output node: False
- Repo Ref: https://github.com/vrgamegirl19/comfyui-vrgamedevgirl

VRGDG_LoadAudioSplit_SRTOnly is a ComfyUI node registered by `custom_nodes.comfyui-vrgamedevgirl`. The live metadata did not provide a longer description.

# Input types
## Required
- audio
    - The audio input is used by this node during execution.
    - Comfy dtype: AUDIO
    - Python dtype: object
- trigger
    - The trigger input is used by this node during execution.
    - Comfy dtype: *
    - Python dtype: object
- srt_file
    - The srt_file input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- fixed_duration
    - The fixed_duration input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- fps
    - The fps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- folder_path
    - The folder_path input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- enable_auto_queue
    - The enable_auto_queue input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- redo_prompt_number
    - The redo_prompt_number input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- use_remake_folder
    - The use_remake_folder input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- overwrite_mode
    - The overwrite_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- tail_loss_frames
    - The tail_loss_frames input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- pre_frames
    - The pre_frames input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- meta
    - The meta output is produced by this node.
    - Comfy dtype: DICT
    - Python dtype: object
- total_duration
    - The total_duration output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- index
    - The index output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- frames_for_ltx
    - The frames_for_ltx output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- start_time
    - The start_time output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- end_time
    - The end_time output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- instructions
    - The instructions output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- total_sets
    - The total_sets output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- frames_per_scene
    - The frames_per_scene output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- preroll_frames
    - The preroll_frames output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- audio_meta
    - The audio_meta output is produced by this node.
    - Comfy dtype: DICT
    - Python dtype: object
- output_folder
    - The output_folder output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- overwrite_mode
    - The overwrite_mode output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- audio
    - The audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- signal_out
    - The signal_out output is produced by this node.
    - Comfy dtype: *
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/vrgamegirl19/comfyui-vrgamedevgirl)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
