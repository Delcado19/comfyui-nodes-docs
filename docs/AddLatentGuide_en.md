# Documentation
- Class name: AddLatentGuide
- Category: model/conditioning/ltxv
- Output node: False
- Repo Ref: https://github.com/Mattabyte/ComfyUI-LTXVideo-Registry_Mattabyte

Custom nodes for LTX-Video support in ComfyUI - registry fix - forked by Mattabyte

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
- latent
    - The latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- image
    - Image or video to condition the latent video on. Must be 8*n + 1 frames. If the video is not 8*n + 1 frames, it will be cropped to the nearest 8*n + 1 frames.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- frame_idx
    - Frame index to start the conditioning at. For single-frame images or videos with 1-8 frames, any frame_idx value is acceptable. For videos with 9+ frames, frame_idx must be divisible by 8, otherwise it will be rounded down to the nearest multiple of 8. Negative values are counted from the end of the video.
    - Comfy dtype: INT
    - Python dtype: int
- strength
    - The strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- attention_mask
    - Optional pixel-space spatial mask. Controls per-region conditioning influence via self-attention, multiplied by strength.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- iclora_parameters
    - Optional IC-LoRA parameters from a Get IC-LoRA Parameters node. Used for adjusting guide processing as required by certain IC-LoRAs (eg. those with a reference_downscale_factor > 1). When chained, each LTXVAddGuide uses only the parameters connected to it.
    - Comfy dtype: IC_LORA_PARAMETERS
    - Python dtype: object

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

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Mattabyte/ComfyUI-LTXVideo-Registry_Mattabyte)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
