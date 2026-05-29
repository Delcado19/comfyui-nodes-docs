
# Documentation
- Class name: easy XYInputs: Lora
- Category: EasyUse/XY Inputs
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is used to dynamically select and operate LORA (Low-Rank Adaptation) models for generating or modifying XY input values. It allows users to specify various parameters such as model strength and clip strength, and optionally stack multiple LORA configurations for advanced customization.

# Input types
## Required
- input_mode
    - Defines the input mode, e.g., whether the Lora name includes weights, which affects how the LORA model is selected and used.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- lora_count
    - Specifies the number of LORA models to consider, enabling dynamic adjustment based on user needs.
    - Comfy dtype: INT
    - Python dtype: int
- model_strength
    - Determines the strength of the model's influence, allowing fine-tuning of the LORA model's impact.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_strength
    - Sets the strength of the clip operation, providing control over the degree of clipping applied to the LORA model.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_name_i
    - Specifies the names of LORA models to consider in the stack, enabling targeted selection of LORA configurations. The index 'i' ranges from 1 to the number specified by 'lora_count', allowing multiple LORA models to be specified.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- model_str_i
    - Determines the model strength for the specified LORA model, allowing precise control over its influence. The index 'i' corresponds to the LORA model specified by 'lora_name_i'.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_str_i
    - Sets the clip strength for the specified LORA model, providing customization of the clipping effect. The index 'i' corresponds to the LORA model specified by 'lora_name_i'.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- optional_lora_stack
    - Allows inclusion of existing LORA configuration stacks, providing flexibility to extend or modify LORA settings.
    - Comfy dtype: LORA_STACK
    - Python dtype: list

# Output types
- X or Y
    - Outputs the generated or modified XY input values, which can be directly applied or further processed.
    - Comfy dtype: X_Y
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
