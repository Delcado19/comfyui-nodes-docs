# Documentation
- Class name: ModelMergeSD1
- Category: advanced/model_merging/model_specific
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ModelMergeSD1 node is designed to merge multiple models into a unified framework. It is specifically used for merging model-specific components, allowing for a seamless and efficient integration process. This node plays a critical role in advanced model merging, enhancing the functionality and performance of the integrated model.

# Input types
## Required
- model1
    - The 'model1' parameter is critical as it represents the first model to be merged into the framework. Its integration is a fundamental step in achieving the node's purpose of merging models.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- model2
    - The 'model2' parameter represents the second model to be merged. It is a key component in the merging process, complementing the first model to form a comprehensive model structure.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
## Optional
- time_embed.
    - The 'time_embed.' parameter is used to embed time-related information into the model. It influences how temporal dynamics are captured within the merged model, enhancing their ability to handle time-sensitive data.
    - Comfy dtype: FLOAT
    - Python dtype: float
- input_blocks.
    - For each index 'i' in the range of 0 to 11, 'input_blocks.{}.' represents a block that processes input data. These blocks are crucial in the initial stages of model merging, shaping input features for subsequent processing.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]
- middle_block.
    - The 'middle_block.{}.' parameter, where 'i' ranges from 0 to 2, represents intermediate processing blocks within the model. These blocks play an important role in model integration and transforming data within the merged architecture.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]
- output_blocks.
    - Similar to 'input_blocks.', 'output_blocks.{}.' where 'i' ranges from 0 to 11, represents the final processing stages of the merged model. These blocks are crucial for refining the model's output to meet specific requirements.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]
- out.
    - The 'out.' parameter defines the final output configuration of the merged model. It is important as it determines the format and structure of the model's predictions or results.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
