# Documentation
- Class name: WAS_Mask_Combine
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Mask_Combine node is designed to merge multiple mask images into a single, coherent mask. It effectively combines input masks and can be used for various applications such as image processing, graphic design, and visual effects. The node ensures the merged mask retains the essential characteristics of each individual mask, making it a versatile tool for enhancing visual content.

# Input types
## Required
- mask_a
    - The first mask to be combined with other masks. It plays a key role in determining the initial properties of the merged mask.
    - Comfy dtype: MASK
    - Python dtype: PIL.Image.Image or numpy.ndarray
- mask_b
    - The second mask to be merged with the first mask. It contributes to the overall composition of the final mask.
    - Comfy dtype: MASK
    - Python dtype: PIL.Image.Image or numpy.ndarray
## Optional
- mask_c
    - An optional additional mask that can be included in the combination process to further refine the final mask.
    - Comfy dtype: MASK
    - Python dtype: PIL.Image.Image or numpy.ndarray
- mask_d
    - Another optional mask that can be provided to the combined mask to increase its complexity and detail.
    - Comfy dtype: MASK
    - Python dtype: PIL.Image.Image or numpy.ndarray
- mask_e
    - An additional optional mask that can be used to add more layers to the combined mask, enhancing its visual elements.
    - Comfy dtype: MASK
    - Python dtype: PIL.Image.Image or numpy.ndarray
- mask_f
    - The last optional mask that can be integrated to create a detailed and complex combined mask.
    - Comfy dtype: MASK
    - Python dtype: PIL.Image.Image or numpy.ndarray

# Output types
- combined_mask
    - The final mask obtained after combining all input masks. It is a single mask that contains the visual data of the input masks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
