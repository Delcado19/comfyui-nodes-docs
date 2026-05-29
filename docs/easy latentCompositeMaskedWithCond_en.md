# Documentation
- Class name: latentCompositeMaskedWithCond
- Category: EasyUse/Latent
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node integrates the process of combining text inputs with latent representations to generate conditioned output. It masks and composites the latent space based on text conditions, enabling the creation of customized results.

# Input types
## Required
- pipe
    - The pipe parameter serves as the primary data and settings source for node operation. It is essential for the node's proper functioning, as it contains the necessary information required for the node to execute tasks and generate the desired output.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- text_combine
    - This parameter holds the list of text elements that are combined with latent data. It plays a significant role in shaping the final output, as it directly influences the conditioning process.
    - Comfy dtype: LIST
    - Python dtype: List[str]
- source_latent
    - The source_latent parameter is critical for node operation, as it provides the initial latent representation that will be composited and conditioned.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- source_mask
    - This parameter is essential for the masking process, as it determines how latent data is conditioned. It influences the final output by controlling which regions of the latent space are modified.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- destination_mask
    - The destination_mask parameter plays a key role in defining the regions of the latent space that will be updated. It works in conjunction with the source mask to refine the final composited latent representation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- text_combine_mode
    - This parameter determines how text is combined with existing prompts, influencing the conditioning process and the final output. It is critical for controlling how the node processes text inputs.
    - Comfy dtype: COMBO[add, replace, cover]
    - Python dtype: str
## Optional
- replace_text
    - The replace_text parameter allows modification of specific text within prompts. It is important for customizing the conditioning process without altering the overall prompt structure.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - The prompt parameter provides additional text context that can be used to further refine the conditioning process. It is beneficial for adding specific nuances to the final output.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - This parameter contains supplementary image-related information that can be leveraged to enhance the conditioning process. It is particularly useful for incorporating visual elements into the final output.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Any
- my_unique_id
    - The my_unique_id parameter is used to track and identify specific instances of node operations. It is important for maintaining process integrity and ensuring accurate results.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- pipe
    - The pipe output is an updated version of the input pipe, now containing the latest samples and modified loader settings. It is important as it represents the pipeline's progression and the integration of node processing.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- latent
    - The latent output represents the composited and conditioned latent space. It is critical as it is the direct result of node operation and serves as the foundation for further processing or analysis.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- conditioning
    - The conditioning output is a set of conditions that have been applied to the latent space. It is important for understanding how the node processes inputs and ensuring that desired features are present in the final output.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, Any]]]

# Usage tips
- Infra type: GPU

# Source code
```
class latentCompositeMaskedWithCond:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'pipe': ('PIPE_LINE',), 'text_combine': ('LIST',), 'source_latent': ('LATENT',), 'source_mask': ('MASK',), 'destination_mask': ('MASK',), 'text_combine_mode': (['add', 'replace', 'cover'], {'default': 'add'}), 'replace_text': ('STRING', {'default': ''})}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO', 'my_unique_id': 'UNIQUE_ID'}}
    OUTPUT_IS_LIST = (False, False, True)
    RETURN_TYPES = ('PIPE_LINE', 'LATENT', 'CONDITIONING')
    RETURN_NAMES = ('pipe', 'latent', 'conditioning')
    FUNCTION = 'run'
    OUTPUT_NODE = True
    CATEGORY = 'EasyUse/Latent'

    def run(self, pipe, text_combine, source_latent, source_mask, destination_mask, text_combine_mode, replace_text, prompt=None, extra_pnginfo=None, my_unique_id=None):
        positive = None
        clip = pipe['clip']
        destination_latent = pipe['samples']
        conds = []
        for text in text_combine:
            if text_combine_mode == 'cover':
                positive = text
            elif text_combine_mode == 'replace' and replace_text != '':
                positive = pipe['loader_settings']['positive'].replace(replace_text, text)
            else:
                positive = pipe['loader_settings']['positive'] + ',' + text
            positive_token_normalization = pipe['loader_settings']['positive_token_normalization']
            positive_weight_interpretation = pipe['loader_settings']['positive_weight_interpretation']
            a1111_prompt_style = pipe['loader_settings']['a1111_prompt_style']
            positive_cond = pipe['positive']
            log_node_warn('正在处理提示词编码...')
            steps = pipe['loader_settings']['steps'] if 'steps' in pipe['loader_settings'] else 1
            positive_embeddings_final = advanced_encode(clip, positive, positive_token_normalization, positive_weight_interpretation, w_max=1.0, apply_to_pooled='enable', a1111_prompt_style=a1111_prompt_style, steps=steps)
            (cond_1,) = ConditioningSetMask().append(positive_cond, source_mask, 'default', 1)
            (cond_2,) = ConditioningSetMask().append(positive_embeddings_final, destination_mask, 'default', 1)
            positive_cond = cond_1 + cond_2
            conds.append(positive_cond)
        (samples,) = LatentCompositeMasked().composite(destination_latent, source_latent, 0, 0, False)
        new_pipe = {**pipe, 'samples': samples, 'loader_settings': {**pipe['loader_settings'], 'positive': positive}}
        del pipe
        return (new_pipe, samples, conds)
```