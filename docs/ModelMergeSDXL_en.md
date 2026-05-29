# Documentation
- Class name: ModelMergeSDXL
- Category: Model Merging
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI_experiments

The ModelMergeSDXL node is designed to integrate multiple models into a unified structure, enabling complex interactions and improved performance. It focuses on merging different models in a way that preserves their individual characteristics while achieving collective functionality.

# Input types
## Required
- model1
    - The 'model1' parameter is the first model to be merged, crucial to the initial structure of the merged model. It sets the foundation for the integration process and influences the final capabilities of the unified model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- model2
    - The 'model2' parameter represents the second model to be merged, complementing the first model and contributing to the overall complexity and performance of the merged model. Its integration is key to achieving the desired functionality.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
## Optional
- time_embed.
    - The 'time_embed.' parameter allows temporal dynamics to be incorporated into the model, influencing how the model processes and interprets time-based data. It is an optional but important feature for time-sensitive applications.
    - Comfy dtype: FLOAT
    - Python dtype: float
- input_blocks.
    - The 'input_blocks.' parameter is a set of nine FLOAT values defining the transformation blocks of the input layer. Each index 'i' in the range 0 to 8 represents a unique block, contributing to initial data processing.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]
- middle_block.
    - The 'middle_block.' parameter consists of three FLOAT values, each corresponding to a block in the middle layer of the model. These blocks are critical to intermediate processing steps, affecting the model's ability to learn and generalize.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]
- output_blocks.
    - The 'output_blocks.' parameter includes nine FLOAT values for configuring the transformation blocks of the output layer. Similar to 'input_blocks.', each index 'i' from 0 to 8 specifies a block that forms the final output of the model.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]
- out.
    - The 'out.' parameter is a FLOAT value representing the final output configuration of the merged model. It is used to fine-tune the model's predictions or results based on the integrated model's characteristics.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- merged_model
    - The 'merged_model' output is the result of the merging process, containing the combined functionality of the input models. It is a critical component for further analysis or deployment in various applications.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI_experiments)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
