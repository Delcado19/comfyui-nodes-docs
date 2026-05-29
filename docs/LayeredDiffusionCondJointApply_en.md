# Documentation
- Class name: LayeredDiffusionCondJoint
- Category: layer_diffuse
- Output node: False
- Repo Ref: https://github.com/huchenlei/ComfyUI-layerdiffuse.git

The LayeredDiffusionCondJoint node is designed to seamlessly integrate foreground and background elements into a composite image. It achieves this by applying layered diffusion technology, which allows the generation of composite images that preserve distinct characteristics of foreground and background components. This node is particularly suitable for applications where visual coherence and realistic blending of different image elements are critical.

# Input types
## Required
- model
    - Model parameters are crucial for the node's operation, as they define the base model used to generate the composite image. The choice of model directly impacts the quality and style of the generated image.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- image
    - Image input is essential, as it provides the visual content that the node processes and blends with other elements. The quality and resolution of the input image significantly influence the final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- config
    - Configuration string parameters are important, as they specify the settings and options that guide the diffusion process. They determine how the node will blend foreground and background elements.
    - Comfy dtype: str
    - Python dtype: str
- cond
    - Conditional inputs, when provided, allow for additional control over the diffusion process, enabling the node to generate images that conform to specific conditions or styles.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[List[torch.Tensor]]
- blended_cond
    - Blending conditional inputs are used to further refine the blending process, ensuring the final image meets the desired aesthetic and thematic requirements.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[List[torch.Tensor]]

# Output types
- model
    - The output model is the result of the diffusion process, representing the composite image that combines foreground and background elements as specified by the input parameters.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/huchenlei/ComfyUI-layerdiffuse)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
