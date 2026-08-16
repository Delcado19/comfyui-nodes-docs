# Documentation
- Class name: LayerUtility: ImageTaggerSaveV2
- Category: 😺dzNodes/LayerUtility/SystemIO
- Output node: True
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

A set of nodes for ComfyUI it generate image like Adobe Photoshop's Layer Style. the Drop Shadow is first completed node, and follow-up work is in progress.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- tag_text
    - The tag_text input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- custom_path
    - The custom_path input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- custom_filename
    - The custom_filename input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- remove_custom_filename_ext
    - The remove_custom_filename_ext input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- filename_prefix
    - The filename_prefix input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- timestamp
    - The timestamp input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- format
    - The format input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- quality
    - The quality input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- preview
    - The preview input is used by this node during execution.
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
No outputs are defined in the live ComfyUI metadata.

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
