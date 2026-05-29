# Documentation
- Class name: WAS_Image_Ambient_Occlusion
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Ambient_Occlusion node enhances visual depth and realism by applying ambient occlusion. It intelligently computes occlusion from the input image's depth and color information, creating a more natural, immersive visual effect.

# Input types
## Required
- images
- Input image parameters are critical for the node's operation because they provide the original visual data for applying ambient occlusion. Image quality and resolution directly affect the final output.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- depth_images
- Depth images are essential for accurately determining occlusion levels within the scene. They supply depth information that complements the input image and enhances the realism of the ambient occlusion effect.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
## Optional
- strength
- The intensity parameter lets users control the strength of the ambient occlusion effect. Adjusting this parameter fine‑tunes the visual impact of occlusion, making it more or less pronounced according to creative needs.
    - Comfy dtype: FLOAT
    - Python dtype: float
- radius
- The radius parameter defines the area around each pixel used for occlusion calculation. A larger radius yields a smoother, broader occlusion effect, while a smaller radius creates a tighter, more localized effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ao_blur
- The ao_blur parameter determines the blur applied to the occlusion map. It smooths the occlusion, producing a subtler, more natural appearance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- specular_threshold
- The specular_threshold parameter sets the cutoff for specular highlights, influencing how occlusion interacts with bright areas in the image.
    - Comfy dtype: INT
    - Python dtype: int
- enable_specular_masking
- Enabling specular masking via the enable_specular_masking parameter allows selective occlusion, bypassing regions with high specular reflection.
    - Comfy dtype: COMBO[True, False]
    - Python dtype: bool
- tile_size
- The tile_size parameter optimizes ambient occlusion processing by dividing the image into smaller tiles. This enables parallel processing, especially for large images, improving performance.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- composited_images
- The composited_images output parameter represents the final rendered image with ambient occlusion applied. It combines the input image with the computed occlusion to produce a more three‑dimensional look.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ssao_images
- The ssao_images output parameter provides the standalone ambient occlusion maps calculated during processing. These can be used for further analysis or additional visual effects.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- specular_mask_images
- The specular_mask_images output parameter contains the generated masks for applying specular masking. These masks determine which image areas receive occlusion based on specular reflection values.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
