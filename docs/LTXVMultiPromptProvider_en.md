# Documentation
- Class name: LTXVMultiPromptProvider
- Category: prompt
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

🅛🅣🅧 LTXV Multi Prompt Provider is a ComfyUI node registered by `custom_nodes.ComfyUI-LTXVideo`. The live metadata did not provide a longer description.

# Input types
## Required
- prompts
    - Prompts to encode, one per line. Each prompt will be encoded separately. Each prompt will be used in one temporal_tile in LTXVLoopingSampler.
    - Comfy dtype: STRING
    - Python dtype: str
- clip
    - CLIP model to encode the prompts.
    - Comfy dtype: CLIP
    - Python dtype: object

# Output types
- conditionings
    - The conditionings output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
