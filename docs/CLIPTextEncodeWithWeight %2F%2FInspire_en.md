# Documentation
- Class name: CLIPTextEncodeWithWeight
- Category: InspirePack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node uses the CLIP model to process text data, offering adjustable encoding intensity and extra token weighting, allowing fine‑grained control of the text encoding process.

# Input types
## Required
- text
- The text parameter is required because it supplies the raw text input for the node. It forms the basis for encoding and weight adjustment.
    - Comfy dtype: STRING
    - Python dtype: str
- clip
- The clip parameter represents the CLIP model used to tokenize and encode the input text. It is critical to the node’s function because it determines the encoding process.
    - Comfy dtype: CLIP
    - Python dtype: CLIP
## Optional
- strength
- The intensity parameter allows adjustment of the encoding strength for text tokens. It modifies the encoding to better meet specific task requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- add_weight
- The add_weight parameter provides the ability to apply extra weight to tokens during encoding. It can further fine‑tune the encoding as needed for the task.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- pooled_output
- The pooled_output parameter represents the aggregated and condensed representation of the encoded text, the node’s output. It encapsulates the essence of the text for further use.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
