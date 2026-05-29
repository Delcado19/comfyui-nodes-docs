
# Documentation
- Class name: ModelClamp
- Category: clamp
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ModelClamp node is designed to pass model data without any modification, acting as a placeholder or checkpoint in the data processing pipeline. This node can be used to maintain the integrity of model data or serve as an intermediate step in complex processing workflows.

# Input types
## Required
- model
    - The 'model' parameter represents the model data to be passed through this node. It is critical for maintaining the structure and information integrity of the model throughout the processing pipeline. This input ensures that model data is transmitted losslessly to the next stage of the pipeline.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Output types
- model
    - The output 'model' is the unmodified model data, passed directly through the node. This ensures the model's structure and information remain intact and lossless. This output can be used for subsequent processing steps or as a final result.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
