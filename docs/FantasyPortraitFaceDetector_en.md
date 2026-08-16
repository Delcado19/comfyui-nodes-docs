# Documentation
- Class name: FantasyPortraitFaceDetector
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

FantasyPortrait Face Detector is a ComfyUI node registered by `custom_nodes.ComfyUI-WanVideoWrapper`. The live metadata did not provide a longer description.

# Input types
## Required
- portrait_model
    - The portrait_model input is used by this node during execution.
    - Comfy dtype: FANTASYPORTRAITMODEL
    - Python dtype: object
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- adapter_scale
    - Scale for the adapter projection
    - Comfy dtype: FLOAT
    - Python dtype: float
- mouth_scale
    - Scale for the mouth projection
    - Comfy dtype: FLOAT
    - Python dtype: float
- emo_scale
    - Scale for the emotion projection
    - Comfy dtype: FLOAT
    - Python dtype: float
- device
    - Device to run the model on
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- portrait_embeds
    - The portrait_embeds output is produced by this node.
    - Comfy dtype: PORTRAIT_EMBEDS
    - Python dtype: object
- bbox
    - The bbox output is produced by this node.
    - Comfy dtype: BBOX
    - Python dtype: object
- landmarks
    - The landmarks output is produced by this node.
    - Comfy dtype: LANDMARKS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
