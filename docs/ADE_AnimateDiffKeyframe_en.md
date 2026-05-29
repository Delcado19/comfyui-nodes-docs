# Documentation
- Class name: ADKeyframeNode
- Category: Animate Diff 🎭🅐🅓
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The ADKeyframeNode class is used to manage keyframes of animation differences. It provides functions to load and manipulate keyframes, ensuring the continuity and clarity of the animation sequence. This node is crucial for creating smooth transitions and maintaining the integrity of the entire animation sequence.

# Input types
## Required
- start_percent
- The start_percent parameter defines the starting position of the keyframe on the animation timeline. It is essential for determining the timing of the animation and ensuring the correct ordering of the keyframe sequence.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- prev_ad_keyframes
- The prev_ad_keyframes parameter allows users to provide a set of previous keyframes, to which new keyframes will be added. This is crucial for maintaining continuity and building upon the existing animation framework.
    - Comfy dtype: AD_KEYFRAMES
    - Python dtype: ADKeyframeGroup
- scale_multival
- The scale_multival parameter adjusts the scaling of the animation at the keyframe. It is essential for controlling the intensity of the animation changes and the range at specific points in the sequence.
    - Comfy dtype: MULTIVAL
    - Python dtype: Union[float, torch.Tensor]
- effect_multival
- The effect_multival parameter is used to modify the effect intensity at the keyframe. It plays a crucial role in fine-tuning the visual impact of the animation at specific moments.
    - Comfy dtype: MULTIVAL
    - Python dtype: Union[float, torch.Tensor]
- inherit_missing
- The inherit_missing parameter determines whether the keyframe should inherit properties from previous keyframes if they are not explicitly defined. This is crucial for maintaining a consistent animation style throughout the entire sequence.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- guarantee_steps
- The guarantee_steps parameter ensures the minimum number of steps between keyframes, which is important for the smoothness and fluidity of the animation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- AD_KEYFRAMES
- The output of ADKeyframeNode is a set of keyframes representing an animation sequence with newly added or modified keyframes. This output is very important for subsequent processing and rendering of the animation.
    - Comfy dtype: AD_KEYFRAMES
    - Python dtype: ADKeyframeGroup

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
