# Documentation
- Class name: SCAIL2ColoredMask
- Category: model/conditioning/wan/scail
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Create SCAIL-2 Colored Mask is a ComfyUI node registered by `comfy_extras.nodes_scail`. The live metadata did not provide a longer description.

# Input types
## Required
- driving_track_data
    - SAM3 track of the driving pose video. Will be rendered into the pose_video_mask output.
    - Comfy dtype: SAM3_TRACK_DATA
    - Python dtype: object
- object_indices
    - Comma-separated list of person indices to include (e.g. '0,2,3'). Applied to both reference and pose video masks. Empty = all.
    - Comfy dtype: STRING
    - Python dtype: str
- sort_by
    - Order in which palette colors are assigned to the tracked objects (applied to both reference and pose video so each identity keeps the same color). Objects that appear in earlier frames always come first; within a frame, left_to_right = leftmost object (by centroid at first appearance) gets the first color, area = biggest object (by mask area at first appearance) gets the first color; none = keep SAM3's order.
    - Comfy dtype: COMBO
    - Python dtype: object
- replacement_mode
    - False = Animation Mode (pose_video_mask has black background, reference_image_mask has white background). True = Replacement Mode (pose_video_mask has white background, reference_image_mask has black background).
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- ref_track_data
    - SAM3 track of the reference image(s) (one identity per object, colored in batch order), or a plain MASK of the reference subject (rendered as a single identity).
    - Comfy dtype: SAM3_TRACK_DATA,MASK
    - Python dtype: object

# Output types
- pose_video_mask
    - The pose_video_mask output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- reference_image_mask
    - The reference_image_mask output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
