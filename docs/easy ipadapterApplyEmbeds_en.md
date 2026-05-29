# Documentation
- Class name: ipadapterApplyEmbeds
- Category: EasyUse/Adapter
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node facilitates applying positional embeddings to the model, enhancing its ability to process spatial information in input data. It aims to improve model performance by integrating additional contextual cues, providing a more nuanced representation of the input data.

# Input types
## Required
- model
    - The model parameter is essential as it is the core component modified by the node. It represents the machine learning model to which positional embeddings will be applied, critical to the node's operation and the model's subsequent performance.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- ipadapter
    - The ipadapter parameter is vital for the node, providing the necessary interface between the model and positional embeddings. It ensures embeddings are correctly applied and integrated into the model's architecture, affecting the node's overall functionality and output.
    - Comfy dtype: IPADAPTER
    - Python dtype: IPAdapter
- pos_embed
    - The pos_embed parameter is essential to the node's function, representing the positional embeddings to be applied to the model. These embeddings provide the spatial information the model needs to understand and process input data.
    - Comfy dtype: EMBEDS
    - Python dtype: torch.Tensor
- weight
    - The weight parameter influences how much emphasis is placed on positional embeddings in the model. It is a critical factor determining how embeddings affect model output, and consequently, the quality of results produced by the node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_type
    - The weight_type parameter determines the type of weighting applied to positional embeddings, significant in shaping the model's response to input data. It affects the node's overall adaptability and effectiveness in modifying model behavior.
    - Comfy dtype: COMBO[weight_types]
    - Python dtype: str
- start_at
    - The start_at parameter specifies the starting point for applying positional embeddings, critical to the node's operation. It determines the initial context at which the model begins incorporating spatial information, affecting the overall interpretation and processing of data.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - The end_at parameter defines the endpoint for applying positional embeddings, playing a key role in the node's function. It sets the boundary for how far the model integrates spatial information, thereby affecting the comprehensiveness of the model's understanding of input data.
    - Comfy dtype: FLOAT
    - Python dtype: float
- embeds_scaling
    - The embeds_scaling parameter adjusts the scaling of embeddings, crucial for controlling the influence of positional information on the model. It directly affects the node's ability to balance the contribution of embeddings against other features, ensuring optimal representation of input data.
    - Comfy dtype: COMBO[ ['V only', 'K+V', 'K+V w/ C penalty', 'K+mean(V) w/ C penalty']]
    - Python dtype: str
## Optional
- attn_mask
    - When provided, the attn_mask parameter helps the node focus on certain parts of the input data by ignoring irrelevant information. This enhances the model's ability to concentrate on the most important aspects of the data, producing more accurate and relevant results.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- model
    - The model output represents the modified machine learning model with positional embeddings applied. It is the primary result of the node, demonstrating the model's enhanced capability in processing spatial information and providing a more detailed understanding of input data.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- ipadapter
    - The ipadapter output is an intermediate component that facilitates the application of positional embeddings to the model. It serves as proof of successful embedding integration, ensuring the model can now better handle spatial information.
    - Comfy dtype: IPADAPTER
    - Python dtype: IPAdapter

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
