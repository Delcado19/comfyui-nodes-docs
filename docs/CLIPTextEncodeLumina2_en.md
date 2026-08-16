# Documentation
- Class name: CLIPTextEncodeLumina2
- Category: model/conditioning/lumina
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Encodes a system prompt and a user prompt using a CLIP model into an embedding that can be used to guide the diffusion model towards generating specific images.

# Input types
## Required
- system_prompt
    - Lumina2 provide two types of system prompts:Superior: You are an assistant designed to generate superior images with the superior degree of image-text alignment based on textual prompts or user prompts. Alignment: You are an assistant designed to generate high-quality images with the highest degree of image-text alignment based on textual prompts.
    - Comfy dtype: COMBO
    - Python dtype: object
- user_prompt
    - The text to be encoded.
    - Comfy dtype: STRING
    - Python dtype: str
- clip
    - The CLIP model used for encoding the text.
    - Comfy dtype: CLIP
    - Python dtype: object

# Output types
- CONDITIONING
    - A conditioning containing the embedded text used to guide the diffusion model.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
