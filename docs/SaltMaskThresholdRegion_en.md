
# Documentation
- Class name: SaltMaskThresholdRegion
- Category: SALT/Masking/Filter
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node applies a threshold filter to the mask region, segmenting them according to specified black and white thresholds. It is designed to isolate and enhance regions within the mask, making it easier to distinguish them based on varying intensity levels.

# Input types
## Required
- masks
    - The input mask to process. These masks are segmented based on the provided thresholds, which determine the intensity levels that define region boundaries.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]
- black_threshold
    - Lower bound of pixel intensity. Pixels below this value are set to black, aiding the segmentation of darker areas in the mask.
    - Comfy dtype: INT
    - Python dtype: int
- white_threshold
    - Upper bound of pixel intensity. Pixels above this value are set to white, aiding the segmentation of brighter areas in the mask.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
    - The output mask after applying the threshold filter, with regions segmented based on the specified black and white thresholds.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
