# Documentation
- Class name: PointsEditor
- Category: KJNodes/experimental
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

# WORK IN PROGRESS
Do not count on this as part of your workflow yet,
probably contains lots of bugs and stability is not
guaranteed!!

## Graphical editor to create coordinates

**Shift + click** to add a positive (green) point.
**Shift + right click** to add a negative (red) point.
**Right click on a point** to delete it.
**Ctrl + click** to draw a bounding box.
**Drag bbox corners** to resize, **drag inside** to move.
**Right click on bbox** to delete it.

To add an image select the node and copy/paste or drag in the image.
Or from the bg_image input on queue (first frame of the batch).

**THE IMAGE IS SAVED TO THE NODE AND WORKFLOW METADATA**
you can clear the image from the context menu by right clicking on the canvas

# Input types
## Required
- points_store
    - The points_store input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- coordinates
    - The coordinates input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- neg_coordinates
    - The neg_coordinates input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- bbox_store
    - The bbox_store input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- bboxes
    - The bboxes input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- bbox_format
    - The bbox_format input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- normalize
    - The normalize input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- bg_image
    - The bg_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- positive_coords
    - The positive_coords output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_coords
    - The negative_coords output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- bbox
    - The bbox output is produced by this node.
    - Comfy dtype: BBOX
    - Python dtype: object
- bbox_mask
    - The bbox_mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- cropped_image
    - The cropped_image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
