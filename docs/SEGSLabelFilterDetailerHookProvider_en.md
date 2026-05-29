# Documentation
- Class name: SEGSLabelFilterDetailerHookProvider
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

SEGSLabelFilterDetailerHookProvider node is designed to filter segmentation labels within the system. It plays a key role in ensuring that only the desired types of segments are processed, thereby improving the accuracy and relevance of subsequent analysis and operations.

# Input types
## Required
- preset
    - The preset parameter determines the initial settings or configuration for node operation. It is crucial because it defines the starting point for node processing, affecting the final results.
    - Comfy dtype: STRING
    - Python dtype: str
- labels
    - The label parameter is a list of segment types that the node is instructed to allow. It is a key input because it directly influences which segments pass through the filtering process.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- DETAILER_HOOK
    - The output of the node is a hook object configured with the specified labels. This hook object is important because it is used to apply the filtering criteria to the segmentation process.
    - Comfy dtype: OBJECT
    - Python dtype: SEGSLabelFilterDetailerHook

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
