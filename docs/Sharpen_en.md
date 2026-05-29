# Documentation
- Class name: Sharpen
- Category: postprocessing/Filters
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

The Sharpen node enhances image clarity by boosting local contrast. It applies a sharpening kernel to the input image, amplifying edges and fine details to produce a more defined and crisp visual result.

# Input types
## Required
- image
    - The Image parameter is the primary input for the Sharpen node and is essential to its operation. It determines the source material to be sharpened, directly affecting the quality and clarity of the final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- sharpen_radius
    - The Sharpen Radius parameter controls the extent of the sharpening effect. A larger radius produces a more pronounced sharpening result, aggressively enhancing edges and details, while a smaller radius yields a subtler effect.
    - Comfy dtype: INT
    - Python dtype: int
- alpha
    - The Alpha parameter adjusts the intensity of the sharpening effect. Higher alpha values increase contrast enhancement, resulting in more dramatic sharpening, while lower values produce a milder effect.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- result
    - The Result parameter is the output of the Sharpen node, representing the sharpened image. It reflects the applied sharpening effect, showcasing improved clarity and well-defined edges.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/EllangoK/ComfyUI-post-processing-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
