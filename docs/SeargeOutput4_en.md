# Documentation
- Class name: SeargeOutput4
- Category: Searge/_deprecated_/UI/Outputs
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node facilitates separating and identifying various model components in complex systems. It receives structured model name input, deconstructs it, and provides individual access to each model type, enhancing modularity and organization of output data.

# Input types
## Required
- model_names
    - This parameter is critical because it contains all model names required for node operation. It is a composite structure that includes names of different models, each playing a distinct role in the system.
    - Comfy dtype: COMBO[{'base_model': str, 'refiner_model': str, 'vae_model': str, 'main_upscale_model': str, 'support_upscale_model': str, 'lora_model': str}]
    - Python dtype: Dict[str, str]

# Output types
- model_names
    - The output retains the input's structured format, offering a clear and organized representation of model names. This aids further processing and analysis by other system components.
    - Comfy dtype: COMBO[{'base_model': str, 'refiner_model': str, 'vae_model': str, 'main_upscale_model': str, 'support_upscale_model': str, 'lora_model': str}]
    - Python dtype: Dict[str, str]
- base_model
    - This output represents the foundational model in the system, providing a base for other models and processes. Identifying it is essential for understanding the structure and hierarchy of involved models.
    - Comfy dtype: str
    - Python dtype: str
- refiner_model
    - The refined model output denotes a model designed to enhance or improve the base model's output. It plays a key role in increasing overall accuracy and quality of system results.
    - Comfy dtype: str
    - Python dtype: str
- vae_model
    - This output specifies the Variational Autoencoder (VAE) model, which is crucial for learning to generate new data representations. It is a key component in data generation and feature extraction tasks.
    - Comfy dtype: str
    - Python dtype: str
- main_upscale_model
    - The primary upscaling model output refers to the main model responsible for increasing data resolution. It is vital for improving visual quality and detail of outputs in image processing tasks.
    - Comfy dtype: str
    - Python dtype: str
- support_upscale_model
    - This output represents a supporting model that assists the upscaling process, providing complementary input to the primary upscaling model. It helps enhance overall effectiveness and efficiency of upscaling tasks.
    - Comfy dtype: str
    - Python dtype: str
- lora_model
    - The LoRA (Low-Rank Adaptation) model output relates to a technique for efficiently adapting pretrained models to new tasks. It is significant for boosting model performance with minimal computational overhead.
    - Comfy dtype: str
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
