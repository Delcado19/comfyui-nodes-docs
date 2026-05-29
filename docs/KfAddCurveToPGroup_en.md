# Documentation
- Class name: KfAddCurveToPGroup
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node integrates curves into a parameter group, making it easier to manage and organize keyframe curves within a project. It enhances the workflow by allowing seamless addition of curves, ensuring they become part of a structured group for easier access and manipulation.

# Input types
## Required
- curve
    - Curve parameters are essential because they define the specific curves to add to the parameter group. They are the primary input, determining which curve data and attributes will be managed within the group.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: kf.Curve
## Optional
- parameter_group
    - The parameter group acts as a container for curves, enabling collective management of multiple parameters. Its presence or absence affects the structure and organization of data in the node operation.
    - Comfy dtype: PARAMETER_GROUP
    - Python dtype: kf.ParameterGroup

# Output types
- parameter_group
    - The output parameter group is now enriched by the added curves, becoming a more comprehensive parameter management entity. This is important because it represents the result of the node operation, encapsulating organized data processing for further use.
    - Comfy dtype: PARAMETER_GROUP
    - Python dtype: kf.ParameterGroup

# Usage tips
- Infra type: CPU

# Source code
```
class KfAddCurveToPGroup:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('PARAMETER_GROUP',)

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'curve': ('KEYFRAMED_CURVE', {'forceInput': True})}, 'optional': {'parameter_group': ('PARAMETER_GROUP', {'forceInput': True})}}

    def main(self, curve, parameter_group=None):
        curve = deepcopy(curve)
        if parameter_group is None:
            parameter_group = kf.ParameterGroup([curve])
        else:
            parameter_group = deepcopy(parameter_group)
            parameter_group.parameters[curve.label] = curve
        return (parameter_group,)
```