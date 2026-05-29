# Documentation
- Class name: CR_SimplePromptScheduler
- Category: Comfyroll/Animation/Schedulers
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_SimplePromptScheduler is a node for managing and scheduling prompts based on a keyframe list. It allows automatic prompt changes at specific frames, facilitating dynamic and frame-specific content creation without manual intervention. This node is essential for simplifying the drawing process, especially when handling complex sequences requiring precise prompt adjustments.

# Input types
## Required
- keyframe_list
    - The keyframe list is a critical parameter that defines the sequence of prompts and their corresponding frames. It enables the node to schedule prompts efficiently, ensuring the correct prompt is displayed at the right time in the animation.
    - Comfy dtype: STRING
    - Python dtype: str
- current_frame
    - The current frame parameter is crucial as it indicates the current point on the animation timeline. The node uses this information to determine which prompt in the keyframe list should be active for the ongoing frame.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- keyframe_format
    - The keyframe format parameter specifies the structure of keyframe data, allowing the node to correctly parse and interpret the keyframe list. It is important for maintaining the integrity and accuracy of scheduled prompts.
    - Comfy dtype: COMBO['CR', 'Deforum']
    - Python dtype: str

# Output types
- current_prompt
    - The current prompt output provides the active prompt for the current frame. It is important as it directly affects the content displayed or processed in the animation.
    - Comfy dtype: STRING
    - Python dtype: str
- next_prompt
    - The next prompt output indicates the prompt that will be active in the next frame. This allows anticipation of upcoming content and can be used for smooth transitions between prompts.
    - Comfy dtype: STRING
    - Python dtype: str
- weight
    - The weight output represents the transition weight between the current prompt and the next prompt. It is used for interpolating prompts to achieve gradual changes, enhancing the smoothness of the animation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- show_help
    - The show help output provides a link to documentation for further assistance. It is useful for users who need more information about node functionality or require troubleshooting support.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
