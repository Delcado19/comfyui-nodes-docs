# Documentation
- Class name: Vignette
- Category: postprocessing/Effects
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

This node applies a vignette effect to the image, enhancing visual focus toward the center by gradually fading the edges. It adjusts the intensity of the vignette based on user-defined parameters, allowing fine-grained control over the aesthetic impact.

# Input types
## Required
- image
    - The image parameter is necessary as it is the primary input the node operates on. It determines the object to which the vignette effect will be applied, directly influencing the output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- a
    - Parameter 'a' controls the intensity of the vignette effect. It is essential for customizing the aesthetic result according to user preference, enabling a range of visual styles from subtle to dramatic.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output_image
    - The output image is the result of applying the vignette effect. It reflects the input image with the applied aesthetic adjustments, representing the primary output of the node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/EllangoK/ComfyUI-post-processing-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
