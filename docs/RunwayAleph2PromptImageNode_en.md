# Documentation
- Class name: RunwayAleph2PromptImageNode
- Category: partner/video/Runway
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Anchor a guidance image to a moment of the output (result) video, to guide what the edited video looks like at that point. Connect this to the 'prompt_images' input of the Runway Aleph2 Video to Video node; chain several together (up to 5) via the optional 'prompt_images' input below.

# Input types
## Required
- image
    - The guidance image to place at the chosen moment of the output video.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- position
    - How to place this image on the output video's timeline.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
## Optional
- prompt_images
    - Optional earlier prompt images to chain with this one.
    - Comfy dtype: RUNWAY_ALEPH2_PROMPT_IMAGE
    - Python dtype: object

# Output types
- prompt_images
    - The prompt_images output is produced by this node.
    - Comfy dtype: RUNWAY_ALEPH2_PROMPT_IMAGE
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
