# Documentation
- Class name: KreaLoraConvertPixaroma
- Category: 👑 Pixaroma/🧰 Utility
- Output node: True
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Convert a Krea 2 LoRA trained on fal.ai into a ComfyUI-compatible file. fal.ai's Krea 2 LoRAs use layer names ComfyUI does not recognize, so they do not load; this node renames them and saves a new copy in your loras folder that any LoRA loader can use. The weights are copied exactly, so the result is identical, just loadable. Pick a LoRA, check the readout, and click Convert. It only reads your file and writes a new one: it never changes the original and never downloads anything. Independent tool, not affiliated with or endorsed by Krea or fal.ai.

# Input types
## Required
- lora_name
    - The LoRA to convert. Pick a Krea 2 LoRA you trained on fal.ai. The readout on the node confirms whether it is a fal Krea 2 LoRA before you convert.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- output_name
    - Filename for the converted copy (saved next to the original). Leave blank to use the original name plus _comfyui.
    - Comfy dtype: STRING
    - Python dtype: str
- overwrite
    - If a file with the output name already exists, replace it. Off by default so you never overwrite a file by accident.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
No outputs are defined in the live ComfyUI metadata.

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
