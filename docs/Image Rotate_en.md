# Documentation
- Class name: WAS_Image_Rotate
- Category: WAS Suite/Image/Transform
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The image rotation method applies specified rotation to a batch of images. It handles rotation by adjusting the angle to the nearest 90 degrees and uses a specified resampling filter to maintain image quality. The node's functionality is crucial in image preprocessing and orientation adjustment tasks.

# Input types
## Required
- images
    - The parameter 'images' is the batch of images to be rotated. It is crucial because all node operations revolve around this input. The quality and format of these images directly affect the rotation outcome.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- rotation
    - The parameter 'rotation' specifies the rotation angle in degrees. It is critical because it determines the degree of rotation applied. Any rotation value not divisible by 90 will be adjusted to the nearest multiple of 90 for standard processing.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- mode
    - The parameter 'mode' determines the rotation strategy: 'internal' for standard rotation, 'transpose' for rotation using image transpose methods. It is important because it determines the underlying algorithm used.
    - Comfy dtype: COMBO['transpose', 'internal']
    - Python dtype: str
- sampler
    - The parameter 'sampler' defines the resampling filter used during rotation. It is important because it affects image quality after rotation. Different samplers offer trade-offs between speed and image fidelity.
    - Comfy dtype: COMBO['nearest', 'bilinear', 'bicubic']
    - Python dtype: str

# Output types
- images
    - The output 'images' contains the rotated image batch. It is the main result of the node operation and is important because it represents the transformed data for further processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
