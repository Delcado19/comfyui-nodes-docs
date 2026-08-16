# Documentation
- Class name: WanAnimate2ToVideo
- Category: model/conditioning/wan/animate
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Animate a character in a reference image using a video, effectively replicating the facial animation, body motion and hands gesture from the video.

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
    - Output video width in pixels.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Output video height in pixels.
    - Comfy dtype: INT
    - Python dtype: int
- length
    - Number of frames to generate.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - Number of videos to generate simultaneously.
    - Comfy dtype: INT
    - Python dtype: int
- video_frame_offset
    - Frames to seek into the pose video. Connect to the video_frame_offset output of the previous node when extending.
    - Comfy dtype: INT
    - Python dtype: int
- pose_strength
    - Scales the pose video's influence on the motion. 1.0 is the trained behavior; below weakens adherence, above amplifies. 0.0 mutes it but does not fully remove it.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pose_start_percent
    - Sampling percent at which the pose influence starts. Outside the window the pose branch is skipped entirely, which also speeds those steps up.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pose_end_percent
    - Sampling percent at which the pose influence ends. Motion is mostly established early, so e.g. 0.7 can loosen fine detail while keeping the choreography.
    - Comfy dtype: FLOAT
    - Python dtype: float
- reference_image_strength
    - Scales how strongly generated frames attend to the reference image's latent frame. Below 1.0 loosens identity/appearance adherence (e.g. to let the prompt restyle), above tightens it against drift.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- reference_image
    - The character to animate.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- pose_video
    - The video whose motion is transferred to the reference character.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- clip_vision_output
    - CLIP vision of the reference image.
    - Comfy dtype: CLIP_VISION_OUTPUT
    - Python dtype: object
- positive_pose
    - Prompt for the pose-video branch, describing the motion rather than the character. Defaults to positive. Used for both the cond and uncond passes.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- clip_vision_output_pose
    - CLIP vision of the pose video's first frame. Defaults to clip_vision_output.
    - Comfy dtype: CLIP_VISION_OUTPUT
    - Python dtype: object
- continue_motion
    - Previous motion sequence to continue from for temporal consistency.
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
    - Number of latent frames that should be trimmed before decoding.
    - Comfy dtype: INT
    - Python dtype: int
- trim_image
    - Number of overlapping image frames when extending a video.
    - Comfy dtype: INT
    - Python dtype: int
- video_frame_offset
    - Frames to seek into the pose video.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
