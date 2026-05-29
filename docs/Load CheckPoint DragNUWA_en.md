# Documentation
- Class name: LoadCheckPointDragNUWA
- Category: DragNUWA
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-DragNUWA.git

This node class encapsulates the functionality for loading and operating DragNUWA models, enabling users to condition the model with various inputs (such as tracking points or optical flow data) to generate high‑fidelity video frames. It abstracts the underlying model's complexity and provides a simple interface for video frame generation, simplifying the creation of intricate visual effects.

# Input types
## Required
- ckpt_name
    - The checkpoint name is critical as it identifies the specific DragNUWA model to load. It influences the quality and characteristics of the generated video frames, ensuring the correct model configuration for the task at hand.
    - Comfy dtype: COMBO
    - Python dtype: str
- dimension
    - The size parameter determines the resolution of the video frames produced by the model. It is essential for ensuring that the output matches required format and quality standards, which is critical for downstream processing and display.
    - Comfy dtype: COMBO
    - Python dtype: str
- model_length
    - The model length parameter is important because it sets the temporal dimension of the model, dictating the number of frames it can process. It affects the scope of generated video and the model's ability to capture motion and detail over time.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- model
    - The output model is the core component for subsequent video frame generation. It encapsulates the learned patterns and characteristics necessary for producing high‑quality visual content. The model's output plays a pivotal role in achieving desired visual effects and meeting creative objectives.
    - Comfy dtype: DragNUWA
    - Python dtype: Drag

# Usage tips
- Infra type: GPU

# Source code
```
class LoadCheckPointDragNUWA:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'ckpt_name': (['dragnuwa-svd-pruned.fp16.safetensors'], {'default': 'dragnuwa-svd-pruned.fp16.safetensors'}), 'dimension': (['576x320', '512x512', '320x576'], {'default': '576x320'}), 'model_length': ('INT', {'default': 14})}}
    RETURN_TYPES = ('DragNUWA',)
    RETURN_NAMES = ('model',)
    FUNCTION = 'load_dragnuwa'
    CATEGORY = 'DragNUWA'

    def load_dragnuwa(self, ckpt_name, dimension, model_length):
        width = int(dimension.split('x')[0])
        height = int(dimension.split('x')[1])
        comfy_path = os.path.dirname(folder_paths.__file__)
        ckpt_path = folder_paths.get_full_path('checkpoints', ckpt_name)
        current_path = os.path.abspath(os.path.dirname(__file__))
        sys.path.append(current_path)
        DragNUWA_net = Drag('cuda:0', ckpt_path, f'{comfy_path}/custom_nodes/ComfyUI-DragNUWA/DragNUWA_net.py', height, width, model_length)
        return (DragNUWA_net,)
```