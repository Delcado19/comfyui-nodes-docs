# Documentation
- Class name: layerDiffusionSettingsADDTL
- Category: EasyUse/PreSampling
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This type of node is responsible for setting additional text prompts for the layer diffusion model to optimize the input conditions for the generation process.

# Input types
## Required
- pipe
    - The 'pipe' parameter is the foundation for node operations, providing important context and data required for the diffusion process.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict
- foreground_prompt
    - This parameter allows users to input foreground prompts, which is crucial for guiding the model to generate content that aligns with the desired focus.
    - Comfy dtype: STRING
    - Python dtype: str
- background_prompt
    - By providing background prompts, users can establish context or set the scene for the model, ensuring the generated content aligns with the expected background.
    - Comfy dtype: STRING
    - Python dtype: str
- blended_prompt
    - The blend prompt parameter allows combining multiple prompts to create more nuanced and detailed outputs, thereby enhancing the richness of the generated content.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- optional_fg_cond
    - This optional parameter provides additional conditioning input for the foreground, offering flexibility to customize the model's generation according to user-specific requirements.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- optional_bg_cond
    - Similarly, this optional parameter extends the conditioning capability for the background, allowing for more complex and contextual generation.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- optional_blended_cond
    - This parameter provides a method for blending multiple conditioning inputs, enabling more harmonious and comprehensive generation results.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any

# Output types
- pipe
    - The updated 'pipe' output contains new layer diffusion conditions, which is crucial for subsequent steps in the pipeline.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
