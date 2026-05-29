# Documentation
- Class name: KfCurveFromYAML
- Category: CATEGORY
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node is designed to parse YAML-formatted strings to generate keyframe curves, which is an essential component in animation and simulation workflows. It simplifies the creation process by allowing users to define complex motion paths through a text-based format, making it easier to use and enhancing the modularity of the design process.

# Input types
## Required
- yaml
    - The 'yaml' parameter is a string containing a YAML-formatted description of the curve. It is crucial as it directly defines the structure and characteristics of the curve to be generated. This parameter is vital for the node's operation, specifying the keyframes and interpolation methods used in the curve.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- curve
    - The output 'curve' is a data structure representing the keyframe curve defined by the input YAML. It encapsulates the motion path with keyframes, interpolation, and other properties, serving as a fundamental element for subsequent operations in animation or simulation workflows.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: keyframed.Curve

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/dmarx/ComfyUI-Keyframed)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
