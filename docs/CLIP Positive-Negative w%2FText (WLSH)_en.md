# Documentation
- Class name: WLSH_CLIP_Text_Positive_Negative
- Category: WLSH Nodes/conditioning
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The `encode` method of the WLSH_CLIP_Text_Positive_Negative node processes text inputs through the CLIP model, encoding them into embedding vectors. This node converts text data into a form suitable for further analysis or as input to machine learning models, playing a critical role. It emphasizes the node's ability to handle both positive and negative text samples, which is essential for tasks requiring sentiment analysis or contrastive learning.

# Input types
## Required
- positive
    - The 'positive' parameter is a text input representing positive sentiment or context. It forms the foundation of the node's operation, as it constitutes the basis for sentiment analysis and contrastive learning, where the node distinguishes between positive and negative text samples.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - The 'negative' parameter is a text input representing negative sentiment or context. It is used in conjunction with the 'positive' parameter, providing a basis for comparison within the node's encoding and analysis.
    - Comfy dtype: STRING
    - Python dtype: str
- clip
    - The 'clip' parameter is an instance of the CLIP model, used to encode text inputs into embedding vectors. It is a critical component of the node, as it directly affects the quality and accuracy of the encoding process.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module

# Output types
- positive
    - The output 'positive' is the encoded representation of the positive text input. It is a key element for subsequent machine learning tasks requiring sentiment analysis or understanding of positive context.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative
    - The output 'negative' is the encoded representation of the negative text input. It is significant for applications involving sentiment analysis or understanding of negative context within the model's scope.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- positive_text
    - The output 'positive_text' is the original positive text input provided to the node. It helps retain a reference to the original text data alongside the encoded embedding vectors for further processing or analysis.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_text
    - The output 'negative_text' is the original negative text input provided to the node. It preserves the original text data, which may be combined with the encoded embedding vectors for subsequent tasks.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
