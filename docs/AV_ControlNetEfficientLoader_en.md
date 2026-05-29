
# Documentation
- Class name: AV_ControlNetEfficientLoader
- Category: Art Venture/Loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AV_ControlNetEfficientLoader node is specifically designed for efficient loading of ControlNet configurations, optimizing the loading process with advanced techniques to improve performance and resource utilization. It extends the functionality of the standard ControlNet loader, making it more suitable for scenarios that require high efficiency.

# Input types
## Required
- control_net_name
    - The name of the ControlNet configuration to load. This parameter is crucial for determining which configuration file to access and load, directly affecting the node’s operation and specifying the exact ControlNet to use.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- conditioning
    - Conditional data used in conjunction with ControlNet, influencing the final output by adjusting the model’s behavior based on the specified conditions.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- image
    - The image input that ControlNet will process, serving as the basis for applying ControlNet effects or transformations.
    - Comfy dtype: IMAGE
    - Python dtype: object
- strength
    - Determines the strength with which ControlNet is applied to the image, allowing fine-tuned control over the effect intensity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- preprocessor
    - Specifies a preprocessor to use on the image before applying ControlNet, affecting the conditioning of the input image and its compatibility with ControlNet.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Optional
- control_net_override
    - Allows dynamic overriding of the specified ControlNet configuration. This flexibility is essential for scenarios where alternative configurations may need to be used based on conditions or runtime decisions, thereby influencing the outcome of the loading process.
    - Comfy dtype: STRING
    - Python dtype: str
- timestep_keyframe
    - Defines specific time steps or keyframes within the ControlNet configuration to load. This parameter enables precise control over the loading process, allowing targeted access to particular parts of ControlNet, which can be critical for time-based or sequential applications.
    - Comfy dtype: TIMESTEP_KEYFRAME
    - Python dtype: str
- resolution
    - Determines the resolution at which the image should be processed, affecting the quality and detail of the ControlNet application.
    - Comfy dtype: INT
    - Python dtype: int
- enabled
    - Flags used to enable or disable the ControlNet loading and application process, providing a mechanism to conditionally bypass the node’s operations.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- conditioning
    - Returns the conditioned data after applying ControlNet, reflecting any modifications or enhancements made during processing.
    - Comfy dtype: CONDITIONING
    - Python dtype: list


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
