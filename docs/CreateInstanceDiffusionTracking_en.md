# Documentation
- Class name: CreateInstanceDiffusionTracking
- Category: KJNodes/InstanceDiffusion
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Creates tracking data to be used with InstanceDiffusion:  
https://github.com/logtd/ComfyUI-InstanceDiffusion  
  
InstanceDiffusion prompt format:  
"class_id.class_name": "prompt",  
for example:  
"1.head": "((head))",

# Input types
## Required
- coordinates
    - The coordinates input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- bbox_width
    - The bbox_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- bbox_height
    - The bbox_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- class_name
    - The class_name input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- class_id
    - The class_id input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- size_multiplier
    - The size_multiplier input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- fit_in_frame
    - The fit_in_frame input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- tracking
    - The tracking output is produced by this node.
    - Comfy dtype: TRACKING
    - Python dtype: object
- prompt
    - The prompt output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - The width output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- bbox_width
    - The bbox_width output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- bbox_height
    - The bbox_height output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
