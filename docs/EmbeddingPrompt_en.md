# Documentation
- Class name: EmbeddingPrompt
- Category: ♾️Mixlab/Prompt
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node class generates prompts based on embeddings and associated weights, allowing users to adjust the impact of specific embeddings in the output.

# Input types
## Required
- embedding
    - The embedding parameter is crucial because it defines the base context or theme for generating the prompt. It selects from the list of available embeddings, ensuring the prompt is relevant to the chosen context.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- weight
    - The weight parameter adjusts the influence of the selected embedding on the final prompt, permitting fine‑grained control over how much the output emphasizes the embedding context.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- prompt
    - The output prompt is a string that integrates the chosen embedding and its weight, forming a concise, targeted statement that can serve as input for various applications.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
