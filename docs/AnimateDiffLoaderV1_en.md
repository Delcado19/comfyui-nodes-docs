# 🚫AnimateDiff Loader [DEPRECATED] 🎭🅐🅓
## Documentation
- Class name: AnimateDiffLoaderV1
- Category: 
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node initializes and prepares the AnimateDiff model for animation generation tasks. It abstracts the complexity of loading the model, ensuring it is correctly set up for subsequent use.

## Input types
### Required
- model
    - Specifies the AnimateDiff model to load, enabling the node to correctly initialize and prepare the model for animation tasks.
    - Comfy dtype: MODEL
    - Python dtype: str
- latents
    - Allows specifying latent vectors that may be required for initializing the model, providing a way to customize the model's initial state.
    - Comfy dtype: LATENT
    - Python dtype: str
- model_name
    - Selects a specific motion model from available options, ensuring the correct version of the AnimateDiff model is loaded based on the provided name.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- unlimited_area_hack
    - A boolean parameter that, when enabled, applies specific hacks to bypass animatable region restrictions, providing more flexibility for animation tasks.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- beta_schedule
    - Specifies the beta schedule used during model operations, affecting the behavior and performance of the AnimateDiff model.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Output types
- model
    - Comfy dtype: MODEL
    - Represents the loaded AnimateDiff model, ready for animation generation tasks.
    - Python dtype: str
- latent
    - Comfy dtype: LATENT
    - Outputs latent vectors associated with the loaded model, usable for further customization or animation processes.
    - Python dtype: str

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
