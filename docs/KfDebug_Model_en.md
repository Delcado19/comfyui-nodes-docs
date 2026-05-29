# Documentation
- Class name: KfDebug_Model
- Category: Debugging
- Output node: True
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node facilitates inspection and analysis of the model's internal state and outputs, providing a means to understand and debug the model's behavior during inference.

# Input types
## Required
- input_data
    - Input data is crucial, as it represents the samples or batches of samples processed by the model. It directly affects the model's output and the insights gained from debugging.
    - Comfy dtype: COMBO[numpy.ndarray, torch.Tensor]
    - Python dtype: Union[numpy.ndarray, torch.Tensor]
- model
    - Model parameters are essential, as they define the neural network structure whose behavior is being debugged. The model's configuration and parameters determine the debugging process.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module

# Output types
- debug_info
    - Debugging information is important because it provides a detailed overview of the model's internal workings, helping to identify potential issues and areas for improvement.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/dmarx/ComfyUI-Keyframed)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
