
# Documentation
- Class name: ttN pipeEncodeConcat
- Category: ttN/pipe
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ttN pipeEncodeConcat node is designed to enhance and concatenate conditioning information within a pipeline, utilizing advanced encoding techniques to optimize and merge text conditioning inputs, thereby providing better model guidance. This node plays a key role in processing and integrating various conditioning inputs, offering more refined and targeted control over the generation process.

# Input types
## Required
- pipe
    - Represents the pipeline state, including the model, conditioning settings, and other relevant parameters, serving as the foundation for the encoding and concatenation process.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- toggle
    - A boolean flag that determines whether to execute the encoding and concatenation process.
    - Comfy dtype: COMBO[BOOLEAN]
    - Python dtype: bool

## Optional
- positive
    - Optional positive text input for conditioning, intended to guide the model in generating content consistent with specified attributes.
    - Comfy dtype: STRING
    - Python dtype: str
- positive_token_normalization
    - Specifies the method for token normalization in the positive conditioning, affecting how the model interprets and weights these tokens.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- positive_weight_interpretation
    - Defines how weights in the positive conditioning are interpreted, influencing the model's generation process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- negative
    - Optional negative text input for conditioning, guiding the model to avoid generating content with specified attributes.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_token_normalization
    - Specifies the method for token normalization in the negative conditioning, affecting how the model interprets and weights these tokens.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- negative_weight_interpretation
    - Defines how weights in the negative conditioning are interpreted, opposite to the positive conditioning, influencing the model's generation process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- optional_positive_from
    - Optional advanced positive conditioning input, allowing for more nuanced and specific model guidance.
    - Comfy dtype: CONDITIONING
    - Python dtype: list of tuples
- optional_negative_from
    - Optional advanced negative conditioning input, enabling more detailed and targeted model influence.
    - Comfy dtype: CONDITIONING
    - Python dtype: list of tuples
- optional_clip
    - Optional CLIP model parameters, which can be used to further optimize the conditioning process through visual guidance.
    - Comfy dtype: CLIP
    - Python dtype: object

# Output types
- pipe
    - Updated pipeline state, containing the newly encoded and concatenated conditioning information.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- positive
    - Enhanced and concatenated positive conditioning output, ready to guide the model's generation.
    - Comfy dtype: CONDITIONING
    - Python dtype: list of tuples
- negative
    - Enhanced and concatenated negative conditioning output, providing the model with refined guidance opposite to the positive conditioning.
    - Comfy dtype: CONDITIONING
    - Python dtype: list of tuples
- clip
    - CLIP model parameters, potentially updated during the encoding and concatenation process, used to further optimize visual guidance.
    - Comfy dtype: CLIP
    - Python dtype: object
- ui
    - A UI component that displays generated text, providing insight into the encoding and concatenation process.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
