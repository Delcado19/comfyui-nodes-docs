# Documentation
- Class name: Image Saver Simple
- Category: ImageSaver
- Output node: True
- Repo Ref: https://github.com/alexopus/ComfyUI-Image-Saver

Save images with civitai-compatible generation metadata

# Input types
## Required
- images
    - image(s) to save
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
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
- metadata
    - metadata to embed in the image
    - Comfy dtype: METADATA
    - Python dtype: object
- counter
    - counter
    - Comfy dtype: INT
    - Python dtype: int
- time_format
    - timestamp format
    - Comfy dtype: STRING
    - Python dtype: str
- show_preview
    - if True, displays saved images in the UI preview
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
- hashes
    - Comma-separated list of the hashes to chain with other Image Saver additional_hashes
    - Comfy dtype: STRING
    - Python dtype: str
- a1111_params
    - Written parameters to the image metadata
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/alexopus/ComfyUI-Image-Saver)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
