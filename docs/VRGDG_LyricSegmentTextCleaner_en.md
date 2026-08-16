# Documentation
- Class name: VRGDG_LyricSegmentTextCleaner
- Category: VRGDG/General
- Output node: False
- Repo Ref: https://github.com/vrgamegirl19/comfyui-vrgamedevgirl

Cleans extracted lyricSegmentN text by shortening repeated filler lyrics and smoothing one-word fragments.

# Input types
## Required
- lyrics_text
    - The lyrics_text input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- repeat_output_count
    - The repeat_output_count input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- min_repeats_to_collapse
    - The min_repeats_to_collapse input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- bridge_single_word_segments
    - When a segment has one non-filler word, blend it with neighboring lyric words.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- cleaned_lyrics_text
    - The cleaned_lyrics_text output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- changed_count
    - The changed_count output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- notes
    - The notes output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/vrgamegirl19/comfyui-vrgamedevgirl)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
