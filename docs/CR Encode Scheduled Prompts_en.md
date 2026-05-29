# Documentation
- Class name: CR_EncodeScheduledPrompts
- Category: Comfyroll/Animation/Prompt
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_EncodeScheduledPrompts node is designed to manage the encoding of prompts within an animation sequence. It intelligently blends the current prompt and the next prompt based on specified weights, ensuring smooth transitions between states. This node is essential for creating coherent and content-rich animations.

# Input types
## Required
- clip
    - The clip parameter is critical as it represents the core input for the encoding process. It is the raw data that will be tokenized and encoded to generate the prompt.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- current_prompt
    - The current_prompt parameter serves as the text input used in the current animation. It is a key component in the encoding process as it defines the starting point of the transition.
    - Comfy dtype: STRING
    - Python dtype: str
- next_prompt
    - The next_prompt parameter represents the upcoming text input to which the animation will transition. It plays a crucial role in determining the direction of prompt encoding.
    - Comfy dtype: STRING
    - Python dtype: str
- weight
    - The weight parameter is used to control the blending of the current prompt and the next prompt. It directly impacts the encoding process by determining the intensity of the transition.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- CONDITIONING
    - The CONDITIONING output represents the encoded prompt, ready for use in the animation. It is a critical output as it provides the necessary data for subsequent animation steps.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, torch.Tensor]]]
- show_help
    - The show_help output provides a URL link to documentation for further assistance and understanding of how to effectively use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
