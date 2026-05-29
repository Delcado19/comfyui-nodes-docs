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
```
class WAS_SAM_Combine_Parameters:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        return {'required': {'sam_parameters_a': ('SAM_PARAMETERS',), 'sam_parameters_b': ('SAM_PARAMETERS',)}}
    RETURN_TYPES = ('SAM_PARAMETERS',)
    FUNCTION = 'sam_combine_parameters'
    CATEGORY = 'WAS Suite/Image/Masking'

    def sam_combine_parameters(self, sam_parameters_a, sam_parameters_b):
        parameters = {'points': np.concatenate((sam_parameters_a['points'], sam_parameters_b['points']), axis=0), 'labels': np.concatenate((sam_parameters_a['labels'], sam_parameters_b['labels']))}
        return (parameters,)
```