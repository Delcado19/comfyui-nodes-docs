# Documentation
- Class name: CR_XYInterpolate
- Category: Comfyroll/XY Grid
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_XYInterpolate node aims to generate gradients on XY grids. It interpolates along the X and Y axes, providing a smooth transition between specified start and end points. This node is especially useful for creating complex gradient patterns and can use custom-labeled annotations for grid points.

# Input types
## Required
- x_columns
    - The x_columns parameter defines the number of columns in the grid. It is critical for determining the horizontal spacing and overall structure of the grid layout.
    - Comfy dtype: INT
    - Python dtype: int
- x_start_value
    - The x_start_value sets the initial value for X-axis interpolation. It is important because it establishes the starting point for gradient calculations across the grid columns.
    - Comfy dtype: FLOAT
    - Python dtype: float
- x_step
    - The x_step parameter specifies the increment between consecutive X values in the grid. It is critical for controlling the rate of change along the horizontal axis.
    - Comfy dtype: FLOAT
    - Python dtype: float
- y_rows
    - The y_rows parameter specifies the number of rows in the grid. It is crucial for establishing the vertical structure and spacing within the grid.
    - Comfy dtype: INT
    - Python dtype: int
- y_start_value
    - The y_start_value sets the initial value for Y-axis interpolation. It is a key parameter for determining the starting point of gradient calculations on the grid rows.
    - Comfy dtype: FLOAT
    - Python dtype: float
- y_step
    - The y_step parameter determines the increment between consecutive Y values in the grid. It is important for controlling the progression of the vertical gradient.
    - Comfy dtype: FLOAT
    - Python dtype: float
- index
    - The index parameter is used to reference a specific position within the grid. It determines which interpolations are calculated and returned.
    - Comfy dtype: INT
    - Python dtype: int
- gradient_profile
    - The gradient_profile parameter selects the type of gradient profile to use. It influences how interpolation is performed on the grid.
    - Comfy dtype: COMBO['Lerp']
    - Python dtype: str
## Optional
- x_annotation_prepend
    - The x_annotation_prepend allows a custom prefix to be added to each X annotation. This can be used to include additional context or information in the annotation.
    - Comfy dtype: STRING
    - Python dtype: str
- y_annotation_prepend
    - The y_annotation_prepend parameter allows a custom prefix to be added to each Y annotation, enhancing the annotation with extra details or context.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- X
    - The X output provides the interpolated X value at the specified grid position. It is a key result of the gradient calculation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- Y
    - The Y output provides the interpolated Y value at the specified grid position. It represents an important result of the gradient interpolation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- x_annotation
    - The x_annotation output returns a string representing the X-value annotation on the grid. It is used to label grid points and provide context.
    - Comfy dtype: STRING
    - Python dtype: str
- y_annotation
    - The y_annotation output generates a string for the Y-value annotation in the grid. It helps identify and contextualize the grid's vertical points.
    - Comfy dtype: STRING
    - Python dtype: str
- trigger
    - The trigger output indicates when a specific condition is met, such as reaching the last grid point. It can be used to initiate further actions or processes.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- show_help
    - The show_help output provides a URL link to the node's documentation page. It gives users direct access to more detailed information and guidance on using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
