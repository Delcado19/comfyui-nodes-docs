# Documentation
- Class name: ModelPatchLoader
- Category: advanced/loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Loads a model patch from a predefined set of options and outputs it as a MODEL_PATCH for use in advanced model manipulation workflows. This node is typically used in model editing or patching pipelines where specific modifications to a base model are required before further processing.

# Input types
## Required
- name
    - Selects the model patch to load by its identifier from the available options.
    - Comfy dtype: COMBO
    - Options: populated at runtime from installed files

# Output types
- MODEL_PATCH
    - The loaded model patch, ready to be applied in downstream nodes for model modification or enhancement.
    - Comfy dtype: MODEL_PATCH

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
