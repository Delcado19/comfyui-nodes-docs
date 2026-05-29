# Documentation
- Class name: GetMaskCount
- Category: Video Helper Suite 🎥🅥🅗🅢/mask
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The GetMaskCount node is designed to process and calculate the number of masks present in a given video frame. It plays a critical role in video analysis by providing a straightforward method to determine the count of masks, which is essential for various applications in video processing such as object detection or segmentation tasks.

# Input types
## Required
- mask
    - The 'mask' parameter is crucial for the GetMaskCount node, as it represents the video frame containing the masks to be counted. Its importance lies in the fact that the node's functionality entirely depends on the input mask to perform its counting operation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- count
    - The 'count' output parameter represents the total number of masks identified in the input video frame. It is significant because it directly reflects the result of the node's operation, providing a quantitative measure of mask presence.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
