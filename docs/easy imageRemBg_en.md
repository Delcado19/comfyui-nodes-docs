# Documentation
- Class name: imageRemBg
- Category: EasyUse/Image
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The imageRemBg node is designed to remove the background from an image, providing a simplified and clean foreground for further use or display. It achieves this by applying a deep learning model optimized for background removal, ensuring the output image retains its primary subject while minimizing background interference.

# Input types
## Required
- images
    - The input image parameter is critical to the node's operation, as it defines the data on which the background removal process will be applied. The quality and format of these images directly affect the effectiveness of background removal.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- rem_mode
    - The rem_mode parameter specifies the removal mode the node will use. It is crucial because it determines the algorithmic approach used for background separation, affecting the accuracy of the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- image_output
    - The image_output parameter indicates how the generated images are handled after processing. It can hide them, preview them, save them, or both hide and save, providing flexibility in managing the output based on user needs.
    - Comfy dtype: COMBO['Hide', 'Preview', 'Save', 'Hide/Save']
    - Python dtype: str
- save_prefix
    - The save_prefix parameter is used when the user chooses to save the processed images. It provides a base name for the saved files, which is important for organizing and identifying output images.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - The optional prompt parameter can be used to provide additional context or instructions to the node, which may be necessary for certain operations or refining the output based on specific criteria.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The extra_pnginfo parameter is used to include any additional information that the node's operation may require. This could be metadata or other relevant details that affect processing or output.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: str

# Output types
- image
    - The image output parameter represents the processed image after background removal. It is the primary output of the node and is significant because it reflects the result of the background removal process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output parameter provides the binary mask generated during the background removal process. It helps isolate the foreground object from the background in the image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
