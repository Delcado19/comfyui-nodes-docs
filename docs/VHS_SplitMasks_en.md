# Documentation
- Class name: SplitMasks
- Category: Video Helper Suite 🎥🅥🅗🅢/mask
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The SplitMasks node is designed to split a given mask tensor into two distinct groups based on a specified index. It is used to segment input data, allowing separate analysis or processing of each group. This node is essential for applications that need to manipulate video masks, such as object tracking or segmentation tasks.

# Input types
## Required
- mask
    - The parameter 'mask' is the main input of the SplitMasks node, representing the video mask to be split. It is crucial because it determines the data to be segmented. The structure and content of the mask directly affect the node's operation and the split results.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- split_index
    - The parameter 'split_index' defines the position at which the input mask will be split. It plays a key role in determining the size of each result group in the split operation. The effectiveness of the split largely depends on the appropriate selection of this index.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASK_A
    - The output 'MASK_A' represents the first group of the split mask. It is important because it allows separate processing or analysis of the initial segment of the video mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- A_count
    - The output 'A_count' provides the number of elements in the first group of the split mask, offering insight into the size of the initial segment.
    - Comfy dtype: INT
    - Python dtype: int
- MASK_B
    - The output 'MASK_B' corresponds to the second group of the split mask, allowing different processing or inspection of the subsequent segment of the video mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- B_count
    - The output 'B_count' indicates the number of elements in the second group of the split mask, highlighting the size of the later segment.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
