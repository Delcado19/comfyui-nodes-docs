# Documentation
- Class name: SparseCtrlLoaderAdvanced
- Category: Adv-ControlNet 🛂🅐🅒🅝/SparseCtrl
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

The SparseCtrlLoaderAdvanced node is designed to efficiently load and manage advanced control networks with sparse control capabilities. It abstracts the complexity of handling sparse control data, enabling users to seamlessly integrate motion characteristics into their control networks. This node simplifies the process of loading control networks using sparse control methods, enhancing the overall performance and functionality of the system.

# Input types
## Required
- sparsectrl_name
    - The sparsectrl_name parameter is crucial for identifying the specific control network to be loaded. It influences the node's execution by determining which control network's data is accessed and processed.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- use_motion
    - The use_motion parameter determines whether motion characteristics are incorporated into the control network. It plays a significant role in the node's functionality by enabling or disabling the motion aspect of the control network.
    - Comfy dtype: bool
    - Python dtype: bool
- motion_strength
    - The motion_strength parameter adjusts the intensity of motion characteristics within the control network. It is important for fine-tuning the impact of motion on the final output of the control network.
    - Comfy dtype: float
    - Python dtype: float
- motion_scale
    - The motion_scale parameter adjusts the scale of motion effects within the control network. It is crucial for controlling the degree to which motion influences the network's behavior.
    - Comfy dtype: float
    - Python dtype: float
- sparse_method
    - The sparse_method parameter defines the method for processing sparse control data within the control network. It is essential for determining the strategy for processing and integrating sparse data.
    - Comfy dtype: SparseMethod
    - Python dtype: SparseMethod
- tk_optional
    - The tk_optional parameter provides a way to specify optional timestep keyframes for the control network. This is important for users who need to customize the temporal aspect characteristics of the control network.
    - Comfy dtype: TimestepKeyframeGroup
    - Python dtype: TimestepKeyframeGroup

# Output types
- CONTROL_NET
    - The CONTROL_NET output represents the loaded advanced control network, incorporating the specified sparse control settings and motion characteristics. It is important because it is the primary output of the node, enabling further processing and utilization within the system.
    - Comfy dtype: ControlNetAdvanced
    - Python dtype: ControlNetAdvanced

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
