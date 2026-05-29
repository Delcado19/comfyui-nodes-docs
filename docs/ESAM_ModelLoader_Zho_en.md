# Documentation
- Class name: ESAM_ModelLoader_Zho
- Category: 🔎YOLOWORLD_ESAM
- Output node: False
- Repo Ref: https://github.com/ZHO-ZHO-ZHO/ComfyUI-YoloWorld-EfficientSAM.git

This node is designed to load an ESAM model tailored for GPU or CPU environments, ensuring compatibility with the execution platform.

# Input types
## Required
- device
    - The device parameter determines the hardware environment for loading the ESAM model, which is critical for correct model execution.
    - Comfy dtype: COMBO['CUDA', 'CPU']
    - Python dtype: Union[str, torch.device]

# Output types
- esam_model
    - The output represents the loaded ESAM model, which is essential for further processing and inference tasks within the system.
    - Comfy dtype: torch.jit.ScriptModule
    - Python dtype: torch.jit.ScriptModule

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ZHO-ZHO-ZHO/ComfyUI-YoloWorld-EfficientSAM)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
