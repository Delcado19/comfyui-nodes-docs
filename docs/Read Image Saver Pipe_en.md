# Documentation
- Class name: Read Image Saver Pipe
- Category: ImageSaver/Pipe
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

Extracts commonly modified metadata and saver settings from an existing Image Saver Pipe. (Lazy extraction: does not trigger metadata hashing).

# Input types
## Required
- pipe
    - The pipe input is used by this node during execution.
    - Comfy dtype: IMAGESAVER_PIPE
    - Python dtype: object

# Output types
- pipe
    - The pipe output is produced by this node.
    - Comfy dtype: IMAGESAVER_PIPE
    - Python dtype: object
- filename
    - The filename output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- path
    - The path output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- counter
    - The counter output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- modelname
    - The modelname output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- positive
    - The positive output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - The negative output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - The width output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name output is produced by this node.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: object
- scheduler_name
    - The scheduler_name output is produced by this node.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: object
- denoise
    - The denoise output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_skip
    - The clip_skip output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- additional_hashes
    - The additional_hashes output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- custom
    - The custom output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
