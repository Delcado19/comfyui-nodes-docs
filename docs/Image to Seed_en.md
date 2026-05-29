# Documentation
- Class name: WAS_Image_To_Seed
- Category: WAS Suite/Image/Analyze
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The function `image_to_seed` converts a series of images into corresponding seed sets. It leverages the inherent properties of each image to generate unique identifiers, which can be used in applications such as image indexing or retrieval systems. This node plays a critical role in the analysis pipeline, transforming visual data into a compact yet representative form of the original content.

# Input types
## Required
- images
    - The parameter 'images' is essential to the node's operation, as it is the input data processed by the node. Each image is converted into a seed through a series of operations. The quality and characteristics of the input images directly affect the generated seeds and their subsequent applications.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Output types
- seeds
    - The output 'seeds' is a list of integers representing seeds derived from the input images. Each seed is a hash-based digest of the image content, providing a concise and unique representation. This output is important as it lays the foundation for further processing or analysis in downstream tasks.
    - Comfy dtype: INT
    - Python dtype: List[int]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
