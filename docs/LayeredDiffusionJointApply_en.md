# Documentation
- Class name: LayeredDiffusionJoint
- Category: layer_diffuse
- Output node: False
- Repo Ref: https://github.com/huchenlei/ComfyUI-layerdiffuse.git

The LayeredDiffusionJoint node is designed to perform single-batch inference, generating foreground, background, and mixed images. It can handle complex image generation tasks by applying layered diffusion techniques, enabling the creation of images with intricate details and layered effects. This node is particularly suitable for applications requiring simultaneous generation of multiple image components, streamlining the process and enhancing the overall efficiency of the image synthesis workflow.

# Input types
## Required
- model
    - The model parameter is crucial for node operation, as it defines the underlying model used for the diffusion process. This is a key component that directly impacts the node's execution and the quality of generated images.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- config
    - The configuration string is a required parameter that specifies the settings for the layered diffusion process. It plays a critical role in determining how the node applies diffusion techniques to generate the desired images.
    - Comfy dtype: str
    - Python dtype: str
- fg_cond
    - The foreground condition parameter is optional, providing specific guidance for generating the foreground portion of the image. It allows fine-tuning of the diffusion process to meet specific foreground requirements.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[List[List[torch.Tensor]]]
- bg_cond
    - The background condition parameter is optional, guiding the generation of the image background. It enables the node to create backgrounds consistent with the desired visual effects.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[List[List[torch.Tensor]]]
- blended_cond
    - The mixed condition parameter is optional, defining the blending characteristics of the generated image. It helps achieve a harmonious blend of foreground and background elements within the image.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[List[List[torch.Tensor]]]

# Output types
- model
    - The output model represents a patched version of the input model, now equipped with layered diffusion capabilities. This model is prepared to generate images with layered effects, offering a higher degree of control and customization for the image synthesis process.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/huchenlei/ComfyUI-layerdiffuse)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
