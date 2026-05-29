# Documentation
- Class name: PerpNeg
- Category: _for_testing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The PerpNeg node aims to manipulate the model's sampling process by introducing negative conditioning aspects. It achieves this by altering the model's denoising steps, incorporating a negative scale factor, which helps guide the generation process towards more diverse results.

# Input types
## Required
- model
    - The model parameter is crucial for the PerpNeg node, as it represents the machine learning model to be modified. The node's functionality directly relates to the capability of the provided model, affecting how negative conditioning is applied during sampling.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- empty_conditioning
    - The empty condition serves as a placeholder for the input conditions that the model will use. It plays a key role in the node's operation, as it determines how the negative scale is applied during sampling, affecting the final output.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]
## Optional
- neg_scale
    - The neg_scale parameter is used to control the strength of the negative conditioning effect. It is particularly important because it directly influences the node's ability to diversify sampling results, providing a balance between positive and negative influences.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The output model of the PerpNeg node is a modified version of the input model, now incorporating negative conditioning aspects. This modified model can then be used for sampling, potentially leading to more diverse and creative results.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
