# Documentation
- Class name: PromptSchedule
- Category: FizzNodes 📅🅕🅝/ScheduleNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The PromptSchedule node manages and animates text prompts at specified frame counts. It creates smooth transitions between prompts by interpolating keyframes and applies weights to control the influence of each keyframe. This node is essential for generating dynamic and coherent text animations that evolve over time.

# Input types
## Required
- text
    - The 'text' parameter is a multiline string that defines the initial state of the animated prompt. It is crucial for setting the foundation from which the node will generate the animation sequence.
    - Comfy dtype: STRING
    - Python dtype: str
- max_frames
    - The 'max_frames' parameter determines the total number of frames the animation will run. It is a key factor in the overall duration and pacing of the animation.
    - Comfy dtype: INT
    - Python dtype: int
- current_frame
    - The 'current_frame' parameter indicates the current position within the animation sequence. It is essential for the node to know its place on the animation timeline.
    - Comfy dtype: INT
    - Python dtype: int
- print_output
    - The 'print_output' parameter is a boolean flag that, when set to True, prints the output of the animated prompt to the console. This is useful for debugging and real-time monitoring.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- clip
    - The 'clip' parameter is a reference to the CLIP model used within the node for text encoding. It plays a vital role in converting text prompts into a format suitable for animation.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
## Optional
- pw_a
    - The 'pw_a' parameter is a float representing the weight applied to the animation at the current frame. It influences the transition between prompts and contributes to the overall smoothness of the animation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pre_text
    - The 'pre_text' parameter is an optional multiline string that can be used to prefix the animated prompt. It provides additional context or setup for the animation sequence.
    - Comfy dtype: STRING
    - Python dtype: str
- app_text
    - The 'app_text' parameter is an optional multiline string that can be used to append additional information to the animated prompt. It extends the context or adds a suffix to the animation sequence.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- POS
    - The 'POS' output represents the positive conditioning for the current frame of the animation. It is derived from the interpolated prompts and is used to guide the positive generation of the animation.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, torch.Tensor]]]
- NEG
    - The 'NEG' output represents the negative conditioning for the current frame of the animation. It is used to balance the positive conditioning, ensuring balanced development of the animation sequence.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, torch.Tensor]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/FizzleDorf/ComfyUI_FizzNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
