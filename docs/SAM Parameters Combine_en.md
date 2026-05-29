# Documentation
- Class name: WAS_SAM_Combine_Parameters
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `sam_combine_parameters` method is designed to merge two sets of SAM (Semantic Affinity Model) related parameters. Its role is to integrate multiple parameter sets into a unified structure, which is essential for operations that need to consolidate data from different SAM instances. This node plays a key role in ensuring seamless integration of points and labels, facilitating the execution of complex image and masking tasks in the WAS suite.

# Input types
## Required
- sam_parameters_a
    - The first set of SAM parameters is critical to the combination process. It contains the initial data points and labels that will be merged with another set. This parameter significantly influences the structure and content of the final combined parameters, affecting subsequent steps in image and masking workflows.
    - Comfy dtype: SAM_PARAMETERS
    - Python dtype: Dict[str, Union[np.ndarray, List[str]]]
- sam_parameters_b
    - The second set of SAM parameters to be combined with the first set. It is equally important as the first set, providing additional data points and labels that contribute to the comprehensiveness of the combined parameters.
    - Comfy dtype: SAM_PARAMETERS
    - Python dtype: Dict[str, Union[np.ndarray, List[str]]]

# Output types
- parameters
    - The output of the `sam_combine_parameters` method is a unified set of parameters that contains the combined data from both input SAM parameters. This output is important because it serves as the foundation for further processing and analysis in the image and masking domain.
    - Comfy dtype: SAM_PARAMETERS
    - Python dtype: Dict[str, Union[np.ndarray, List[str]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
