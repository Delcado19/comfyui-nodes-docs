# Documentation
- Class name: ModelMergeSDXLDetailedTransformers
- Category: model_merging
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI_experiments

The ModelMergeSDXLDetailedTransformers node is designed to fuse multiple models into a single, unified structure. It creates an enhanced model with improved performance by merging different model components, such as embedding layers and transformer blocks. The node emphasizes seamless integration of models to leverage their combined strengths.

# Input types
## Required
- model1
    - The 'model1' parameter is critical as it represents the first model to be merged within the node. Its integration with other models is essential for the overall functionality and performance of the merged model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- model2
    - The 'model2' parameter is another key component in the merging process, representing the second model to be combined. It is significant for achieving the intended capabilities of the final merged model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
## Optional
- time_embed.
    - The 'time_embed.' parameter allows time-based embeddings to be incorporated into the model, which may be important for tasks sensitive to the temporal aspects of data.
    - Comfy dtype: FLOAT
    - Python dtype: float
- input_blocks
    - The 'input_blocks' parameter is a complex structure containing multiple sub-parameters, each representing a different transformer block in the input section of the model. These blocks play a critical role in processing input data and are configured according to the model's requirements.
    - Comfy dtype: COMBO[FLOAT]
    - Python dtype: Dict[str, Union[float, torch.Tensor]]
- middle_block
    - The 'middle_block' parameter refers to the middle section of the model, where additional layers or operations can be applied. It plays a crucial role in the model's ability to process and transform data before passing it to the output layers.
    - Comfy dtype: COMBO[FLOAT]
    - Python dtype: Dict[str, Union[float, torch.Tensor]]
- output_blocks
    - The 'output_blocks' parameter defines the output section of the model, consisting of various transformer blocks responsible for generating final predictions or outputs based on the processed data.
    - Comfy dtype: COMBO[FLOAT]
    - Python dtype: Dict[str, Union[float, torch.Tensor]]
- out.
    - The 'out.' parameter represents the final output of the merged model, which contains the results after all processing steps are completed.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- merged_model
    - The 'merged_model' output represents the final integrated model produced by the merging process. It encompasses the combined capabilities of the input models, enhancing overall performance for downstream tasks.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI_experiments)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
