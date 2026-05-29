# Documentation
- Class name: WAS_Latent_Batch
- Category: WAS Suite/Latent
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Latent_Batch node is designed to combine multiple latent tensors together, ensuring they have the same dimensions. It plays a key role in managing and organizing latent space representations, enabling efficient handling of latent data across various applications.

# Input types
## Optional
- latent_a
    - The parameter 'latent_a' is an optional input representing a latent tensor. It is important for the node to function correctly, as it facilitates batch processing of latent representations. The presence of this parameter affects the node's ability to process and generate consistent latent batches.
    - Comfy dtype: LATENT
    - Python dtype: Union[torch.Tensor, None]
- latent_b
    - The parameter 'latent_b' serves a similar role to 'latent_a', allowing another latent tensor to be included in the batch. It enhances the node's capability to handle multiple latent vectors, which is essential for comprehensive latent space analysis.
    - Comfy dtype: LATENT
    - Python dtype: Union[torch.Tensor, None]
- latent_c
    - The parameter 'latent_c' is another optional latent tensor that can be included in the batch. Its inclusion provides the node with additional flexibility to accommodate different latent structures, which is crucial for complex latent space operations.
    - Comfy dtype: LATENT
    - Python dtype: Union[torch.Tensor, None]
- latent_d
    - The parameter 'latent_d' offers further flexibility for the node to handle more latent tensors in the batch. It is particularly useful when more latent representations need to be processed together.
    - Comfy dtype: LATENT
    - Python dtype: Union[torch.Tensor, None]

# Output types
- latent
    - The output 'latent' is a batch tensor that consolidates all input latent tensors into a single structure. It is important because it allows for streamlined processing and analysis of the combined latent representations.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
