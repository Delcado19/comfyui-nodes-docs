
# Documentation
- Class name: ConvertImg
- Category: Bmad/CV
- Output node: False
- Repo Ref: https://github.com/bmad4ever/ComfyUI-Bmad-Custom-Nodes

The ConvertImg node is designed for explicit image format conversion, enabling specific image formats required by custom nodes to be used directly without workarounds. This node is especially useful in workflows requiring specific image formats, simplifying image processing and improving efficiency.

# Input types
## Required
- image
    - The image parameter represents the input image to be format-converted. The current format of the image is crucial to the conversion process, directly affecting the node's execution and the final conversion result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- to
    - The to parameter specifies the target format for image conversion. It determines the output format and may affect the image's usability in subsequent processing steps. Choosing the appropriate target format is important for ensuring compatibility and functionality throughout the workflow.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The output is an image already converted to the specified format, usable directly for further processing or within the application. It retains the original content but has been adjusted in format to meet specific processing requirements or compatibility needs.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/bmad4ever/ComfyUI-Bmad-Custom-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
