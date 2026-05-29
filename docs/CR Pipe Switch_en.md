# Documentation
- Class name: CR_InputSwitchPipe
- Category: Comfyroll/Pipe
- Output node: True
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_InputSwitchPipe node is designed to manage data flow between different processing pipelines based on a selection input. It evaluates the 'Input' parameter to determine which of the two provided pipelines, 'pipe1' or 'pipe2', should be used in the subsequent workflow. This node plays a critical role in creating conditional workflows that require different processing paths based on input conditions.

# Input types
## Required
- Input
    - The 'Input' parameter is crucial for determining the active pipeline. It accepts an integer value, where 1 indicates that 'pipe1' will be used, and any other value indicates 'pipe2'. This selection mechanism is essential for directing the workflow through the required processing path.
    - Comfy dtype: INT
    - Python dtype: int
- pipe1
    - The 'pipe1' parameter represents the first pipeline option available to the node. If the 'Input' parameter is set to 1, it becomes the active pipeline object. This allows seamless integration of a predefined processing path into the workflow.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Any
- pipe2
    - The 'pipe2' parameter is the alternative pipeline option provided to the node. It becomes active when the 'Input' parameter is not equal to 1, offering a secondary path for data processing within the workflow.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Any

# Output types
- PIPE_LINE
    - The 'PIPE_LINE' output is the pipeline selected based on the 'Input' parameter. It is the output that will be passed on for further processing, representing either 'pipe1' or 'pipe2' as chosen by the input.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Any
- show_help
    - The 'show_help' output provides a URL to a documentation page for further assistance. It is a constant string that always points to the GitHub wiki page for the CR_InputSwitchPipe node, giving users a direct link to information about the node's usage and functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
