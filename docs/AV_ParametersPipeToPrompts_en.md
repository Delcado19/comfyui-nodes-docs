
# Documentation
- Class name: AV_ParametersPipeToPrompts
- Category: Art Venture/Parameters
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AV_ParametersPipeToPrompts node is designed to convert a parameter pipeline into specific prompt outputs, generating positive prompts, negative prompts, image, and mask outputs based on the input parameter pipeline. This node plays a key role in the creative workflow, transforming abstract parameter sets into concrete, actionable prompts and visual elements.

# Input types
## Required
- pipe
    - The 'pipe' input is a dictionary that serves as a container for various parameters, acting as the source from which the node extracts specific values to generate prompts and visual outputs. It is the core of the node's operation, determining the content of the generated outputs.
    - Comfy dtype: PIPE
    - Python dtype: Dict

# Output types
- pipe
    - Returns the original input parameter pipeline, allowing further processing or utilization in subsequent nodes.
    - Comfy dtype: PIPE
    - Python dtype: Dict
- positive
    - Generates positive prompt text based on the input parameters.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - Generates negative prompt text based on the input parameters.
    - Comfy dtype: STRING
    - Python dtype: str
- image
    - Generates an image output if specified in the input parameters.
    - Comfy dtype: IMAGE
    - Python dtype: Optional[ImageType]
- mask
    - Generates a mask output if specified in the input parameters.
    - Comfy dtype: MASK
    - Python dtype: Optional[MaskType]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
