# Documentation
- Class name: TonemapNoiseWithRescaleCFG
- Category: custom_node_experiments
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI_experiments

The TonemapNoiseWithRescaleCFG node enhances the visual quality of generated images by applying tone mapping techniques combined with denoising strategies. It adjusts image contrast and brightness through complex rescaling operations to optimize appearance and reduce noise.

# Input types
## Required
- model
    - Model parameters are crucial because they represent the generative model the node will operate on. They form the basis for applying tone mapping and rescaling operations to produce high‑quality images.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
## Optional
- tonemap_multiplier
    - The tonemap_multiplier parameter controls the intensity of the tone mapping effect applied to the image. It is essential for fine‑tuning visual results to achieve desired contrast and brightness levels.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rescale_multiplier
    - The rescale_multiplier parameter determines the balance between rescaling and the original image values during denoising. It plays a key role in reducing noise while preserving image detail.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The output model is the modified generative model, featuring an enhanced sampler configuration function that incorporates tone mapping and denoising techniques to produce more visually appealing images.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI_experiments)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
