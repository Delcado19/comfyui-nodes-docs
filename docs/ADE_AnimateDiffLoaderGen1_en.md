# AnimateDiff Loader 🎭🅐🅓①
## Documentation
- Class name: `ADE_AnimateDiffLoaderGen1`
- Category: `Animate Diff 🎭🅐🅓/① Gen1 nodes ①`
- Output node: `False`
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git


The ADE_AnimateDiffLoaderGen1 node is designed to load and initialize the first-generation AnimateDiff model, laying the foundation for subsequent animation or image processing tasks. It encapsulates the complexity of model loading and configuration, providing a simplified interface for generating dynamic content.
## Input types
### Required
- **`model`**
    - This input specifies the AnimateDiff model to be loaded, which is central to initializing the animation or image processing process.
    - Comfy dtype: `MODEL`
    - Python dtype: `str`
- **`model_name`**
    - The model_name parameter allows selecting a specific AnimateDiff model by name, enabling more targeted initialization.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `str`
- **`beta_schedule`**
    - The beta_schedule parameter determines the beta value schedule during the diffusion process, affecting the quality and characteristics of the generated content.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `str`
### Optional
- **`context_options`**
    - Provides additional context or preference settings for model loading, allowing customized initialization.
    - Comfy dtype: `CONTEXT_OPTIONS`
    - Python dtype: `str`
- **`motion_lora`**
    - Specifies the LoRA parameters for the motion model, enabling fine-tuned control over animation dynamics.
    - Comfy dtype: `MOTION_LORA`
    - Python dtype: `str`
- **`ad_settings`**
    - Customizes the behavior of the AnimateDiff model during the loading process with animation and diffusion settings.
    - Comfy dtype: `AD_SETTINGS`
    - Python dtype: `str`
- **`ad_keyframes`**
    - Defines keyframes for the animation, guiding the model to generate dynamic content at specified time intervals.
    - Comfy dtype: `AD_KEYFRAMES`
    - Python dtype: `str`
- **`sample_settings`**
    - Settings that influence the sampling process, such as temperature and top-k filtering, to optimize the generated output.
    - Comfy dtype: `SAMPLE_SETTINGS`
    - Python dtype: `str`
- **`scale_multival`**
    - A multiplier used to scale the intensity of specific effects in the generated content.
    - Comfy dtype: `MULTIVAL`
    - Python dtype: `str`
- **`effect_multival`**
    - A multiplier used to adjust the intensity of specific effects in the generated content, providing creative control over the output.
    - Comfy dtype: `MULTIVAL`
    - Python dtype: `str`
## Output types
- **`model`**
    - Comfy dtype: `MODEL`
    - This is the loaded AnimateDiff model, ready for use in animation or image processing tasks.
    - Python dtype: `str`
## Usage tips
- Infra type: `CPU`
<!-- - Common nodes:
    - [KSampler](../../Comfy/Nodes/KSampler.md) -->

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
