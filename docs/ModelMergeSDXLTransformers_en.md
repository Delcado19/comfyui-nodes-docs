# Documentation
- Class name: ModelMergeSDXLTransformers
- Category: model_merging
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI_experiments

The ModelMergeSDXLTransformers node aims to fuse multiple models into a unified structure using a transformer-based architecture. Its purpose is to coordinate the functions of individual models, improving overall performance through a complex fusion process.

# Input types
## Required
- model1
    - The 'model1' parameter is the first model to be merged, critical to the initial structure of the combined model. It sets the foundation for the integration process and significantly influences the final model's capabilities.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- model2
    - The 'model2' parameter represents the second model to be merged, playing a key role in the final configuration of the merged model. Its integration with 'model1' is essential for achieving the desired performance improvements.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
## Optional
- input_blocks
    - The 'input_blocks' parameter is a collection of parameters defining the initial transformation blocks within the model. Each block is adjustable and contributes to the model's ability to process input data effectively.
    - Comfy dtype: COMBO[FLOAT]
    - Python dtype: Dict[str, Union[float, Dict[str, float]]]
- middle_block
    - The 'middle_block' parameter includes a set of transformation blocks located between the model's input and output sections. It plays an important role in further refining the model's processing capabilities.
    - Comfy dtype: COMBO[FLOAT]
    - Python dtype: Dict[str, Dict[str, float]]
- output_blocks
    - The 'output_blocks' parameter consists of transformation blocks that form the final stage of the model. These blocks are critical in determining the quality of the model's output and overall predictive capabilities.
    - Comfy dtype: COMBO[FLOAT]
    - Python dtype: Dict[str, Union[float, Dict[str, float]]]
- out
    - The 'out' parameter is used to adjust the model's final output layer. It is important for fine-tuning the model's predictions to meet specific requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- merged_model
    - The 'merged_model' output represents the integrated model produced by the fusion process. It encompasses the combined capabilities and learned features of the original models.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class ModelMergeSDXLTransformers(comfy_extras.nodes_model_merging.ModelMergeBlocks):

    @classmethod
    def INPUT_TYPES(s):
        arg_dict = {'model1': ('MODEL',), 'model2': ('MODEL',)}
        argument = ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})
        arg_dict['time_embed.'] = argument
        arg_dict['label_emb.'] = argument
        transformers = {4: 2, 5: 2, 7: 10, 8: 10}
        for i in range(9):
            arg_dict['input_blocks.{}.0.'.format(i)] = argument
            if i in transformers:
                arg_dict['input_blocks.{}.1.'.format(i)] = argument
                for j in range(transformers[i]):
                    arg_dict['input_blocks.{}.1.transformer_blocks.{}.'.format(i, j)] = argument
        for i in range(3):
            arg_dict['middle_block.{}.'.format(i)] = argument
            if i == 1:
                for j in range(10):
                    arg_dict['middle_block.{}.transformer_blocks.{}.'.format(i, j)] = argument
        transformers = {3: 2, 4: 2, 5: 2, 6: 10, 7: 10, 8: 10}
        for i in range(9):
            arg_dict['output_blocks.{}.0.'.format(i)] = argument
            t = 8 - i
            if t in transformers:
                arg_dict['output_blocks.{}.1.'.format(i)] = argument
                for j in range(transformers[t]):
                    arg_dict['output_blocks.{}.1.transformer_blocks.{}.'.format(i, j)] = argument
        arg_dict['out.'] = argument
        return {'required': arg_dict}
```