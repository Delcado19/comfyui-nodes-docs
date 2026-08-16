# Documentation
- Class name: Make Image Saver Metadata Config
- Category: ImageSaver/Pipe
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

Create a standalone Metadata Configuration for use with Pipe nodes.

# Input types
## Optional
- modelname
    - model name (can be multiple, separated by commas)
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
- width
    - image width
    - Comfy dtype: INT
    - Python dtype: int
- height
    - image height
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - seed
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - number of steps
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - CFG value
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - sampler name (as string)
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler_name
    - scheduler name (as string)
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- denoise
    - denoise value
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_skip
    - skip last CLIP layers (positive or negative value, 0 for no skip)
    - Comfy dtype: INT
    - Python dtype: int
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
- custom
    - custom string to add to the metadata, inserted into the a111 string between clip skip and model hash
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- metadata_config
    - The metadata_config output is produced by this node.
    - Comfy dtype: METADATA_CONFIG
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
