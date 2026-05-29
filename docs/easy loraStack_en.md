# Documentation
- Class name: loraStackLoader
- Category: EasyUse/Loaders
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The loraStackLoader node aims to simplify the process of loading and configuring a Lora stack, which is crucial for fine-tuning and improving the performance of neural network models. It simplifies the complexity of managing multiple Lora layers by providing a structured way to specify the names, strengths, and other related parameters for multiple Lora layers.

# Input types
## Required
- toggle
    - The toggle parameter is critical for deciding whether the node should execute its loading process. When set to True, the node will load the specified Lora stack; otherwise, it will return without performing any action.
    - Comfy dtype: BOOL
    - Python dtype: bool
- mode
    - The mode parameter determines the complexity level of the Lora stack configuration. It allows users to choose between simple or advanced settings, affecting how subsequent parameters are interpreted and applied.
    - Comfy dtype: STR
    - Python dtype: str
- num_loras
    - The num_loras parameter specifies the number of Lora layers to load. It directly affects the node's operation by determining how many Lora configurations will be processed.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- optional_lora_stack
    - The optional_lora_stack parameter provides a way to supply an existing Lora stack to the node. This is useful for extending or modifying an already configured stack without starting from scratch.
    - Comfy dtype: LORA_STACK
    - Python dtype: List[Tuple[str, float, float]]
- lora_{i}_name
    - The lora_{i}_name parameter allows users to specify the name of the Lora layer at position {i}. This is important for identifying and loading the correct Lora configuration.
    - Comfy dtype: STR
    - Python dtype: str
- lora_{i}_strength
    - The lora_{i}_strength parameter sets the strength of the Lora layer at position {i}. This is a key factor in the influence weight of the Lora layer in the model.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_{i}_model_strength
    - The lora_{i}_model_strength parameter applies in advanced mode, setting the model-specific strength for the Lora layer at position {i}. It is used to fine-tune the Lora's impact on model output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_{i}_clip_strength
    - The lora_{i}_clip_strength parameter is also used in advanced mode, determining the interaction strength between the Lora layer at position {i} and the CLIP model. This is crucial for controlling the integration of text-based guidance in model processing.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- lora_stack
    - The lora_stack output is the collection of Lora configurations processed by the node. It represents the final Lora layer stack ready to be applied to the neural network model.
    - Comfy dtype: LORA_STACK
    - Python dtype: List[Tuple[str, float, float]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
