# Documentation
- Class name: IPAdapterCombineEmbeds
- Category: ipadapter/embeds
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The IPAdapterCombineEmbeds node is designed to intelligently combine multiple embedding inputs through various specified methods such as concatenation, addition, subtraction, average, normalized average, maximum, or minimum operations. It plays a key role in processing and integrating different embedding data into a unified format in machine learning models, enhancing the flexibility and adaptability of embedding operations.

# Input types
## Required
- embed1
    - embed1 is the primary embedding input required for node operations. It provides the foundation for subsequent combination methods and is critical to the node's execution and final output.
    - Comfy dtype: EMBEDS
    - Python dtype: torch.Tensor
- method
    - The method parameter determines how embeddings are combined. It is critical because it decides the mathematical operations applied to the embedding inputs, significantly influencing the node's functionality and the nature of the output.
    - Comfy dtype: ['concat', 'add', 'subtract', 'average', 'norm average', 'max', 'min']
    - Python dtype: str
## Optional
- embed2
    - embed2 is an optional additional embedding input that can be included for more complex embedding combinations. Its inclusion enriches the diversity of embedding data processed by the node.
    - Comfy dtype: EMBEDS
    - Python dtype: torch.Tensor
- embed3
    - embed3 is another optional embedding input that can be used to further diversify the embedding combination process. It provides an additional layer of complexity to the node's operations.
    - Comfy dtype: EMBEDS
    - Python dtype: torch.Tensor
- embed4
    - embed4, as an optional embedding input, can be used to expand the scope of embedding combinations. It adds depth to the node's capability in processing embedding data.
    - Comfy dtype: EMBEDS
    - Python dtype: torch.Tensor
- embed5
    - embed5 is the last optional embedding input provided to the node for embedding combination. It represents the highest level of complexity that can be introduced into the node's embedding processing.
    - Comfy dtype: EMBEDS
    - Python dtype: torch.Tensor

# Output types
- combined_embeds
    - combined_embeds output represents the result of applying the specified method to the input embeddings. It contains the essence of the node's purpose, providing a synthesized form of the input data that can be used for further analysis or model training.
    - Comfy dtype: EMBEDS
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_IPAdapter_plus)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
