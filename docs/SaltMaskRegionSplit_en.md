
# Documentation
- Class name: SaltMaskRegionSplit
- Category: SALT/Masking/Filter
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltMaskRegionSplit node is designed to isolate and segment distinct regions within a given mask set, effectively splitting them into separate regions based on connectivity. This node is particularly useful in image processing and computer vision tasks, helping to identify and analyze independent regions or objects within complex images.

# Input types
## Required
- masks
    - The masks parameter is the core input of the SaltMaskRegionSplit node, representing the input mask to be segmented into different regions. This parameter is critical for determining the segmentation results, as it directly affects the isolation of different regions within the mask. By processing these input masks, the node can identify and separate independent connected regions, thereby achieving effective region segmentation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- region1
    - Represents the first region separated from the input mask. This output may correspond to the largest or most prominent connected region in the image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- region2
    - Represents the second region separated from the input mask. This output may correspond to the second largest or second most prominent connected region in the image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- region3
    - Represents the third region separated from the input mask. This output continues to provide the next independent region in order of importance or size.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- region4
    - Represents the fourth region separated from the input mask. This output provides another independent connected region, further refining the region segmentation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- region5
    - Represents the fifth region separated from the input mask. This output continues to provide more independent regions, aiding in comprehensive analysis of complex images.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- region6
    - Represents the sixth region separated from the input mask. This is the last output region, completing the segmentation of the main connected regions in the input mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
