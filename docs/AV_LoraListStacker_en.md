
# Documentation
- Class name: AV_LoraListStacker
- Category: Art Venture/Loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AV_LoraListStacker node aims to manage and stack Lora model configurations, facilitating the dynamic integration and application of multiple Lora models into the processing pipeline. It abstracts the complexity of handling Lora model parameters, ensuring that the application order of the models respects the expected layering and strength adjustments.

# Input types
## Required
- data
    - The 'data' input contains a list of Lora models and their configurations in JSON format, specifying how each Lora model should be applied to the base model.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- base_url
    - The optional 'base_url' input provides a default URL prefix for fetching Lora models that are not available locally, facilitating remote model retrieval.
    - Comfy dtype: STRING
    - Python dtype: str
- lora_stack
    - The 'lora_stack' input allows including an existing stack of Lora models for further processing or integration with new Lora configurations.
    - Comfy dtype: LORA_STACK
    - Python dtype: list

# Output types
- lora_stack
    - Returns the updated Lora model stack after integrating the specified Lora model adjustments.
    - Comfy dtype: LORA_STACK
    - Python dtype: list


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
