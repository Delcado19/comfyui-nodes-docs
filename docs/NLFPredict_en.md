# Documentation
- Class name: NLFPredict
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: NLFMODEL
    - Python dtype: object
- images
    - Input images for the model
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- per_batch
    - How many images to process at once. -1 means all at once.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- pose_results
    - The pose_results output is produced by this node.
    - Comfy dtype: NLFPRED
    - Python dtype: object
- bboxes
    - The bboxes output is produced by this node.
    - Comfy dtype: BBOX
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
