
# Documentation
- Class name: MiDaS-NormalMapPreprocessor
- Category: ControlNet Preprocessors/Normal and Depth Estimators
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The MiDaS-NormalMapPreprocessor node is dedicated to generating normal maps from images using the MiDaS model. It preprocesses images to enhance depth estimation, facilitating the creation of detailed normal maps for applications such as 3D modeling and augmented reality.

# Input types
## Required
- image
- The **image** parameter is the input image from which the normal map will be generated; it serves as the basis for depth estimation and normal map creation.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray

## Optional
- a
- The **a** parameter adjusts the intensity of depth estimation, affecting contrast and detail in the resulting normal map.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bg_threshold
- The **bg_threshold** parameter sets the threshold for background separation, helping isolate the subject from the background during depth estimation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resolution
- The **resolution** parameter specifies the resolution at which depth estimation and normal map generation are performed, influencing the level of detail in the output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
- The output is an image representing the normal map generated from the input image, providing detailed surface orientation information.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
