
# Documentation
- Class name: RAFTFlowToImage
- Category: jamesWalker55
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The RAFTFlowToImage node's main function is to convert optical flow data into images. This process involves transforming flow data representing motion between two frames into a visual format for interpretation or further processing. This node plays an important role in the field of computer vision, especially in motion analysis and video processing tasks. By converting complex optical flow data into intuitive image representations, the RAFTFlowToImage node helps researchers and developers better understand and analyze motion patterns in video sequences.

# Input types
## Required
- raft_flow
    - The raft_flow input is a tensor representing optical flow data. This data is essential for generating corresponding image representations capturing motion between two frames. The optical flow data contains pixel-level motion information, which the RAFTFlowToImage node uses to create visualization results.
    - Comfy dtype: RAFT_FLOW
    - Python dtype: torch.Tensor

# Output types
- image
    - The output is an image representation of the optical flow data. This image visually displays the motion between two frames in a format that is easy to interpret and further process. Through color coding and intensity variations, the image effectively conveys the direction and magnitude of motion, providing valuable visual information for subsequent analysis and applications.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
