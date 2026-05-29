# Documentation
- Class name: WAS_Blend_Latents
- Category: WAS Suite/Latent
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `latent_blend` method of the WAS_Blend_Latents class is designed to combine two latent representations using various blending operations. This method is essential for generating composite outputs from separate latent inputs, making it highly useful in diverse applications such as image synthesis and style transfer. It highlights the node's role in creating seamless blends between two latent spaces, emphasizing its flexibility and adaptability to different blending modes.

# Input types
## Required
- latent_a
    - The parameter `latent_a` represents the first latent vector to be blended. It plays a critical role in the blending process, as it forms the foundation of the composite latent output. The importance of this parameter lies in its contribution to the initial state of the blend, which significantly influences the final result.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- latent_b
    - The parameter `latent_b` is the second latent vector to be blended with `latent_a`. It is equally important in the blending process, as it introduces variation and additional features into the final blended latent representation. The interaction between `latent_a` and `latent_b` ultimately determines the outcome of the blend.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- operation
    - The parameter `operation` determines the blending mode applied when combining `latent_a` and `latent_b`. It is a key aspect of the node's functionality, as it dictates how the two latent vectors interact. The choice of operation can greatly alter the nature of the blended output, making this parameter highly influential in the overall execution of the node.
    - Comfy dtype: COMBO['add', 'multiply', 'divide', 'subtract', 'overlay', 'hard_light', 'soft_light', 'screen', 'linear_dodge', 'difference', 'exclusion', 'random']
    - Python dtype: str
## Optional
- blend
    - The parameter `blend` controls the degree of blending between the two latent vectors. It is an optional parameter that allows fine-tuning the balance between `latent_a` and `latent_b`. The `blend` parameter is important because it provides a means to adjust the intensity of the blend, offering a degree of control over the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- samples
    - The output parameter `samples` represents the blended latent representation obtained after applying the selected blending operation. It contains the combined features of the input latent vectors, providing a single output that reflects the essence of both inputs. This output is important as it is the culmination of the node's blending process, intended for further processing or analysis.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
