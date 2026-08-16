# Documentation
- Class name: Save Image (LoraManager)
- Category: Lora Manager/utils
- Output node: True
- Repo Ref: https://github.com/willmiao/ComfyUI-Lora-Manager

Save images with embedded generation metadata in compatible format

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- filename_prefix
    - Base filename for saved images. Supports format patterns like %seed%, %width%, %height%, %model%, etc.
    - Comfy dtype: STRING
    - Python dtype: str
- file_format
    - Image format to save as. PNG preserves quality, JPEG is smaller, WebP balances size and quality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- lossless_webp
    - When enabled, saves WebP images with lossless compression. Results in larger files but no quality loss.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- quality
    - Compression quality for JPEG and lossy WebP formats (1-100). Higher values mean better quality but larger files.
    - Comfy dtype: INT
    - Python dtype: int
- webp_method
    - WebP compression method (0-6). 0=fastest/largest, 6=slowest/smallest. Only applies when file_format is 'webp'.
    - Comfy dtype: INT
    - Python dtype: int
- jpeg_subsampling
    - JPEG chroma subsampling level. 0=4:4:4 (best quality), 1=4:2:2, 2=4:2:0 (smallest files). Only applies when file_format is 'jpeg'.
    - Comfy dtype: INT
    - Python dtype: int
- embed_workflow
    - When enabled, saved images store the complete workflow. Drag the image back into ComfyUI to restore the original node graph. PNG and WebP only.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- save_with_metadata
    - When enabled, embeds generation parameters into the saved image metadata. Disable to skip writing generation metadata.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- add_counter_to_filename
    - Adds an incremental counter to filenames to prevent overwriting previous images.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- save_as_recipe
    - Also saves each generated image as a LoRA Manager recipe.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Hidden
- id
    - The id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/willmiao/ComfyUI-Lora-Manager)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
