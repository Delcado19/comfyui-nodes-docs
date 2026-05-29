
# Documentation
- Class name: Power Lora Loader (rgthree)
- Category: rgthree
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Power Lora Loader node enhances models and CLIP by dynamically adding multiple Lora modifications. It offers a flexible interface to integrate Loras into existing structures, extending functionality and performance.

# Input types
## Required
- model
- The model parameter represents the model to which Loras will be added. It defines the base structure that will be enhanced with additional features.
    - Comfy dtype: MODEL
    - Python dtype: tuple
- clip
- The clip parameter indicates the clip to be modified by Loras. It plays a key role in specifying the enhancement target, ensuring correct application of modifications.
    - Comfy dtype: CLIP
    - Python dtype: tuple

# Output types
- MODEL
- Returns the modified model with applied Loras, reflecting the enhancements made.
    - Comfy dtype: MODEL
    - Python dtype: tuple
- CLIP
- Returns the enhanced clip integrated with Loras, showcasing the modifications applied.
    - Comfy dtype: CLIP
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
