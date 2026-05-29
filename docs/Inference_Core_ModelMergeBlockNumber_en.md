
# Documentation
- Class name: Inference_Core_ModelMergeBlockNumber
- Category: advanced/model_merging
- Output node: False

The Inference_Core_ModelMergeBlockNumber node is used to merge two models by mixing model components according to specified blend ratios. It allows fine‑grained control over how different parts of the models are combined, helping create a hybrid model that leverages the strengths of both input models.

# Input types
## Required
- model1
    - The first model to merge. It serves as the base model, and elements from the second model will be blended into it.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- model2
    - The second model to merge. Its elements will be blended into the first model according to the specified ratios.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- time_embed.
    - The blend ratio for the model's time‑embedding component.
    - Comfy dtype: FLOAT
    - Python dtype: float
- label_emb.
    - The blend ratio for the model's label‑embedding component.
    - Comfy dtype: FLOAT
    - Python dtype: float
- input_blocks.i.
    - The blend ratio for the model's i‑th input block. Index i ranges from 0 to 11.
    - Comfy dtype: FLOAT
    - Python dtype: float
- middle_block.i.
    - The blend ratio for the model's i‑th middle block. Index i ranges from 0 to 2.
    - Comfy dtype: FLOAT
    - Python dtype: float
- output_blocks.i.
    - The blend ratio for the model's i‑th output block. Index i ranges from 0 to 11.
    - Comfy dtype: FLOAT
    - Python dtype: float
- out.
    - The blend ratio for the model's output component.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The merged model, a hybrid of the two input models whose components are blended according to the specified ratios.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ModelMergeBlockNumber(comfy_extras.nodes_model_merging.ModelMergeBlocks):
    @classmethod
    def INPUT_TYPES(s):
        arg_dict = { "model1": ("MODEL",),
                              "model2": ("MODEL",)}

        argument = ("FLOAT", {"default": 1.0, "min": 0.0, "max": 1.0, "step": 0.01})

        arg_dict["time_embed."] = argument
        arg_dict["label_emb."] = argument

        for i in range(12):
            arg_dict["input_blocks.{}.".format(i)] = argument

        for i in range(3):
            arg_dict["middle_block.{}.".format(i)] = argument

        for i in range(12):
            arg_dict["output_blocks.{}.".format(i)] = argument

        arg_dict["out."] = argument

        return {"required": arg_dict}

```
