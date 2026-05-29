# Documentation
- Class name: CLIPAdd
- Category: advanced/model_merging
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The CLIPAdd node is designed to seamlessly integrate two separate CLIP models into a unified structure. It achieves this by merging key patches from one CLIP model into another, effectively combining their capabilities. This node plays a critical role in advanced model merging techniques, allowing the creation of more complex and capable new models by leveraging the strengths of both constituent models.

# Input types
## Required
- clip1
    - The first CLIP model, which will serve as the foundation for the merging process. It is crucial as it determines the infrastructure architecture into which patches from the second CLIP model will be integrated.
    - Comfy dtype: CLIP
    - Python dtype: An instance of a CLIP model class.
- clip2
    - The second CLIP model that provides the key patches to be merged into the first CLIP model. The selection of this model is important as it contributes additional capabilities to the merged model.
    - Comfy dtype: CLIP
    - Python dtype: An instance of a CLIP model class.

# Output types
- merged_clip
    - The output is the merged CLIP model, which now contains the capabilities of both input CLIP models. This new model is ready for further use or deployment in various tasks.
    - Comfy dtype: CLIP
    - Python dtype: An instance of a CLIP model class representing the merged model.

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
