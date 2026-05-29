# Documentation
- Class name: DPFeelingLucky
- Category: Sampling
- Output node: False
- Repo Ref: https://github.com/adieyal/comfyui-dynamicprompts.git

This node aims to generate creative and potentially unexpected prompts by leveraging random seeds and lucky feeling methods. It is designed to introduce variability and novelty into the sampling process, contributing to the diversity of output results.

# Input types
## Required
- text
    - The input text serves as the foundation for generating prompts. It is critical because it provides context and content for the node, directly influencing the relevance and creativity of the generated prompts.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- seed
    - The seed parameter is essential for controlling the randomness of generated prompts. It ensures that the same input text produces consistent results when the seed is fixed, which is useful for debugging and reproducibility.
    - Comfy dtype: int
    - Python dtype: int
- autorefresh
    - The auto-refresh parameter can be used to determine whether the node should automatically generate new prompts based on changes in the input text. It affects the responsiveness of the node and the dynamic nature of the content generation process.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- prompt
    - The output is a generated prompt, which is the result of the node's operation. It represents creative and potentially novel content derived from the input text and the randomness introduced by the seed.
    - Comfy dtype: str
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/adieyal/comfyui-dynamicprompts)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
