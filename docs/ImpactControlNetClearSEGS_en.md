# Documentation
- Class name: ControlNetClearSEGS
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The `doit` method of the ControlNetClearSEGS node is designed to process a collection of SEG objects by creating new SEG instances with certain properties set to None. It plays a key role in preprocessing or modifying segmentation data for further analysis or operations within the ImpactPack utility suite.

# Input types
## Required
- segs
    - The `segs` parameter is the collection of SEG objects that the node will process. It is essential to the node's operation, as it defines the input data that will be transformed into the new format.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[SEG, List[SEG]]

# Output types
- new_segs
    - The `new_segs` output is the modified list of SEG objects from the node. Each SEG object in this list has specific properties set to None, which may be important for certain types of subsequent processing or analysis.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
