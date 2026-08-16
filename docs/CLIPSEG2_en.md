# Documentation
- Class name: CLIPSEG2
- Category: image/transformation
- Output node: False
- Repo Ref: https://github.com/ltdrdata/was-node-suite-comfyui

A massive node pack consisting of over 200 nodes, including image processing, masking, text handling, and arithmetic operations.
NOTE: A replacement node pack provided for existing users following the retirement of the original author of the widely used WAS Node Suite.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- text
    - The text input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- use_cuda
    - The use_cuda input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- clipseg_model
    - The clipseg_model input is used by this node during execution.
    - Comfy dtype: CLIPSEG_MODEL
    - Python dtype: object

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ltdrdata/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
