
# Documentation
- Class name: FL_CodeNode
- Category: 🏵️Fill Nodes
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

FL_CodeNode allows dynamic execution of user-provided code within a predefined execution environment, enabling custom processing and manipulation of inputs to generate outputs. The node abstracts the complexity of safely and efficiently executing arbitrary code snippets, providing a flexible interface for user-defined logic.

# Input types
## Required
- code_input
    - The node's primary input, accepting a multi-line code string that the user wishes to execute. This code can interact with optional inputs and define the logic for output generation.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- input_i
    - A series of optional input parameters (up to four), which can be used in user-provided code for custom logic and processing. These inputs are dynamically accepted, and their types can vary based on the user's code.
    - Comfy dtype: *
    - Python dtype: dict

# Output types
- output_0
    - The result output parameter from executing user-provided code.
    - Comfy dtype: *
    - Python dtype: object
- output_1
    - The result output parameter from executing user-provided code.
    - Comfy dtype: *
    - Python dtype: object
- output_2
    - The result output parameter from executing user-provided code.
    - Comfy dtype: *
    - Python dtype: object
- output_3
    - The result output parameter from executing user-provided code.
    - Comfy dtype: *
    - Python dtype: object


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
