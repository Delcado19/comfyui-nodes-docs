# Documentation
- Class name: CLIPTextEncode
- Category: conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The CLIPTextEncode node processes text input with a CLIP model to generate a conditioning vector. It converts text into a format usable for further processing, such as in generative models. The node bridges the semantic gap between text and other modalities by creating a conditioning vector containing text information.

# Input types
## Required
- text
- The `text` parameter is essential to the node's operation because it provides the raw text data. It is expected to be a string, may contain multiline input, and supports dynamic prompts, which can significantly affect the encoding process and the resulting conditioning vector.
    - Comfy dtype: STRING
    - Python dtype: str
- clip
- The `clip` parameter specifies the CLIP model used for text encoding. It is a critical component because the quality and specificity of the CLIP model directly impact the node's ability to accurately encode text information into a conditioning vector.
    - Comfy dtype: CLIP
    - Python dtype: CLIPModel

# Output types
- CONDITIONING
- The output `CONDITIONING` is a key element produced by the node. It is the conditioning vector derived from the input text, usable to guide or condition subsequent processes such as image generation or other conditional models.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
