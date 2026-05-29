# Documentation
- Class name: PromptScheduleNodeFlowEnd
- Category: FizzNodes 📅🅕🅝/ScheduleNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The `animate` method of the `PromptScheduleNodeFlowEnd` class generates animation prompts from given text and parameters. It processes input text to create a sequence of prompts for driving animation sequences, accounting for various weights and conditions to ensure smooth transitions between frames.

# Input types
## Required
- text
    - The `text` parameter is the key input for the node, as it provides the raw text used to generate animation prompts. It directly affects the content and flow of the animation.
    - Comfy dtype: STRING
    - Python dtype: str
- max_frames
    - The `max_frames` parameter defines the maximum number of frames in the animation sequence. It determines the total length of the animation and affects how prompts are distributed across frames.
    - Comfy dtype: INT
    - Python dtype: int
- print_output
    - The `print_output` parameter controls whether intermediate results of the animation process should be printed. Useful for debugging or providing feedback during animation creation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- current_frame
    - The `current_frame` parameter represents the current position in the animation sequence. It helps the node determine which prompt to use at any given moment in the animation.
    - Comfy dtype: INT
    - Python dtype: int
- clip
    - The `clip` parameter is a key input for the node, as it represents the CLIP model used to tokenize and encode prompts into a format suitable for animation.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
## Optional
- pre_text
    - The `pre_text` parameter adds context before the main animation prompt. It can influence the initial state of the animation, especially useful when introducing sections.
    - Comfy dtype: STRING
    - Python dtype: str
- app_text
    - The `app_text` parameter appends context after the main animation prompt. It extends the animation with additional information or provides a conclusion to the sequence.
    - Comfy dtype: STRING
    - Python dtype: str
- pw_a
    - The `pw_a` parameter is an optional weight that adjusts the influence of certain prompts in the animation. It provides a way to fine-tune the animation based on specific creative requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pw_b
    - The `pw_b` parameter is similar to `pw_a` but allows independent control over different aspects of animation weights.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pw_c
    - The `pw_c` parameter extends customization options for animation weights, providing an additional layer of control over the animation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pw_d
    - The `pw_d` parameter is another optional weight that helps fine-tune the animation, allowing precise adjustments to the animation's progression.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- POS
    - The `POS` output provides positive conditioning data for the animation, representing the desired direction or outcome for each frame.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, torch.Tensor]]]
- NEG
    - The `NEG` output provides negative conditioning data, used to define what the animation should avoid or move away from in each frame.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, torch.Tensor]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/FizzleDorf/ComfyUI_FizzNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
