
# Documentation
- Class name: FadeMaskEdges
- Category: Bmad/CV/Misc
- Output node: False
- Repo Ref: https://github.com/bmad4ever/ComfyUI-Bmad-Custom-Nodes

The FadeMaskEdges node is primarily used to premultiply and alpha blend the edges of the image subject to prevent external pixel bleed-in. This is especially useful for stylized subjects such as drawings with black outlines, optimizing the blending between the subject and background by allowing different edge fade effects.

# Input types
## Required
- binary_image
    - The binary image to be processed, mainly for premultiplication and alpha blending of its edges.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- edge_size
    - Defines the size of the edge fade, affecting the degree of blending between the subject edge and the background.
    - Comfy dtype: FLOAT
    - Python dtype: float
- edge_tightness
    - Controls the tightness of the edge fade, affecting the smoothness of the transition from subject to background.
    - Comfy dtype: FLOAT
    - Python dtype: float
- edge_exponent
    - Determines the fade curve, allowing custom edge transition effects.
    - Comfy dtype: FLOAT
    - Python dtype: float
- smoothing_diameter
    - Specifies the diameter of edge smoothing, used to optimize the blending effect after premultiplication and alpha settings.
    - Comfy dtype: INT
    - Python dtype: int
- paste_original_blacks
    - Boolean flag indicating whether to paste the original black pixels back into the image, helping maintain the integrity of the subject.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image
    - The processed image with premultiplied and alpha-blended edges, ready for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/bmad4ever/ComfyUI-Bmad-Custom-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
