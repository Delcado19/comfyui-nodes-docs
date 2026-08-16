# Documentation
- Class name: Flux2KleinSectionedEncoder
- Category: conditioning/flux2klein
- Output node: True
- Repo Ref: https://github.com/capitan01R/ComfyUI-Flux2Klein-Enhancer

Flux.2Klein 9B Enhancement Nodes Suite

# Input types
## Required
- clip
    - The clip input is used by this node during execution.
    - Comfy dtype: CLIP
    - Python dtype: object
## Optional
- front_text
    - FRONT section text.
    - Comfy dtype: STRING
    - Python dtype: str
- mid_text
    - MID section text.
    - Comfy dtype: STRING
    - Python dtype: str
- end_text
    - END section text.
    - Comfy dtype: STRING
    - Python dtype: str
- combined_prompt
    - Optional. Single prompt with [FRONT]/[MID]/[END] markers — overrides the three text boxes when non-empty and contains markers.
    - Comfy dtype: STRING
    - Python dtype: str
- separator
    - How to join sections in the final prompt sent to Klein.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- show_preview
    - The show_preview input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- debug
    - The debug input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- conditioning
    - The conditioning output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- front_section
    - The front_section output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- mid_section
    - The mid_section output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- end_section
    - The end_section output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- full_prompt
    - The full_prompt output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/capitan01R/ComfyUI-Flux2Klein-Enhancer)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
