# Documentation
- Class name: ToIPAdapterPipe
- Category: InspirePack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

ToIPAdapterPipe is a node designed to facilitate the integration of various image processing models and adapters. It orchestrates data flow through a pipeline, ensuring images are properly processed by specified models before passing to the next stage. The node aims to simplify image processing workflows, improve efficiency, and allow seamless use of different models within a unified pipeline.

# Input types
## Required
- ipadapter
    - The ipadapter parameter is critical to the node's operation, as it defines the specific adapter used for image preprocessing. It plays a key role in ensuring input images are correctly formatted and ready for processing by subsequent models in the pipeline.
    - Comfy dtype: IPADAPTER
    - Python dtype: torch.nn.Module
- model
    - The model input is essential, as it represents the core image processing model the node will use. It is the primary component for performing the required image transformations and is vital to the node's functionality.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip_vision
    - The clip_vision parameter is optional but can be used to integrate additional vision-based processing capabilities into the pipeline. It extends the node's functionality, allowing for more complex and diverse image analysis tasks.
    - Comfy dtype: CLIP_VISION
    - Python dtype: torch.nn.Module
- insightface
    - When the insightface parameter is provided, it enables the node to include facial recognition capabilities within its processing pipeline. This is particularly useful for applications that need to identify or verify individuals through facial features.
    - Comfy dtype: INSIGHTFACE
    - Python dtype: torch.nn.Module

# Output types
- IPADAPTER_PIPE
    - The IPADAPTER_PIPE output encapsulates the processed results after data passes through the node's pipeline. It represents the completion of the image processing task and is ready for further use or analysis.
    - Comfy dtype: IPADAPTER_PIPE
    - Python dtype: Tuple[torch.nn.Module, torch.nn.Module, torch.nn.Module, Optional[torch.nn.Module], Callable]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
