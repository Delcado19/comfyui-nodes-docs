# Documentation
- Class name: NLFPredictPoses
- Category: SCAIL-Pose
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-SCAIL-Pose

NLF Predict Poses is a ComfyUI node registered by `custom_nodes.ComfyUI-SCAIL-Pose`. The live metadata did not provide a longer description.

# Input types
## Required
- nlf_model
    - The nlf_model input is used by this node during execution.
    - Comfy dtype: NLF_MODEL
    - Python dtype: object
- images
    - Input images (BHWC format)
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- per_batch
    - Images per batch. -1 = all at once. 1 = lowest VRAM usage.
    - Comfy dtype: INT
    - Python dtype: int
- num_aug
    - Number of test-time augmentations. More = slower but more accurate.
    - Comfy dtype: INT
    - Python dtype: int
- detector_threshold
    - Person detection confidence threshold
    - Comfy dtype: FLOAT
    - Python dtype: float

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
[View source repository](https://github.com/kijai/ComfyUI-SCAIL-Pose)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
