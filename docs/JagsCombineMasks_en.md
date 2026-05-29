# Documentation
- Class name: JagsCombineMasks
- Category: Jags_vector/CLIPSEG
- Output node: False
- Repo Ref: https://github.com/jags111/ComfyUI_Jags_VectorMagic

This node collaboratively integrates multiple mask tensors into a unified representation, facilitating the integration of segmented regions within a given image context. It aims to simplify the process of merging binary or categorical data into a consistent visual output, improving the practicality of mask-based image processing tasks.

# Input types
## Required
- input_image
    - The input image serves as the foundational layer for merging and visualizing masks, and its role is critical as it provides the spatial context required for accurate overlay and integration of masks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask_1
    - The primary mask is a key component in the fusion process, defining the initial segmentation and laying the groundwork for subsequent overlay of additional masks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask_2
    - The secondary mask refines the merged mask by introducing additional segmentation layers, improving the granularity and specificity of the final output.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- mask_3
    - The optional third-level mask provides an additional dimension for mask combination, enabling more complex and nuanced segmentation when needed.
    - Comfy dtype: MASK
    - Python dtype: Optional[torch.Tensor]

# Output types
- Combined Mask
    - The resulting merged mask contains the collective segmentation information of the input masks, serving as a comprehensive representation of segmented elements within the image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- Heatmap Mask
    - The heatmap mask visualizes the merged segmentation through color overlay, providing an intuitive and easily interpretable depiction of the segmentation results.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- BW Mask
    - The binary mask provides a clear, high-contrast representation of the segmentation, highlighting the delineated regions with clarity and precision.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class JagsCombineMasks:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'input_image': ('IMAGE',), 'mask_1': ('MASK',), 'mask_2': ('MASK',)}, 'optional': {'mask_3': ('MASK',)}}
    CATEGORY = 'Jags_vector/CLIPSEG'
    RETURN_TYPES = ('MASK', 'IMAGE', 'IMAGE')
    RETURN_NAMES = ('Combined Mask', 'Heatmap Mask', 'BW Mask')
    FUNCTION = 'combine_masks'

    def combine_masks(self, input_image: torch.Tensor, mask_1: torch.Tensor, mask_2: torch.Tensor, mask_3: Optional[torch.Tensor]=None) -> Tuple[torch.Tensor, torch.Tensor, torch.Tensor]:
        """A method that combines two or three masks into one mask. Takes in tensors and returns the mask as a tensor, as well as the heatmap and binary mask as tensors."""
        if mask_1 is not None:
            mask_1 = mask_1.squeeze()
        if mask_2 is not None:
            mask_2 = mask_2.squeeze()
        if mask_3 is not None:
            mask_3 = mask_3.squeeze()
        combined_mask = mask_1 + mask_2 + mask_3 if mask_3 is not None else mask_1 + mask_2
        image_np = tensor_to_numpy(input_image)
        heatmap = apply_colormap(combined_mask, cm.viridis)
        binary_mask = apply_colormap(combined_mask, cm.Greys_r)
        dimensions = (image_np.shape[1], image_np.shape[0])
        print('heatmap', heatmap)
        if dimensions is None or dimensions[0] == 0 or dimensions[1] == 0:
            raise ValueError('Invalid dimensions')
        heatmap_resized = resize_image(heatmap, dimensions)
        binary_mask_resized = resize_image(binary_mask, dimensions)
        (alpha_heatmap, alpha_binary) = (0.5, 1)
        overlay_heatmap = overlay_image(image_np, heatmap_resized, alpha_heatmap)
        overlay_binary = overlay_image(image_np, binary_mask_resized, alpha_binary)
        image_out_heatmap = numpy_to_tensor(overlay_heatmap)
        image_out_binary = numpy_to_tensor(overlay_binary)
        return (combined_mask, image_out_heatmap, image_out_binary)
```