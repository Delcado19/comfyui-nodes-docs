# Documentation
- Class name: Image Saver
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
## Optional
- steps
    - number of steps
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - CFG value
    - Comfy dtype: FLOAT
    - Python dtype: float
- modelname
    - model name (can be multiple, separated by commas)
    - Comfy dtype: STRING
    - Python dtype: str
- sampler_name
    - sampler name (as string)
    - Comfy dtype: STRING
    - Python dtype: str
- scheduler_name
    - scheduler name (as string)
    - Comfy dtype: STRING
    - Python dtype: str
- positive
    - positive prompt
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - negative prompt
    - Comfy dtype: STRING
    - Python dtype: str
- seed_value
    - seed
    - Comfy dtype: INT
    - Python dtype: int
- width
    - image width
    - Comfy dtype: INT
    - Python dtype: int
- height
    - image height
    - Comfy dtype: INT
    - Python dtype: int
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
- counter
    - counter
    - Comfy dtype: INT
    - Python dtype: int
- denoise
    - denoise value
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_skip
    - skip last CLIP layers (positive or negative value, 0 for no skip)
    - Comfy dtype: INT
    - Python dtype: int
- time_format
    - timestamp format
    - Comfy dtype: STRING
    - Python dtype: str
- save_workflow_as_json
    - if True, also saves the workflow as a separate JSON file
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- embed_workflow
    - if True, embeds the workflow in the saved image files.
Stable for PNG, experimental for WEBP.
JPEG experimental and only if metadata size is below 65535 bytes
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- additional_hashes
    - hashes separated by commas, optionally with names. 'Name:HASH' (e.g., 'MyLoRA:FF735FF83F98')
With download_civitai_data set to true, weights can be added as well. (e.g., 'HASH:Weight', 'Name:HASH:Weight')
    - Comfy dtype: STRING
    - Python dtype: str
- download_civitai_data
    - Download and cache data from civitai.com to save correct metadata. Allows LoRA weights to be saved to the metadata.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- easy_remix
    - Strip LoRAs and simplify 'embedding:path' from the prompt to make the Remix option on civitai.com more seamless.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- show_preview
    - if True, displays saved images in the UI preview
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- custom
    - custom string to add to the metadata, inserted into the a111 string between clip skip and model hash
    - Comfy dtype: STRING
    - Python dtype: str
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
