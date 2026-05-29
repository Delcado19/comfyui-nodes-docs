# Documentation
- Class name: CR_XYList
- Category: Comfyroll/XY Grid
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_XYList node is designed to perform cross join operations on two lists, generating a combined grid. It can add prefix and suffix strings to list elements, enhancing output flexibility. The node also provides annotations and trigger mechanisms to indicate when grid generation is complete.

# Input types
## Required
- index
    - The index parameter is crucial for determining the position of the current combination in the grid. It affects node execution by deciding which elements from the input lists are selected for output.
    - Comfy dtype: INT
    - Python dtype: int
- list1
    - List1 is the first input list for the cross join operation. It plays a key role in the node's functionality by contributing to the generation of horizontal elements in the grid.
    - Comfy dtype: STRING
    - Python dtype: str
- list2
    - List2 is the second input list for the cross join operation, essential for creating vertical elements in the grid.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- x_prepend
    - The x_prepend parameter allows adding a prefix before each element in list1. This can be used to customize output format or add context to elements.
    - Comfy dtype: STRING
    - Python dtype: str
- x_append
    - The x_append parameter is used to append a suffix after each element in list1, providing further customization of output elements.
    - Comfy dtype: STRING
    - Python dtype: str
- x_annotation_prepend
    - The x_annotation_prepend parameter is used to add annotation prefixes to each element in list1 when generating annotations. It enhances the descriptive nature of annotations.
    - Comfy dtype: STRING
    - Python dtype: str
- y_prepend
    - The y_prepend parameter allows adding a prefix before each element in list2, allowing customization of vertical element output.
    - Comfy dtype: STRING
    - Python dtype: str
- y_append
    - The y_append parameter is used to append a suffix after each element in list2, providing additional control over the final format of vertical elements.
    - Comfy dtype: STRING
    - Python dtype: str
- y_annotation_prepend
    - The y_annotation_prepend parameter allows adding annotation prefixes to each element in list2 when generating annotations, enhancing the informational content of annotations.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- X
    - The X output represents the horizontal combined element of list1 at the current index. It is a key component of grid rows.
    - Comfy dtype: STRING
    - Python dtype: str
- Y
    - The Y output represents the vertical combined element of list2 at the corresponding index. It is a key component of grid columns.
    - Comfy dtype: STRING
    - Python dtype: str
- x_annotation
    - The x_annotation output provides an annotated version of list1 elements when grid generation is complete, enhancing result interpretability.
    - Comfy dtype: STRING
    - Python dtype: str
- y_annotation
    - The y_annotation output provides an annotated version of list2 elements when grid generation is complete, adding context to result interpretation.
    - Comfy dtype: STRING
    - Python dtype: str
- trigger
    - The trigger output indicates when grid generation is complete, marking the end of the cross join process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- show_help
    - The show_help output provides a URL link to documentation for obtaining further help and guidance on using this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
