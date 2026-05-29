# Documentation
- Class name: KfAddCurveToPGroupx10
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node integrates multiple curves into a single parameter group, streamlining the management and application of keyframe curves in a project. It emphasizes data consolidation to improve efficiency and workflow.

# Input types
## Required
- curve0
    - The initial curve is critical because it sets the foundation for the parameter group. Its inclusion is mandatory and directly affects the node's operation and output.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: kf.KeyframedCurve
- parameter_group
    - The parameter group acts as a container for curves, playing a key role in organizing and structuring data within the node's workflow.
    - Comfy dtype: PARAMETER_GROUP
    - Python dtype: kf.ParameterGroup
## Optional
- curve1
    - Additional curves like curve1 add complexity and versatility to the parameter group, allowing richer datasets to be processed and manipulated.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: kf.KeyframedCurve
- curve2
    - Further merging of curves, such as curve2, helps the node handle diverse and complex data, enhancing overall functionality.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: kf.KeyframedCurve
- curve3
    - Optional curves like curve3 provide additional dimensions to the parameter group, enabling the node to effectively manage more complex data structures.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: kf.KeyframedCurve
- curve4
    - The inclusion of curve4 further extends the parameter group's capabilities, allowing finer control over the data being processed.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: kf.KeyframedCurve
- curve5
    - curve5 increases the parameter group's ability to integrate multiple data types, improving the node's adaptability to various data inputs.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: kf.KeyframedCurve
- curve6
    - By including curve6, the node gains the ability to manage more complex datasets, contributing to the overall robustness of the parameter group.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: kf.KeyframedCurve
- curve7
    - curve7 is another optional curve that, when included, further enriches the parameter group and enhances the node's data processing capabilities.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: kf.KeyframedCurve
- curve8
    - The addition of curve8 enables the node to handle a broader range of data, increasing the versatility of the parameter group.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: kf.KeyframedCurve
- curve9
    - Including the final optional curve, curve9, allows the node to handle the most complex datasets, maximizing the comprehensiveness of the parameter group.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: kf.KeyframedCurve

# Output types
- parameter_group
    - The output parameter group is the collection of all input curves, representing a unified and structured dataset that can be utilized downstream in the workflow.
    - Comfy dtype: PARAMETER_GROUP
    - Python dtype: kf.ParameterGroup

# Usage tips
- Infra type: CPU

# Source code
```
class KfAddCurveToPGroupx10:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('PARAMETER_GROUP',)

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'curve0': ('KEYFRAMED_CURVE', {'forceInput': True})}, 'optional': {'parameter_group': ('PARAMETER_GROUP', {'forceInput': True}), 'curve1': ('KEYFRAMED_CURVE', {'forceInput': True}), 'curve2': ('KEYFRAMED_CURVE', {'forceInput': True}), 'curve3': ('KEYFRAMED_CURVE', {'forceInput': True}), 'curve4': ('KEYFRAMED_CURVE', {'forceInput': True}), 'curve5': ('KEYFRAMED_CURVE', {'forceInput': True}), 'curve6': ('KEYFRAMED_CURVE', {'forceInput': True}), 'curve7': ('KEYFRAMED_CURVE', {'forceInput': True}), 'curve8': ('KEYFRAMED_CURVE', {'forceInput': True}), 'curve9': ('KEYFRAMED_CURVE', {'forceInput': True})}}

    def main(self, parameter_group=None, **kwargs):
        if parameter_group is None:
            parameter_group = kf.ParameterGroup(kwargs)
        else:
            parameter_group = deepcopy(parameter_group)
            for curve in parameter_group.values():
                parameter_group.parameters[curve.label] = curve
        return (parameter_group,)
```