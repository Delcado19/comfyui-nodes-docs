# Documentation
- Class name: MergeMasks
- Category: Video Helper Suite 🎥🅥🅗🅢/mask
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The MergeMasks node aims to merge two input masks into a single mask. It intelligently handles size differences between masks by using a specified merge strategy and scaling method, ensuring seamless integration of the masks. This node is particularly useful in scenarios where multiple mask layers need to be combined for further processing or visualization.

# Input types
## Required
- mask_A
    - The first mask to merge, which is a key component of the final combined mask. It determines the initial structure into which the second mask will be integrated.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask_B
    - The second mask to merge, which will be aligned and integrated with the first mask according to the merge strategy.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- merge_strategy
    - Defines how the two masks should be merged, whether by matching the size of one mask to the other, or by choosing the smaller or larger of the two.
    - Comfy dtype: str
    - Python dtype: str
- scale_method
    - Specifies the method used to scale the masks to match sizes, which is crucial for the merge process.
    - Comfy dtype: str
    - Python dtype: str
- crop
    - Indicates the cropping technique to apply during scaling to ensure the masks align correctly after merging.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- MASK
    - The output is the combined mask resulting from the merge process, representing the integrated structure of the input masks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- count
    - Provides the count of masks that have been merged, offering insight into the number of layers integrated in the final mask.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
