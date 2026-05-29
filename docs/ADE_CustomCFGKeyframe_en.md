
# Custom CFG Keyframe 🎭🅐🅓
## Documentation
- Class name: ADE_CustomCFGKeyframe
- Category: Animate Diff 🎭🅐🅓/sample settings
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

ADE_CustomCFGKeyframe node is designed to create and manage custom configuration keyframes within the Animate Diff framework. It allows specifying various animation parameters on the animation timeline, enabling precise control over the animation's behavior and appearance.

## Input types
### Required
- cfg_multival
    - Defines the configuration values for keyframes, which can affect various aspects of the animation process. Essential for customizing animation characteristics within specific time intervals.
    - Comfy dtype: MULTIVAL
    - Python dtype: Union[float, torch.Tensor]
- start_percent
    - Specifies the start point of a keyframe on the animation timeline as a percentage, allowing precise temporal control.
    - Comfy dtype: FLOAT
    - Python dtype: float
- guarantee_steps
    - Determines the minimum number of steps over which a keyframe's configuration is applied, ensuring a sustained effect for a certain duration.
    - Comfy dtype: INT
    - Python dtype: int

### Optional
- prev_custom_cfg
    - Enables chaining of custom configuration keyframes by specifying prior custom configuration groups, facilitating complex animation sequences.
    - Comfy dtype: CUSTOM_CFG
    - Python dtype: CustomCFGKeyframeGroup or None

## Output types
- custom_cfg
    - Comfy dtype: CUSTOM_CFG
    - Outputs a wrapped custom configuration object that defines the keyframes, ready to be integrated into the animation pipeline.
    - Python dtype: CustomCFGKeyframeGroup

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
