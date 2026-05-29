# Documentation
- Class name: PromptScheduleEncodeSDXL
- Category: FizzNodes 📅🅕🅝/ScheduleNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The PromptScheduleEncodeSDXL node is designed to craft and encode prompts for a sequence of frames in a video. It takes into account various parameters such as width, height, crop dimensions, and text prompts to generate a schedule of prompts, which are then encoded to create conditioning for further processing. This node plays a critical role in animation pipelines by managing the complexity of prompt processing and ensuring smooth transitions between frames.

# Input types
## Required
- width
    - The width parameter specifies the width of the video frames. It is essential for determining the resolution and aspect ratio of the output video, affecting the overall visual quality and how the animation is presented.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the vertical resolution of the video frames. It works in conjunction with the width parameter to ensure proper scaling and display of the video content.
    - Comfy dtype: INT
    - Python dtype: int
- text_g
    - The text_g parameter holds the text prompt for the green channel. These prompts are critical for guiding the animation process and defining the story or visual elements that will appear in the final animation.
    - Comfy dtype: STRING
    - Python dtype: str
- max_frames
    - The max_frames parameter defines the maximum number of frames the animation will contain. This setting is important for controlling the length of the animation and managing computational resources.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- print_output
    - The print_output parameter is an optional flag that, when set to true, prints debug information during node execution. This is useful for developers to monitor progress and troubleshoot any issues that may arise.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- POS
    - The POS output provides positive conditioning data derived from the input prompts and parameters. This output is important as it lays the groundwork for subsequent video processing steps, influencing the final result of the animation.
    - Comfy dtype: CONDITIONING
    - Python dtype: Tuple[str, Dict[str, torch.Tensor]]
- NEG
    - The NEG output provides negative conditioning data, complementing the POS output by offering additional context or contrast. This output is used to refine the animation and add depth to the visual storytelling.
    - Comfy dtype: CONDITIONING
    - Python dtype: Tuple[str, Dict[str, torch.Tensor]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/FizzleDorf/ComfyUI_FizzNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
