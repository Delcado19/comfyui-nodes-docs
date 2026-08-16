# Documentation
- Class name: Make Image Saver Simple Config
- Category: ImageSaver/Pipe
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

Create a standalone Saver Configuration for use with Pipe nodes.

# Input types
## Required
- filename
    - filename (available variables: %date, %time, %time_format<format>, %model, %width, %height, %seed, %counter, %counter<padding>, %sampler_name, %steps, %cfg, %scheduler_name, %basemodelname, %denoise, %clip_skip)
    - Comfy dtype: STRING
    - Python dtype: str
- path
    - path to save the images (under Comfy's save directory)
    - Comfy dtype: STRING
    - Python dtype: str
- extension
    - file extension/type to save image as
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- lossless_webp
    - if True, saved WEBP files will be lossless
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- quality_jpeg_or_webp
    - quality setting of JPEG/WEBP
    - Comfy dtype: INT
    - Python dtype: int
- optimize_png
    - if True, saved PNG files will be optimized (can reduce file size but is slower)
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- embed_workflow
    - if True, embeds the workflow in the saved image files.
Stable for PNG, experimental for WEBP.
JPEG experimental and only if metadata size is below 65535 bytes
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- save_workflow_as_json
    - if True, also saves the workflow as a separate JSON file
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- counter
    - counter
    - Comfy dtype: INT
    - Python dtype: int
- time_format
    - timestamp format
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- simple_saver_config
    - The simple_saver_config output is produced by this node.
    - Comfy dtype: SIMPLE_SAVER_CONFIG
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
