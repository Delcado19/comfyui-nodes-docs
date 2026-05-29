
# Documentation
- Class name: Inference_Core_ModelMergeSDXLDetailedTransformers
- Category: advanced/model_merging
- Output node: False

This node is specifically designed to merge two SDXL transformer models, providing detailed configuration options to adjust transformer blocks within the model architecture. It allows precise tuning of transformer parameters across input, middle, and output blocks, enabling enhanced model integration and performance optimization.

# Input types
## Required
- model1
    - One of the models to be merged, serving as the primary component of the merging process.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- model2
    - The second model to be merged, serving as the secondary component of the merging process.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- time_embed.
    - Parameter for adjusting time embedding layer weights during the merge, affecting the temporal dynamics of the merged model.
    - Comfy dtype: FLOAT
    - Python dtype: float
- label_emb.
    - Parameter for adjusting label embedding layer weights during the merge, affecting how labels are represented in the merged model.
    - Comfy dtype: FLOAT
    - Python dtype: float
- input_blocks.i.j.
    - Adjustment parameters for input blocks.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- input_blocks.i.j.transformer_blocks.k.norm1
    - Adjustment parameters for the first normalization layer of transformer blocks in input blocks.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- input_blocks.i.j.transformer_blocks.k.attn1.to_q
    - Query transformation adjustment parameters for the first attention mechanism of transformer blocks in input blocks.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- input_blocks.i.j.transformer_blocks.k.attn1.to_k
    - Key transformation adjustment parameters for the first attention mechanism of transformer blocks in input blocks.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- input_blocks.i.j.transformer_blocks.k.attn1.to_v
    - Value transformation adjustment parameters for the first attention mechanism of transformer blocks in input blocks.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- input_blocks.i.j.transformer_blocks.k.attn1.to_out
    - Output transformation adjustment parameters for the first attention mechanism of transformer blocks in input blocks.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- input_blocks.i.j.transformer_blocks.k.ff.net
    - Adjustment parameters for the feedforward network of transformer blocks in input blocks.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- input_blocks.i.j.transformer_blocks.k.norm2
    - Adjustment parameters for the second normalization layer of transformer blocks in input blocks.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- input_blocks.i.j.transformer_blocks.k.attn2.to_q
    - Adjusts query transformation weights for the second attention mechanism of transformer blocks in input blocks. Indices i, j, and k represent the input block number, sub-block number within the input block (if applicable), and transformer block number, respectively, enabling precise control over specific components of the model architecture.
    - Comfy dtype: FLOAT
    - Python dtype: float
