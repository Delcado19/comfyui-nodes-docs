# Documentation
- Class name: CR_DebatchFrames
- Category: Comfyroll/Animation/Utils
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_DebatchFrames node is designed to process and split input data into individual frames. It plays a key role in preparing data for further analysis or processing in animation workflows, ensuring each frame can be handled independently.

# Input types
## Required
- frames
    - The 'frames' parameter is critical as it represents the batch of image frames the node will process. It influences the node's execution by determining which input data will be split into individual frames.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- debatched_frames
    - The 'debatched_frames' output consists of individual frames extracted from the input batch. This output is important as it forms the foundation for subsequent operations in the animation pipeline.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class CR_DebatchFrames:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'frames': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('debatched_frames',)
    OUTPUT_IS_LIST = (True,)
    FUNCTION = 'debatch'
    CATEGORY = icons.get('Comfyroll/Animation/Utils')

    def debatch(self, frames):
        images = [frames[i:i + 1, ...] for i in range(frames.shape[0])]
        return (images,)
```