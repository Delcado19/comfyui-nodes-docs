# Documentation
- Class name: EmptySEGS
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

EmptySEGS node's 'doit' method aims to generate an empty segmentation structure. Its purpose is to provide a baseline or placeholder when no actual segmentation data is available. This node is crucial when input data does not require detailed segmentation, ensuring workflow integrity while avoiding unnecessary complexity.

# Input types
## Optional
- input_data
    - Although the 'input_data' parameter is not required, it can be used to pass additional context or data to the EmptySEGS node if needed. Its role may be to enhance node functionality or integrate with other systems that may require input data for operation.
    - Comfy dtype: Any
    - Python dtype: Any

# Output types
- SEGS
    - The output parameter 'SEGS' represents the result of the EmptySEGS node operation. It provides an empty tuple where the first element is a shape representing segmentation dimensions, and the second element is a list that would normally contain segmentation data but is empty in this case. This output format allows seamless integration with systems expecting segmentation results even if no actual segmentation was performed.
    - Comfy dtype: Tuple[int, List[Any]]
    - Python dtype: Tuple[int, List[Any]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
