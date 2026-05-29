
# Documentation
- Class name: Inference_Core_ModelMergeSDXL
- Category: advanced/model_merging
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Inference_Core_ModelMergeSDXL node is specifically designed to merge two different model architectures into a unified model. It focuses on integrating various components such as input blocks, intermediate blocks, output blocks, and specific transformer elements. This process aims to enhance model performance by leveraging the strengths of both original models.

# Input types
## Required
- model1
    - Represents the first model to be merged, playing a key role in the architecture and output of the combined model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- model2
    - Represents the second model to be merged, equally important in shaping the capabilities of the final integrated model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- time_embed.
    - Adjusts the influence of the time embedding layer in the merged model, affecting the temporal aspects processed by the model. This parameter is critical for tuning how the model interprets time-related information, directly impacting the model's temporal processing capabilities.
    - Comfy dtype: FLOAT
    - Python dtype: float
- label_emb.
    - Modifies the influence of the label embedding layer, affecting how label information is integrated into the model. This parameter is key for tuning the integration of label data, influencing how the model processes and utilizes label information.
    - Comfy dtype: FLOAT
    - Python dtype: float
- input_blocks.i
    - Controls the blending of the i-th input block from both models, where i ranges from 0 to 8, determining the initial processing of inputs. Each index specifies the contribution of a specific input block, directly impacting the initial stage of data processing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- middle_block.i
    - Influences the contribution of the i-th intermediate block, where i ranges from 0 to 2, critical to the model's intermediate computations. These parameters are essential for determining the behavior of intermediate processing stages, affecting the overall computational flow of the model.
    - Comfy dtype: FLOAT
    - Python dtype: float
- output_blocks.i
    - Influences the role of the i-th output block, where i ranges from 0 to 8, affecting the final output generation. Each index determines the impact of a specific output block on the final model output, playing a significant role in output characteristics.
    - Comfy dtype: FLOAT
    - Python dtype: float
- out.
    - Adjusts the behavior of the overall output layer, fine-tuning the final model output characteristics. This parameter is crucial for the final adjustment of model outputs, allowing precise control over output features.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The merged model resulting from the integration of the two input models, embodying the combined characteristics and capabilities of both. This output is a new, enhanced model that leverages the strengths of the input models to achieve better performance.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
