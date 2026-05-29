# Documentation
- Class name: ConcatConditionings
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

This node is designed to merge multiple conditional inputs into a single output. It effectively combines their influences by concatenating the first element of each conditional input with the primary conditional input. This node plays a key role in integrating different conditional signals to guide subsequent model behavior.

# Input types
## Required
- conditioning1
    - The primary conditional input, which will be combined with other conditional inputs. It is crucial because it forms the basis of the merged output and influences the final conditions applied to the model.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Any]]
## Optional
- conditioning_from
    - Additional conditional inputs that will be concatenated with the primary conditional input. Each input is expected to contribute to the overall conditional effect, but a warning is issued if there are multiple conditions, indicating that only the first will be applied.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Any]]

# Output types
- out
    - The node's output is a list of merged conditional pairs, where each pair consists of a tensor formed by concatenating the primary conditional tensor and the additional conditional tensor, along with a copy of the secondary element from the original conditional pair.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Any]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
