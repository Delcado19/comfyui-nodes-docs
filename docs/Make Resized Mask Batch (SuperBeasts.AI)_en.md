
# Documentation
- Class name: Make Resized Mask Batch (SuperBeasts.AI)
- Category: SuperBeastsAI/Masks
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node processes and merges multiple individual masks or mask batches into a single, uniformly-sized mask batch. It resizes each mask to match the specified width and height, ensuring all masks in the batch share the same dimensions, and can optionally reorder the masks according to a specified sequence. This node helps create uniform mask batches in preparation for subsequent image processing tasks.

# Input types
## Required
- width
    - Specifies the width of the resized masks. This parameter determines the final width of each mask in the batch, ensuring they are uniformly resized.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Specifies the height of the resized masks. This parameter affects the final height of each mask in the batch, ensuring they are adjusted to the specified size.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- mask1
    - An optional individual mask to be included in the batch. The mask will be resized and potentially reordered to create a uniform batch.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask2
    - An optional individual mask to be included in the batch. The mask will be resized and potentially reordered to create a uniform batch.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask3
    - An optional individual mask to be included in the batch. The mask will be resized and potentially reordered to create a uniform batch.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask4
    - An optional individual mask to be included in the batch. The mask will be resized and potentially reordered to create a uniform batch.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask5
    - An optional individual mask to be included in the batch. The mask will be resized and potentially reordered to create a uniform batch.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask6
    - An optional individual mask to be included in the batch. The mask will be resized and potentially reordered to create a uniform batch.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask7
    - An optional individual mask to be included in the batch. The mask will be resized and potentially reordered to create a uniform batch.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask8
    - An optional individual mask to be included in the batch. The mask will be resized and potentially reordered to create a uniform batch.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask9
    - An optional individual mask to be included in the batch. The mask will be resized and potentially reordered to create a uniform batch.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask10
    - An optional individual mask to be included in the batch. The mask will be resized and potentially reordered to create a uniform batch.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask11
    - An optional individual mask to be included in the batch. The mask will be resized and potentially reordered to create a uniform batch.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask12
    - An optional individual mask to be included in the batch. The mask will be resized and potentially reordered to create a uniform batch.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- mask
    - The output is a single tensor representing the resized mask batch, ready for further processing.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
