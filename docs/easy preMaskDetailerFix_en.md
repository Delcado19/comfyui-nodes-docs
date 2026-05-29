# Documentation
- Class name: preMaskDetailerFix
- Category: EasyUse/Fix
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

preMaskDetailerFix is a node designed to enhance detail preservation and editing capabilities in image processing workflows. It focuses on refining the mask application process to ensure accurate targeting of intended image regions. The node operates by considering various parameters that guide its behavior, such as mask specifications, guide size, and editing configurations. Conceptually, it centers on improving fidelity and precision in image manipulation tasks, without being limited to specific implementation details.

# Input types
## Required
- pipe
    - The 'pipe' parameter is critical because it carries the entire state of the image processing pipeline, including the model, image, and other settings. It is essential for the node's proper functionality and continuity of the processing workflow.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict
- mask
    - The 'mask' parameter is essential for defining the region of interest in the image that needs enhancement or modification. It directly affects the node's ability to apply detailed restoration to the target area.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- guide_size
    - The 'guide_size' parameter is important because it determines the size of the guide map used to refine the detail restoration process. It influences how the node identifies and processes areas requiring attention.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- pipe
    - The 'pipe' output is an updated version of the input pipeline, now with detail restoration applied and settings for further processing. This is a critical output as it allows the pipeline to continue using enhanced image data.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
