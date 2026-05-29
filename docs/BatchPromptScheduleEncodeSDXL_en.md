# Documentation
- Class name: BatchPromptScheduleEncodeSDXL
- Category: FizzNodes 📅🅕🅝/BatchScheduleNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

BatchPromptScheduleEncodeSDXL node is designed to process and generate an animated sequence of prompts for images or videos. It accepts various parameters such as text prompts, dimensions, and interpolation weights to create a dynamic prompt sequence, then encodes these prompts for use in a generative model. This node plays a key role in the animation pipeline by generating the necessary conditioning data, enabling coherent and smooth transitions between frames.

# Input types
## Required
- width
    - The width parameter is essential for defining the dimensions of the generated media. It works with the height parameter to ensure the output adheres to the required aspect ratio and resolution.
    - Comfy dtype: INT
    - Python dtype: int
- text_g
    - The text_g input contains the string of graphic prompts used to generate the animation. It is a key component shaping the visual output of the animation sequence.
    - Comfy dtype: STRING
    - Python dtype: str
- max_frames
    - The max_frames parameter specifies the maximum number of frames to generate for the animation. It is a key factor determining the final output length and complexity.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- pw_a
    - The pw_a parameter is an optional weight factor used during interpolation. It allows fine‑tuning the influence of certain prompts in the animation sequence.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- POS
    - The POS output provides positive conditioning data derived from the prompts, guiding the generation process toward more favorable results.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- NEG
    - The NEG output contains negative conditioning data, which helps steer the generation process away from undesired outcomes by providing counterexamples or constraints.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/FizzleDorf/ComfyUI_FizzNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
