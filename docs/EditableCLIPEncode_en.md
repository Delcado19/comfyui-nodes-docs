# Documentation
- Class name: EditableCLIPEncode
- Category: promptcontrol/old
- Output node: False
- Repo Ref: https://github.com/asagi4/comfyui-prompt-control.git

This node processes text input and converts it into a structured format usable by the CLIP model. It achieves this by parsing specified filters in the text and transforming the structure into a conditioning format suitable for the CLIP model.

# Input types
## Required
- clip
    - The "clip" parameter is required because it provides the base model the node uses to process the input text. Without this parameter, the node cannot perform its intended function.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- text
    - The "text" parameter is critical to the node because it contains the input data the node will parse and convert. The quality and format of "text" directly affect the node's output.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- filter_tags
    - The "filter_tags" parameter is used to refine the parsing process of the input text. It allows specifying particular tags the node should consider or ignore during text processing.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- CONDITIONING
    - The "CONDITIONING" output represents the processed and structured format of the input text, suitable for use with the CLIP model. It encapsulates the essence of the parsed text, enabling effective interaction with the model.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Dict[str, Any]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/asagi4/comfyui-prompt-control)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
