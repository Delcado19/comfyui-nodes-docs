# Documentation
- Class name: MeshGraphormerDepthMapPreprocessorProvider_for_SEGS
- Category: InspirePack/SEGS/ControlNet
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node is used to generate depth maps from images, which is crucial for 3D modeling and segmentation tasks. It utilizes advanced algorithms to estimate depth from a single image, improving the quality of 3D representations.

# Input types
## Required
- image
    - The input image is critical for generating the depth map, serving as the basis for depth map generation. The node processes the image to extract depth information, which is essential for subsequent 3D modeling and segmentation processes.
    - Comfy dtype: image
    - Python dtype: PIL.Image or numpy.ndarray
## Optional
- mask
    - When a mask parameter is provided, it allows selective processing of the image. It enables the node to focus on specific regions of interest in the image, thereby improving the accuracy and relevance of the generated depth map.
    - Comfy dtype: mask
    - Python dtype: numpy.ndarray

# Output types
- SEGS_PREPROCESSOR
    - The output is a preprocessor object containing the generated depth map. This depth map is a key intermediate product used in various 3D and segmentation workflows, serving as a basis for further processing.
    - Comfy dtype: preprocessor
    - Python dtype: object

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
