# Documentation
- Class name: AnimateDiffSampler
- Category: Animate Diff
- Output node: False
- Repo Ref: https://github.com/ArtVentureX/comfyui-animatediff.git

AnimateDiffSampler is a node designed to enhance the sampling process of generative models by introducing motion modules that bring dynamic elements into generated content. The node aims to provide a more lifelike experience by improving the fluidity and coherence of animations in the output. It achieves this by injecting motion data into the model's diffusion process and adjusting sampling settings accordingly, without delving into the specifics of the underlying methods or parameters.

# Input types
## Required
- motion_module
    - The motion module parameters are critical to AnimateDiffSampler, as they provide the dynamic data that makes generating animated content possible. They are central to the node's functionality, influencing how the model perceives and generates motion in the output.
    - Comfy dtype: MOTION_MODULE
    - Python dtype: MotionWrapper
- inject_method
    - The injection method parameter determines how AnimateDiffSampler integrates the motion module into the model's diffusion process. This is crucial for determining the effectiveness of motion integration and the quality of the resulting animation.
    - Comfy dtype: COMBO
    - Python dtype: str
- frame_number
    - The frame count parameter is a key factor in AnimateDiffSampler, as it defines the length of the animation to be generated. It directly affects the node's output by determining the number of frames to be produced, thereby influencing the overall duration and scope of the animation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- samples
    - The output samples of AnimateDiffSampler represent the generated animation frames. They are the final product of the node's processing, containing the motion and diffusion processes applied to create the animated content.
    - Comfy dtype: TORCH_TENSOR
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ArtVentureX/comfyui-animatediff)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
