
# Documentation
- Class name: ControlNet Switch (JPS)
- Category: JPS Nodes/Switches
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ControlNet Switch node is designed to dynamically select one among multiple control network configurations based on a given selection input. It enables flexible manipulation of control networks within the processing pipeline, allowing conditional application of different control network settings.

# Input types
## Required
- select
    - Specifies the index of the control network to output. This input determines which control network configuration is applied, enabling dynamic switching between configurations.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- ctrlnet_i
    - Represents a generic control network configuration option, where 'i' can range from 1 to 5, denoting the selectable control network configurations based on the 'select' input.
    - Comfy dtype: CONTROL_NET
    - Python dtype: CONTROL_NET

# Output types
- ctrlnet_out
    - Outputs the selected control network configuration for application in subsequent processing steps.
    - Comfy dtype: CONTROL_NET
    - Python dtype: CONTROL_NET


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
