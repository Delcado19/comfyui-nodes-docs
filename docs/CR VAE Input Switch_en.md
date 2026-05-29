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
```
class CR_VAEInputSwitch:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'Input': ('INT', {'default': 1, 'min': 1, 'max': 2})}, 'optional': {'VAE1': ('VAE', {'forceInput': True}), 'VAE2': ('VAE', {'forceInput': True})}}
    RETURN_TYPES = ('VAE', 'STRING')
    RETURN_NAMES = ('VAE', 'show_help')
    FUNCTION = 'switch'
    CATEGORY = icons.get('Comfyroll/Utils/Logic')

    def switch(self, Input, VAE1=None, VAE2=None):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Logic-Nodes#cr-vae-input-switch'
        if Input == 1:
            return (VAE1, show_help)
        else:
            return (VAE2, show_help)
```