# Documentation
- Class name: GetFirstImage
- Category: DragNUWA
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-DragNUWA.git

This node aims to extract a specific subset from a batch of images, focusing on the selection process and ensuring the required images are isolated for further processing.

# Input types
## Required
- images
    - The image parameter is crucial because it is the main input to the node operation. It is expected to be a tensor containing a batch of images, from which the node will select specific images based on defined criteria.
    - Comfy dtype: COMBO[torch.Tensor]
    - Python dtype: torch.Tensor

# Output types
- images
    - The output of this node is a refined subset of the input images selected according to the specified criteria. This subset is intended for further analysis or processing.
    - Comfy dtype: COMBO[torch.Tensor]
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class GetFirstImage:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'images': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'run'
    OUTPUT_NODE = False
    CATEGORY = 'DragNUWA'

    def run(self, images: torch.Tensor):
        shape = images.shape
        len_first_dim = shape[0]
        selected_indexes = f'0'
        selected_index: list[int] = []
        total_indexes: list[int] = list(range(len_first_dim))
        for s in selected_indexes.strip().split(','):
            try:
                if ':' in s:
                    _li = s.strip().split(':', maxsplit=1)
                    _start = _li[0]
                    _end = _li[1]
                    if _start and _end:
                        selected_index.extend(total_indexes[int(_start):int(_end)])
                    elif _start:
                        selected_index.extend(total_indexes[int(_start):])
                    elif _end:
                        selected_index.extend(total_indexes[:int(_end)])
                else:
                    x: int = int(s.strip())
                    if x < len_first_dim:
                        selected_index.append(x)
            except:
                pass
        return (images[selected_index, :, :, :],)
```