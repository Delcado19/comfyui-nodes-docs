# Documentation
- Class name: MediaPipeFaceMeshVisualize
- Category: image/detection
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Draws face landmarks mesh on the input image.

# Input types
## Required
- face_landmarks
    - The face_landmarks input is used by this node during execution.
    - Comfy dtype: FACE_LANDMARKS
    - Python dtype: object
- connections
    - 'all' = oval+eyes+brows+lips+irises+nose. 'fill' = solid face_oval polygon (silhouette mask). 'custom' = toggle each feature individually (including 'tesselation', the full 2547-edge wireframe).
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- color
    - The color input is used by this node during execution.
    - Comfy dtype: COLOR
    - Python dtype: object
- thickness
    - Edge line thickness in pixels. 0 disables edge drawing.
    - Comfy dtype: INT
    - Python dtype: int
- point_size
    - Landmark dot radius in pixels. 0 disables point drawing.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- image
    - If not connected, a black canvas will be used.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
