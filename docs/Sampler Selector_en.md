
# Documentation
- Class name: Sampler Selector
- Category: ImageSaverTools/utils
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Sampler Selector node is designed to dynamically select and configure sampling strategies for image generation tasks. It allows selecting different sampling algorithms based on input parameters, thereby optimizing the image generation process for various scenes and preferences.

# Input types
## Required
- sampler_name
    - Specify the name of the sampler to use, affecting the selection of sampling algorithm for image generation tasks.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- sampler_name
    - Return the identifier of the configured sampler object, which can be directly used in image generation tasks.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [ImpactKSamplerBasicPipe](../../ComfyUI-Impact-Pack/Nodes/ImpactKSamplerBasicPipe.md)
    - [FaceDetailer](../../ComfyUI-Impact-Pack/Nodes/FaceDetailer.md)
    - [KSampler](../../Comfy/Nodes/KSampler.md)
    - [KSamplerAdvanced](../../Comfy/Nodes/KSamplerAdvanced.md)

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
