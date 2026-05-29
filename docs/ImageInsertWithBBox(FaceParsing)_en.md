# Documentation
- Class name: ImageInsertWithBBox
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

This node aims to insert one image into the specified bounding box position of another image, which is crucial for applications such as face parsing and object tracking. It handles the processes of resizing, padding, and masking to ensure the source image is seamlessly inserted into the target image, facilitating overall understanding and analysis of visual content.

# Input types
## Required
- bbox
    - Bounding box parameters are crucial for defining the area where the image will be inserted. They directly affect the cropping and placement of the image within the target, ensuring precise positioning and integration.
    - Comfy dtype: BBOX
    - Python dtype: torch.Tensor
- image_src
    - The source image is the main visual content to be inserted into the target image. Its quality and dimensions are crucial to the final output, as they determine how the inserted image blends with the background.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image
    - The image parameter represents the target image into which the source image will be inserted. The characteristics of this image, such as resolution and color space, are important for the overall processing and final result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- result
    - The output is the final image after the source image is inserted into the specified bounding box. It represents the successful integration of the two visual elements, which is crucial for further analysis and visualization tasks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/Ryuukeisyou/comfyui_face_parsing)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
