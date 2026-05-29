
# Documentation
- Class name: SaltCLIPTextEncodeSequence
- Category: SALT/Scheduling/Conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltCLIPTextEncodeSequence node is specifically designed to generate a sequence of conditioning based on a text prompt schedule for use in audio visualization. It leverages the CLIP model to encode text prompts into conditioning, adjusts according to frame count, and applies token normalization and weight interpretation strategies to tailor the output to specific visualization requirements.

# Input types
## Required
- clip
    - The CLIP model used to encode text prompts into conditioning format. It plays a crucial role in interpreting text and converting it into a form usable for generating visualizations.
    - Comfy dtype: CLIP
    - Python dtype: object
- token_normalization
    - Specifies the normalization method for tokens generated from the text prompt, affecting how the text is processed and encoded into conditioning.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- weight_interpretation
    - Determines how weights are interpreted during the encoding process, affecting the final conditioning output used for visualization.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- frame_count
    - The total number of frames for which conditioning needs to be generated, guiding the sequence generation process.
    - Comfy dtype: INT
    - Python dtype: int
- text
    - A text prompt schedule provided in a structured format, defining the content and timing of each frame in the sequence.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- conditioning_sequence
    - A sequence of conditioning generated based on the provided text prompt and frame count, specifically for audio visualization purposes.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[object]
- frame_count
    - The total number of frames for which conditioning has been generated, reflecting the input frame count.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
