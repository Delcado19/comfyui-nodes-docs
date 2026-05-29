# Documentation
- Class name: IPAdapterPromptScheduleFromWeightsStrategy
- Category: ipadapter/weights
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

This node is based on a weight scheduling strategy, allowing users to better control the text generation process. By adjusting weights at different stages, this node can help generate text content that better meets user needs.

# Input types

## Required

- weights_strategy
    - Weight policy, used to specify the weight policy for image generation. This parameter can control the weight policy for image generation to achieve better results.
    - Comfy dtype: WEIGHTS_STRATEGY
    - Python dtype: str
- prompt
    - Prompt, used to specify the prompt for image generation. This parameter can control the prompt for image generation to achieve better results.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- prompt_schedule
    - The prompt_schedule output represents the result of applying the specified method to the input weights. It encapsulates the essence of the node's purpose, providing a synthesized form of the input data that can be used for further analysis or model training.
    - Comfy dtype: STRING
    - Python dtype: str


# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_IPAdapter_plus)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
