# Documentation
- Class name: IPAdapterUnifiedLoaderFaceID
- Category: ipadapter/faceid
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The IPAdapterUnifiedLoaderFaceID class serves as a specialized interface for loading and managing facial recognition models, ensuring compatibility and seamless integration within the system.

# Input types
## Required
- model
    - The model parameter is critical for specifying the facial recognition model to be used within the system, guiding the overall functionality and expected outcomes.
    - Comfy dtype: MODEL
    - Python dtype: str
- preset
    - The preset parameter determines the variant of the facial recognition model to be applied, affecting the performance and accuracy of the facial recognition process.
    - Comfy dtype: COMBO[preset]
    - Python dtype: str
- lora_strength
    - The lora_strength parameter fine-tunes the model's adaptability, allowing for subtle adjustments in the facial recognition process to achieve optimal results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- provider
    - The provider parameter is essential for determining the execution environment of the facial recognition model, influencing its operational efficiency and resource utilization.
    - Comfy dtype: COMBO[provider]
    - Python dtype: str

# Output types
- MODEL
    - The output MODEL represents the loaded facial recognition model, ready for deployment in various tasks and applications within the system.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- ipadapter
    - The ipadapter output facilitates the integration of the facial recognition model with other components of the system, ensuring smooth operation and data flow.
    - Comfy dtype: IPADAPTER
    - Python dtype: IPADAPTER

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_IPAdapter_plus)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
