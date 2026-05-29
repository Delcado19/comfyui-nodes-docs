# Documentation
- Class name: ShowLayer
- Category: ♾️Mixlab/Layer
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The ShowLayer class is designed to manage and display visual elements in a composite structure. It focuses on positioning and scaling layers based on provided parameters, enabling the creation of complex visual compositions.

# Input types
## Required
- edit
    - The ‘edit’ parameter is critical for determining the operation mode of the ShowLayer class. It decides whether the function edits existing visual elements or creates new ones in the composition.
    - Comfy dtype: EDIT
    - Python dtype: PIL.Image.Image
- x
    - The ‘x’ parameter specifies the horizontal position of the visual element in the composition. It is crucial for correctly aligning layers and achieving the desired visual effect.
    - Comfy dtype: INT
    - Python dtype: int
- y
    - The ‘y’ parameter defines the vertical position of the visual element, working together with the ‘x’ parameter to establish the exact position of the layer in the visual composition.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The ‘width’ parameter is vital in determining the horizontal dimension of the visual element. It affects the overall proportion and layout of the composition, ensuring proper sizing and spacing of elements.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The ‘height’ parameter corresponds to the vertical dimension of the visual element, complementing the ‘width’ parameter to control the size of visual elements in the composition.
    - Comfy dtype: INT
    - Python dtype: int
- z_index
    - The ‘z_index’ parameter establishes the stacking order of visual elements. It is crucial for creating layering effects, where elements with higher ‘z_index’ values appear above those with lower values.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- scale_option
    - The ‘scale_option’ parameter provides flexibility in how visual elements are scaled. It allows scaling by width, height, or overall, affecting the visual appearance and how elements interact within the composition.
    - Comfy dtype: COMBO
    - Python dtype: str
- layers
    - The ‘layers’ parameter is a collection of visual elements that the ShowLayer class can manipulate. It is important for building compositions and determining the visual hierarchy.
    - Comfy dtype: LAYER
    - Python dtype: List[PIL.Image.Image]

# Output types

# Usage tips
- Infra type: CPU

# Source code
```
class ShowLayer:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'edit': ('EDIT',), 'x': ('INT', {'default': 0, 'min': -100, 'max': 8192, 'step': 1, 'display': 'number'}), 'y': ('INT', {'default': 0, 'min': 0, 'max': 8192, 'step': 1, 'display': 'number'}), 'width': ('INT', {'default': 512, 'min': 1, 'max': 8192, 'step': 1, 'display': 'number'}), 'height': ('INT', {'default': 512, 'min': 1, 'max': 8192, 'step': 1, 'display': 'number'}), 'z_index': ('INT', {'default': 0, 'min': 0, 'max': 100, 'step': 1, 'display': 'number'}), 'scale_option': (['width', 'height', 'overall'],)}, 'optional': {'layers': ('LAYER', {'default': None})}}
    RETURN_TYPES = ()
    RETURN_NAMES = ()
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Layer'
    INPUT_IS_LIST = True

    def run(self, edit, x, y, width, height, z_index, scale_option, layers):
        return ()
```