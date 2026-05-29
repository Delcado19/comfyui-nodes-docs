# Documentation
- Class name: ModelSamplerTonemapNoiseTest
- Category: custom_node_experiments
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI_experiments

The `patch` method of the `ModelSamplerTonemapNoiseTest` node aims to enhance the sampling process of a given model by applying tone mapping and noise reduction techniques. It works by adjusting the noise prediction in the context of a Reinhard tone mapping operation, with the goal of improving the visual quality and consistency of the sampled output.

# Input types
## Required
- model
    - The `model` parameter is critical, as it represents the machine learning model to be sampled. This is the primary input on which tone mapping and noise reduction will be applied.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
## Optional
- multiplier
    - The `multiplier` parameter is used to scale the noise reduction effect. It allows fine-tuning the intensity of the noise filtering process based on the specific needs of the task at hand.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The output `model` is a modified version of the input model, now equipped with an enhanced sampling function that incorporates tone mapping and noise reduction techniques to improve output quality.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI_experiments)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
