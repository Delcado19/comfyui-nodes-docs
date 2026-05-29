# Documentation
- Class name: MotionctrlSVDLoader
- Category: motionctrl
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-MotionCtrl-SVD.git

MotionctrlSVDLoader class initializes and manages the Motionctrl-SVD model, efficiently loading and preparing it for execution.

# Input types
## Required
- ckpt_name
    - ckpt_name parameter specifies the checkpoint filename for the Motionctrl-SVD model. It directs the loader to use the correct model state, which is essential for later operations and results.
    - Comfy dtype: STRING
    - Python dtype: str
- frame_length
    - frame_length parameter defines the temporal dimension of model input data. It affects the model's ability to process and generate coherent motion sequences within a given frame span.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - steps parameter determines the number of iterations the model performs during operation. It directly influences computational efficiency and the quality of generated motion sequences.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- model
    - Output model loads and configures the Motionctrl-SVD, ready for motion sequence analysis and synthesis. It encapsulates the model's capability for further use, combining input parameters and loader functionality.
    - Comfy dtype: MOTIONCTRLSVD
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-MotionCtrl-SVD)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
