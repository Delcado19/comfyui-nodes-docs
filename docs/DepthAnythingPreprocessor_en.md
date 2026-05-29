
# Documentation
- Class name: DepthAnythingPreprocessor
- Category: ControlNet Preprocessors/Normal and Depth Estimators
- Output node: False
- Repo Ref: https://github.com/isl-org/DPT

The DepthAnythingPreprocessor node is designed to preprocess images for depth estimation tasks by leveraging different pre-trained models based on the provided checkpoint name. It abstracts the complexity of model selection and preprocessing steps, providing a simplified method to generate depth maps from input images.

# Input types
## Required
- image
    - The input image to be processed for depth estimation. This image is transformed and fed into the selected model to generate a depth map.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- ckpt_name
    - Specifies the pre-trained model checkpoint used for depth estimation. The choice of checkpoint affects the model's performance and accuracy.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
    - The resolution to which the input image is resized before processing. This parameter may affect the level of detail in the generated depth map.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is a depth map of the input image, providing pixel-level depth estimation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [PreviewImage](../../Comfy/Nodes/PreviewImage.md)
    - [ControlNetApplyAdvanced](../../Comfy/Nodes/ControlNetApplyAdvanced.md)
    - [ACN_AdvancedControlNetApply](../../ComfyUI-Advanced-ControlNet/Nodes/ACN_AdvancedControlNetApply.md)

## Source code
[View source repository on GitHub](https://github.com/isl-org/DPT)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
