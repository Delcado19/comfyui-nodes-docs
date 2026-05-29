# Documentation
- Class name: GetLatentCount
- Category: Video Helper Suite 🎥🅥🅗🅢/latent
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The GetLatentCount node determines the number of latent samples present in a given input. It plays a critical role in video processing workflows by providing an essential count that can be used for further analysis or manipulation of video data.

# Input types
## Required
- latents
    - The 'latents' parameter is a dictionary containing latent samples used for video processing. It is essential to the node's operation because it directly influences the sample count the node will return.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- count
    - The 'count' output provides the total number of latent samples processed by the node. This count is important because it can be used to make decisions about subsequent steps in the video processing pipeline.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class GetLatentCount:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'latents': ('LATENT',)}}
    CATEGORY = 'Video Helper Suite 🎥🅥🅗🅢/latent'
    RETURN_TYPES = ('INT',)
    RETURN_NAMES = ('count',)
    FUNCTION = 'count_input'

    def count_input(self, latents: dict):
        return (latents['samples'].size(0),)
```