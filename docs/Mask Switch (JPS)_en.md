
# Documentation
- Class name: Mask Switch (JPS)
- Category: JPS Nodes/Switches
- Output node: False
- Repo Ref: [https://github.com/JPS-GER/ComfyUI_JPS-Nodes](https://github.com/JPS-GER/ComfyUI_JPS-Nodes)

The Mask Switch node is designed to select and output one of multiple input masks based on a given selection index. It implements dynamic mask switching in the workflow, facilitating flexible mask manipulation and application.

# Input types
## Required
- select
    - Specify the index of the mask to be selected and output. This selection determines which mask input (among multiple possible inputs) is passed as output.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- mask_i
    - Represent any optional mask inputs (mask_1 to mask_5) that can be selected for output. The specific mask chosen depends on the 'select' index.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- mask_out
    - The mask output selected based on the input selection index.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub]([https://github.com/JPS-GER/ComfyUI_JPS-Nodes](https://github.com/JPS-GER/ComfyUI_JPS-Nodes))

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
