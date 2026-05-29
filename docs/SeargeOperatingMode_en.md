# Documentation
- Class name: SeargeOperatingMode
- Category: UI_INPUTS
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node class encapsulates the operation settings for the Search and Generate (SRG) workflow, allowing customization of workflow modes and prompt strategies.

# Input types
## Required
- workflow_mode
    - Determines the operation mode of the workflow, which can significantly affect the type of output generated and the overall efficiency of the process.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- prompting_mode
    - Sets the prompt mode that guides the generation process, influencing the creativity and relevance of the results.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- batch_size
    - Specifies the number of inputs processed in a single operation, affecting system throughput and resource utilization.
    - Comfy dtype: int
    - Python dtype: int
## Optional
- data
    - An optional data stream that can provide additional context or information to the workflow.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]

# Output types
- data
    - Contains the updated data stream with the applied operation mode settings, which is crucial for subsequent steps in the workflow.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
