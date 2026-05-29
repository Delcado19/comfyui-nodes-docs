# Documentation
- Class name: LatentKeyframeBatchedGroupNode
- Category: Adv-ControlNet 🛂🅐🅒🅝/keyframes
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

LatentKeyframeBatchedGroupNode manages and creates a batch of latent keyframes with varying strengths. It allows integration of previous latent keyframes and provides a function to print keyframe details. This node plays a crucial role in generating and manipulating keyframes within the ControlNet framework.

# Input types
## Required
- float_strengths
- The 'float_strengths' parameter is essential for determining the strength of each keyframe in the batch. It can be a single float or an iterable of floats, directly affecting keyframe creation within the node.
    - Comfy dtype: FLOAT
    - Python dtype: Union[float, List[float]]
## Optional
- prev_latent_kf
- The 'prev_latent_kf' parameter allows integration of a previous latent keyframe group into the current operation. This is especially useful for building upon an existing keyframe structure.
    - Comfy dtype: LATENT_KEYFRAME
    - Python dtype: Optional[LatentKeyframeGroup]
- print_keyframes
- When the 'print_keyframes' parameter is set to True, logging of keyframe information is enabled. This aids debugging and understanding the flow of keyframes through the node.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- LATENT_KF
- The 'LATENT_KF' output represents the batch of latent keyframes obtained after processing input strengths and integrating any previous keyframes. This is a key output for further processing in the ControlNet system.
    - Comfy dtype: LATENT_KEYFRAME
    - Python dtype: LatentKeyframeGroup

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
