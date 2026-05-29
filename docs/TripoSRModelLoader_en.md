# Documentation
- Class name: TripoSRModelLoader
- Category: Flowty TripoSR
- Output node: False
- Repo Ref: https://github.com/flowtyone/ComfyUI-Flowty-TripoSR

TripoSRModelLoader efficiently manages and initializes TripoSR models, ensuring they load correctly according to specified configurations and resources. It abstracts the complexity of model loading and setup, providing users a direct interface to access model functionality.

# Input types
## Required
- model
    - The `model` parameter is crucial for specifying the path to the model checkpoint. It directly impacts TripoSR model initialization and is essential for node operations because it determines which weights and configuration will be used.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
## Optional
- chunk_size
    - The `chunk_size` parameter optimizes the model's memory usage by controlling batch size. It plays a key role in balancing performance and resource consumption, enabling efficient processing of large-scale data.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- TRIPOSR_MODEL
    - The output provides an initialized TripoSR model ready for use. It encapsulates the model's full functionality, allowing users to leverage it for various super‑resolution tasks.
    - Comfy dtype: COMBO[torch.nn.Module]
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/flowtyone/ComfyUI-Flowty-TripoSR)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
