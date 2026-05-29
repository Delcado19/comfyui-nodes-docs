# Documentation
- Class name: WAS_SAM_Model_Loader
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The sam_load_model function loads and initializes a pre-trained Segment Anything Model (SAM) based on the specified model size. If model weights do not yet exist, it downloads them and sets up the model for subsequent image segmentation tasks. This node is critical for the image masking process, providing the foundation for high-quality object segmentation in the WAS Suite.

# Input types
## Required
- model_size
    - The model_size parameter determines which specific SAM model to load. It defines the model's complexity and size, directly impacting segmentation performance and accuracy. This parameter ensures the correct pre-trained model is used during image masking.
    - Comfy dtype: COMBO['ViT-H', 'ViT-L', 'ViT-B']
    - Python dtype: str

# Output types
- SAM_MODEL
    - The SAM_MODEL output represents the loaded and ready-to-use Segment Anything Model. This is a pre-trained deep learning model designed for high-quality object segmentation. It is a key component in subsequent steps of the image masking workflow, enabling precise and efficient segmentation of objects in images.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
