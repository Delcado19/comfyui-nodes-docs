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
```
class ESAM_ModelLoader_Zho:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'device': (['CUDA', 'CPU'],)}}
    RETURN_TYPES = ('ESAMMODEL',)
    RETURN_NAMES = ('esam_model',)
    FUNCTION = 'load_esam_model'
    CATEGORY = '🔎YOLOWORLD_ESAM'

    def load_esam_model(self, device):
        new_current_directory = os.path.join(current_directory, 'models')
        if device == 'CUDA':
            model_path = os.path.join(new_current_directory, 'efficient_sam_s_gpu.jit')
        else:
            model_path = os.path.join(new_current_directory, 'efficient_sam_s_cpu.jit')
        EFFICIENT_SAM_MODEL = torch.jit.load(model_path)
        return [EFFICIENT_SAM_MODEL]
```