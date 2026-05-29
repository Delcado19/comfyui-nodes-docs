# Documentation
- Class name: DualCLIPLoader
- Category: advanced/loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The DualCLIPLoader node is designed to efficiently load and manage dual CLIP (Contrastive Language-Image Pre-training) models. It focuses on the seamless integration of two different CLIP models, facilitating their joint operation within larger systems. This node abstracts the complexity of loading and accessing CLIP models, ensuring users can leverage their capabilities with minimal overhead.

# Input types
## Required
- clip_name1
    - The parameter 'clip_name1' specifies the first CLIP model to load. It plays a critical role in determining the specific model used in the system. This parameter directly impacts the node's ability to access and process the required CLIP model.
    - Comfy dtype: str
    - Python dtype: str
- clip_name2
    - The parameter 'clip_name2' specifies the second CLIP model to load. Similar to 'clip_name1', it is essential for identifying and loading the required model. The node relies on both 'clip_name1' and 'clip_name2' to work effectively with dual CLIP models.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- CLIP
    - The output 'CLIP' represents the loaded CLIP model, which can be a combination of image and text embeddings. It is important because it enables further processing and analysis in the application, providing a foundation for various downstream tasks.
    - Comfy dtype: COMBO[str, torch.Tensor]
    - Python dtype: Tuple[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class DualCLIPLoader:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'clip_name1': (folder_paths.get_filename_list('clip'),), 'clip_name2': (folder_paths.get_filename_list('clip'),)}}
    RETURN_TYPES = ('CLIP',)
    FUNCTION = 'load_clip'
    CATEGORY = 'advanced/loaders'

    def load_clip(self, clip_name1, clip_name2):
        clip_path1 = folder_paths.get_full_path('clip', clip_name1)
        clip_path2 = folder_paths.get_full_path('clip', clip_name2)
        clip = comfy.sd.load_clip(ckpt_paths=[clip_path1, clip_path2], embedding_directory=folder_paths.get_folder_paths('embeddings'))
        return (clip,)
```