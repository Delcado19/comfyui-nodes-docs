# Documentation
- Class name: SAMLoader
- Category: ImpactPack
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SAMLoader node aims to efficiently manage and load various models in the SAM (Segment Anything Model) family, including ESAM. It provides a high-level interface for selecting and using models based on user-defined criteria (such as model name and device mode), ensuring optimal performance and resource utilization.

# Input types
## Required
- model_name
    - The model_name parameter is crucial for determining the SAM model to be loaded. It influences node execution by directing the node to the correct model file, which is essential for subsequent processing and prediction tasks.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- device_mode
    - The device_mode parameter allows users to specify the computing device for model execution. It plays an important role in node performance by optimizing the use of GPU or CPU resources according to the selected mode.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- SAM_MODEL
    - The SAM_MODEL output represents the loaded SAM model, ready for inference or further processing. It encapsulates the model's architecture and learned parameters, marking the completion of the node's main function.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
