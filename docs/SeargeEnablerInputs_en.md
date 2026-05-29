# Documentation
- Class name: SeargeEnablerInputs
- Category: Searge/_deprecated_/Inputs
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node class aims to retrieve and manage system state, serving as an interface for state-related operations within a deprecated framework. It abstractly encapsulates the state retrieval process, emphasizing the node's role in maintaining and providing access to the system's current state.

# Input types
## Required
- state
    - The 'state' parameter is critical to the node's operation, as it represents the system's current state. It is the fundamental element that determines the node's behavior and output generation.
    - Comfy dtype: COMBO[SeargeParameterProcessor.STATES]
    - Python dtype: str

# Output types
- state
    - The output 'state' reflects the input-provided system current state, marking the node's primary function as state management and retrieval.
    - Comfy dtype: COMBO[SeargeParameterProcessor.STATES]
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
