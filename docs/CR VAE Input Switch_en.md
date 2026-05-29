# Documentation
- Class name: CR_VAEInputSwitch
- Category: Comfyroll/Utils/Logic
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_VAEInputSwitch is a node used to conditionally route inputs between two different Variational Autoencoder (VAE) models based on a specified selection input. It operates by evaluating the 'Input' parameter and directing the flow accordingly, enabling seamless integration and switching between two different VAE configurations.

# Input types
## Required
- Input
    - The 'Input' parameter plays a critical role in determining which VAE model the node will use. It acts as a switch that determines the flow of data between the available options, where '1' corresponds to VAE1 and '2' corresponds to VAE2.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- VAE1
    - The 'VAE1' parameter represents the first VAE model that the node can select. When the 'Input' parameter is set to '1', it is an optional input, allowing this specific model to be used in the workflow.
    - Comfy dtype: VAE
    - Python dtype: VAE model object
- VAE2
    - The 'VAE2' parameter represents the second VAE model that the node can select. When the 'Input' parameter is set to '2', it is an optional input, allowing this alternative model to be used in the process.
    - Comfy dtype: VAE
    - Python dtype: VAE model object

# Output types
- VAE
    - The 'VAE' output provides the selected VAE model based on the 'Input' parameter, allowing further processing or analysis in downstream nodes.
    - Comfy dtype: VAE
    - Python dtype: VAE model object
- show_help
    - The 'show_help' output provides a URL link to the documentation page for additional guidance or information about the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
