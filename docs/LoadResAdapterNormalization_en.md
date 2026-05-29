# Documentation
- Class name: LoadResAdapterNormalization
- Category: KJNodes/experimental
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The method `load_res_adapter` aims to integrate ResAdapter normalization weights into a given model. It ensures that weights are correctly loaded from the specified path and applied to the model's normalization layers, enhancing the model's ability to process input data with normalized features.

# Input types
## Required
- model
    - The parameter 'model' is required, as it represents the machine learning model to which ResAdapter normalization weights will be applied. It is a critical component that determines the functionality of the node and the outcome of the normalization process.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- resadapter_path
    - The parameter 'resadapter_path' specifies the directory path where the ResAdapter normalization weights are stored. It is essential for the node to locate and load the correct weights to ensure successful application of normalization to the model.
    - Comfy dtype: folder_paths.get_filename_list('checkpoints')
    - Python dtype: List[str]

# Output types
- model_clone
    - The output 'model_clone' is the original model with ResAdapter normalization weights applied. It signifies successful weight integration, allowing the model to use normalized features for improved data processing.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
