# Documentation
- Class name: ReferenceControlNetNode
- Category: Adv-ControlNet 🛂🅐🅒🅝/Reference
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

The ReferenceControlNetNode class is designed to manage the loading and application of control networks with reference options. It encapsulates the logic for creating advanced control structures that can be used to guide the behavior of generative models, providing a flexible interface to control the generation process based on user-defined reference types and style fidelity.

# Input types
## Required
- reference_type
    - The reference type parameter determines the type of control network to use, which has a significant impact on the style and behavior of the generated output. It is crucial for defining the method of the control mechanism and its influence on the final result.
    - Comfy dtype: str
    - Python dtype: str
- style_fidelity
    - The style fidelity parameter adjusts the degree of adherence to the reference style, affecting the stylistic consistency of the output. It plays an important role in balancing creative output with the desired level of style control.
    - Comfy dtype: float
    - Python dtype: float
- ref_weight
    - The ref_weight parameter sets the weight of the reference within the control network, directly influencing the strength of the applied control. It is essential for fine-tuning the impact of the control on the generation process.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- CONTROL_NET
    - The output of ReferenceControlNetNode is a control network object that encapsulates the advanced control logic. It is significant for guiding the generative model toward the desired outcome by applying the specified control parameters.
    - Comfy dtype: ControlBase
    - Python dtype: comfy.controlnet.ControlBase

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
