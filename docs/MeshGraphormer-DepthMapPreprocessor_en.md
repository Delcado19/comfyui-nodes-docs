
# Documentation
- Class name: MeshGraphormer-DepthMapPreprocessor
- Category: ControlNet Preprocessors/Normal and Depth Estimators
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The MeshGraphormer-DepthMapPreprocessor node is designed to refine hand depth maps and predict 2D joint positions in image space using a Graphormer-based model. It processes input images to generate enhanced depth maps and corresponding masks, leveraging deep learning techniques to improve the accuracy of hand pose estimation.

# Input types
## Required
- image
    - The input image to be processed for hand depth map refinement and 2D joint position prediction. It is the primary data source for the node's operations.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Optional
- mask_bbox_padding
    - This parameter defines the padding around the detected hand bounding box for mask generation, affecting the size and coverage of the output mask. It ensures the mask adequately encloses the hand region for accurate depth map refinement.
    - Comfy dtype: INT
    - Python dtype: int
- resolution
    - Specifies the resolution for processing the input image. This parameter affects the level of detail in the generated depth map and mask.
    - Comfy dtype: INT
    - Python dtype: int
- mask_type
    - Specifies the method for generating the mask from the depth map, providing options such as 'based_on_depth' (depth-based mask), 'tight_bboxes' (tight bounding box-based mask), and 'original' (use the original mask). This choice influences the mask generation strategy and the final output quality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- mask_expand
    - Determines the expansion size of the mask beyond its original boundaries, affecting the coverage area of the mask in the output. This parameter allows fine-tuning of the mask size for better depth map refinement.
    - Comfy dtype: INT
    - Python dtype: int
- rand_seed
    - A random seed used to ensure reproducibility during the mask and depth map generation process. It helps maintain consistency when running the node multiple times with the same input.
    - Comfy dtype: INT
    - Python dtype: int
- detect_thr
    - The detection threshold for the Graphormer model, determining the sensitivity of hand detection in the input image. This parameter affects the model's ability to accurately identify hands under various conditions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- presence_thr
    - The presence threshold for the Graphormer model, influencing the model's confidence in the presence of detected hands in the input image. It plays an important role in ensuring the reliability of depth map and 2D joint predictions.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- IMAGE
    - Refined depth maps for each detected hand in the input image, providing enhanced detail and accuracy for hand pose estimation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- INPAINTING_MASK
    - Generated masks corresponding to the detected hands in the input image, used to isolate hand regions during depth map refinement.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [PreviewImage](../../Comfy/Nodes/PreviewImage.md)
    - [ControlNetApplyAdvanced](../../Comfy/Nodes/ControlNetApplyAdvanced.md)

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
