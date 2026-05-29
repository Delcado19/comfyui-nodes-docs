# Documentation
- Class name: CLIPTextEncodeSequence
- Category: conditioning
- Output node: False
- Repo Ref: https://github.com/WASasquatch/WAS_Extras

The CLIPTextEncodeSequence node is designed to encode a series of text lines into a set of conditioning sequences for further processing in neural networks. It takes into account token normalization and weight interpretation methods to produce meaningful representations of the text.

# Input types
## Required
- clip
    - The 'clip' parameter is essential for the encoding process, as it provides the context or model used for text encoding. It directly affects how the text is converted into numerical representations.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- token_normalization
    - The 'token_normalization' parameter determines how tokens in the text are normalized before encoding. It plays a critical role in ensuring the encoded text maintains a consistent scale, which is important for subsequent neural network operations.
    - Comfy dtype: COMBO[none, mean, length, length+mean]
    - Python dtype: str
- weight_interpretation
    - The 'weight_interpretation' parameter defines the method for interpreting weights associated with text tokens during encoding. It influences the quality and characteristics of the resulting encoded sequences.
    - Comfy dtype: COMBO[comfy, A1111, compel, comfy++]
    - Python dtype: str
- text
    - The 'text' parameter is the raw text input processed by the node. It is multi-line and can contain a series of text lines, each of which will be encoded into a conditioning sequence. The content and structure of the text significantly affect the node's output.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- conditioning_sequence
    - The 'conditioning_sequence' output is a series of encoded text lines, each represented as a pair of an index and an encoded vector. This output is important because it provides the necessary input for downstream neural network models that require text-based conditioning.
    - Comfy dtype: CONDITIONING_SEQ
    - Python dtype: List[Tuple[int, List[float]]]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/WAS_Extras)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
