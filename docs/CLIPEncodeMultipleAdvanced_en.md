
# Documentation
- Class name: CLIPEncodeMultipleAdvanced
- Category: Bmad/conditioning
- Output node: False
- Repo Ref: https://github.com/Stability-AI/StableCascade

The CLIPEncodeMultipleAdvanced node is designed for advanced text encoding using the CLIP model, allowing custom token normalization and weight interpretation. It supports encoding multiple inputs simultaneously, adjusting the encoding process based on provided parameters to generate a series of conditioning constraints.

# Input types
## Required
- clip
    - The CLIP model used for encoding. It is essential for interpreting input text as embedding vectors.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- token_normalization
    - Determines whether tokens are normalized during encoding, affecting the final embedding vectors.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- weight_interpretation
    - Adjusts the weight interpretation of encoding, influencing how embedding vectors are computed.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- inputs_len
    - Specifies the number of inputs to encode. This allows the node to process multiple inputs simultaneously, generating a series of conditioning constraints.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- conditioning
    - A list of conditioning constraints generated based on encoded inputs. This is essential for subsequent processing steps that depend on these constraints.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Stability-AI/StableCascade)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
