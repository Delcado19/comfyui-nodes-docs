# Documentation
- Class name: ModelMergeSD1
- Category: advanced/model_merging/model_specific
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ModelMergeSD1 node is designed to seamlessly integrate multiple models into a unified framework. It achieves this by merging different model architectures, allowing their unique strengths and capabilities to be combined. This node plays a critical role in advanced model merging, particularly in model-specific integration scenarios, enhancing the overall system's performance and adaptability.

# Input types
## Required
- model1
    - The 'model1' parameter is the first model to be merged within the node. It is essential for defining the initial structure and behavior of the merged model. The choice of this model will significantly impact the node's execution and the final outcome of the model integration process.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- model2
    - The 'model2' parameter represents the second model to be integrated into the merged framework. Its inclusion is critical for expanding the capabilities of the resulting model. The purpose of integrating 'model2' with 'model1' is to create a more robust and versatile model through the combination of their respective characteristics.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
## Optional
- time_embed.
    - The 'time_embed.' parameter is used to adjust the time embedding in the model. It is particularly important for models that require temporal understanding or need to process time series data. The value assigned to this parameter can fine-tune the model's sensitivity to time-related features.
    - Comfy dtype: FLOAT
    - Python dtype: float
- input_blocks.
    - For each index 'i' in the range of 0 to 11, 'input_blocks.{}.' represents parameters that can be adjusted to modify the behavior of input blocks within the model. These parameters are critical for fine-tuning how the model processes inputs and can greatly impact the node's execution and the quality of the merged model's predictions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- middle_block.
    - The 'middle_block.{}.' parameter, where 'i' ranges from 0 to 2, allows customization of the middle blocks in the model. These blocks are critical in the model's intermediate processing steps and can significantly impact the node's performance and the accuracy of the model's output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- output_blocks.
    - Similar to 'input_blocks.', for each index 'i' in the range of 0 to 11, 'output_blocks.{}.' is a parameter that can be fine-tuned to adjust the model's output blocks. Adjusting these parameters is critical for controlling the final predictions and ensuring they align with the desired outcomes.
    - Comfy dtype: FLOAT
    - Python dtype: float
- out.
    - The 'out.' parameter is used to control the final output of the merged model. This is an important adjustment that can directly impact the node's results, allowing the model's predictions to be tailored to specific requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- merged_model
    - The 'merged_model' output represents the combined model produced by the integration process performed by the node. It encapsulates the functionality of both input models and is significant for further analysis or deployment in various applications.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
