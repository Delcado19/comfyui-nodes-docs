# Documentation
- Class name: CLIPSeg
- Category: ♾️Mixlab/Mask
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-CLIPSeg

The CLIPSeg node performs image segmentation using text prompts and image input. It leverages the power of the CLIPSeg model to create segmentation masks that match the provided textual description. The node excels at generating masks that can be further processed for various applications such as object recognition, image editing, and data analysis.

# Input types
## Required
- image
- The image parameter is critical for the node's operation because it is the primary input for segmentation. It determines what will be analyzed and segmented based on the provided text prompt.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- text
- The text parameter is required because it provides descriptive prompts that guide the segmentation process. It enables the node to focus on specific elements in the image that correspond to the text description.
    - Comfy dtype: STRING
    - Python dtype: str
- blur
- The blur parameter allows adjustment of the smoothness of the segmentation mask. It helps refine mask edges and improve overall segmentation quality.
    - Comfy dtype: FLOAT
    - Python dtype: float
- threshold
- The threshold parameter is used to convert the continuous segmentation mask into a binary mask. It determines the cutoff between objects and background in the segmentation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- dilation_factor
- The dilation factor is important for expanding the boundaries of the segmentation mask. It can be used to ensure the segmented region fully covers the target object.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- Mask
- The mask output provides the binary segmentation mask produced by the image segmentation process. This is a key output for applications that require object identification or separation from the background.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- Heatmap Mask
- The heatmap mask output is a visual representation of the segmentation mask, where color intensity corresponds to confidence levels of the segmentation. It is suitable for visual analysis and debugging purposes.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- BW Mask
- The black‑white mask output is a binarized version of the segmentation mask, offering a direct distinction between segmented objects and background. It is commonly used for further processing or as a simplified representation of the segmentation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-CLIPSeg)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
