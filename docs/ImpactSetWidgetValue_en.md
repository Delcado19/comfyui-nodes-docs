# Documentation
- Class name: ImpactSetWidgetValue
- Category: ImpactPack/Logic/_for_test
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The `doit` method of the ImpactSetWidgetValue node is designed to handle assigning different data types to a specified widget. It determines the data type and applies the corresponding value to the widget, abstracting the complexity of setting widget values and simplifying interaction with widgets within the ImpactPack suite.

# Input types
## Required
- signal
    - The `signal` argument is critical for the node's operation because it represents the control signal that triggers the widget value assignment process. Its presence is required for the node to run correctly.
    - Comfy dtype: any_typ
    - Python dtype: Any
- node_id
    - The `node_id` argument is essential because it uniquely identifies the node in the system, allowing precise targeting of widget value assignments. It plays a key role in ensuring the widget is operated accurately.
    - Comfy dtype: INT
    - Python dtype: int
- widget_name
    - The `widget_name` argument is vital for the node's function because it specifies the name of the widget to be assigned. It is the key information for successful execution of the node's purpose.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- boolean_value
    - Providing a `boolean_value` argument allows the node to assign a boolean value to the specified widget, enhancing the node's versatility.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- int_value
    - Using an `int_value` argument enables the node to set an integer value for the widget, supporting the node's ability to handle various data types.
    - Comfy dtype: INT
    - Python dtype: int
- float_value
    - Supplying a `float_value` argument indicates that the node will assign a floating‑point number to the widget, demonstrating the node's capability to manage different numeric formats.
    - Comfy dtype: FLOAT
    - Python dtype: float
- string_value
    - Providing a `string_value` argument allows the node to assign a string to the widget, highlighting the node's flexibility in handling string data for widget configuration.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- signal_opt
    - The `signal_opt` output argument represents an optional control signal that the node may return after widget value assignment, indicating completion of the operation.
    - Comfy dtype: any_typ
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
