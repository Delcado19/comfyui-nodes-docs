# Documentation
- Class name: LLMCLIPTextEncode
- Category: llm
- Output node: False
- Repo Ref: https://github.com/esheep/esheep_custom_nodes.git

This node encodes text input using the CLIP model and integrates conversational elements to enrich downstream task context.

# Input types
## Required
- clip
- The clip parameter is essential; it represents the CLIP model itself, enabling the text encoding process and supplying contextual information.
    - Comfy dtype: CLIP
    - Python dtype: CLIPModel
- text
- The text parameter is critical for the node's operation, as it is the input data the node processes and encodes.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- CONDITIONING
- The output provides a conditioned representation that can serve as context for further processing or as a basis for generating responses.
    - Comfy dtype: POOLED_OUTPUT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/esheep/esheep_custom_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
