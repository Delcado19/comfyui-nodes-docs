# Documentation
- Class name: CreateBoundingBoxes
- Category: utilities
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Draw bounding boxes in a canvas. Outputs Ideogram prompt elements, pixel-space bounding boxes, and a preview image.

# Input types
## Required
- width
    - Width of the canvas and the pixel grid for the bounding boxes.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height of the canvas and the pixel grid for the bounding boxes.
    - Comfy dtype: INT
    - Python dtype: int
- editor_state
    - Draw bounding boxes and set each box type, text, description, color palette. Start with background element first and foreground last.
    - Comfy dtype: BOUNDING_BOXES
    - Python dtype: object
## Optional
- background
    - Optional image used as background in the canvas and preview.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- bboxes
    - Bounding boxes, elements, or a JSON string to initialize the canvas. A new upstream value initializes the canvas; edits made on the canvas take priority and are kept until the upstream value changes again.
    - Comfy dtype: BOUNDING_BOX,ARRAY,STRING
    - Python dtype: object
- last_incoming
    - Internal state managed by the canvas: the upstream bboxes value that last initialized it. Leave empty to re-initialize the canvas from the bboxes input on the next run.
    - Comfy dtype: BOUNDING_BOXES
    - Python dtype: object
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
- preview
    - The preview output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- bboxes
    - The bboxes output is produced by this node.
    - Comfy dtype: BOUNDING_BOX
    - Python dtype: object
- elements
    - The elements output is produced by this node.
    - Comfy dtype: ARRAY
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
