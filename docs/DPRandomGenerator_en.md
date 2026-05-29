# Documentation
- Class name: DPRandomGenerator
- Category: Sampling
- Output node: False
- Repo Ref: https://github.com/adieyal/comfyui-dynamicprompts.git

The DPRandomGenerator node aims to produce multiple outputs based on a set of given rules and variables. It generates diverse results by interpreting command structures and using sampling methods, ensuring broad exploration of possible outcomes.

# Input types
## Required
- command
- Command parameters are crucial because they define the structure and content of the prompts the node will generate. They serve as the blueprint for the sampling process, directly affecting the diversity and nature of the output.
    - Comfy dtype: Command
    - Python dtype: dynamicprompts.commands.Command
## Optional
- num_prompts
- The num_prompts parameter specifies the maximum number of prompts the node will generate. It plays an important role in controlling the output scope, allowing the range to be concentrated or broad based on the set value.
    - Comfy dtype: int
    - Python dtype: int

# Output types
- prompts
- Output prompts are the results of the node's execution, reflecting the application of the input command and sampling method. They represent diverse and relevant results successfully generated from the initial input.
    - Comfy dtype: List[SamplingResult]
    - Python dtype: List[dynamicprompts.SamplingResult]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/adieyal/comfyui-dynamicprompts)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
