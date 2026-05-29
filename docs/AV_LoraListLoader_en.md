
# Documentation
- Class name: AV_LoraListLoader
- Category: Art Venture/Loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AV_LoraListLoader node is designed to load and stack a list of LoRA models based on the provided data and configuration. It facilitates dynamic enhancement of models and clips by sequentially applying multiple LoRA adjustments, enabling complex modifications to model behavior through LoRA parameters.

# Input types
## Required
- model
    - The 'model' parameter represents the initial model to which LoRA adjustments will be applied. It is essential for defining the starting point of the LoRA stacking process.
    - Comfy dtype: MODEL
    - Python dtype: str
- clip
    - The 'clip' parameter represents the initial clip model that will be modified alongside the main model through LoRA adjustments. It plays a critical role in the stacking process, as it will be subject to modifications.
    - Comfy dtype: CLIP
    - Python dtype: str
- data
    - The 'data' parameter contains the list of LoRA models to be loaded and applied, presented in JSON format. It is crucial for specifying which LoRA models and their respective strengths will influence the model and clip.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- base_url
    - The 'base_url' parameter provides the base URL for fetching LoRA models not found locally. It facilitates dynamic loading of LoRA models from external sources.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- model
    - Returns the modified model after applying the specified LoRA adjustments.
    - Comfy dtype: MODEL
    - Python dtype: str
- clip
    - Returns the modified clip model after applying the LoRA adjustments.
    - Comfy dtype: CLIP
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
