# Documentation
- Class name: BatchPromptScheduleLatentInput
- Category: FizzNodes 📅🅕🅝/BatchScheduleNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The `animate` method of the BatchPromptScheduleLatentInput node is designed to process and generate animated prompts for creating animation sequences in a batch processing environment. It accepts various parameters such as text, number of latents, and weights to control interpolation of prompts across frames. The node's main function is to create a series of prompts usable for animation sequences, with the ability to adjust each prompt's influence using provided weights. This method is critical for the animation process as it sets conditions for each frame's animation.

# Input types
## Required
- text
    - The 'text' parameter is a string containing the base prompt for the animation. It is a fundamental part of the animation process as it defines the initial conditions for the animation sequence. The expected text format is one the node can interpret and use to generate prompts.
    - Comfy dtype: STRING
    - Python dtype: str
- num_latents
    - The 'num_latents' parameter specifies the number of latent variables used in the animation process. It is crucial for determining the range and diversity of animation frames. This parameter affects how the latent space is explored and utilized to create the animation.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
## Optional
- print_output
    - The 'print_output' parameter is a boolean flag that, when set to True, prints the output of animated prompts to the console. This is useful for debugging purposes or visually inspecting prompts as they are generated.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- start_frame
    - The 'start_frame' parameter determines the frame at which the animation sequence begins. This is an optional parameter that allows customization of the animation's starting point.
    - Comfy dtype: INT
    - Python dtype: int
- pw_a
    - The 'pw_a' parameter is a float representing the weight used for interpolating animated prompts. It influences transitions between frames and contributes to the smoothness of the animation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- pre_text
    - The 'pre_text' parameter is an optional string that can be used to prepend text to each animated prompt. This is useful for adding a consistent element at the beginning of each prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- app_text
    - The 'app_text' parameter is an optional string that can be used to append text to each animated prompt. It allows adding a consistent element at the end of each prompt.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- POS
    - The 'POS' output provides positive conditioning information for each frame's animation. It is derived from interpolated positive prompts and is crucial for guiding the animation toward the desired outcome.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- NEG
    - The 'NEG' output provides negative conditioning information for each frame's animation. It is derived from interpolated negative prompts and helps refine the animation by steering it away from undesired results.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- INPUT_LATENTS
    - The 'INPUT_LATENTS' output contains the latent variables used in the animation process. These latent variables are essential for generating animation frames and represent the underlying data used to create the final animation.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/FizzleDorf/ComfyUI_FizzNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
