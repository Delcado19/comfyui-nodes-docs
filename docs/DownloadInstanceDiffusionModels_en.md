
# Documentation
- Class name: DownloadInstanceDiffusionModels
- Category: instance/loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The DownloadInstanceDiffusionModels node is responsible for downloading and loading models required for the instance diffusion process, including PositionNet, Fusers, and ScaleU models. It ensures the required models are available locally, downloads them if they don't exist, then loads them into memory for instance diffusion tasks. This node simplifies the model preparation process, laying the foundation for subsequent instance diffusion operations.

# Input types
## Required
- use_segs
    - This parameter indicates whether the PositionNet model should use segmentation information, affecting how the model is prepared and loaded. When set to True, the model will consider segmentation data, potentially providing more refined position information.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- fusers_scale
    - Specifies the scaling factor applied to the Fusers model, affecting the model's preparation and loading to adjust its output according to the desired scale. This allows users to control the output scale of the Fusers model, adapting to different application scenarios.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- positionnet
    - Returns the loaded PositionNet model, ready for use in instance diffusion tasks. This model is specifically designed to handle position-related information, crucial for generating high-quality instance diffusion results.
    - Comfy dtype: POSITIONNET
    - Python dtype: Dict[str, Any]
- fusers
    - Provides a list of loaded Fusers models, adjusted according to the specified scaling, ready for integration into the instance diffusion process. These models are responsible for fusing different features, enhancing the quality and diversity of generated results.
    - Comfy dtype: FUSERS
    - Python dtype: Dict[str, Any]
- scaleu
    - Provides the loaded ScaleU model, making it available for enhancing instance diffusion capabilities. The ScaleU model specifically handles features at different scales, helping generate more detailed and accurate instance diffusion results.
    - Comfy dtype: SCALEU
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
