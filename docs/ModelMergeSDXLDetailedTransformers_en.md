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
```
class ModelMergeSDXLDetailedTransformers(comfy_extras.nodes_model_merging.ModelMergeBlocks):

    @classmethod
    def INPUT_TYPES(s):
        arg_dict = {'model1': ('MODEL',), 'model2': ('MODEL',)}
        argument = ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})
        arg_dict['time_embed.'] = argument
        arg_dict['label_emb.'] = argument
        transformers = {4: 2, 5: 2, 7: 10, 8: 10}
        transformers_args = ['norm1', 'attn1.to_q', 'attn1.to_k', 'attn1.to_v', 'attn1.to_out', 'ff.net', 'norm2', 'attn2.to_q', 'attn2.to_k', 'attn2.to_v', 'attn2.to_out', 'norm3']
        for i in range(9):
            arg_dict['input_blocks.{}.0.'.format(i)] = argument
            if i in transformers:
                arg_dict['input_blocks.{}.1.'.format(i)] = argument
                for j in range(transformers[i]):
                    for x in transformers_args:
                        arg_dict['input_blocks.{}.1.transformer_blocks.{}.{}'.format(i, j, x)] = argument
        for i in range(3):
            arg_dict['middle_block.{}.'.format(i)] = argument
            if i == 1:
                for j in range(10):
                    for x in transformers_args:
                        arg_dict['middle_block.{}.transformer_blocks.{}.{}'.format(i, j, x)] = argument
        transformers = {3: 2, 4: 2, 5: 2, 6: 10, 7: 10, 8: 10}
        for i in range(9):
            arg_dict['output_blocks.{}.0.'.format(i)] = argument
            t = 8 - i
            if t in transformers:
                arg_dict['output_blocks.{}.1.'.format(i)] = argument
                for j in range(transformers[t]):
                    for x in transformers_args:
                        arg_dict['output_blocks.{}.1.transformer_blocks.{}.{}'.format(i, j, x)] = argument
        arg_dict['out.'] = argument
        return {'required': arg_dict}
```