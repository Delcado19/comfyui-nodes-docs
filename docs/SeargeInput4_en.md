# Documentation
- Class name: SeargeInput4
- Category: Searge/_deprecated_/UI/Inputs
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node acts as a multiplexer for multiple model inputs, integrating and organizing them for further processing. It ensures the appropriate model is selected based on the provided settings, streamlining the workflow and improving the efficiency of model integration.

# Input types
## Required
- base_model
    - The base model is the foundational neural network architecture that constitutes further improvement and enhancement. Its selection is crucial as it directly affects the quality and applicability of the output.
    - Comfy dtype: COMBO[folder_paths.get_filename_list('checkpoints'),]
    - Python dtype: List[str]
- refiner_model
    - The refinement model is an advanced version on top of the base model, focusing on specific aspects of improving model performance. Its inclusion is essential for achieving higher accuracy and detail in the results.
    - Comfy dtype: COMBO[folder_paths.get_filename_list('checkpoints'),]
    - Python dtype: List[str]
- vae_model
    - The VAE (Variational Autoencoder) model is used for dimensionality reduction and generating new data points similar to the input data. Its role in creating compressed representations and facilitating new data generation is crucial.
    - Comfy dtype: COMBO[folder_paths.get_filename_list('vae'),]
    - Python dtype: List[str]
- main_upscale_model
    - The main upscaling model is responsible for increasing the resolution of the input data. It plays a key role in enhancing the visual quality and detail of the output, ensuring that the upscaled results meet the expected standards.
    - Comfy dtype: COMBO[folder_paths.get_filename_list('upscale_models'),]
    - Python dtype: List[str]
- support_upscale_model
    - The supporting upscaling model assists in the upscaling process, providing additional support to the main upscaling model. Its presence contributes to the robustness and reliability of the upscaling process, ensuring the quality of the final output.
    - Comfy dtype: COMBO[folder_paths.get_filename_list('upscale_models'),]
    - Python dtype: List[str]
- lora_model
    - The LoRA (Low-Rank Adaptation) model is used to efficiently adapt pre-trained models to new tasks or data. It plays an important role in achieving adaptability and flexibility in model use, allowing better performance on diverse datasets.
    - Comfy dtype: COMBO[folder_paths.get_filename_list('loras'),]
    - Python dtype: List[str]
## Optional
- model_settings
    - Model settings are optional configurations that can be used to customize the behavior of the model according to specific requirements or preferences without changing the base model itself.
    - Comfy dtype: Dict[str, str]
    - Python dtype: Optional[Dict[str, str]]

# Output types
- model_names
    - The output is a dictionary of model names, providing a structured overview of the selected models for different purposes in the workflow. This organized representation is crucial for subsequent steps to properly utilize the appropriate models.
    - Comfy dtype: Dict[str, str]
    - Python dtype: Dict[str, str]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
