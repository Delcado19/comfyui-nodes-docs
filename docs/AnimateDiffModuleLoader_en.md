# Documentation
- Class name: AnimateDiffModuleLoader
- Category: Animate Diff
- Output node: False
- Repo Ref: https://github.com/ArtVentureX/comfyui-animatediff.git

This node aims to manage and operate motion modules within the animation framework, focusing on integrating and applying advanced motion techniques to enhance the dynamics and fluidity of animations.

# Input types
## Required
- model_name
    - The model name is crucial for identifying the specific motion module to load and manipulate. It determines the source of the animation asset and lays the foundation for subsequent operations.
    - Comfy dtype: string
    - Python dtype: str
## Optional
- lora_stack
    - The LoRa stack is an optional parameter that, when provided, allows fine-tuning of the motion module through layer-by-layer adjustments. It enhances animation adaptability and customization to meet specific requirements.
    - Comfy dtype: list
    - Python dtype: List[Tuple[Dict[str, torch.Tensor], float]]

# Output types
- motion_module
    - The output motion module is the result of the node's processing, representing the finalized and optimized animation module, ready for use in the animation pipeline.
    - Comfy dtype: object
    - Python dtype: MotionWrapper

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ArtVentureX/comfyui-animatediff)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
