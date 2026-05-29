# Documentation
- Class name: LoraLoaderBlockWeight
- Category: InspirePack/LoraBlockWeight
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node is designed to load and manipulate block weights from a LoRA file, adjusting emphasis on different model layers according to specified parameters to fine-tune the output.

# Input types
## Required
- model
    - The model parameter is critical, as it defines the base architecture to which block weights will be applied, significantly influencing the final output.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The clip input is essential for providing contextual information that helps adjust block weights, ensuring the output aligns with the desired context.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- category_filter
    - This parameter filters LoRA files by their category, allowing the node to focus on specific aspects of model layers.
    - Comfy dtype: COMBO[lora_dirs]
    - Python dtype: str
- lora_name
    - The lora_name parameter plays a key role in selecting the specific LoRA file whose block weights will be loaded and manipulated.
    - Comfy dtype: COMBO[lora_names]
    - Python dtype: str
- strength_model
    - This parameter adjusts the influence of model block weights, allowing the output to be fine-tuned to meet specific requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength_clip
    - The strength_clip parameter modifies the influence of clip contextual information on block weight adjustments.
    - Comfy dtype: FLOAT
    - Python dtype: float
- inverse
    - By toggling this parameter, the node can invert the effect of block weights, providing an alternative perspective on model behavior.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - The seed input initializes the random number generator, ensuring block weight adjustments are reproducible and consistent.
    - Comfy dtype: INT
    - Python dtype: int
- A
    - The A parameter is used to define a base value for certain vector calculations, affecting the overall distribution of block weights.
    - Comfy dtype: FLOAT
    - Python dtype: float
- B
    - Similar to A, the B parameter sets another base value for vector calculations, contributing to the diversity of block weight adjustments.
    - Comfy dtype: FLOAT
    - Python dtype: float
- block_vector
    - The block_vector parameter specifies the sequence of block weights to apply, directly influencing the structure and characteristics of the output.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- preset
    - The preset parameter offers a selection of predefined block weight configurations, simplifying the process of applying common adjustments.
    - Comfy dtype: COMBO[preset]
    - Python dtype: str
- bypass
    - When enabled, this parameter allows the node to bypass block weight adjustments, passing the original model and clip data through unchanged.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- model
    - The output model has been adjusted according to the loaded block weights, reflecting the intended modifications to the architecture's behavior.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The output clip data incorporates the block weight adjustments, ensuring contextual information remains consistent with the modified model.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- populated_vector
    - This output provides a detailed record of the applied block weights, serving as a reference for the model's modified structure.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
