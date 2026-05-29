
# Documentation
- Class name: Inference_Core_MeshGraphormer-DepthMapPreprocessor
- Category: ControlNet Preprocessors/Normal and Depth Estimators
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node preprocesses images for depth map generation and hand pose estimation using the MeshGraphormer model. It converts input images to model-compatible format, performs inference to generate depth maps and masks, and processes these outputs for further use in hand refinement tasks.

# Input types
## Required
- image
    - Input image or batch of images to be processed for depth map and mask generation. It plays a critical role during node execution, directly affecting the quality and accuracy of the generated depth maps and masks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Optional
- mask_bbox_padding
    - Determines the amount of padding around detected bounding boxes, affecting the size and coverage of the generated masks.
    - Comfy dtype: INT
    - Python dtype: int
- resolution
    - Specifies the resolution for depth map and mask detection, affecting the level of detail in the output.
    - Comfy dtype: INT
    - Python dtype: int
- mask_type
    - Defines the mask generation strategy, which can be based on depth values or compact bounding boxes, affecting the shape and coverage of the masks.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- mask_expand
    - Controls the expansion of masks beyond their original boundaries, helping ensure complete coverage of hand regions in the depth map.
    - Comfy dtype: INT
    - Python dtype: int
- rand_seed
    - Seed value for random number generation, ensuring reproducibility of the mask generation process.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - Processed images after depth map and mask generation, available for further analysis or visualization.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- INPAINTING_MASK
    - Mask indicating areas requiring inpainting or further processing, typically highlighting regions of interest such as hands.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
