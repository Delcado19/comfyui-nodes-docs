# Documentation
- Class name: WanAnimateToVideo
- Category: model/conditioning/wan/animate
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

WanAnimateToVideo is a ComfyUI node registered by `comfy_extras.nodes_wan`. The live metadata did not provide a longer description.

# Input types
## Required
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- length
    - The length input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - The batch_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- continue_motion_max_frames
    - The continue_motion_max_frames input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- video_frame_offset
    - The amount of frames to seek in all the input videos. Used for generating longer videos by chunk. Connect to the video_frame_offset output of the previous node for extending a video.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- clip_vision_output
    - The clip_vision_output input is used by this node during execution.
    - Comfy dtype: CLIP_VISION_OUTPUT
    - Python dtype: object
- reference_image
    - The reference_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- face_video
    - The face_video input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- pose_video
    - The pose_video input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- background_video
    - The background_video input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- character_mask
    - The character_mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- continue_motion
    - The continue_motion input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- positive
    - The positive output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- latent
    - The latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- trim_latent
    - The trim_latent output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- trim_image
    - The trim_image output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- video_frame_offset
    - The video_frame_offset output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
