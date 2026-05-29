# Documentation
- Class name: SparseCtrlMergedLoaderAdvanced
- Category: Adv-ControlNet 🛂🅐🅒🅝/SparseCtrl/experimental
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

The SparseCtrlMergedLoaderAdvanced node is designed to efficiently manage and load advanced control networks with sparse control characteristics. It integrates motion features into the control network, enabling dynamic and adaptive control based on motion strength and scale parameters. This node is critical for applications requiring fine-grained control of complex systems, ensuring seamless fusion of motion and control for enhanced performance.

# Input types
## Required
- sparsectrl_name
    - The parameter 'sparsectrl_name' specifies the name of the sparse control model to be loaded, which is essential for identifying and accessing the correct control settings. This parameter is critical to the node's operation as it directly affects the applied control capabilities.
    - Comfy dtype: str
    - Python dtype: str
- control_net_name
    - The parameter 'control_net_name' is used to define the name of the control network model. It plays an important role in the node's functionality, as it determines the specific control network to be used, influencing the overall control strategy.
    - Comfy dtype: str
    - Python dtype: str
- use_motion
    - The parameter 'use_motion' indicates whether motion features should be incorporated into the control network. This is an important parameter as it enables or disables dynamic adaptation of motion-based control, leading to different control behaviors.
    - Comfy dtype: bool
    - Python dtype: bool
- motion_strength
    - The parameter 'motion_strength' adjusts the intensity of motion effects within the control network. This is a critical parameter that allows users to fine-tune the impact of motion on control outcomes, thereby customizing the control response.
    - Comfy dtype: float
    - Python dtype: float
- motion_scale
    - The parameter 'motion_scale' defines the scale of motion effects applied to the control network. It is an influential parameter that modifies the scope of motion integration, affecting the overall control dynamics.
    - Comfy dtype: float
    - Python dtype: float
## Optional
- sparse_method
    - The parameter 'sparse_method' selects the method for processing sparse data within the control network. Although it is optional, it can significantly influence how sparse data is handled, potentially altering the node's performance.
    - Comfy dtype: SPARSE_METHOD
    - Python dtype: SparseMethod
- tk_optional
    - The provided 'tk_optional' parameter can offer additional control over temporal keyframes within the control network. This optional parameter can be used to specify particular keyframes for more fine-grained control.
    - Comfy dtype: TIMESTEP_KEYFRAME
    - Python dtype: TimestepKeyframeGroup

# Output types
- CONTROL_NET
    - The output 'CONTROL_NET' represents the loaded control network with integrated motion features. It is a complex data structure that encapsulates control settings and motion parameters, ready for application in higher-level control systems.
    - Comfy dtype: CONTROL_NET
    - Python dtype: ControlNetAdvanced

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
