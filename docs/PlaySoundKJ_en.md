# Documentation
- Class name: PlaySoundKJ
- Category: KJNodes/audio
- Output node: True
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Plays the input audio in the browser. Modes: 'always' plays on every execution, 'on_empty_queue' plays only when the queue finishes, 'on_change' plays only when the audio content changes. Duration limits playback length (0 = full audio).

# Input types
## Required
- audio_path
    - Path to an audio file. Used when audio input is not connected.
    - Comfy dtype: STRING
    - Python dtype: str
- mode
    - The mode input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- volume
    - The volume input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- duration
    - Duration in seconds to play. 0 = play full audio.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- any_input
    - The any_input input is used by this node during execution.
    - Comfy dtype: *
    - Python dtype: object
- audio
    - The audio input is used by this node during execution.
    - Comfy dtype: AUDIO
    - Python dtype: object
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
- any_output
    - The any_output output is produced by this node.
    - Comfy dtype: *
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
