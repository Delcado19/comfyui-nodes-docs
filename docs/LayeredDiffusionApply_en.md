# Documentation
- Class name: LayeredDiffusionFG
- Category: layer_diffuse
- Output node: False
- Repo Ref: https://github.com/huchenlei/ComfyUI-layerdiffuse.git

The LayeredDiffusionFG class aims to enhance image generation tasks by applying a layered diffusion process, effectively generating foregrounds with transparent backgrounds. This node integrates with various models to achieve the desired effects, focusing on the seamless integration of layers to produce high-quality visual outputs.

# Input types
## Required
- model
    - The model parameter is crucial for the LayeredDiffusionFG node as it defines the underlying architecture and parameters for the diffusion process. It determines the quality and characteristics of the generated image.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_base.BaseModel
- config
    - The configuration parameter is essential for specifying the configuration string corresponding to the selected model. It ensures that the correct settings are applied during the diffusion process, affecting the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- weight
    - The weight parameter influences the intensity of the diffusion effect on the generated image. It is a key factor in controlling the trade-off between foreground detail and background transparency.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output
    - The output of the LayeredDiffusionFG node is a modified model that has been patched with diffusion layers. This model is ready to generate images with the desired foreground and transparent background characteristics.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_base.BaseModel

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/huchenlei/ComfyUI-layerdiffuse)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
