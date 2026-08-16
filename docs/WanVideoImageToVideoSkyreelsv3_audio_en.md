# Documentation
- Class name: WanVideoImageToVideoSkyreelsv3_audio
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Enables Multi/InfiniteTalk long video generation sampling method, the video is created in windows with overlapping frames. Not compatible or necessary to be used with context windows and many other features besides Multi/InfiniteTalk.

# Input types
## Required
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: WANVAE
    - Python dtype: object
- width
    - Width of the generation
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height of the generation
    - Comfy dtype: INT
    - Python dtype: int
- frame_window_size
    - The number of frames to process at once, should be a value the model is generally good at.
    - Comfy dtype: INT
    - Python dtype: int
- motion_frame
    - Driven frame length used in the long video generation. Basically the overlap length.
    - Comfy dtype: INT
    - Python dtype: int
- drop_frames
    - Additional frames to drop when advancing the audio window. Higher values = less overlap = faster generation but potentially less smooth transitions.
    - Comfy dtype: INT
    - Python dtype: int
- tiled_vae
    - Use tiled VAE encoding for reduced memory use
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- force_offload
    - Whether to force offload the model within the loop for VAE operations, enable if you encounter memory issues.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- colormatch
    - Color matching method to use between the windows
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- start_image
    - Images to encode
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- reference_video
    - Optional: Pre-generated reference video to use for keyframes instead of extracting from first generation. Should be color-matched to source image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- clip_embeds
    - Clip vision encoded image
    - Comfy dtype: WANVIDIMAGE_CLIPEMBEDS
    - Python dtype: object
- output_path
    - If set, will save each window's resulting frames to this folder, also DISABLES returning the final video tensor to save memory
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image_embeds
    - The image_embeds output is produced by this node.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object
- output_path
    - The output_path output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
