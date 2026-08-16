# Documentation
- Class name: Image Send HTTP
- Category: WAS Suite/IO
- Output node: True
- Repo Ref: https://github.com/ltdrdata/was-node-suite-comfyui

A massive node pack consisting of over 200 nodes, including image processing, masking, text handling, and arithmetic operations.
NOTE: A replacement node pack provided for existing users following the retirement of the original author of the widely used WAS Node Suite.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- url
    - The url input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- method_type
    - The method_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- request_field_name
    - The request_field_name input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- additional_request_headers
    - The additional_request_headers input is used by this node during execution.
    - Comfy dtype: DICT
    - Python dtype: object

# Output types
- status_code
    - The status_code output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- result_text
    - The result_text output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ltdrdata/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
