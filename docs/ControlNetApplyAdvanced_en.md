# Documentation
- Class name: ControlNetApplyAdvanced
- Category: conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ControlNetApplyAdvanced node is designed to apply a control network to a set of conditioning inputs, enhancing precision and control over the generation process. It operates by adjusting the influence of positive and negative conditioning factors, allowing fine-tuning of the output based on specific image features and desired strength.

# Input types
## Required
- positive
    - The "positive" input represents desired features that should be emphasized in the output. It is crucial for guiding the generation process toward the desired outcome.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]
- negative
    - The "negative" input contains features that should be avoided in the output. It plays an important role in refining the generation process to exclude unwanted elements.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]
- control_net
    - The "control_net" parameter is a preconfigured network used to manage the application of control prompts. It is essential to the node's functionality, determining how conditioning is applied.
    - Comfy dtype: CONTROL_NET
    - Python dtype: ControlNet
- image
    - The "image" input is the visual data to which the control network will be applied. It is a fundamental component as it defines the context for the conditioning process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- strength
    - The "strength" parameter determines the intensity of the control network's influence on the output. It is a key factor in controlling the degree of change induced by conditioning.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - The "start_percent" parameter specifies the starting point of the control network effect relative to the image dimensions. It is important in defining the initial range of control application.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The "end_percent" parameter marks the endpoint of the control network's influence. It is crucial in defining the range over which the control network affects the output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- positive
    - The "positive" output is refined conditioning data adjusted by the control network, ensuring desired features are more prominent in the final output.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]
- negative
    - The "negative" output reflects conditioning data where unwanted features are minimized through the application of the control network.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
