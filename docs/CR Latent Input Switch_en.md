# Documentation
- Class name: CR_LatentInputSwitch
- Category: Comfyroll/Utils/Logic
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_LatentInputSwitch node is designed to manage the selection between two latent states based on an input value. It serves as a decision component in workflows, allowing conditional routing of data through the system. Its functionality is essential in scenarios requiring dynamic selection of different latent representations.

# Input types
## Required
- Input
    - The 'Input' parameter is critical as it determines which latent state the node will select. It is an integer ranging from 1 to 2, where 1 corresponds to the first latent state and 2 corresponds to the second. This decision variable is essential to the node's operation as it directly influences the output selection.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- latent1
    - The 'latent1' parameter represents the first latent state the node can choose. It is optional and becomes significant when the 'Input' parameter is set to 1, in which case 'latent1' is the output the node will return.
    - Comfy dtype: LATENT
    - Python dtype: Union[torch.Tensor, None]
- latent2
    - The 'latent2' parameter represents the second latent state available for selection. It is also optional and is considered when the 'Input' parameter is set to 2, resulting in 'latent2' becoming the output returned by the node.
    - Comfy dtype: LATENT
    - Python dtype: Union[torch.Tensor, None]

# Output types
- LATENT
    - The 'LATENT' output represents the latent state selected based on the 'Input' parameter. It is the primary output of the node and carries the conditionally selected latent data from either 'latent1' or 'latent2'.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- show_help
    - The 'show_help' output provides a URL link to the node's documentation page for additional help. It is included as a secondary output to guide users seeking more information about the node's usage and functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
