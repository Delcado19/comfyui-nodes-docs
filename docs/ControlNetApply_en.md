# Documentation
- Class name: ControlNetApply
- Category: conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The 'apply_controlnet' method in the ControlNetApply class is designed to integrate control signals into the neural network's processing pipeline. It receives conditioning data, a control network, an image, and a strength parameter to modulate the influence of the control network on the image. The method aims to enhance the image using the guidance of the control network, ensuring the output conditioning reflects the intended adjustments based on the specified strength.

# Input types
## Required
- conditioning
    - The 'conditioning' parameter is essential for the node's operation, as it provides the initial state or context for the control network to apply its modifications. This is a critical input that directly affects the result of image processing.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- control_net
    - The 'control_net' parameter defines the network that will be used to guide modifications to the image. It is a required input and plays a central role in forming the final output of the node's processing.
    - Comfy dtype: CONTROL_NET
    - Python dtype: torch.nn.Module
- image
    - The 'image' parameter is the object of the control network's modifications. It represents the data that will be enhanced or altered according to the provided control signals.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- strength
    - The 'strength' parameter adjusts the intensity of the control network's influence on the image. It is an optional input, allowing fine-tuning of the degree of modifications applied to the image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- conditioning
    - The output 'conditioning' represents the modified state after applying the influence of the control network. It is important as it carries the final adjustments made to the original image data.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
