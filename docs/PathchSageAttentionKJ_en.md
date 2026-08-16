# Documentation
- Class name: PathchSageAttentionKJ
- Category: KJNodes/experimental
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Experimental node for patching attention mode. This doesn't use the model patching system and thus can't be disabled without running the node again with 'disabled' option.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- sage_attention
    - Patch the attention of the model passing through this node to use sageattn. To revert, run this node again with the disabled option. Requires the sageattention library to be installed.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- allow_compile
    - Allow the use of torch.compile for the sage attention function, requires latest sageattn 2.2.0 or higher.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
