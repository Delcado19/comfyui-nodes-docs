
# Documentation
- Class name: Get Prompt
- Category: Bmad/dump
- Output node: True
- Repo Ref: https://github.com/bmad4ever/ComfyUI-Bmad-Custom-Nodes

This node processes and modifies a given prompt structure for API interactions by removing unnecessary elements and adjusting it according to the specified output mode (e.g., print to console or save to file). It plays a critical role in preparing prompts for execution or review, ensuring only relevant data is retained and presented in the appropriate format.

# Input types
## Required
- api_prompt
    - Specifies the output mode for the processed prompt, such as printing to console or saving to a file. This choice determines how the final prompt structure is handled, affecting the node's execution flow and the presentation of prompt data.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]

# Output types
The node has no output type.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/bmad4ever/ComfyUI-Bmad-Custom-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
