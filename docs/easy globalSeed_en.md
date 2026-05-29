# Documentation
- Class name: globalSeed
- Category: EasyUse/Seed
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This encapsulates the functionality for generating and managing random seeds for various operations within the system, ensuring a controlled and reproducible environment for experiments and model training.

# Input types
## Required
- value
    - The "value" parameter is crucial for specifying the initial seed value, which is essential for ensuring reproducibility of the system's random processes.
    - Comfy dtype: INT
    - Python dtype: int
- mode
    - The "mode" parameter determines the control mechanism for seed generation, deciding whether the seed is set before or after the generation process, thereby affecting the overall randomness of the system.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- action
    - The "action" parameter provides multiple seed operation strategies, allowing dynamic adjustment of seeds during system execution, which is critical for iterative or branching processes.
    - Comfy dtype: COMBO
    - Python dtype: str
- last_seed
    - The "last_seed" parameter serves as a reference for the most recently used seed, facilitating continuity and tracking of the system's randomization process.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- result
    - The "result" output provides a structured summary of the seed management operation, encapsulating the results of the randomization process and the applied settings.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
