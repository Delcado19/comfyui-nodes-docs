# Documentation
- Class name: PromptSlide
- Category: ♾️Mixlab/Prompt
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The PromptSlide node aims to adjust the influence of given prompt keywords by applying a weight factor. This process allows fine-tuning of input prompts, enhancing the relevance and emphasis of specific keywords in the text. The primary function of this node is to modify input prompts to better suit the desired output without altering their fundamental meaning or context.

# Input types
## Required
- prompt_keyword
    - The prompt_keyword parameter is crucial because it defines the core text around which the node's functionality revolves. It serves as the basis for weight adjustment, ensuring that the resulting prompt aligns with the intended emphasis and focus.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- weight
    - The weight parameter plays a key role in determining the degree of emphasis to be applied to the prompt_keyword. It modifies the keyword's influence, allowing subtle control over the output based on the desired level of importance.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- prompt
    - The output parameter 'prompt' is the result of the node's operation, reflecting the adjusted prompt after applying the weight. It is a critical element because it conveys the final form of the prompt, which directly influences subsequent processes.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
