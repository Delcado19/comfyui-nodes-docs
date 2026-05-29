
# Documentation
- Class name: easy XYInputs: Seeds++ Batch
- Category: EasyUse/XY Inputs
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node aims to generate a batch of seed values for drawing or other batch processing tasks, where each seed represents a unique starting point for the generation process. It allows specifying the batch size, providing flexibility in the number of seeds generated and used.

# Input types
## Required
- batch_count
    - Specifies the number of seeds to generate in the batch. This parameter allows the user to control the scale of the batch processing operation, affecting the total number of unique starting points available for generation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- X or Y
    - Outputs a dictionary containing axis labels and a batch of seed values, which can be directly used for plotting or further processing.
    - Comfy dtype: X_Y
    - Python dtype: Dict[str, Union[str, int]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
