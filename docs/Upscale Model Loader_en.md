# Documentation
- Class name: WAS_Upscale_Model_Loader
- Category: WAS Suite/Loaders
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `load_model` method is responsible for loading and preparing a model for image upscaling tasks. It achieves this by locating the specified model in a designated directory, loading its parameters, and initializing it for use. This method is critical for seamlessly integrating pretrained models into the workflow, ensuring the model is ready for deployment without manual intervention.

# Input types
## Required
- model_name
    - The `model_name` parameter is essential for identifying the specific model to load. It directs the method to the correct file in the model directory, enabling retrieval and initialization of the desired model. This parameter is crucial for ensuring the correct model is used, which directly impacts subsequent upscaling performance and results.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- UPSCALE_MODEL
    - The `UPSCALE_MODEL` output represents the loaded and initialized model, ready for image upscaling tasks. It encapsulates the model's architecture and learned parameters, allowing the model to be applied to new data. This output is important as it forms the foundation for all subsequent processing and analysis involving the model.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- MODEL_NAME_TEXT
    - The `MODEL_NAME_TEXT` output provides the name of the loaded model, which is useful for logging, tracking, or user interface display purposes. It provides a human-readable identifier for the model, facilitating communication and reference throughout the application.
    - Comfy dtype: str
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
