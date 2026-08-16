# Documentation
- Class name: MiniMaxH3ReferenceToVideo
- Category: model/conditioning/minimax
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

<Picture i> / <Video k> / <Audio j> reference conditioning for MiniMax H3. Use the same tags when prompting.

# Input types
## Required
- clip
    - The clip input is used by this node during execution.
    - Comfy dtype: CLIP
    - Python dtype: object
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- audio_vae
    - The audio_vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- length
    - Frame count at 24 fps, (124 = ~5s, trained range is ~124-362)
    - Comfy dtype: INT
    - Python dtype: int
- ref_image_size
    - Reference image sizing. 'match' scales each ref (down only, keeping aspect) to the generation's pixel area; 'max' uses the reference pipeline's 2048px short edge for best identity fidelity. Reference tokens ride through every sampling step, so 'max' can be several times slower.
    - Comfy dtype: COMBO
    - Python dtype: object
## Optional
- ref_images
    - The ref_images input is used by this node during execution.
    - Comfy dtype: COMFY_AUTOGROW_V3
    - Python dtype: object
- ref_videos
    - The ref_videos input is used by this node during execution.
    - Comfy dtype: COMFY_AUTOGROW_V3
    - Python dtype: object
- ref_video_audios
    - The ref_video_audios input is used by this node during execution.
    - Comfy dtype: COMFY_AUTOGROW_V3
    - Python dtype: object
- ref_audios
    - The ref_audios input is used by this node during execution.
    - Comfy dtype: COMFY_AUTOGROW_V3
    - Python dtype: object

# Output types
- positive
    - The positive output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- LATENT
    - The LATENT output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
