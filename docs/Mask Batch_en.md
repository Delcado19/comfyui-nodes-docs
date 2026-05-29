# Documentation
- Class name: WAS_Mask_Batch
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Mask_Batch node is designed to efficiently process and batch multiple mask inputs. It ensures all input masks conform to a uniform size and stacks them into a single batch for further processing. The node plays a key role in preparing data with consistent mask dimensions required for downstream tasks.

# Input types
## Optional
- masks_a
- The 'masks_a' parameter is an optional input that allows users to provide a set of masks for processing. It is essential to the node’s operation because it directly affects the data that will be batched and processed.
    - Comfy dtype: MASK
    - Python dtype: Union[torch.Tensor, None]
- masks_b
- The 'masks_b' parameter functions like 'masks_a', offering another optional set of masks to include in the batch processing.
    - Comfy dtype: MASK
    - Python dtype: Union[torch.Tensor, None]
- masks_c
- The 'masks_c' parameter is another optional input for additional masks, further enhancing the node’s flexibility in handling diverse mask inputs.
    - Comfy dtype: MASK
    - Python dtype: Union[torch.Tensor, None]
- masks_d
- The 'masks_d' parameter supplies the node with an extra set of masks for processing, ensuring the node can accommodate a wide range of mask inputs.
    - Comfy dtype: MASK
    - Python dtype: Union[torch.Tensor, None]

# Output types
- masks
- The 'masks' output is a batched tensor containing all processed input masks. It is important because it represents the node’s primary output, ready for subsequent operations.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Mask_Batch:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'optional': {'masks_a': ('MASK',), 'masks_b': ('MASK',), 'masks_c': ('MASK',), 'masks_d': ('MASK',)}}
    RETURN_TYPES = ('MASK',)
    RETURN_NAMES = ('masks',)
    FUNCTION = 'mask_batch'
    CATEGORY = 'WAS Suite/Image/Masking'

    def _check_mask_dimensions(self, tensors, names):
        dimensions = [tensor.shape[1:] for tensor in tensors]
        if len(set(dimensions)) > 1:
            mismatched_indices = [i for (i, dim) in enumerate(dimensions) if dim != dimensions[0]]
            mismatched_masks = [names[i] for i in mismatched_indices]
            raise ValueError(f'WAS Mask Batch Warning: Input mask dimensions do not match for masks: {mismatched_masks}')

    def mask_batch(self, **kwargs):
        batched_tensors = [kwargs[key] for key in kwargs if kwargs[key] is not None]
        mask_names = [key for key in kwargs if kwargs[key] is not None]
        if not batched_tensors:
            raise ValueError('At least one input mask must be provided.')
        self._check_mask_dimensions(batched_tensors, mask_names)
        batched_tensors = torch.stack(batched_tensors, dim=0)
        batched_tensors = batched_tensors.unsqueeze(1)
        return (batched_tensors,)
```