# Documentation
- Class name: Metadata Overwrite (LoraManager)
- Category: Lora Manager/utils
- Output node: True
- Repo Ref: https://github.com/willmiao/ComfyUI-Lora-Manager

Manually specify generation parameters to override automatically collected metadata. Only filled/connected inputs will take effect — empty defaults are ignored.

# Input types
## Optional
- prompt
    - Positive prompt. Only overwrites when non-empty.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - Negative prompt. Only overwrites when non-empty.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - Seed value. Only overwrites when > 0.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - Number of steps. Only overwrites when > 0.
    - Comfy dtype: INT
    - Python dtype: int
- cfg_scale
    - CFG scale. Only overwrites when > 0.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler
    - Sampler name. Only overwrites when non-empty.
    - Comfy dtype: STRING
    - Python dtype: str
- scheduler
    - Scheduler name. Only overwrites when non-empty.
    - Comfy dtype: STRING
    - Python dtype: str
- model
    - The checkpoint or diffusion model (UNet) used for generation. Only overwrites when non-empty.
    - Comfy dtype: STRING
    - Python dtype: str
- loras
    - LoRA syntax, e.g. <lora:name:strength> or <lora:name:model_strength:clip_strength>, separated by spaces. Only overwrites when non-empty.
    - Comfy dtype: STRING
    - Python dtype: str
- size
    - Image size in WIDTHxHEIGHT format (e.g. 512x768). Only overwrites when non-empty.
    - Comfy dtype: STRING
    - Python dtype: str
- clip_skip
    - Clip skip (ComfyUI: -24..-1, A1111: 1+). Default -25 means not set — any other value overwrites.
    - Comfy dtype: INT
    - Python dtype: int
- additional_data
    - Additional data to embed in the image metadata. Inserted between Clip skip and Model hash in the A1111-compatible parameters string. Example: "Copyright": "Some license info"
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- metadata
    - The metadata output is produced by this node.
    - Comfy dtype: METADATA
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/willmiao/ComfyUI-Lora-Manager)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
