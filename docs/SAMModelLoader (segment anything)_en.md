# Documentation
- Class name: SAMModelLoader
- Category: segment_anything
- Output node: False
- Repo Ref: https://github.com/storyicon/comfyui_segment_anything

The SAMModelLoader node is responsible for loading and preparing the Segment Anything Model (SAM) for image segmentation tasks. It ensures the correct model is loaded based on the specified model name, making it a key component for initializing the segmentation process.

# Input types
## Required
- model_name
    - The model_name parameter is crucial for identifying the specific Segment Anything Model to load. It directs the node to the correct model configuration and ensures appropriate resources are allocated for the task.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- SAM_MODEL
    - The SAM_MODEL output represents the loaded Segment Anything Model, ready for image segmentation tasks. It is the result of the node operation, providing the base model for subsequent processing steps.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/storyicon/comfyui_segment_anything)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
