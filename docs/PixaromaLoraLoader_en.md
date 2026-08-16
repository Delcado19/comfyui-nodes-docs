# Documentation
- Class name: PixaromaLoraLoader
- Category: 👑 Pixaroma/🧰 Utility
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Stack as many LoRAs as you want in one node. Each LoRA has its own on/off switch and strength, and you can chain the model and clip through several of these nodes. Click the i on a row to see the LoRA's info and pick its trigger words; the switched-on picks come out of the triggers output as plain text you wire into your prompt. Trigger words are read straight from the file, so it works with no internet; an optional per-LoRA Civitai lookup can fetch the official words and a preview when you ask for it. Add LoRAs, all on/off, and the settings live in the middle of the node; right-click a row to move, duplicate, or remove it.

# Input types
## Required
- model
    - The diffusion model every switched-on LoRA is applied to.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
## Optional
- clip
    - The CLIP (text encoder) the LoRAs are applied to. Optional, but recommended: connect it (checkpoint CLIP into here, and the CLIP output on to your text encode) so LoRAs can also tune how your trigger words are read. It matters most for LoRAs that use a trigger word. Leave it unwired only for a model-only setup.
    - Comfy dtype: CLIP
    - Python dtype: object
## Hidden
- LoraLoaderState
    - The LoraLoaderState input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- MODEL
    - The model with every switched-on LoRA applied, in row order.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- CLIP
    - The CLIP with every switched-on LoRA applied (passes through unchanged if no CLIP was connected).
    - Comfy dtype: CLIP
    - Python dtype: object
- triggers
    - The trigger words you picked, from switched-on LoRAs only, joined as plain text for your prompt.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
