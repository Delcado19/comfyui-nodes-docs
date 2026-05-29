# Documentation
- Class name: SplitLatents
- Category: Video Helper Suite 🎥🅥🅗🅢/latent
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The SplitLatents node aims to split a given set of latents into two distinct groups based on a specified index. It plays a key role in managing and organizing latent data, enabling finer control and manipulation of video-related latent information.

# Input types
## Required
- latents
    - The 'latents' parameter is a dictionary containing 'samples', representing the latents to be split. It is crucial for the node's operation as it determines the data to be split.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
## Optional
- split_index
    - The 'split_index' parameter defines the position at which the latents will be split. It is important because it determines the number of samples assigned to each group.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- LATENT_A
    - The first output 'LATENT_A' contains the latents of the first group after the split operation. It is valuable as it represents a portion of the original latent data.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- A_count
    - The 'A_count' output represents the number of latents in the first group. It is important as it provides a quantitative measure of the split.
    - Comfy dtype: INT
    - Python dtype: int
- LATENT_B
    - The 'LATENT_B' output contains the latents of the second group after the split operation. It is important as it represents the remainder of the original latent data.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- B_count
    - The 'B_count' output represents the number of latents in the second group. It is important as it complements 'A_count' to provide a complete measure of the split.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
