# Documentation
- Class name: instantIDApply
- Category: EasyUse/Adapter
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The instantIDApply node aims to simplify the process of applying unique identifiers to a given image or dataset, facilitating the integration of various models and control mechanisms to achieve desired results.

# Input types
## Required
- pipe
    - The pipe parameter serves as the main channel for data flow within the node, enabling coordination of subsequent operations and integration of different components.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- image
    - The image parameter is critical for providing visual data to the node, which is essential for processing and analysis within the system.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- instantid_file
    - The instantid_file parameter is vital for identifying and managing unique identifiers within the system, ensuring data accuracy and consistency.
    - Comfy dtype: COMBO[folder_paths.get_filename_list('instantid')]
    - Python dtype: str
- insightface
    - The insightface parameter plays an important role in determining the computational backend for face analysis tasks, thereby affecting the node's performance and efficiency.
    - Comfy dtype: COMBO[['CPU', 'CUDA', 'ROCM']]
    - Python dtype: str
- control_net_name
    - The control_net_name parameter is crucial for specifying the control network to be used, shaping the overall behavior and output of the node.
    - Comfy dtype: COMBO[folder_paths.get_filename_list('controlnet')]
    - Python dtype: str
- cn_strength
    - The cn_strength parameter adjusts the degree of influence the control network has on the result, serving as an important tool for optimizing and fine-tuning node performance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cn_soft_weights
    - The cn_soft_weights parameter determines the softness of the control network's influence, affecting the subtlety of the node's adjustments.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight
    - The weight parameter is critical for balancing the contributions of different components within the node, ensuring harmonious integration of various characteristics.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_at
    - The start_at parameter defines the initial point at which node processing begins, laying the foundation for subsequent operations and results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - The end_at parameter marks the final point at which node processing ends, determining the scope and limits of the node's functionality.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise
    - The noise parameter introduces an element of randomness into the node's operation, contributing to the diversity and creativity of results.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- pipe
    - The pipe output is a comprehensive representation of the node's processed data, encapsulating the results and facilitating further transmission within the system.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- model
    - The model output provides a refined and optimized version of the input model, enhanced by the node's processing capabilities.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
    - The positive output is a dataset representing desired results or features, used to guide and inform subsequent processes.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
    - The negative output contains data representing undesired results or features, serving as a reference for avoiding certain outcomes in future operations.
    - Comfy dtype: CONDITIONING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
