
# Documentation
- Class name: SaltCLIPSegMasking
- Category: SALT/Masking
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltCLIPSegMasking node is designed for batch processing of images, using the CLIPSeg model to generate segmentation masks based on text descriptions. This node combines image and text inputs to produce detailed segmentation masks that match the given text description, thereby facilitating advanced image processing and analysis tasks.

# Input types
## Required
- images
    - A batch of images to be segmented. These images are transformed and resized to match the main image size to ensure consistent mask generation.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- text
    - An optional text description to guide the segmentation process. This allows generating target masks based on text cues.
    - Comfy dtype: STRING
    - Python dtype: Optional[str]
## Optional
- clipseg_model
    - An optional preloaded CLIPSeg model and processor for performing the segmentation task. If not provided, the node loads the default model.
    - Comfy dtype: CLIPSEG_MODEL
    - Python dtype: Optional[Tuple[CLIPSegProcessor, CLIPSegForImageSegmentation]]

# Output types
- masks
    - Segmentation masks corresponding to the input images, resized to the main image size.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask_images
    - RGB representation of the segmentation masks for visualization purposes.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
