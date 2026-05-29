# Documentation
- Class name: FaceBoundingBox
- Category: FaceAnalysis
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_FaceAnalysis.git

This node aims to analyze images and detect facial bounding boxes, providing critical functionality for image processing applications that require face detection and analysis.

# Input types
## Required
- analysis_models
    - This parameter contains the models and libraries used for face detection in images, significantly impacting the node's ability to process and analyze input data.
    - Comfy dtype: DICT[str, Any]
    - Python dtype: Dict[str, Any]
- image
    - The image parameter is essential for the node's operation, as it is the primary input for facial bounding box detection, directly affecting the accuracy and effectiveness of the analysis.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- padding
    - Padding is an important parameter that ensures detected faces have sufficient margins, preventing cropping issues and improving the overall quality of detection.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- index
    - The index parameter allows selecting a specific face from multiple detections, focusing the node's output on the desired facial bounding box.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The output image tensor represents the cropped and processed image of detected faces, serving as a critical component for further analysis or display purposes.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- x
    - The x-coordinate of the top-left corner of the bounding box provides a reference point for facial detection, aiding in precise localization of faces within the image.
    - Comfy dtype: INT
    - Python dtype: int
- y
    - The y-coordinate of the top-left corner of the bounding box is crucial for accurately positioning detected faces within the image context.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The width of the bounding box is important as it determines the size of the detected face, affecting the resolution and level of detail in the output.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height of the bounding box is critical for maintaining the aspect ratio and proportions of detected faces, ensuring the integrity of facial features in the output.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_FaceAnalysis)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
