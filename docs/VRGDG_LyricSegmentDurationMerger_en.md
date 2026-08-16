# Documentation
- Class name: VRGDG_LyricSegmentDurationMerger
- Category: VRGDG/General
- Output node: False
- Repo Ref: https://github.com/vrgamegirl19/comfyui-vrgamedevgirl

VRGDG_LyricSegmentDurationMerger is a ComfyUI node registered by `custom_nodes.comfyui-vrgamedevgirl`. The live metadata did not provide a longer description.

# Input types
## Required
- srt_text
    - The srt_text input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- segments_json
    - The segments_json input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- strict_count_match
    - The strict_count_match input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- decimal_places
    - The decimal_places input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- use_srt_durations
    - The use_srt_durations input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- merged_text
    - The merged_text output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- merged_json
    - The merged_json output is produced by this node.
    - Comfy dtype: JSON
    - Python dtype: object
- segment_count
    - The segment_count output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- duration_count
    - The duration_count output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/vrgamegirl19/comfyui-vrgamedevgirl)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
