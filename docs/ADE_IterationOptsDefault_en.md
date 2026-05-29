# Documentation
- Class name: IterationOptionsNode
- Category: Animate Diff 🎭🅐🅓/iteration opts
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The `create_iter_opts` method of the iteration options node class is designed to configure iterative settings for the sampling process. It allows users to specify the number of iterations as well as offsets for batch and seed, which are crucial for controlling the sampling procedure and ensuring diverse output generation.

# Input types
## Required
- iterations
    - The 'iterations' parameter defines how many times the sampling process will repeat. It is a fundamental aspect of the node's operation, as it directly affects the number of outputs generated.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- iter_batch_offset
    - The 'iter_batch_offset' parameter is used to adjust the batch index for each iteration. It plays a role in the sampling process, allowing for variation in the sequence of generated outputs.
    - Comfy dtype: INT
    - Python dtype: int
- iter_seed_offset
    - The 'iter_seed_offset' parameter specifies the offset for the seed used in each iteration. By changing the starting point of random number generation for each iteration, this can introduce diversity in the sampling.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- ITERATION_OPTS
    - The output 'ITERATION_OPTS' represents the configured iteration options for the sampling process. It encapsulates the user-defined settings and is essential for subsequent steps in the sampling workflow.
    - Comfy dtype: ITERATION_OPTS
    - Python dtype: IterationOptions

# Usage tips
- Infra type: CPU

# Source code
```
class IterationOptionsNode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'iterations': ('INT', {'default': 1, 'min': 1})}, 'optional': {'iter_batch_offset': ('INT', {'default': 0, 'min': 0, 'max': BIGMAX}), 'iter_seed_offset': ('INT', {'default': 0, 'min': BIGMIN, 'max': BIGMAX})}}
    RETURN_TYPES = ('ITERATION_OPTS',)
    CATEGORY = 'Animate Diff 🎭🅐🅓/iteration opts'
    FUNCTION = 'create_iter_opts'

    def create_iter_opts(self, iterations: int, iter_batch_offset: int=0, iter_seed_offset: int=0):
        iter_opts = IterationOptions(iterations=iterations, iter_batch_offset=iter_batch_offset, iter_seed_offset=iter_seed_offset)
        return (iter_opts,)
```