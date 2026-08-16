# Documentation
- Class name: ByteDanceSeedreamLayerSeparationNode
- Category: partner/image/ByteDance
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Decompose an image into a background plate plus up to 16 repositionable transparent layers, each with stacking order, bounding box, name and description.

# Input types
## Required
- image
    - The image to separate. Exactly one image, at least 512x512 pixels, aspect ratio between 1:16 and 16:1. Inputs larger than about 4MP are downscaled before upload.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- prompt
    - How to separate the image. Leave empty to auto-detect and separate all major elements. Describe elements in natural language to control the separation, or target exact regions with <bbox>left top right bottom</bbox> tags (0-1000 per-mille coordinates).
    - Comfy dtype: STRING
    - Python dtype: str
- size
    - Output resolution level. 'auto' follows the input image size (clamped to the 1K-2K range).
    - Comfy dtype: COMBO
    - Python dtype: object
- seed
    - Seed to use for generation.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- prompt_optimization
    - Prompt-optimization mode: 'standard' gives higher quality, 'fast' shorter generation time.
    - Comfy dtype: COMBO
    - Python dtype: object
- watermark
    - Whether to add an "AI generated" watermark to the images.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- crop_layers
    - Geometry of the layers/masks batch outputs (layer_stack is unaffected and always tight). Full canvas: each layer on a base-sized canvas at its bounding-box position - recompose directly with ImageCompositeMasked. Minimal size: each layer cropped to its bounding box (padded to the largest layer for batching) - much smaller tensors; rebuild placement with Layers From Bounding Boxes using the bboxes output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Hidden
- auth_token_comfy_org
    - The auth_token_comfy_org input is used by this node during execution.
    - Comfy dtype: AUTH_TOKEN_COMFY_ORG
    - Python dtype: object
- api_key_comfy_org
    - The api_key_comfy_org input is used by this node during execution.
    - Comfy dtype: API_KEY_COMFY_ORG
    - Python dtype: object
- unique_id
    - The unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object
- comfy_usage_source
    - The comfy_usage_source input is used by this node during execution.
    - Comfy dtype: COMFY_USAGE_SOURCE
    - Python dtype: object

# Output types
- base_image
    - The base image (background plate) the layers stack onto.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- base_mask
    - Transparency of the base image (1 = transparent, LoadImage convention); currently always fully opaque.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- layers
    - Transparent layers ordered bottom to top. Full canvas mode: placed on a black base-sized canvas at their bounding-box position. Minimal size mode: cropped to their bounding box, anchored top-left, padded to the largest layer.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- masks
    - Per-layer transparency, index-aligned with the layers batch (1 = transparent, LoadImage convention). For ImageCompositeMasked-style compositing, add InvertMask first.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- bboxes
    - One placement box per layer, index-aligned with the layers batch (feed both, plus masks, into Layers From Bounding Boxes to rebuild per-layer placement): {x, y, width, height, metadata: {name, desc, z_index, native_size, content_rect, flags}}. content_rect = [left, top, width, height] is the layer's content region within its own frame; it lands on the canvas at the box position plus that offset.
    - Comfy dtype: BOUNDING_BOX
    - Python dtype: object
- layer_stack
    - Ready-to-edit layer document for Create Layered Image: the base plate plus each element as its own named, tight-cropped layer at its true position and stacking order. Connect directly, or extend with Add Layer.
    - Comfy dtype: LAYERS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
