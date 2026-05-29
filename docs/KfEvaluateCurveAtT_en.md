# Documentation
- Class name: KfEvaluateCurveAtT
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

The KfEvaluateCurveAtT node evaluates and retrieves the value of a keyframe curve at a specific time 't'. It operates by accepting a keyframe curve and a time parameter, and returns the curve value at the given time as both a float and an integer, providing comprehensive insight into the curve's state at that moment.

# Input types
## Required
- curve
- The 'curve' parameter is essential because it defines the keyframe curve the node will evaluate. It directly influences the node's output by determining the shape and value of the curve to be analyzed at the specified time 't'.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: kf.KeyframedCurve
- t
- The 't' parameter specifies the time at which to evaluate the curve value. Although it defaults to 0, it is critical for determining the node's exact output because it indicates the precise position along the curve from which to extract the value.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- curve_value_float
- The floating‑point representation of the curve value at time 't' is a key output of the node. It captures the exact continuous nature of the curve at the specified time, offering detailed insight into curve behavior.
    - Comfy dtype: FLOAT
    - Python dtype: float
- curve_value_int
- The integer representation of the curve value at time 't' provides a discretized version of the curve value. This output may be particularly useful in contexts that require or prefer integers, such as certain types of data analysis or visualization.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/dmarx/ComfyUI-Keyframed)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
