# Documentation
- Class name: GlobalSeed
- Category: InspirePack/Prompt
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The GlobalSeed node is designed to manage and control the generation process by using seed values. It allows users to determine the randomness of generation through different modes, ensuring consistency or diversity in outputs.

# Input types
## Required
- value
    - The “value” parameter is crucial for setting the seed of the generation process. By changing the seed, the variability of outputs can be controlled, producing reproducible or diverse results.
    - Comfy dtype: INT
    - Python dtype: int
- mode
    - The “mode” parameter determines how the seed value affects the generation process. It offers multiple modes, such as 'fixed', 'increment', and 'randomize', each with different effects on outputs, providing flexibility in the generation process.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- action
    - The “action” parameter provides a set of options to further refine the seed's influence on generation. It works together with the “mode” parameter, allowing fine-grained control over the randomness and consistency of results.
    - Comfy dtype: COMBO
    - Python dtype: str
- last_seed
    - The “last_seed” parameter is used to inherit a seed from previous generation, ensuring continuity between runs of different generation processes.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- output
    - The output of the GlobalSeed node provides the result of the generation process, containing the randomness controlled by the input parameters.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
