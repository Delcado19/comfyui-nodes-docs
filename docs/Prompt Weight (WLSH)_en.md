# Documentation
- Class name: WLSH_Prompt_Weight
- Category: WLSH Nodes/text
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

This node adjusts the influence of prompts by applying weights, which is critical for fine-tuning the output of generative models. It allows users to emphasize or diminish certain prompts within a set, thereby controlling the overall direction of the generated content.

# Input types
## Required
- prompt
    - Prompts are text inputs that guide the output of generative models. They are essential as they set the context and theme for the generated content.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- weight
    - The weight parameter adjusts the influence of a prompt, allowing fine-grained control over model responses. It affects how prominently the prompt is reflected in the output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- prompt
    - The modified prompt with applied weights can serve as input for subsequent nodes or models, now carrying the adjusted influence.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
