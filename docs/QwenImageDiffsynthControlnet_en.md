# Documentation
- Class name: QwenImageDiffsynthControlnet
- Category: advanced/loaders/qwen
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Applies a ControlNet conditioning patch to a Qwen image generation model using a reference image and optional mask. The strength parameter controls how strongly the ControlNet influences the base model's behavior.

# Input types
## Required
- model
    - The base Qwen image generation model to apply the ControlNet patch to.
    - Comfy dtype: MODEL
- model_patch
    - The ControlNet model patch to merge into the base model.
    - Comfy dtype: MODEL_PATCH
- vae
    - The VAE model used for encoding and decoding images.
    - Comfy dtype: VAE
- image
    - The reference image that provides the ControlNet conditioning signal.
    - Comfy dtype: IMAGE
- strength
    - Controls the intensity of the ControlNet's influence on the base model, where higher values apply stronger conditioning.
    - Comfy dtype: FLOAT
    - Default: `1`
## Optional
- mask
    - An optional mask that restricts where the ControlNet conditioning is applied.
    - Comfy dtype: MASK

# Output types
- MODEL
    - The modified model with the ControlNet patch applied, ready for use in the generation pipeline.
    - Comfy dtype: MODEL

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
