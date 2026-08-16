# Documentation
- Class name: LayersFromBoundingBoxes
- Category: image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Turn an image batch plus its bounding boxes into a layer stack, one layer per frame, each placed by its own box. Use this when a node emits layers as a batch - a batch carries a single placement for every frame, so the individual positions are otherwise lost.

# Input types
## Required
- image
    - Image batch; each frame becomes one layer.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- bboxes
    - Placement boxes, index-aligned with the image batch. Accepts bounding boxes (x, y, width, height), normalized elements (with a 'bbox' - these need canvas_width/canvas_height to resolve to pixels), or a JSON string of either. Frames without a matching box are placed at the origin. A box's width/height scales the layer to fit it. metadata.name (or desc) and metadata.z_index are used when present, and metadata.content_rect (frame-relative) crops the frame to its real content.
    - Comfy dtype: BOUNDING_BOX,ARRAY,STRING
    - Python dtype: object
## Optional
- mask
    - Per-frame transparency, index-aligned with the image batch (1 = transparent, LoadImage convention).
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- layers
    - Layer stack to append to. Leave unconnected to start a new stack.
    - Comfy dtype: LAYERS
    - Python dtype: object
- crop_to_content
    - Crop each frame to metadata.content_rect where present and place the content at the box position plus the rect offset. Leave on for batches whose frames are padded - it keeps only the real content at its true spot.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- canvas_width
    - Document canvas width. 0 derives it from the placed layers.
    - Comfy dtype: INT
    - Python dtype: int
- canvas_height
    - Document canvas height. 0 derives it from the placed layers.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- LAYERS
    - The layer stack, ready for Create Layered Image.
    - Comfy dtype: LAYERS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
