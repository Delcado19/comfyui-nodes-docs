# Documentation
- Class name: FromIPAdapterPipe
- Category: InspirePack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node coordinates the integration of various components, such as IP adapters, machine learning models, and facial recognition systems, to streamline data management and analysis within a given pipeline.

# Input types
## Required
- ipadapter_pipe
    - This parameter is necessary because it serves as the primary input, containing a series of interconnected elements that the node will process and use for its operations.
    - Comfy dtype: IPADAPTER_PIPE
    - Python dtype: Tuple[IPADAPTER_PIPE]

# Output types
- ipadapter
    - A key component of the output, the IP adapter facilitates communication within the system, ensuring effective data transfer between different modules.
    - Comfy dtype: IPADAPTER
    - Python dtype: IPADAPTER
- model
    - The model output represents the machine learning component, which is essential for making predictions and processing data based on learned patterns.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip_vision
    - This output is critical for visual data interpretation, as it leverages the vision system to analyze and understand image content.
    - Comfy dtype: CLIP_VISION
    - Python dtype: CLIP_VISION
- insight_face
    - The insight face output is vital for facial recognition tasks, providing the means to identify and verify individual identities based on facial features.
    - Comfy dtype: INSIGHTFACE
    - Python dtype: INSIGHTFACE

# Usage tips
- Infra type: CPU

# Source code
```
class FromIPAdapterPipe:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'ipadapter_pipe': ('IPADAPTER_PIPE',)}}
    RETURN_TYPES = ('IPADAPTER', 'MODEL', 'CLIP_VISION', 'INSIGHTFACE')
    RETURN_NAMES = ('ipadapter', 'model', 'clip_vision', 'insight_face')
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/Util'

    def doit(self, ipadapter_pipe):
        (ipadapter, model, clip_vision, insightface, _) = ipadapter_pipe
        return (ipadapter, model, clip_vision, insightface)
```