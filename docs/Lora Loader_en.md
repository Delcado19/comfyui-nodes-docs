# Documentation
- Class name: WAS_Lora_Loader
- Category: WAS Suite/Loaders
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Lora_Loader node is designed to manage and apply Lora models to enhance the capabilities of base models and clips. It ensures efficient processing of Lora files by caching previously loaded models, thereby optimizing performance and resource usage.

# Input types
## Required
- model
    - The 'model' parameter is critical, as it represents the base model to which Lora enhancements will be applied. It directly affects the node's output by determining which model will be modified.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The 'clip' parameter is essential for providing the clip component that will be affected by the Lora model. It is a key element of the node's operation, as it defines the clip to be enhanced.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- lora_name
    - The 'lora_name' parameter specifies the Lora model file to be loaded. It is a critical input, as it determines which Lora model will be used for enhancement, influencing the node's final output.
    - Comfy dtype: STRING
    - Python dtype: str
- strength_model
    - The 'strength_model' parameter adjusts the intensity of the Lora model's influence on the base model. It plays an important role in fine-tuning the node's output to achieve the desired level of enhancement.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength_clip
    - The 'strength_clip' parameter controls the intensity of the Lora model's influence on the clip. It is important for adjusting the node's output to meet the specific enhancement requirements of the clip component.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MODEL
    - The 'MODEL' output represents the enhanced model after the Lora model has been applied. It is the primary result of the node's operation and is important for further processing or analysis.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- CLIP
    - The 'CLIP' output is the clip component modified by the Lora model. It is a key part of the node's functionality, providing an enhanced clip for downstream tasks.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- NAME_STRING
    - The 'NAME_STRING' output provides the name of the Lora model that was loaded and applied. It serves as a reference for the specific Lora model used during the enhancement process.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
