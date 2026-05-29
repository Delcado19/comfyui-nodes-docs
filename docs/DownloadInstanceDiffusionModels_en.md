
# Documentation
- Class name: DownloadInstanceDiffusionModels
- Category: instance/loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The DownloadInstanceDiffusionModels node is responsible for downloading and loading models required for the instance diffusion process, including PositionNet, Fusers, and ScaleU models. It ensures the required models are available locally, downloads them if they don't exist, then loads them into memory for instance diffusion tasks. This node simplifies the model preparation process, laying the foundation for subsequent instance diffusion operations.

# Input types
## Required
- use_segs
    - This parameter indicates whether the PositionNet model should use segmentation information, affecting how the model is prepared and loaded. When set to True, the model will consider segmentation data, potentially providing more refined position information.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- fusers_scale
    - Specifies the scaling factor applied to the Fusers model, affecting the model's preparation and loading to adjust its output according to the desired scale. This allows users to control the output scale of the Fusers model, adapting to different application scenarios.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- positionnet
    - Returns the loaded PositionNet model, ready for use in instance diffusion tasks. This model is specifically designed to handle position-related information, crucial for generating high-quality instance diffusion results.
    - Comfy dtype: POSITIONNET
    - Python dtype: Dict[str, Any]
- fusers
    - Provides a list of loaded Fusers models, adjusted according to the specified scaling, ready for integration into the instance diffusion process. These models are responsible for fusing different features, enhancing the quality and diversity of generated results.
    - Comfy dtype: FUSERS
    - Python dtype: Dict[str, Any]
- scaleu
    - Provides the loaded ScaleU model, making it available for enhancing instance diffusion capabilities. The ScaleU model specifically handles features at different scales, helping generate more detailed and accurate instance diffusion results.
    - Comfy dtype: SCALEU
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DownloadInstanceDiffusionModels:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "use_segs": ("BOOLEAN", {"default": True}),
            "fusers_scale": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.01}),
        }}

    RETURN_TYPES = ("POSITIONNET", "FUSERS", "SCALEU", )
    FUNCTION = "load_model"

    CATEGORY = "instance/loaders"

    def load_model(self, use_segs: bool, fusers_scale: float):
        repo_id = "logtd/instance_diffusion"
        instance_models_folder = os.path.join(folder_paths.models_dir, constants.INSTANCE_MODELS_DIR)

        models_to_download = [
            ("position_net", constants.INSTANCE_POSITIONNET_DIR, "position_net.ckpt"),
            ("fusers", constants.INSTANCE_FUSERS_DIR, "fusers.ckpt"),
            ("scaleu", constants.INSTANCE_SCALEU_DIR, "scaleu.ckpt")
        ]

        for model_name, model_folder, model_file in models_to_download:
            model_folder_path = os.path.join(instance_models_folder, model_folder)
            model_file_path = os.path.join(model_folder_path, model_file)

            if not os.path.exists(model_file_path):
                print(f"Selected model: {model_file_path} not found, downloading...")
                allow_patterns = [f"*{model_name}*"]
                snapshot_download(repo_id=repo_id, 
                                  allow_patterns=allow_patterns, 
                                  local_dir=model_folder_path, 
                                  local_dir_use_symlinks=False
                                  )
                
        positionnet_file = os.path.join(instance_models_folder, constants.INSTANCE_POSITIONNET_DIR, "position_net.ckpt")
        fusers_file = os.path.join(instance_models_folder, constants.INSTANCE_FUSERS_DIR, "fusers.ckpt")
        scaleu_file = os.path.join(instance_models_folder, constants.INSTANCE_SCALEU_DIR, "scaleu.ckpt")

        pos_checkpoint = comfy.utils.load_torch_file(positionnet_file, safe_load=True)
        params = get_positionnet_default_params()
        params["use_segs"] = use_segs
        model = prepare_positionnet(pos_checkpoint, params)
        positionnet = {
            'model': model,
        }

        fusers_checkpoint = comfy.utils.load_torch_file(fusers_file, safe_load=True)
        fusers_list = prepare_fusers(fusers_checkpoint, fusers_scale)
        fusers = {
            'model_list': fusers_list
        }
        scaleu_checkpoint = comfy.utils.load_torch_file(scaleu_file, safe_load=True)
        scaleu_list = prepare_scaleu_nets(scaleu_checkpoint)
        scaleu = {
            'model_list': scaleu_list
        }
        return (positionnet, fusers, scaleu)

```
