# Documentation
- Class name: LatentRebatch
- Category: latent/batch
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

LatentRebatch node is designed to efficiently manage and reorganize latent representations into batches. It plays a key role in preparing data for further processing by ensuring that latent representations are correctly batched according to the specified size, which is crucial for the performance of subsequent computational tasks.

# Input types
## Required
- latents
    - The 'latents' parameter is a list of dictionaries, where each dictionary contains latent representations and associated metadata. This parameter is crucial because it serves as the main input to the node, determining the data that will be batched and processed.
    - Comfy dtype: List[Dict[str, Union[torch.Tensor, int]]]
    - Python dtype: List[Dict[str, Union[torch.Tensor, int]]]
- batch_size
    - The 'batch_size' parameter defines the size of each batch that will be created from the input latents. It is a critical parameter because it directly affects the efficiency and throughput of the batching process.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output_list
    - The 'output_list' contains the reorganized batches of latents. Each batch is a dictionary including 'samples', 'noise_mask', and 'batch_index', representing the result of rebatching. This output is important because it allows subsequent stages of the workflow to operate on structured and appropriately sized data.
    - Comfy dtype: List[Dict[str, Union[torch.Tensor, List[int]]]]
    - Python dtype: List[Dict[str, Union[torch.Tensor, List[int]]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
