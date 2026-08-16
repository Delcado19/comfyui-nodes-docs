# Documentation
- Class name: Edit Image Saver Pipe
- Category: ImageSaver/Pipe
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

Safely override metadata or saver settings in an existing Image Saver Pipe. (Creates a new branch without modifying the original).
String fields support the '[original]' placeholder to append/prepend.

# Input types
## Required
- pipe
    - The pipe input is used by this node during execution.
    - Comfy dtype: IMAGESAVER_PIPE
    - Python dtype: object
## Optional
- filename
    - String inputs support the [original] placeholder to append/prepend.
    - Comfy dtype: STRING
    - Python dtype: str
- path
    - String inputs support the [original] placeholder to append/prepend.
    - Comfy dtype: STRING
    - Python dtype: str
- counter
    - The counter input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
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
- custom
    - custom string to add to the metadata, inserted into the a111 string between clip skip and model hash
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- pipe
    - The pipe output is produced by this node.
    - Comfy dtype: IMAGESAVER_PIPE
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
