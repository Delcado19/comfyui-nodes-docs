# Documentation
- Class name: BatchPromptSchedule
- Category: FizzNodes 📅🅕🅝/BatchScheduleNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The BatchPromptSchedule node is designed to manage and animate prompts in batch processing environments. It accepts various parameters to customize the animation process, including text, clip references, and frame specifications. The node's primary function is to coordinate animation sequences, ensuring smooth transitions between frames by applying weights and conditions. It is particularly suitable for creating complex animations that require precise control over each frame's content.

# Input types
## Required
- text
    - The 'text' parameter is a string containing the animation prompt. It is essential for defining the content and sequence of the animation. This input drives the overall narrative and structure of the animation output.
    - Comfy dtype: STRING
    - Python dtype: str
- clip
    - The 'clip' parameter is a reference to the multimedia clip used during the animation process. It plays a significant role in how the animation is visually represented and is crucial for integrating audiovisual elements into the animation.
    - Comfy dtype: CLIP
    - Python dtype: Any
- max_frames
    - The 'max_frames' parameter specifies the maximum number of frames in the animation sequence. It is a key determinant of the animation's duration and rhythm, affecting the overall timing and flow of the animation.
    - Comfy dtype: INT
    - Python dtype: int
- print_output
    - The 'print_output' parameter is a boolean flag that, when set to True, prints intermediate results of the animation process. This is helpful for debugging and understanding the node's operation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- pre_text
    - The 'pre_text' parameter is an optional string that provides additional context or setup for the animation prompt. It can be used to introduce or frame the content of the animation.
    - Comfy dtype: STRING
    - Python dtype: str
- app_text
    - The 'app_text' parameter is an optional string that adds a closing statement or ending declaration to the animation prompt. It helps to complete or summarize the message of the animation.
    - Comfy dtype: STRING
    - Python dtype: str
- start_frame
    - The 'start_frame' parameter is an optional integer that sets the starting frame of the animation. It allows customization of the starting point of the animation sequence.
    - Comfy dtype: INT
    - Python dtype: int
- pw_a
    - The 'pw_a' parameter is an optional float representing the weight applied to the animation prompt. It is used to adjust the influence of certain prompts in the animation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pw_b
    - The 'pw_b' parameter is another optional float used as a secondary weight for the animation prompt. It further refines control over the animation content based on the assigned weights.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pw_c
    - The 'pw_c' parameter is an optional float serving as a tertiary weight for the animation prompt. It contributes to the nuanced control of the animation's progression.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pw_d
    - The 'pw_d' parameter is an optional float representing a quaternary weight for the animation prompt. It provides an additional layer of control over the details of the animation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- POS
    - The 'POS' output provides positive conditioning data derived from the animation prompt. It is significant for guiding the direction and tone of the animation towards more favorable outcomes.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, torch.Tensor]]]
- NEG
    - The 'NEG' output provides negative conditioning data extracted from the animation prompt. It is crucial for establishing contrast and balance in the animation by highlighting less desirable elements.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, torch.Tensor]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/FizzleDorf/ComfyUI_FizzNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
