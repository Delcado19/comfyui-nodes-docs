
# Documentation
- Class name: LoadInstancePositionNetModel
- Category: instance/loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LoadInstancePositionNetModel node is used to load the PositionNet model, which is a key component of the instance diffusion framework. This node loads the PositionNet by reading a specified model file and applying the required configuration. It initializes PositionNet with predefined parameters and provides an option that includes segmentation information, preparing it for subsequent instance-based processing tasks.

# Input types
## Required
- model_filename
    - Specify the filename of the PositionNet model to be loaded. This parameter is critical for identifying and retrieving the correct model file from the predefined directory.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- use_segs
    - Determine whether to use segmentation information in the PositionNet model configuration. This boolean flag allows flexible adjustment of the model based on the presence of segmentation data.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- positionnet
    - The loaded PositionNet model, which can be used for instance-based processing tasks. This output encapsulates a model initialized with the specified configuration.
    - Comfy dtype: POSITIONNET
    - Python dtype: torch.nn.Module
- fusers
    - The loaded fusers model, which is part of the instance diffusion framework and ready to integrate with other components.
    - Comfy dtype: FUSERS
    - Python dtype: torch.nn.Module
- scaleu
    - The loaded ScaleU model, another component of the instance diffusion framework, prepared for instance scaling and processing.
    - Comfy dtype: SCALEU
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
