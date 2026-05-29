
# Documentation
- Class name: Scheduler Selector
- Category: ImageSaverTools/utils
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Scheduler Selector node aims to simplify the process of selecting from a predefined list of schedulers in Comfy samplers. It provides users with a concise interface to easily choose the most suitable scheduler for image generation or modification tasks, abstracting away the complexity of scheduler selection.

# Input types
## Required
- scheduler
    - Specifies the scheduler to select. This parameter allows the user to choose from the list of available schedulers, influencing the image generation process by determining the scheduling algorithm used.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- scheduler
    - Returns the name of the selected scheduler. This output is essential for subsequent processing steps that need to identify and use a specific scheduler.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [FaceDetailer](../../ComfyUI-Impact-Pack/Nodes/FaceDetailer.md)
    - [KSampler](../../Comfy/Nodes/KSampler.md)
    - [KSamplerAdvanced](../../Comfy/Nodes/KSamplerAdvanced.md)

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
