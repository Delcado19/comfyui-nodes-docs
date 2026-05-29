# Documentation
- Class name: FromBasicPipe_v2
- Category: ImpactPack/Pipe
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the FromBasicPipe_v2 node is designed to process and return structured output from a given basic pipe. It encapsulates the essence of data flow in ImpactPack, ensuring that essential components such as model, clip, and VAE are ready for downstream tasks.

# Input types
## Required
- basic_pipe
    - The 'basic_pipe' parameter is a critical input to the node, as it represents the foundational pipe containing the basic elements necessary for processing. It is essential to the node's execution and directly affects the outcome of the operation.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[Any, ...]

# Output types
- basic_pipe
    - The 'basic_pipe' output is a reflection of the input, marking the successful processing and preservation of the foundational pipe during the node's operation. It is a critical component for subsequent tasks that rely on the integrity of the initial data structure.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[Any, ...]
- model
    - The 'model' output represents the machine learning model derived from the basic pipe, essential for predictive analysis and decision-making processes within the system.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The 'clip' output represents a component that may involve manipulation or extraction of data features, playing a significant role in the overall functionality of the node.
    - Comfy dtype: CLIP
    - Python dtype: Any
- vae
    - The 'vae' output marks the presence of a variational autoencoder within the node, which is essential for tasks involving unsupervised learning and data dimensionality reduction.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- positive
    - The 'positive' output indicates a positive conditioning factor, potentially used to guide or influence the behavior of subsequent processes within the node.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- negative
    - The 'negative' output corresponds to a negative conditioning factor, which may be critical in controlling or modifying the direction of subsequent operations.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
