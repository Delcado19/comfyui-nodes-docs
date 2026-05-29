# Documentation
- Class name: ConditioningZeroOut
- Category: advanced/conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ConditioningZeroOut node aims to manipulate conditioning data by zeroing out specific elements in the conditioning data (such as 'pooled_output'). This process is crucial for controlling the flow of information in neural networks, allowing targeted modification of model predictions without changing the underlying structure of the data.

# Input types
## Required
- conditioning
    - The 'conditioning' parameter is crucial for the operation of the node because it provides the input data to be processed. This input significantly influences the execution of the node and the result of the zeroing operation, determining which elements in the conditioning data are targeted for modification.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]

# Output types
- conditioning
    - The output 'conditioning' parameter represents the conditioning data modified after the zero_out operation. It is important because it carries updated information that can directly affect subsequent steps in the neural network processing pipeline.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, Any]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
