# Documentation
- Class name: SeparateMaskComponents
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

This node aims to decompose a single mask into its constituent contiguous components. It identifies unique segments within the mask by applying morphological operations. The node not only returns separated masks but also provides a mapping that can be used in downstream processes to relate individual components back to their original batch positions.

# Input types
## Required
- mask
    - The input mask is a critical parameter for this node, as it represents the initial data from which contiguous components are to be separated. The structure of the mask directly affects the node's operation and resulting segments.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- mask
    - The output is a series of separated masks, each corresponding to a unique contiguous component identified in the input mask. These masks are essential for further analysis or processing in the batch.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask_mappings
    - This output provides a mapping that associates each separated mask with its corresponding position in the original batch. It is an important tool for maintaining data relationship integrity throughout the processing pipeline.
    - Comfy dtype: INT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class SeparateMaskComponents:
    """
    Separates a mask into multiple contiguous components. Returns the individual masks created as well as a MASK_MAPPING which can be used in other nodes when dealing with batches.
    """

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'mask': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE', 'MASK_MAPPING')
    RETURN_NAMES = ('mask', 'mask_mappings')
    FUNCTION = 'separate'
    CATEGORY = 'Masquerade Nodes'

    def separate(self, mask):
        mask = tensor2mask(mask)
        thresholded = torch.gt(mask, 0).unsqueeze(1)
        (B, H, W) = mask.shape
        components = torch.arange(B * H * W, device=mask.device, dtype=mask.dtype).reshape(B, 1, H, W) + 1
        components[~thresholded] = 0
        while True:
            previous_components = components
            components = torch.nn.functional.max_pool2d(components, kernel_size=3, stride=1, padding=1)
            components[~thresholded] = 0
            if torch.equal(previous_components, components):
                break
        components = components.reshape(B, H, W)
        segments = torch.unique(components)
        result = torch.zeros([len(segments) - 1, H, W])
        index = 0
        mapping = torch.zeros([len(segments) - 1], device=mask.device, dtype=torch.int)
        for i in range(len(segments)):
            segment = segments[i].item()
            if segment == 0:
                continue
            image_index = int((segment - 1) // (H * W))
            segment_mask = components[image_index, :, :] == segment
            result[index][segment_mask] = mask[image_index][segment_mask]
            mapping[index] = image_index
            index += 1
        return (result, mapping)
```