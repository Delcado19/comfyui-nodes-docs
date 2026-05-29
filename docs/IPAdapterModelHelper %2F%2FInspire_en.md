# Documentation
- Class name: IPAdapterModelHelper
- Category: InspirePack/models
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The IPAdapterModelHelper node is a key component in the InspirePack suite, facilitating seamless integration and application of various models and presets. It skillfully manages the complexity of model loading and ensures compatibility, enabling users to leverage the power of different models with minimal friction. This node is designed to simplify the model usage process, providing a unified interface for accessing diverse functionalities.

# Input types
## Required
- model
    - The model parameter is critical to the node's operation, as it defines the core technology model to be used. It significantly influences the node's execution and the quality of the results produced, making it a fundamental aspect of the node's functionality.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The clip parameter plays an important role in the node's functionality by providing the context needed for image processing. It is essential for the node to generate accurate and relevant outputs based on input data.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- preset
    - The preset parameter allows users to select predefined settings, tuning the node's behavior for specific use cases. It is a key element for customizing the node's operation according to user needs.
    - Comfy dtype: COMBO[list(model_preset.keys())]
    - Python dtype: str
- lora_strength_model
    - The lora_strength_model parameter adjusts the influence of the LoRA model on the node's output. It is an important tuning factor that can significantly affect the final result, allowing fine-grained control over the node's behavior.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_strength_clip
    - The lora_strength_clip parameter fine-tunes the influence of the CLIP model on the node's processing. It is a critical parameter for users who need to control the balance between the CLIP model's influence and other factors.
    - Comfy dtype: FLOAT
    - Python dtype: float
- insightface_provider
    - The insightface_provider parameter specifies the backend used for the InsightFace model, which is essential for facial recognition tasks. This is an important choice that can affect the node's performance and compatibility with the user's system.
    - Comfy dtype: COMBO[['CPU', 'CUDA', 'ROCM']]
    - Python dtype: str
- cache_mode
    - The cache_mode parameter determines the node's caching strategy, which can improve performance by reducing redundant operations. It is an important consideration for optimizing the node's efficiency.
    - Comfy dtype: COMBO[['insightface only', 'clip_vision only', 'all', 'none']]
    - Python dtype: str
- unique_id
    - The unique_id parameter is used to track and identify the node within the system, which is particularly useful for debugging and managing multiple instances of the node.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- IPADAPTER_PIPE
    - The IPADAPTER_PIPE output is a composite structure that encapsulates processed data and models, providing a comprehensive pipeline for further analysis or utilization.
    - Comfy dtype: IPADAPTER_PIPE
    - Python dtype: Tuple[torch.nn.Module, torch.Tensor, torch.Tensor, Any, Callable[[torch.nn.Module], torch.nn.Module]]
- IPADAPTER
    - The IPADAPTER output represents the loaded IPAdapter model, ready for application in subsequent image processing tasks.
    - Comfy dtype: IPADAPTER
    - Python dtype: torch.nn.Module
- CLIP_VISION
    - The CLIP_VISION output provides the loaded CLIP model, which is essential for generating contextual embeddings from images.
    - Comfy dtype: CLIP_VISION
    - Python dtype: torch.Tensor
- INSIGHTFACE
    - The INSIGHTFACE output provides the InsightFace model, which is specifically used for facial recognition and analysis within the node's operation.
    - Comfy dtype: INSIGHTFACE
    - Python dtype: Any
- MODEL
    - The MODEL output refers to the main model that has been enhanced or modified by the node, available for further processing or direct application.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- CLIP
    - The CLIP output represents processed CLIP data, which can be used for various downstream tasks involving image and text interactions.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- insightface_cache_key
    - The insightface_cache_key output is a unique identifier used for caching the InsightFace model, optimizing performance when the node is reused.
    - Comfy dtype: STRING
    - Python dtype: str
- clip_vision_cache_key
    - The clip_vision_cache_key output provides a unique identifier for caching the CLIP Vision model, helping improve the node's efficiency in repeated tasks.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
