# Documentation
- Class name: WanSCAILToVideo
- Category: model/conditioning/wan/scail
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

WanSCAILToVideo is a ComfyUI node registered by `comfy_extras.nodes_scail`. The live metadata did not provide a longer description.

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
- pose_strength
    - Strength of the pose latent.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pose_start
    - Start step of the pose conditioning.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pose_end
    - End step of the pose conditioning.
    - Comfy dtype: FLOAT
    - Python dtype: float
- video_frame_offset
    - Cumulative output frame this chunk begins at. Wire from the previous chunk's video_frame_offset output.
    - Comfy dtype: INT
    - Python dtype: int
- previous_frame_count
    - Tail frames of previous_frames to anchor. SCAIL-2 trained at 5 (81-frame chunks, 76-frame step).
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- pose_video
    - Video used for pose conditioning. Will be downscaled to half the resolution of the main video.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- pose_video_mask
    - SCAIL-2 only. Colored per-identity SAM3 mask video at the same resolution as pose_video.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- replacement_mode
    - SCAIL-2 only. False = Animation Mode (pose_video_mask should have black background). True = Replacement Mode (pose_video_mask should have white background).
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- reference_image
    - Reference image. The first image is the primary reference (composite all identities onto it). SCAIL-2: extra batch images are used as additional views (back view, close-up, occluded background), each needing a matching reference_image_mask in that identity's color.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- reference_image_mask
    - SCAIL-2 only. Colored reference mask, batch matching reference_image (first = primary reference mask, rest = identity masks for the additional reference_image).
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- clip_vision_output
    - CLIP vision features for conditioning. Model is trained with stretch resize to aspect ratio.
    - Comfy dtype: CLIP_VISION_OUTPUT
    - Python dtype: object
- previous_frames
    - SCAIL-2 only. Full decoded output of the previous chunk. Only the last previous_frame_count are used as the extension anchor.
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
    - Empty latent of the generation size.
    - Comfy dtype: LATENT
    - Python dtype: dict
- video_frame_offset
    - Adjusted offset + length. Wire into the next chunk.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
