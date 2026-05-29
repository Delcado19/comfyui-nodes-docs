# Documentation
- Class name: WAS_Remove_Rembg
- Category: WAS Suite/Image/AI
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Remove_Rembg node is designed to seamlessly remove the background from images using advanced AI algorithms. It focuses on providing a clean and efficient way to isolate subjects and backgrounds, enhancing the usability of images in various applications such as graphic design, content creation, and more.

# Input types
## Required
- images
    - The 'images' parameter is crucial as it defines the input images from which the background will be removed. The quality and resolution of these images directly affect the node's output, determining the clarity and precision of subject separation.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image.Image]
## Optional
- transparency
    - The 'transparency' parameter determines whether the background should be made transparent after removal. This is particularly useful for images that will be overlaid on other graphics or backgrounds.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- model
    - The 'model' parameter is used to select the AI model for background removal. Different models may offer varying levels of detail and accuracy, so this choice is critical for achieving the desired results.
    - Comfy dtype: COMBO[u2net, u2netp, u2net_human_seg, silueta, isnet-general-use, isnet-anime]
    - Python dtype: str
- post_processing
    - When 'post_processing' is enabled, additional image enhancements are applied to the output, potentially improving the visual appeal of the final result.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- only_mask
    - When set to true, the 'only_mask' parameter returns only the mask without applying the background removal process to the original image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- alpha_matting
    - The 'alpha_matting' parameter activates alpha matting technology to refine the edges of the mask, making them look more natural.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- alpha_matting_foreground_threshold
    - This parameter, along with other parameters related to alpha matting, fine-tunes the edge detection of the mask. It determines the threshold for what is considered the foreground.
    - Comfy dtype: INT
    - Python dtype: int
- alpha_matting_background_threshold
    - It works together with the foreground threshold to define what constitutes the background during the alpha matting process.
    - Comfy dtype: INT
    - Python dtype: int
- alpha_matting_erode_size
    - The 'alpha_matting_erode_size' parameter controls the size of the erosion effect applied to the mask, which helps refine the edges of the mask.
    - Comfy dtype: INT
    - Python dtype: int
- background_color
    - The 'background_color' parameter allows users to specify a solid color to serve as the new background after the original background is removed.
    - Comfy dtype: COMBO[none, black, white, magenta, chroma green, chroma blue]
    - Python dtype: str

# Output types
- images
    - The 'images' output parameter represents the processed images with the background removed. It is the result of the node's operation and is important for downstream tasks that use these images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
