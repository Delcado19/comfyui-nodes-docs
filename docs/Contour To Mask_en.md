
# Documentation
- Class name: Contour To Mask
- Category: Bmad/CV/Contour
- Output node: False
- Repo Ref: https://github.com/bmad4ever/ComfyUI-Bmad-Custom-Nodes

This node aims to convert contours into a mask image while utilizing the specified output format. It effectively transforms the shapes defined by the contours into a binary mask, which can be used for various image processing tasks.

# Input types
## Required
- image
    - The input image on which the contours need to be drawn. It serves as the foundation for the mask creation process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- contour
    - The contour that needs to be converted into a mask. It defines the shape that will be filled in the mask.
    - Comfy dtype: CV_CONTOUR
    - Python dtype: 代表计算机视觉任务中轮廓的自定义类型
- output_format
    - Specifies the desired output format for the mask image, allowing flexibility in downstream usage of the mask.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: 表示不同图像输出格式的枚举

# Output types
- image
    - The resulting mask image, where the specified contour has been filled to create a binary mask.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/bmad4ever/ComfyUI-Bmad-Custom-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
