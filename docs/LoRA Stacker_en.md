
# Documentation
- Class name: LoRA Stacker
- Category: Efficiency Nodes/Stackers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LoRA Stacker node is designed to aggregate and configure LoRA (Low-Rank Adaptation) parameters into a structured format for operation and application across different model components. This node supports dynamic configuration through input parameters, allowing custom LoRA parameters to be defined according to specific requirements.

# Input types
## Required
- input_mode
    - Specify the input processing mode, which determines how LoRA parameters are aggregated and built. This affects the configuration and representation of LoRA parameters in the output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- lora_count
    - Define the number of LoRA parameters to consider, determining the scale of aggregation and the number of parameters to process.
    - Comfy dtype: INT
    - Python dtype: int
- lora_name_i
    - Specify the name of each LoRA parameter, allowing individual LoRA adjustments to be identified and configured.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- lora_wt_i
    - Determine the weight of each LoRA parameter, influencing the degree to which the adjustment affects the model.
    - Comfy dtype: FLOAT
    - Python dtype: float
- model_str_i
    - Specify the model adjustment strength of each LoRA parameter, influencing model behavior.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_str_i
    - Define the clipping strength of each LoRA parameter, controlling the extent to which the adjustment is applied.
    - Comfy dtype: FLOAT
    - Python dtype: float

## Optional
- lora_stack
    - An optional pre-configured LoRA parameter stack that can be extended or modified with the current configuration, enhancing the flexibility of LoRA parameter management.
    - Comfy dtype: LORA_STACK
    - Python dtype: list of tuples

# Output types
- LORA_STACK
    - Returns a structured representation of LoRA parameters, suitable for further processing or application within model components.
    - Comfy dtype: LORA_STACK
    - Python dtype: list of tuples


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [Efficient Loader](../../efficiency-nodes-comfyui/Nodes/Efficient Loader.md)
    - [Eff. Loader SDXL](../../efficiency-nodes-comfyui/Nodes/Eff. Loader SDXL.md)
    - [CR Apply LoRA Stack](../../ComfyUI_Comfyroll_CustomNodes/Nodes/CR Apply LoRA Stack.md)
    - Reroute

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
