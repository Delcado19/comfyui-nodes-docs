# Documentation
- Class name: WAS_Image_Direct_Occlusion
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Direct_Occlusion node is designed to process images and depth maps to create direct occlusion effects, enhancing visual realism by simulating light-object interactions. It identifies light sources and applies occlusion based on depth and color differences, producing images with a more three-dimensional appearance.

# Input types
## Required
- images
    - The input image parameter is crucial for the node's operation as it is the primary data source for generating occlusion effects. It directly affects the final result by determining the visual content processed to produce occlusion.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- depth_images
    - The depth_images parameter provides depth information necessary for calculating occlusion effects. It is essential for determining how light interacts based on the depth of different parts of the image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- strength
    - The strength parameter controls the intensity of the occlusion effect. It is important as it allows users to adjust the degree of occlusion applied to the image, fine-tuning the visual impact of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- radius
    - The radius parameter defines the influence area of each pixel when calculating occlusion. It is important as it determines the range of the occlusion effect around each pixel, affecting the overall texture and detail of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- specular_threshold
    - The specular_threshold parameter is used to identify the brightest regions in the image, which contribute to light source identification. It plays a key role in determining which parts of the image are treated as light sources in occlusion calculations.
    - Comfy dtype: INT
    - Python dtype: int
- colored_occlusion
    - The colored_occlusion parameter determines whether the occlusion effect is applied in color or grayscale. This choice affects the visual style of the occlusion, allowing for more subtle or pronounced visual changes.
    - Comfy dtype: COMBO[True, False]
    - Python dtype: bool

# Output types
- composited_images
    - The composited_images output parameter represents the final image with the direct occlusion effect applied. It is important as it is the primary result of the node's processing, used for further visualization or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ssdo_images
    - The ssdo_images output parameter provides the image with the occlusion effect before compositing. It is useful for examining the occlusion effect separately and for debugging purposes.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ssdo_image_masks
    - The ssdo_image_masks output parameter includes masks corresponding to the occluded regions in the image. These masks can be used for further image processing or isolating specific areas of the occlusion effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- light_source_image_masks
    - The light_source_image_masks output parameter contains masks identifying regions in the image treated as light sources. These masks are crucial for understanding which parts of the image contribute to the occlusion effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
