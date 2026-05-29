# Documentation
- Class name: MotionctrlSVDLoader
- Category: motionctrl
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-MotionCtrl-SVD.git

MotionctrlSVDLoader class initializes and manages the Motionctrl-SVD model, efficiently loading and preparing it for execution.

# Input types
## Required
- ckpt_name
    - ckpt_name parameter specifies the checkpoint filename for the Motionctrl-SVD model. It directs the loader to use the correct model state, which is essential for later operations and results.
    - Comfy dtype: STRING
    - Python dtype: str
- frame_length
    - frame_length parameter defines the temporal dimension of model input data. It affects the model's ability to process and generate coherent motion sequences within a given frame span.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - steps parameter determines the number of iterations the model performs during operation. It directly influences computational efficiency and the quality of generated motion sequences.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- model
    - Output model loads and configures the Motionctrl-SVD, ready for motion sequence analysis and synthesis. It encapsulates the model's capability for further use, combining input parameters and loader functionality.
    - Comfy dtype: MOTIONCTRLSVD
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class MotionctrlSVDLoader:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'ckpt_name': (['motionctrl_svd.ckpt'], {'default': 'motionctrl_svd.ckpt'}), 'frame_length': ('INT', {'default': 14}), 'steps': ('INT', {'default': 25})}}
    RETURN_TYPES = ('MOTIONCTRLSVD',)
    RETURN_NAMES = ('model',)
    FUNCTION = 'load_checkpoint'
    CATEGORY = 'motionctrl'

    def load_checkpoint(self, ckpt_name, frame_length, steps):
        global device
        comfy_path = os.path.dirname(folder_paths.__file__)
        ckpt_path = folder_paths.get_full_path('checkpoints', ckpt_name)
        config_path = os.path.join(comfy_path, 'custom_nodes/ComfyUI-MotionCtrl-SVD/configs/inference/config_motionctrl_cmcm.yaml')
        if not os.path.exists(ckpt_path):
            os.system(f'wget https://huggingface.co/TencentARC/MotionCtrl/resolve/main/motionctrl_svd.ckpt?download=true -P .')
            os.system(f'mv motionctrl_svd.ckpt?download=true {ckpt_path}')
        model = build_model(config_path, ckpt_path, device, frame_length, steps)
        return (model,)
```