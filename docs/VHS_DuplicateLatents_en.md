# Documentation
- Class name: DuplicateLatents
- Category: Video Helper Suite 🎥🅥🅗🅢/latent
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The DuplicateLatents node is designed to replicate input latent representations by a specified factor, effectively increasing their count. It serves to expand the dataset size for latent space operations without altering the integrity of the original data, thereby enhancing the utility of latent representations in various applications such as training or data augmentation.

# Input types
## Required
- latents
    - The 'latents' parameter is a dictionary containing Tensor objects representing latent space data. It is critical to the node's operation as it is the primary input to be replicated. The replication process depends on the quality and structure of this input, which directly affects the node's output and its subsequent use in downstream tasks.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
## Optional
- multiply_by
    - The 'multiply_by' parameter determines the number of times the latent representations will be replicated. It plays a significant role in the node's execution as it directly influences the quantity of output data. This parameter allows fine-tuning of dataset size, which is necessary for applications requiring a specific number of latent samples.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- LATENT
    - The 'LATENT' output is a dictionary containing the replicated latent space data. It is important as it represents the processed data scaled up according to the specified multiplication factor. This output is ready for further analysis or as input to other nodes requiring an increased number of latent samples.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- count
    - The 'count' output represents the total number of latent samples after the replication process. This is important information indicating the degree of data scaling. This count can be used to make informed decisions about subsequent steps in data processing or model training workflows.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
