# Load AnimateDiff Model 🎭🅐🅓②
## Documentation
- Class name: ADE_LoadAnimateDiffModel
- Category: Animate Diff 🎭🅐🅓/② Gen2 nodes ②
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node aims to load the AnimateDiff model to facilitate integration and application of motion models within the AnimateDiff framework for the purpose of animation. It serves as a foundational component in the animation pipeline, enabling users to leverage advanced animation techniques.

## Input types
### Required
- model_name
    - Specify the name of the motion model to be loaded. This is a critical input as it determines which motion model will be used for animation within the AnimateDiff framework.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

### Optional
- ad_settings
    - Optional parameters that may include specific animation settings, providing additional customization and control over the animation process.
    - Comfy dtype: AD_SETTINGS
    - Python dtype: AnimateDiffSettings

## Output types
- MOTION_MODEL
    - Comfy dtype: MOTION_MODEL_ADE
    - Outputs the loaded motion model, ready for further processing and application in the animation pipeline.
    - Python dtype: MotionModelPatcher

## Usage tips
- Infra type: GPU
<!-- - Common nodes:
    - [ADE_ApplyAnimateDiffModel](../../ComfyUI-AnimateDiff-Evolved/Nodes/ADE_ApplyAnimateDiffModel.md) -->

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
