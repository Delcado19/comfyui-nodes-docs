# Documentation
- Class name: GuidedFilter
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

The GuidedFilter node applies a nonlinear filtering technique that uses a guide image to influence the filtering process, aiming to remove noise or smooth appearance while preserving the original image's structure and edges.

# Input types
## Required
- image
    - The image parameter is required because it provides the input image data on which the guided filtering operation will be performed, which significantly impacts output quality and detail.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- radius
    - The radius parameter determines the size of the local neighborhood considered by the filter, affecting how much the filter smooths the image while preserving edges.
    - Comfy dtype: INT
    - Python dtype: int
- eps
    - The eps parameter controls the sensitivity of the guided filter; lower values lead to more aggressive smoothing, higher values retain more detail.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- guide
    - When a guide parameter is provided, it serves as a reference image to guide the filtering process, allowing selective enhancement or suppression of features based on the guide content.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- output_image
    - The output image is the result of the guided filtering operation, reflecting the combination of the input image and the guidance provided by the guide image (if any).
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Ryuukeisyou/comfyui_face_parsing)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
