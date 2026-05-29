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
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
