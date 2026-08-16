# Documentation
- Class name: LTXVPreprocessMasks
- Category: Lightricks/mask_operations
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Preprocess masks to be used for masking latents in the LTXVideo model.

# Input types
## Required
- masks
    - The masks input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- invert_input_masks
    - Invert the input masks before processing.Useful for masking vs unmasking operations.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- ignore_first_mask
    - Zero out the first mask, typically used whenit corresponds to the conditioning frame.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- pooling_method
    - Method to combine temporal masks. Max preserves strongest values, mean averages them, min takes weakest values.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- grow_mask
    - Pixels to grow (positive) or shrink (negative) the mask.Uses morphological operations.
    - Comfy dtype: INT
    - Python dtype: int
- tapered_corners
    - Use tapered corners in morphological operations for smoother mask edges.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- clamp_min
    - Minimum value to clamp masks to, ensuring minimum opacity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clamp_max
    - Maximum value to clamp masks to.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MASK
    - The MASK output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
