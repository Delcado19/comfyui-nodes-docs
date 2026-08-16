# Documentation
- Class name: StartRecordCUDAMemoryHistory
- Category: KJNodes/memory
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

THIS NODE ALWAYS RUNS. Starts recording CUDA memory allocation history, can be ended and saved with EndRecordCUDAMemoryHistory.

# Input types
## Required
- input
    - The input input is used by this node during execution.
    - Comfy dtype: *
    - Python dtype: object
- enabled
    - None: disable, 'state': keep info for allocated memory, 'all': keep history of all alloc/free calls
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- context
    - None: no tracebacks, 'state': tracebacks for allocated memory, 'alloc': for alloc calls, 'all': for free calls
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- stacks
    - 'python': Python/TorchScript/inductor frames, 'all': also C++ frames
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- max_entries
    - Maximum number of entries to record
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- input
    - The input output is produced by this node.
    - Comfy dtype: *
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
