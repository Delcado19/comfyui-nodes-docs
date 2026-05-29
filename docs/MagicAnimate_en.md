# Documentation
- Class name: MagicAnimate
- Category: ComfyUI Magic Animate
- Output node: False
- Repo Ref: https://github.com/thecooltechguy/ComfyUI-MagicAnimate

This node uses a generative model to create animated content based on an input image and a pose video. It aims to synthesize new frames by fusing the appearance of the input image with the motion captured in the pose video, producing a seamless animation that reflects the desired action and style.

# Input types
## Required
- magic_animate_model
    - The model parameter is critical because it defines the generative architecture used for animation. It encapsulates the pipeline, configuration, and various components required for the generation process, ensuring the node can produce the desired animated output.
    - Comfy dtype: MAGIC_ANIMATE_MODEL
    - Python dtype: Dict[str, Any]
- image
    - The image parameter serves as the visual foundation for the animation. It provides the appearance that will be animated according to the pose video. The quality and resolution of the image have a significant impact on the visual fidelity of the final animation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- pose_video
    - The pose video parameter determines the motion and sequence of the animation. It is essential for conveying the desired action and ensuring the fluidity of the animation. The frame rate and quality of the video directly affect the smoothness and realism of the animation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- seed
    - The seed parameter is crucial for ensuring the reproducibility and consistency of the generated animation. By setting a specific seed, the node can generate the same animation result under the same conditions, which is essential for iterative improvement and debugging.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- inference_steps
    - The inference steps parameter affects the depth of the generation process. More steps allow for more detailed and nuanced animation but may increase computational cost. This parameter is critical for balancing quality and performance.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output
    - The output of this node is the generated animation, which is a series of frames combining the appearance of the input image with the motion of the pose video. This output is the crystallization of the generation process, representing the primary function and purpose of the node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/thecooltechguy/ComfyUI-MagicAnimate)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
