# Documentation
- Class name: WanVideoLongCatAvatarExtendEmbeds
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- prev_latents
    - Full previous latents to be used to continue generation, continuation frames are selected based on 'overlap' parameter
    - Comfy dtype: LATENT
    - Python dtype: dict
- audio_embeds
    - Full length audio embeddings
    - Comfy dtype: MULTITALK_EMBEDS
    - Python dtype: object
- num_frames
    - Number of new frames to generate
    - Comfy dtype: INT
    - Python dtype: int
- overlap
    - Number of overlapping frames from previous latents for video continuation, set to 0 for T2V
    - Comfy dtype: INT
    - Python dtype: int
- frames_processed
    - Number of frames already processed in the video, used to select audio features
    - Comfy dtype: INT
    - Python dtype: int
- if_not_enough_audio
    - What to do if there are not enough frames in pose_images for the window
    - Comfy dtype: COMBO
    - Python dtype: object
- ref_frame_index
    - Values between 0 - 24 ensures better consistency, while selecting other ranges (e.g., -10 or 30) helps reduce repeated actions
    - Comfy dtype: INT
    - Python dtype: int
- ref_mask_frame_range
    - Larger range can further help mitigate repeated actions, but excessively large values may introduce artifacts
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- ref_latent
    - Reference latent used for consistency, generally should be either the init image, or first latent from first generation
    - Comfy dtype: LATENT
    - Python dtype: dict
- samples
    - For the sampler 'samples' input, used for slicing samples per window for vid2vid
    - Comfy dtype: LATENT
    - Python dtype: dict
- prev_images
    - LongCat-Avatar-1.5: decoded frames from the previous segment. When provided together with `vae`, the trailing `overlap` frames are re-encoded through the VAE and used as the overlap conditioning (matches v1.5's use_vcond=False behavior). Leave disconnected for v1.0.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- vae
    - LongCat-Avatar-1.5: VAE used to re-encode `prev_images` for the overlap region. Only used when `prev_images` is also provided.
    - Comfy dtype: WANVAE
    - Python dtype: object

# Output types
- image_embeds
    - Embeds for WanVideo LongCat Avatar generation
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object
- samples_slice
    - Sliced latent samples for the new frames
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
