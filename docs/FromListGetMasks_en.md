
# Documentation
- Class name: FromListGetMasks
- Category: Bmad/Lists/GetAll
- Output node: False
- Repo Ref: https://github.com/bmad4ever/ComfyUI-Bmad-Custom-Nodes

The FromListGetMasks node is designed to retrieve a specific mask from a given list of masks. It supports random access to list elements, allowing both forward and reverse indexing, enabling flexible manipulation and selection of masks from the list.

# Input types
## Required
- list
    - This is the mask list from which a specific mask will be retrieved. This parameter is essential for specifying the source list.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]

# Output types
- mask
    - The mask retrieved from the specified index in the list. This output is essential for further processing or manipulation of the selected mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/bmad4ever/ComfyUI-Bmad-Custom-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