- input_blocks.i.j.transformer_blocks.k.attn2.to_k
    - Key transformation adjustment parameters for the second attention mechanism of transformer blocks in input blocks.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- input_blocks.i.j.transformer_blocks.k.attn2.to_v
    - Value transformation adjustment parameters for the second attention mechanism of transformer blocks in input blocks.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- input_blocks.i.j.transformer_blocks.k.attn2.to_out
    - Output transformation adjustment parameters for the second attention mechanism of transformer blocks in input blocks.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- input_blocks.i.j.transformer_blocks.k.norm3
    - Adjustment parameters for the third normalization layer of transformer blocks in input blocks.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- middle_block.i.
    - Adjustment parameters for middle blocks.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- middle_block.i.transformer_blocks.j.norm1
    - Adjustment parameters for the first normalization layer of transformer blocks in middle blocks.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- middle_block.i.transformer_blocks.j.attn1.to_q
    - Query transformation adjustment parameters for the first attention mechanism of transformer blocks in middle blocks.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- middle_block.i.transformer_blocks.j.attn1.to_k
    - Key transformation adjustment parameters for the first attention mechanism of transformer blocks in middle blocks.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- middle_block.i.transformer_blocks.j.attn1.to_v
    - Value transformation adjustment parameters for the first attention mechanism of transformer blocks in middle blocks.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- middle_block.i.transformer_blocks.j.attn1.to_out
    - Output transformation adjustment parameters for the first attention mechanism of transformer blocks in middle blocks.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- middle_block.i.transformer_blocks.j.ff.net
    - Adjustment parameters for the feed-forward network of the transformer block in the middle block.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- middle_block.i.transformer_blocks.j.norm2
    - Adjustment parameters for the second normalization layer of the transformer block in the middle block.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- middle_block.i.transformer_blocks.j.attn2.to_q
    - Adjustment parameters for the query transformation of the second attention mechanism of the transformer block in the middle block.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- middle_block.i.transformer_blocks.j.attn2.to_k
    - Adjustment parameters for the key transformation of the second attention mechanism of the transformer block in the middle block.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- middle_block.i.transformer_blocks.j.attn2.to_v
    - Adjustment parameters for the value transformation of the second attention mechanism of the transformer block in the middle block.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- middle_block.i.transformer_blocks.j.attn2.to_out
    - Adjustment parameters for the output transformation of the second attention mechanism of the transformer block in the middle block.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- middle_block.i.transformer_blocks.j.norm3
    - Adjustment parameters for the third normalization layer of the transformer block in the middle block.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- output_blocks.i.j.
    - Adjustment parameters for the output block.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- output_blocks.i.j.transformer_blocks.k.norm1
    - Adjustment parameters for the first normalization layer of the transformer block in the output block.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- output_blocks.i.j.transformer_blocks.k.attn1.to_q
    - Adjustment parameters for the query transformation of the first attention mechanism of the transformer block in the output block.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- output_blocks.i.j.transformer_blocks.k.attn1.to_k
    - Adjustment parameters for the key transformation of the first attention mechanism of the transformer block in the output block.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- output_blocks.i.j.transformer_blocks.k.attn1.to_v
    - Adjustment parameters for the value transformation of the first attention mechanism of the transformer block in the output block.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- output_blocks.i.j.transformer_blocks.k.attn1.to_out
    - Adjustment parameters for the output transformation of the first attention mechanism of the transformer block in the output block.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- output_blocks.i.j.transformer_blocks.k.ff.net
    - Adjustment parameters for the feed-forward network of the transformer block in the output block.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- output_blocks.i.j.transformer_blocks.k.norm2
    - Adjustment parameters for the second normalization layer of the transformer block in the output block.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- output_blocks.i.j.transformer_blocks.k.attn2.to_q
    - Adjustment parameters for the query transformation of the second attention mechanism of the transformer block in the output block.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- output_blocks.i.j.transformer_blocks.k.attn2.to_k
    - Adjustment parameters for the key transformation of the second attention mechanism of the transformer block in the output block.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- output_blocks.i.j.transformer_blocks.k.attn2.to_v
    - Adjustment parameters for the value transformation of the second attention mechanism of the transformer block in the output block.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- output_blocks.i.j.transformer_blocks.k.attn2.to_out
    - Adjustment parameters for the output transformation of the second attention mechanism of the transformer block in the output block.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- output_blocks.i.j.transformer_blocks.k.norm3
    - Adjustment parameters for the third normalization layer of the transformer block in the output block.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- out.
    - Adjustment parameters for the output layer.
    - Comfy dtype: FLOAT
    - Python dtype: unknown

# Output types
- model
    - The fused model optimized through detailed transformer parameter tuning to improve performance and integration effect.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ModelMergeSDXLDetailedTransformers(comfy_extras.nodes_model_merging.ModelMergeBlocks):
    @classmethod
    def INPUT_TYPES(s):
        arg_dict = { "model1": ("MODEL",),
                              "model2": ("MODEL",)}

        argument = ("FLOAT", {"default": 1.0, "min": 0.0, "max": 1.0, "step": 0.01})

        arg_dict["time_embed."] = argument
        arg_dict["label_emb."] = argument

        transformers = {4: 2, 5:2, 7:10, 8:10}
        transformers_args = ["norm1", "attn1.to_q", "attn1.to_k", "attn1.to_v", "attn1.to_out", "ff.net", "norm2", "attn2.to_q", "attn2.to_k", "attn2.to_v", "attn2.to_out", "norm3"]

        for i in range(9):
            arg_dict["input_blocks.{}.0.".format(i)] = argument
            if i in transformers:
                arg_dict["input_blocks.{}.1.".format(i)] = argument
                for j in range(transformers[i]):
                    for x in transformers_args:
                        arg_dict["input_blocks.{}.1.transformer_blocks.{}.{}".format(i, j, x)] = argument

        for i in range(3):
            arg_dict["middle_block.{}.".format(i)] = argument
            if i == 1:
                for j in range(10):
                    for x in transformers_args:
                        arg_dict["middle_block.{}.transformer_blocks.{}.{}".format(i, j, x)] = argument

        transformers = {3:2, 4: 2, 5:2, 6:10, 7:10, 8:10}
        for i in range(9):
            arg_dict["output_blocks.{}.0.".format(i)] = argument
            t = 8 - i
            if t in transformers:
                arg_dict["output_blocks.{}.1.".format(i)] = argument
                for j in range(transformers[t]):
                    for x in transformers_args:
                        arg_dict["output_blocks.{}.1.transformer_blocks.{}.{}".format(i, j, x)] = argument

        arg_dict["out."] = argument

        return {"required": arg_dict}

```
