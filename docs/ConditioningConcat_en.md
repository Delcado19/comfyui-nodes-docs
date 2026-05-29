# Documentation
- Class name: ConditioningConcat
- Category: conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ConditioningConcat node is designed to merge two conditional inputs into a single output. It skillfully concatenates the source conditioning input with the target conditioning input along a specified dimension, ensuring the resulting output is well-suited for subsequent processing steps in neural network architectures.

# Input types
## Required
- conditioning_to
    - The 'conditioning_to' parameter represents the target conditioning input that will be concatenated with another conditioning input. It plays a crucial role in determining the structure of the final output, as it establishes the base to which additional conditioning information is appended.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Any]]
- conditioning_from
    - The 'conditioning_from' parameter provides the source conditioning input that will be combined with 'conditioning_to'. It is important because it contributes additional context or features to the final concatenated output, potentially enhancing the model's ability to make informed predictions.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Any]]

# Output types
- output
    - The output of the ConditioningConcat node is a merged conditioning tensor that integrates elements from both the 'conditioning_to' and 'conditioning_from' inputs. This output is strategically constructed to be compatible with downstream neural network operations.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Any]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
