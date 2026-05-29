
# Documentation
- Class name: Integer Switch (JPS)
- Category: JPS Nodes/Switches
- Output node: False
- Repo Ref: https://github.com/jps-yes/JPS_Nodes

The Integer Switch (JPS) node is an efficient conditional selection tool that selects and outputs one integer from multiple integer inputs based on a specific selection criterion. This node enables conditional logic in data flow by allowing dynamic selection of integer values.

# Input types
## Required
- select
- The select parameter determines which integer input to choose and output. The selection process is based on this integer value, thereby implementing conditional logic and dynamic data flow.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- int_i
- int_i represents a series of optional integer inputs (from int_1 to int_5). Each 'int_i' is a potential output that may be selected according to the 'select' criterion. These inputs give the node flexibility, allowing it to handle multiple possible cases.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- int_out
- The output int_out is the integer value selected based on the input criterion. It represents the final result after the node processes the data and can be used by subsequent nodes or processes.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/jps-yes/JPS_Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
