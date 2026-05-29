
# Documentation
- Class name: ttN pipeLoraStack
- Category: ttN/pipe
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ttN pipeLoraStack node is designed to dynamically enhance and modify model and clip functionality by stacking LoRA adjustments based on specified configurations. It allows users to customize model and clip behavior by applying learned affine transformations, enabling precise fine-tuning of their generative process.

# Input types
## Required
- toggle
    - Determines whether to apply the LoRA stack, acting as a switch to enable or disable the stacking process.
    - Comfy dtype: COMBO[BOOLEAN]
    - Python dtype: bool
- mode
    - Specifies the operation mode for LoRA adjustments, distinguishing between simple and advanced configurations for applying model and clip strength modifications.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- num_loras
    - Represents the number of LoRA adjustments to apply, allowing multiple layers of modification to be stacked.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- optional_pipe
    - An optional pipeline configuration; if provided, it can be enhanced with LoRA adjustments; otherwise, a new configuration will be generated.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict or None
- model_override
    - Allows overriding the model component in the optional pipeline, facilitating custom model adjustments.
    - Comfy dtype: MODEL
    - Python dtype: object or None
- clip_override
    - Allows overriding the clip component in the optional pipeline, facilitating custom clip adjustments.
    - Comfy dtype: CLIP
    - Python dtype: object or None
- optional_lora_stack
    - A predefined list of LoRA adjustments that can optionally be included for stacking, providing a method to import existing configurations or add to existing ones.
    - Comfy dtype: LORA_STACK
    - Python dtype: list of tuples or None
- lora_i_name
    - Specifies the name of the i-th LoRA adjustment to apply, enabling identification and application of specific LoRA transformations.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- lora_i_strength
    - Defines the strength of the i-th LoRA adjustment on both model and clip in simple mode, allowing unified modification strength.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_i_model_strength
    - Specifies the strength of the i-th LoRA adjustment applied to the model in advanced mode, enabling differentiated strength for model transformations.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_i_clip_strength
    - Specifies the strength of the i-th LoRA adjustment applied to the clip in advanced mode, enabling differentiated strength for clip transformations.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- optional_pipe
    - Returns the enhanced or newly created pipeline configuration after applying the LoRA stack.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- lora_stack
    - Provides the list of applied LoRA adjustments, detailing the modifications made to the model and clip.
    - Comfy dtype: LORA_STACK
    - Python dtype: list of tuples or None


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
