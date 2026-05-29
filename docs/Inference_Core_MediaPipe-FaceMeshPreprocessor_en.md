
# Documentation
- Class name: Inference_Core_MediaPipe-FaceMeshPreprocessor
- Category: ControlNet Preprocessors/Faces and Poses Estimators
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node aims to preprocess images for facial mesh detection tasks using MediaPipe's Face Mesh technology. It dynamically installs dependencies, configures MediaPipe Face Mesh settings based on input parameters, and processes images to detect facial landmarks, with configurable precision and face count limits.

# Input types
## Required
- image
    - Input image that needs facial mesh detection processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- max_faces
    - Specifies the maximum number of faces to detect in a single image, allowing control over face detection range and performance.
    - Comfy dtype: INT
    - Python dtype: int
- min_confidence
    - Determines the minimum confidence threshold for detected faces, enabling fine-tuning of detection sensitivity to balance accuracy and detection rate.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resolution
    - The resolution to which the input image is resized before processing, affecting the precision of facial mesh detection.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The processed image containing detected facial meshes, available for further analysis or visualization.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
