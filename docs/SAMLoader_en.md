# Documentation
- Class name: SAMLoader
- Category: ImpactPack
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SAMLoader node aims to efficiently manage and load various models in the SAM (Segment Anything Model) family, including ESAM. It provides a high-level interface for selecting and using models based on user-defined criteria (such as model name and device mode), ensuring optimal performance and resource utilization.

# Input types
## Required
- model_name
    - The model_name parameter is crucial for determining the SAM model to be loaded. It influences node execution by directing the node to the correct model file, which is essential for subsequent processing and prediction tasks.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- device_mode
    - The device_mode parameter allows users to specify the computing device for model execution. It plays an important role in node performance by optimizing the use of GPU or CPU resources according to the selected mode.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- SAM_MODEL
    - The SAM_MODEL output represents the loaded SAM model, ready for inference or further processing. It encapsulates the model's architecture and learned parameters, marking the completion of the node's main function.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class SAMLoader:

    @classmethod
    def INPUT_TYPES(cls):
        models = [x for x in folder_paths.get_filename_list('sams') if 'hq' not in x]
        return {'required': {'model_name': (models + ['ESAM'],), 'device_mode': (['AUTO', 'Prefer GPU', 'CPU'],)}}
    RETURN_TYPES = ('SAM_MODEL',)
    FUNCTION = 'load_model'
    CATEGORY = 'ImpactPack'

    def load_model(self, model_name, device_mode='auto'):
        if model_name == 'ESAM':
            if 'ESAM_ModelLoader_Zho' not in nodes.NODE_CLASS_MAPPINGS:
                try_install_custom_node('https://github.com/ZHO-ZHO-ZHO/ComfyUI-YoloWorld-EfficientSAM', "To use 'ESAM' model, 'ComfyUI-YoloWorld-EfficientSAM' extension is required.")
                raise Exception("'ComfyUI-YoloWorld-EfficientSAM' node isn't installed.")
            esam_loader = nodes.NODE_CLASS_MAPPINGS['ESAM_ModelLoader_Zho']()
            if device_mode == 'CPU':
                esam = esam_loader.load_esam_model('CPU')[0]
            else:
                device_mode = 'CUDA'
                esam = esam_loader.load_esam_model('CUDA')[0]
            sam_obj = core.ESAMWrapper(esam, device_mode)
            esam.sam_wrapper = sam_obj
            print(f'Loads EfficientSAM model: (device:{device_mode})')
            return (esam,)
        modelname = folder_paths.get_full_path('sams', model_name)
        if 'vit_h' in model_name:
            model_kind = 'vit_h'
        elif 'vit_l' in model_name:
            model_kind = 'vit_l'
        else:
            model_kind = 'vit_b'
        sam = sam_model_registry[model_kind](checkpoint=modelname)
        size = os.path.getsize(modelname)
        safe_to = core.SafeToGPU(size)
        device = comfy.model_management.get_torch_device() if device_mode == 'Prefer GPU' else 'CPU'
        if device_mode == 'Prefer GPU':
            safe_to.to_device(sam, device)
        is_auto_mode = device_mode == 'AUTO'
        sam_obj = core.SAMWrapper(sam, is_auto_mode=is_auto_mode, safe_to_gpu=safe_to)
        sam.sam_wrapper = sam_obj
        print(f'Loads SAM model: {modelname} (device:{device_mode})')
        return (sam,)
```