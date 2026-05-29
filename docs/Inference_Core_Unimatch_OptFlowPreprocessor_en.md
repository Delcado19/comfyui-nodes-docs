
# Documentation
- Class name: Inference_Core_Unimatch_OptFlowPreprocessor
- Category: ControlNet Preprocessors/Optical Flow
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is designed specifically for preprocessing flow estimation data, with a focus on enhancing and optimizing flow estimation through techniques such as upsampling, masking, and applying attention mechanisms. It leverages the Unimatch algorithm to process and improve the quality of flow predictions, making it suitable for tasks requiring precise motion analysis between video frames.

# Input types
## Required
- image
    - Image sequences requiring flow estimation. This input is critical to the node's operation, as it directly impacts the accuracy and quality of flow predictions.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ckpt_name
    - Checkpoint filename for the Unimatch model. This determines the specific pre-trained model version used for flow estimation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- backward_flow
    - A boolean flag indicating whether to estimate backward flow. This affects the directionality of flow estimation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- bidirectional_flow
    - A boolean flag indicating whether to estimate bidirectional flow, enhancing motion analysis by considering both forward and backward flows simultaneously.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- OPTICAL_FLOW
    - Enhanced flow predictions processed by the Unimatch algorithm, providing fine-grained motion estimation between video frames.
    - Comfy dtype: OPTICAL_FLOW
    - Python dtype: torch.Tensor
- PREVIEW_IMAGE
    - Visualization of flow predictions, offering a visual representation of inter-frame motion for easier interpretation and analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
