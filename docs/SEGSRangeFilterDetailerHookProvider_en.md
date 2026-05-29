# Documentation
- Class name: SEGSRangeFilterDetailerHookProvider
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

SEGSRangeFilterDetailerHookProvider node aims to apply a filtering mechanism to the segmentation process. It filters segments based on the specified range, ensuring only segments meeting the defined criteria are considered. This node enhances segmentation precision by focusing on relevant areas defined by user parameters.

# Input types
## Required
- target
    - The 'target' parameter defines the region of interest for the segmentation process. It is crucial because it determines which segments will be filtered. The node operates based on the provided dimensions and coordinates, making this parameter the core of the process.
    - Comfy dtype: COMBO[area(=w*h), width, height, x1, y1, x2, y2, length_percent]
    - Python dtype: Union[str, Tuple[int, int]]
- mode
    - The 'mode' parameter determines whether to keep segments inside or outside the target region. This is a binary choice that significantly impacts the segmentation result, allowing precise control over the filtering criteria.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- min_value
    - The 'min_value' parameter sets the minimum threshold for segment values. It plays a key role in filtering out segments that do not meet the minimum standard, thereby refining the segmentation result.
    - Comfy dtype: INT
    - Python dtype: int
- max_value
    - The 'max_value' parameter sets the maximum limit for segment values. It ensures that segments exceeding this limit are excluded from the final segmentation, maintaining the integrity of the filtered output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- DETAILER_HOOK
    - The output 'DETAILER_HOOK' is a hook object that encapsulates the filtering criteria and applies it to the segmentation process. It is important because it represents the result of the node operation, providing a way to integrate the filtering logic into a broader segmentation workflow.
    - Comfy dtype: DETAILER_HOOK
    - Python dtype: SEGSRangeFilterDetailerHook

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
