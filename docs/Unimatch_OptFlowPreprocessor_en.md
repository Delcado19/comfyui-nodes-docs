
# Documentation
- Class name: Unimatch_OptFlowPreprocessor
- Category: ControlNet Preprocessors/Optical Flow
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is specifically designed to process flow data, preparing it for subsequent processing or analysis, particularly within the context of the Unimatch system. Unimatch is a system for estimating and manipulating optical flow in video sequences. This node abstracts the complexities involved in preparing flow data, ensuring that the data format and resolution are suitable for effective operation of the Unimatch algorithm.

# Input types
## Required
- image
    - Image sequences that need to be processed to estimate optical flow. This input is essential for generating flow data between consecutive frames in a video sequence, serving as the foundation for flow analysis or manipulation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ckpt_name
    - The checkpoint filename of the Unimatch model. This parameter allows selection of a specific pre-trained model, affecting the accuracy and quality of optical flow estimation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- backward_flow
    - A boolean flag indicating whether to estimate reverse optical flow. This option enables bidirectional flow estimation, enhancing the analysis of inter-frame motion.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- bidirectional_flow
    - A boolean flag indicating whether to estimate bidirectional flow. This enhances motion analysis by considering both forward and backward motion between frames.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- OPTICAL_FLOW
    - Preprocessed optical flow data, ready for further analysis or visualization. This output is optimized for accuracy and efficiency in subsequent processing steps.
    - Comfy dtype: OPTICAL_FLOW
    - Python dtype: torch.Tensor
- PREVIEW_IMAGE
    - A visual representation of the flow data, typically used for motion preview or debugging purposes. This image can help understand the characteristics of the flow and verify the effectiveness of preprocessing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
