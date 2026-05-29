# Documentation
- Class name: PPFNImageAsLatent
- Category: latent/util
- Output node: False
- Repo Ref: https://github.com/WASasquatch/PowerNoiseSuite

This node helps convert image data into latent representations, which is useful for various image processing tasks. It emphasizes transforming visual information into a format that subsequent models or algorithms can utilize, focusing on the adaptability and efficiency of the conversion process.

# Input types
## Required
- images
    - The image parameter is critical because it provides the raw visual data needed to generate latent representations. It influences the quality and accuracy of the latent representation, determining the node's effectiveness in subsequent processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- resampling
    - The resample parameter determines the method used to resize images during conversion. It significantly affects the detail and clarity of the generated latent representation, thereby influencing the node's overall performance.
    - Comfy dtype: COMBO[nearest-exact, bilinear, area, bicubic, bislerp]
    - Python dtype: str

# Output types
- latents
    - The latent output represents the transformed image data in latent space, which is essential for further processing or analysis. It encapsulates core visual information in a compressed form, ready for use by downstream models or algorithms.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- images
    - The image output retains the original visual data, now with an additional channel to ensure compatibility. It serves as a reference for the latent representation and can be used for comparison or further visual analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/PowerNoiseSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
