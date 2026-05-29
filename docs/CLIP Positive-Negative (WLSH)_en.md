# Documentation
- Class name: WLSH_CLIP_Positive_Negative
- Category: WLSH Nodes/conditioning
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

This node processes text input and generates encoded representations for further analysis or comparison. It plays a key role in the workflow, providing the foundation for text‑based feature extraction.

# Input types
## Required
- clip
- The clip parameter is essential for the node's operation, providing the mechanism to encode text. It is the core component that transforms raw text into a structured format.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- positive_text
- This parameter is a text input positively related to the encoding process. It is important because it sets the context for encoding, influencing the final representation.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_text
- Like positive_text, this parameter introduces a negative context to the encoding process. It is critical for creating contrast in the encoded representation, which benefits certain types of analysis.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- positive
- The positive output represents the encoded form of the positive text, serving as a reference for comparison or further processing within the system.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative
- The negative output is the encoded representation of the negative text; compared with the positive output, it provides insight into differences and nuances in the encoding process.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
