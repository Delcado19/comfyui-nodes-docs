# Documentation
- Class name: FL_WordFrequencyGraph
- Category: 🏵️Fill Nodes/Captioning
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

FL_WordFrequencyGraph scans a directory for .txt files, analyzes word frequency across all files,
and generates a visual bar graph showing word usage statistics. The graph displays the most frequently
used words on the left side and least used on the right, creating an attractive visualization of
text data patterns.

# Input types
## Required
- directory_path
    - The directory_path input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- title_name
    - The title_name input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- max_words
    - The max_words input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- min_word_length
    - The min_word_length input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- image_width
    - The image_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- image_height
    - The image_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- color_scheme
    - The color_scheme input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- exclude_common_words
    - The exclude_common_words input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
