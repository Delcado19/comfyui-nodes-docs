
# Documentation
- Class name: Inference_Core_ModelMergeSDXLTransformers
- Category: advanced/model_merging
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is specifically designed to merge two SDXL model architectures by blending their transformer blocks to create a hybrid model, leveraging the strengths of both input models. It provides fine-grained control over the merging process through adjustable parameters for each transformer block component.

# Input types
## Required
- model1
    - The first SDXL model to be merged. It serves as one of the primary sources for the merging process, contributing its transformer blocks to the hybrid model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- model2
    - The second SDXL model to be merged. It supplements the first model by providing additional transformer blocks, thereby enriching the capabilities of the hybrid model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- time_embed.
    - Adjustable parameter for the time embedding layer, allowing customized integration of temporal information into the merged model.
    - Comfy dtype: FLOAT
    - Python dtype: Dict[str, float]
- label_emb.
    - Parameter for fine-tuning the label embedding layer, facilitating the skillful integration of label information into the hybrid model.
    - Comfy dtype: FLOAT
    - Python dtype: Dict[str, float]
- input_blocks.i.j.
    - Adjustable parameters for transformer blocks in the model input section, allowing customization of the hybrid model's features. Indices i and j represent block and sub-block levels respectively, providing a hierarchical control mechanism.
    - Comfy dtype: FLOAT
    - Python dtype: Dict[str, float]
- input_blocks.i.j.transformer_blocks.k.
    - Parameters for fine-tuning individual transformer blocks within sub-blocks of the input section, offering precise control over transformer feature integration. Indices i, j, and k represent block, sub-block, and transformer block levels respectively.
    - Comfy dtype: FLOAT
    - Python dtype: Dict[str, float]
- middle_block.i.
    - Parameters controlling transformer blocks in the middle section of the model, enabling balanced integration of features from both models. Index i represents the level within the middle block structure.
    - Comfy dtype: FLOAT
    - Python dtype: Dict[str, float]
- middle_block.i.transformer_blocks.j.
    - Parameters for adjusting transformer blocks within specific levels of the middle section, allowing detailed customization of the merging process. Indices i and j represent middle block level and transformer block level respectively.
    - Comfy dtype: FLOAT
    - Python dtype: Dict[str, float]
- output_blocks.i.j.
    - Adjustable parameters for transformer blocks in the model output section, enabling precise control over the final model output features. Indices i and j represent block and sub-block levels within the output structure.
    - Comfy dtype: FLOAT
    - Python dtype: Dict[str, float]
- output_blocks.i.j.transformer_blocks.k.
    - Parameters for fine-tuning individual transformer blocks within sub-blocks of the output section, providing detailed control over output features. Indices i, j, and k represent block, sub-block, and transformer block levels respectively.
    - Comfy dtype: FLOAT
    - Python dtype: Dict[str, float]
- out.
    - Parameter controlling final output layer adjustments, enabling fine-tuning of the overall output characteristics of the merged model.
    - Comfy dtype: FLOAT
    - Python dtype: Dict[str, float]

# Output types
- model
    - The resulting model obtained after merging the two input models according to the specified parameters, containing elements from both input models.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
