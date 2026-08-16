# Documentation
- Class name: FL_KsamplerSEG_Captioner
- Category: 🏵️Fill Nodes/Ksamplers
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

FL KSampler SEG Captioner is a ComfyUI node registered by `custom_nodes.comfyui_fill-nodes`. The live metadata did not provide a longer description.

# Input types
## Required
- regions
    - The regions input is used by this node during execution.
    - Comfy dtype: SEG_REGIONS
    - Python dtype: object
- source_image
    - The source_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- api_key
    - The api_key input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- model
    - The model input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- prompt_template
    - The prompt_template input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- prefix
    - The prefix input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- suffix
    - The suffix input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- max_tokens
    - The max_tokens input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- parallel_requests
    - The parallel_requests input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- default_negative_prompt
    - The default_negative_prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- caption_first_frame_only
    - The caption_first_frame_only input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- show_preview
    - The show_preview input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Hidden
- unique_id
    - The unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object

# Output types
- regions
    - The regions output is produced by this node.
    - Comfy dtype: SEG_REGIONS
    - Python dtype: object
- preview_image
    - The preview_image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
