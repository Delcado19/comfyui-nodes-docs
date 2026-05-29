# Documentation
- Class name: IPAdapterUnifiedLoader
- Category: ipadapter
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The IPAdapterUnifiedLoader node is designed to simplify the loading and management of various models required for image processing tasks. It centralizes the process of loading Clip Vision, IPAdapter, LoRA, and InsightFace models, ensuring the correct models are used according to the specified preset and provider. The node's functionality focuses on providing a unified interface for model loading, reducing redundancy and improving overall system efficiency.

# Input types
## Required
- model
    - The model parameter is critical to the node's operation, as it defines the base model to be used for processing. It influences the node's execution by determining the model architecture and functionality.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- preset
    - The preset parameter is required, as it determines the specific configuration of the model to be loaded. It influences the node's execution by selecting the appropriate model preset based on the user's requirements.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- lora_strength
    - The LoRA strength parameter is optional and is used to adjust the influence of the LoRA model on the base model. It plays a role in fine-tuning model performance for specific tasks.
    - Comfy dtype: FLOAT
    - Python dtype: float
- provider
    - The provider parameter specifies the execution provider for the InsightFace model. It is important for determining the hardware acceleration method used during model execution.
    - Comfy dtype: STRING
    - Python dtype: str
- ipadapter
    - The optional ipadapter parameter allows specifying a custom IPAdapter model file. It is used when the user needs to load a specific version or configuration of the IPAdapter model.
    - Comfy dtype: IPADAPTER
    - Python dtype: Dict[str, Any]

# Output types
- model
    - The model output represents the loaded and configured base model, ready for image processing tasks. It is the culmination of the node's functionality, providing the user with a model tailored to their specified requirements.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- ipadapter
    - The ipadapter output contains the loaded IPAdapter model, a critical component for certain image processing tasks. It provides the model with additional functionality and customization options.
    - Comfy dtype: IPADAPTER
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_IPAdapter_plus)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
