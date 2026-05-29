# Documentation
- Class name: easySeed
- Category: EasyUse/Seed
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node generates random seeds for various workflows, ensuring reproducibility and controllability of randomness in the system.

# Input types
## Required
- seed
    - The seed parameter is critical to the node's operation because it determines the starting point of random number generation, affecting the outcome of random processes.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- prompt
    - Although not required, a prompt can provide additional context or guidance for the node's operation, potentially refining randomness to meet specific goals.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - This optional parameter can supply extra information that may be used to enhance functionality or adjust the node's behavior in image processing tasks.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: str
- my_unique_id
    - Providing a unique ID parameter helps track and manage multiple instances of the node, aiding overall workflow organization.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- seed
    - The output seed represents the generated random number, serving as a reference for subsequent operations that depend on this initial random point.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
