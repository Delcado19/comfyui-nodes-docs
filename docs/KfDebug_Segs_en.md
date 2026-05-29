# Documentation
- Class name: KfDebug_Segs
- Category: Debugging
- Output node: True
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node facilitates visualization and analysis of segmentation results within the deep learning framework, enabling users to inspect and understand the model's performance in distinguishing different parts of an image.

# Input types
## Required
- image
    - The input image or array is crucial for the node's operation, as it is the basis for segmentation. The quality and resolution of the input directly affect the accuracy and detail of the segmentation result.
    - Comfy dtype: COMBO["Image", "ndarray"]
    - Python dtype: Image or torch.Tensor
## Optional
- mask
    - Providing mask parameters helps refine the segmentation process by specifying regions of interest in the image. It enhances the node's ability to focus on specific segments, thereby improving the overall segmentation result.
    - Comfy dtype: ndarray
    - Python dtype: numpy.ndarray

# Output types
- segmented_image
    - The output represents the result of the segmentation process, where different parts of the input image are identified and distinguished. This is crucial for further analysis and understanding of the model's performance.
    - Comfy dtype: Image
    - Python dtype: PIL.Image
- segmentation_map
    - This output provides a detailed map of the segmentation, indicating the boundaries and classification of each segment in the image. This is essential for evaluating the accuracy and effectiveness of the segmentation algorithm.
    - Comfy dtype: ndarray
    - Python dtype: numpy.ndarray

# Usage tips
- Infra type: CPU

# Source code
```
class KfDebug_Segs(KfDebug_Passthrough):
    RETURN_TYPES = ('SEGS',)
```