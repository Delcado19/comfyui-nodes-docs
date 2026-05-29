# Documentation
- Class name: Glow
- Category: postprocessing/Effects
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

This node applies a glow effect to an image by adding a blurred version of the image with adjustable intensity to enhance its visual appeal. It is designed to improve the aesthetics of the image during post-processing, providing a thematic glow that can draw attention to certain features or create a dreamy atmosphere.

# Input types
## Required
- image
    - The image parameter is crucial as it is the base input for applying the glow effect. It determines the content and structure of the final output, with the glow effect being directly influenced by the image's features and quality.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- intensity
    - The intensity parameter controls the prominence of the glow effect, with higher values resulting in a more pronounced glow. It is essential for adjusting the visual impact of the effect, allowing fine-tuning of the glow intensity to achieve the desired aesthetic.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blur_radius
    - The blur radius parameter specifies the degree of blur applied to the image for the glow effect. It affects the diffusion and smoothness of the glow, with larger radii resulting in a more dispersed and extensive brightness.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- glowing_image
    - The resulting glowed image is the primary output of this node, representing the original image enhanced with the glow effect. It incorporates the combined visual modifications from the input parameters, providing a visually captivating presentation of the input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/EllangoK/ComfyUI-post-processing-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
