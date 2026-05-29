# Documentation
- Class name: PPFNBlendLatents
- Category: Power Noise Suite/Latent/Adjustements
- Output node: False
- Repo Ref: https://github.com/WASasquatch/PowerNoiseSuite

This node is designed to adjust the visual features of two sets of latent representations through a specified blend operation and ratio, enhancing the generation process by allowing fine-grained control over the final output appearance.

# Input types
## Required
- latent_a
    - The latent representation of the first input, which forms the basis of the blending process and significantly influences the initial visual features of the generated output.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- latent_b
    - The latent representation of the second input, which contributes to the blending process by introducing variation and nuance, enriching the final visual result.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- operation
    - The blend mode determines the algorithmic method used to combine the latent representations, fundamentally affecting the style and coherence of the generated image.
    - Comfy dtype: COMBO
    - Python dtype: str
- blend_ratio
    - The ratio determines the balance between the two latent representations, giving one greater influence, resulting in more pronounced visual changes in the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blend_strength
    - Strength adjusts the intensity of the blend operation, significantly impacting the detail and clarity of the final image; higher values may lead to more noticeable feature changes.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- mask
    - A mask can be applied to selectively blend certain regions of the latent representations, allowing for targeted adjustments and greater control over specific visual elements.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- set_noise_mask
    - When enabled, noise is added to the mask, introducing randomness to the blending process and potentially increasing diversity in the output.
    - Comfy dtype: COMBO
    - Python dtype: str
- normalize
    - Normalization adjusts the value range within the latent representations, ensuring the blending process is consistent and the final output falls within a predictable visual range.
    - Comfy dtype: COMBO
    - Python dtype: str
- clamp_min
    - This parameter sets the minimum value of the latent representation after blending, preventing any values from falling below a certain threshold and maintaining the desired level of detail.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clamp_max
    - Similar to clamp_min, this parameter limits the maximum value of the latent representation, ensuring the blended output does not exceed specified limits, avoiding excessive visual artifacts.
    - Comfy dtype: FLOAT
    - Python dtype: float
- latent2rgb_preview
    - When enabled, a real-time preview of the latent representation as an RGB image is generated, providing immediate visual feedback for the blending process.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- latents
    - The output latent representation has been blended according to the specified parameters, representing the adjusted and refined visual information, ready for further processing or generation.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- previews
    - If enabled, this output provides a visual preview of the blended latent representation as an RGB image, offering a tangible reference for the effectiveness of the blend operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/PowerNoiseSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
