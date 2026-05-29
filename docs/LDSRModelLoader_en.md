# Documentation
- Class name: LDSRModelLoader
- Category: Flowty LDSR
- Output node: False
- Repo Ref: https://github.com/flowtyone/ComfyUI-Flowty-LDSR.git

This node aims to load and prepare an LDSR model for use, abstracting away the complexity of model retrieval and initialization. It ensures the model is ready for upscaling tasks by transferring it to the appropriate device and setting it to evaluation mode.

# Input types
## Required
- model
    - The model parameter is critical as it specifies which LDSR model to load. It influences the entire operation by determining which model's state dictionary and configuration to use for the upscaling process.
    - Comfy dtype: COMBO[filename]
    - Python dtype: str

# Output types
- UPSCALE_MODEL
    - The output provides a fully initialized and prepared LDSR model, which is essential for subsequent image upscaling tasks.
    - Comfy dtype: COMBO[LDSR]
    - Python dtype: LDSR

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/flowtyone/ComfyUI-Flowty-LDSR)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
