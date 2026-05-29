# Documentation
- Class name: CR_CycleLoRAs
- Category: Comfyroll/Animation/Legacy
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_CycleLoRAs node is designed to manage and cycle through a list of LoRA (Low-Rank Adaptation) parameters for models and clips within a specified animation framework. It enhances the diversity and dynamism of generated animations by sequentially applying different LoRA adjustments. The node iterates through a predefined list of LoRA parameters, applying them in a cyclic manner based on the current frame and frame interval, enabling the creation of complex and evolving visual effects.

# Input types
## Required
- mode
    - The mode parameter determines the operational behavior of the node. It decides whether the node is in 'off' state, doing nothing, or in 'sequential' mode, cycling through LoRA parameters. This choice significantly affects how the node processes input and resulting animation sequences.
    - Comfy dtype: COMBO['Off', 'Sequential']
    - Python dtype: str
- model
    - The model parameter is critical because it represents the core model on which the node will operate using the specified LoRA parameters. The model's adaptability to LoRA adjustments is key to achieving the desired animation effects.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The clip parameter is essential for providing the visual context that the node will work with alongside the model. It is used to apply LoRA adjustments together with the model to create a coherent animation.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- lora_list
    - The lora_list parameter is the list of LoRA parameters that the node will cycle through. Each element in this list represents a different set of adjustments that can be applied to the model and clip, contributing to the diversity of the animation.
    - Comfy dtype: LORA_LIST
    - Python dtype: List[Tuple[str, str, float, float]]
## Optional
- frame_interval
    - The frame_interval parameter defines how frequently the node cycles through the LoRA parameters. It is crucial for controlling the rhythm and timing of the animation sequence.
    - Comfy dtype: INT
    - Python dtype: int
- loops
    - The loops parameter specifies how many times the node will cycle through the entire list of LoRA parameters. It affects the duration and repetitiveness of the animation effect.
    - Comfy dtype: INT
    - Python dtype: int
- current_frame
    - The current_frame parameter indicates the current position in the animation sequence. It is used to determine which LoRA parameter to apply at any given moment.
    - Comfy dtype: INT
    - Python dtype: float

# Output types
- MODEL
    - The output MODEL represents the model with LoRA adjustments applied according to the current frame and frame interval. This is the primary output, carrying the intended visual changes for the animation.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- CLIP
    - The output CLIP is the visual representation adjusted with LoRA parameters used alongside the MODEL. It complements the MODEL to provide a complete animation sequence.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- show_help
    - The show_help output provides a URL link to documentation for further assistance or information about the node's operation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
