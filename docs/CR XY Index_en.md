# Documentation
- Class name: CR_XYIndex
- Category: Comfyroll/XY Grid
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_XYIndex node is designed to calculate the corresponding x and y coordinates in a grid structure based on a given index value. It serves as a utility to map linear indices into a 2D grid space, which is essential for various applications such as image processing or data indexing.

# Input types
## Required
- x_columns
    - Parameter 'x_columns' specifies the number of columns in the grid. It is a key element in determining the grid layout, and thus a determining factor in calculating the x and y coordinates for a given index.
    - Comfy dtype: INT
    - Python dtype: int
- y_rows
    - Parameter 'y_rows' defines the number of rows in the grid. Together with 'x_columns', it determines the overall structure of the grid and is crucial for accurately computing grid indices.
    - Comfy dtype: INT
    - Python dtype: int
- index
    - Parameter 'index' is the linear index to be converted into grid coordinates. It is the core of the node operation as it is the starting point for all calculations.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- x
    - Output 'x' represents the x coordinate within the grid calculated from the provided index. It is a key result of the node's functionality, indicating the horizontal position.
    - Comfy dtype: INT
    - Python dtype: int
- y
    - Output 'y' represents the y coordinate within the grid calculated from the provided index. It is essential for determining the vertical position of the index within the grid structure.
    - Comfy dtype: INT
    - Python dtype: int
- show_help
    - Output 'show_help' provides a URL link to documentation for further assistance. It serves as a useful resource for users seeking more information about the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_XYIndex:

    @classmethod
    def INPUT_TYPES(s):
        gradient_profiles = ['Lerp']
        return {'required': {'x_columns': ('INT', {'default': 5.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'y_rows': ('INT', {'default': 5.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0}), 'index': ('INT', {'default': 0.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0})}}
    RETURN_TYPES = ('INT', 'INT', 'STRING')
    RETURN_NAMES = ('x', 'y', 'show_help')
    FUNCTION = 'index'
    CATEGORY = icons.get('Comfyroll/XY Grid')

    def index(self, x_columns, y_rows, index):
        index -= 1
        x = index % x_columns
        y = int(index / x_columns)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/XY-Grid-Nodes#cr-xy-index'
        return (x, y, show_help)
```