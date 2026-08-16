# Documentation
- Class name: PixaromaRemoveBackground
- Category: 👑 Pixaroma/🖼️ Image
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Remove an image background with a BiRefNet model and return the cutout (RGBA), the foreground mask, and the inverted mask in one node.

Models load from ComfyUI/models/background_removal/. Filename controls preprocessing resolution: 'matt' or 'hr' in the name (case-insensitive) preprocesses at 2048; all others at 1024. Recommended names: birefnet.safetensors (standard), birefnet-hr.safetensors (HR), birefnet-matting.safetensors (HR matting for hair / fur).

Downloads:
  https://huggingface.co/Comfy-Org/BiRefNet/tree/main/background_removal
  https://huggingface.co/ZhengPeng7/BiRefNet_HR
  https://huggingface.co/ZhengPeng7/BiRefNet_HR-matting

# Input types
## Required
- image
    - The image to remove the background from.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- model
    - Which BiRefNet model to use. Filenames containing 'matt' or 'hr' run at 2048px (better for hair / fine edges); all others run at 1024px. Models live in ComfyUI/models/background_removal/.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The cutout image (RGBA) with the background made transparent.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - Mask where the kept foreground is white.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- inverted_mask
    - Mask where the removed background is white (the foreground mask, inverted).
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
