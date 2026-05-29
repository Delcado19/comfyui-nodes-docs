# Documentation
- Class name: WLSH_Read_Prompt
- Category: WLSH Nodes/image
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

This node is designed to process image data by extracting and interpreting embedded metadata, including prompts and other parameters that guide the image generation process. It plays a critical role in ensuring that image data is properly formatted and ready for subsequent operations in the system.

# Input types
## Required
- verbose
    - The 'verbose' parameter controls the level of detail in the output information. When set to 'true', it enables comprehensive node operation logging, providing valuable insights for debugging and optimization.
    - Comfy dtype: COMBO[bool]
    - Python dtype: str
- image
    - The 'image' parameter is critical, as it specifies the source image file that the node will process. It directly affects the quality and characteristics of the image data used in subsequent steps.
    - Comfy dtype: COMBO[str]
    - Python dtype: str

# Output types
- image
    - The 'image' output is a preprocessed tensor representation of the input image, ready for further operations and analysis within the system. It serves as the foundation for all subsequent image-related operations and is a critical component.
    - Comfy dtype: COMBO[torch.Tensor]
    - Python dtype: torch.Tensor
- positive
    - The 'positive' output provides positive prompts associated with the image, which are essential for understanding the desired outcomes of the image generation process.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- negative
    - The 'negative' output contains negative prompts, outlining aspects to avoid in image generation. It is crucial for steering the generation toward the intended direction.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- seed
    - The 'seed' output represents the random seed used in the generation process. It ensures reproducibility and consistency of results, which is essential for experimental and comparative analysis.
    - Comfy dtype: COMBO[int]
    - Python dtype: int
- steps
    - The 'steps' output represents the number of iterations or steps taken during the image generation process. It affects the level of detail and refinement in the final output.
    - Comfy dtype: COMBO[int]
    - Python dtype: int
- cfg
    - The 'cfg' output refers to the configuration scale or parameter that adjusts image generation settings. It plays an important role in controlling the overall style and quality of the generated image.
    - Comfy dtype: COMBO[float]
    - Python dtype: float
- width
    - The 'width' output specifies the horizontal resolution of the generated image. It is a key factor in determining the aspect ratio and overall dimensions of the image.
    - Comfy dtype: COMBO[int]
    - Python dtype: int
- height
    - The 'height' output defines the vertical resolution of the image. It works together with 'width' to determine the final size and layout of the image.
    - Comfy dtype: COMBO[int]
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
