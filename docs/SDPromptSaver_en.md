# Documentation
- Class name: SDPromptSaver
- Category: SD Prompt Reader
- Output node: True
- Repo Ref: https://github.com/receyuki/comfyui-prompt-reader-node

SD Prompt Saver is a ComfyUI node registered by `custom_nodes.comfyui-prompt-reader-node`. The live metadata did not provide a longer description.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- filename
    - The filename input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- path
    - The path input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- model_name
    - The model_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- vae_name
    - The vae_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - The scheduler input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- lora_name
    - The lora_name input is used by this node during execution.
    - Comfy dtype: *
    - Python dtype: object
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - The negative input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- extension
    - The extension input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- calculate_hash
    - The calculate_hash input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- resource_hash
    - The resource_hash input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- lossless_webp
    - The lossless_webp input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- jpg_webp_quality
    - The jpg_webp_quality input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- date_format
    - The date_format input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- time_format
    - The time_format input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- save_metadata_file
    - The save_metadata_file input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- extra_info
    - The extra_info input is used by this node during execution.
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
- FILENAME
    - The FILENAME output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- FILE_PATH
    - The FILE_PATH output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- METADATA
    - The METADATA output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/receyuki/comfyui-prompt-reader-node)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
