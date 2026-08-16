# Documentation
- Class name: TextGenerateLTX2Prompt
- Category: text
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Generate LTX2 Prompt is a ComfyUI node registered by `comfy_extras.nodes_textgen`. The live metadata did not provide a longer description.

# Input types
## Required
- clip
    - The clip input is used by this node during execution.
    - Comfy dtype: CLIP
    - Python dtype: object
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- max_length
    - The max_length input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- sampling_mode
    - The sampling_mode input is used by this node during execution.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
## Optional
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- video
    - Video frames as image batch. Assumed to be 24 FPS; subsampled to 1 FPS internally.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- audio
    - The audio input is used by this node during execution.
    - Comfy dtype: AUDIO
    - Python dtype: object
- thinking
    - Operate in thinking mode if the model supports it.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- use_default_template
    - Use the built in system prompt/template if the model has one.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- generated_text
    - The generated_text output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
