# Documentation
- Class name: MaskListSelect
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

MaskListSelect node is designed to select and manipulate specific elements from a series of masks. It operates on a tensor containing multiple masks and an index to identify the desired mask. The main function of this node is to extract a single mask from the list for further processing or analysis.

# Input types
## Required
- mask
- The 'mask' parameter is a tensor containing multiple masks. It is crucial to the node's operation because it is the primary data source for extracting the required mask. The masks within the tensor are expected to exist in a format that allows individual selection.
    - Comfy dtype: "MASK"
    - Python dtype: torch.Tensor
- index
- The 'index' parameter is an integer that specifies the position of the mask to select in the tensor. It plays a key role in determining which mask will be extracted for further use. The default is set to 0, corresponding to the first mask in the list.
    - Comfy dtype: "INT"
    - Python dtype: int

# Output types
- selected_mask
- The output of the MaskListSelect node is a single mask tensor extracted from the input mask list. This output can be used for downstream tasks such as mask application, visualization, or further analysis.
    - Comfy dtype: "MASK"
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Ryuukeisyou/comfyui_face_parsing)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
