# Documentation
- Class name: promptLine
- Category: EasyUse/Prompt
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node generates text content based on a given prompt, with control over the starting point and number of lines generated. It operates by splitting the input prompt into lines and extracting the specified range, enabling targeted text output.

# Input types
## Required
- prompt
    - The prompt is the foundational text the node uses to generate new content. It serves as context or inspiration for the generated text; without it, the node produces no output.
    - Comfy dtype: STRING
    - Python dtype: str
- start_index
    - This parameter specifies which line the node starts extracting text from. It is critical for determining the specific portion of the prompt to be processed and converted into output.
    - Comfy dtype: INT
    - Python dtype: int
- max_rows
    - This parameter sets the maximum number of lines extracted from the prompt. It directly affects the amount of content the node generates, ensuring the output is neither too brief nor too verbose.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- STRING
    - The output is the text selected from the input prompt, starting at the specified index and spanning the defined number of lines. It represents the node's primary function and the direct result of its processing.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
