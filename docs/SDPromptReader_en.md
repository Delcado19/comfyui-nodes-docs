# Documentation
- Class name: SDPromptReader
- Category: SD Prompt Reader
- Output node: True
- Repo Ref: https://github.com/receyuki/comfyui-prompt-reader-node

SD Prompt Reader is a ComfyUI node registered by `custom_nodes.comfyui-prompt-reader-node`. The live metadata did not provide a longer description.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- parameter_index
    - The parameter_index input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK
    - The MASK output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- POSITIVE
    - The POSITIVE output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- NEGATIVE
    - The NEGATIVE output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- SEED
    - The SEED output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- STEPS
    - The STEPS output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- CFG
    - The CFG output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- WIDTH
    - The WIDTH output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- HEIGHT
    - The HEIGHT output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- MODEL_NAME
    - The MODEL_NAME output is produced by this node.
    - Comfy dtype: *
    - Python dtype: object
- FILENAME
    - The FILENAME output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- SETTINGS
    - The SETTINGS output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/receyuki/comfyui-prompt-reader-node)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
