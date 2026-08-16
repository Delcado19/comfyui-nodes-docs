# Documentation
- Class name: Conditioning Concat Optional (Image Saver)
- Category: conditioning
- Output node: False
- Repo Ref: https://github.com/alexopus/ComfyUI-Image-Saver

Save images with generation metadata compatible with Civitai. Works with png, jpeg and webp. Stores LoRAs, models and embeddings hashes for resource recognition.

# Input types
## Required
- conditioning_to
    - base conditioning to concat to (or pass through, if second is empty)
    - Comfy dtype: CONDITIONING
    - Python dtype: list
## Optional
- conditioning_from
    - conditioning to concat to conditioning_to, if empty, then conditioning_to is passed through unchanged
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Output types
- CONDITIONING
    - The CONDITIONING output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/alexopus/ComfyUI-Image-Saver)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
