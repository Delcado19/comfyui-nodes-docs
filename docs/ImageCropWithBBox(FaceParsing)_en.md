# Documentation
- Class name: ImageCropWithBBox
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

The ImageCropWithBBox node is designed to process images based on bounding box coordinates by cropping out regions of interest. It plays a key role in focusing computational resources on specific regions of images, thereby improving the efficiency of subsequent image analysis tasks.

# Input types
## Required
- bbox
    - The 'bbox' parameter is critical as it defines the region in the image to be cropped. It directly affects the node's operation by specifying the coordinates for the cropping process.
    - Comfy dtype: Tensor
    - Python dtype: torch.Tensor
- image
    - The 'image' parameter is the fundamental input to the ImageCropWithBBox node as it represents the raw image data to be processed. The quality and format of the image data are crucial for the accuracy of the cropping operation.
    - Comfy dtype: Tensor
    - Python dtype: torch.Tensor

# Output types
- cropped_image
    - The 'cropped_image' output contains the result of the cropping operation. It is important as it presents the region of the original image specified by the 'bbox' parameter, ready for further analysis or processing.
    - Comfy dtype: Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Ryuukeisyou/comfyui_face_parsing)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
