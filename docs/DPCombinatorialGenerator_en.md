# Documentation
- Class name: DPCombinatorialGenerator
- Category: sampling
- Output node: False
- Repo Ref: https://github.com/adieyal/comfyui-dynamicprompts.git

The DPCombinatorialGenerator node is designed to generate combinations of prompts based on a given context. It utilizes the SamplingContext to determine the appropriate method for generating prompts, ensuring a combinatorial approach when necessary. This node is essential in scenarios requiring exhaustive input combinations for thorough sampling.

# Input types
## Required
- wildcard_manager
    - The wildcard manager is critical for handling placeholders in prompt templates. It influences how the node interprets and replaces wildcards, directly affecting the generation process and the diversity of output prompts.
    - Comfy dtype: WildcardManager
    - Python dtype: WildcardManager
- default_sampling_method
    - The default sampling method determines the approach used to generate prompts when no specific method is specified. It is important because it sets the foundation for the node's sampling behavior, influencing the overall strategy of prompt generation.
    - Comfy dtype: SamplingMethod
    - Python dtype: SamplingMethod

# Output types
- prompts
    - The output prompts represent the combinations generated based on the input context and sampling method. They are important because they are the direct result of the node's operation, encapsulating the essence of the combinatorial generation process.
    - Comfy dtype: Iterable[str]
    - Python dtype: Iterable[str]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/adieyal/comfyui-dynamicprompts)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
