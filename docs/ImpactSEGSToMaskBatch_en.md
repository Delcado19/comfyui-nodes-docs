# Documentation
- Class name: SEGSToMaskBatch
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

SEGSToMaskBatch node is designed to convert segmentation data into a batch of masks. It serves as an important intermediate in image processing pipelines, transforming segmentation outputs into a format that subsequent operations can efficiently process. This node abstracts the complexity of handling individual segmentations, allowing for streamlined batch processing of masks.

# Input types
## Required
- segs
    - 'segs' parameter is critical for the node's operation as it provides the segmentation data that needs to be converted to masks. This input significantly affects the node's execution and the quality of the generated masks.
    - Comfy dtype: SEGS
    - Python dtype: List[NamedTuple]

# Output types
- mask_batch
    - 'mask_batch' output is a collection of masks derived from the input segmentation data. It represents the main output of the node and is important for further analysis or processing in the workflow.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
