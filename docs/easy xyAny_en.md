# Documentation
- Class name: xyAny
- Category: EasyUse/Logic
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node class facilitates reorganizing input data into a structured format aligned horizontally or vertically. It simplifies data manipulation tasks by efficiently pairing elements based on a specified direction, enhancing the data’s usefulness in subsequent processing steps.

# Input types
## Required
- X
    - Parameter **'X'** represents the first group of elements, which will be paired with elements in **'Y'**. Its importance lies in establishing one side of the data pairing, crucial for the node’s operation and the resulting data structure.
    - Comfy dtype: COMBO[*]
    - Python dtype: List[Any]
- Y
    - Parameter **'Y'** represents the second group of elements, intended to pair with elements in **'X'**. It plays a vital role in the node’s functionality, as it determines the other side of the pairing, directly affecting the final arrangement of the output.
    - Comfy dtype: COMBO[*]
    - Python dtype: List[Any]
- direction
    - Parameter **'direction'** specifies the pairing direction, which can be **'horizontal'** or **'vertical'**. It is essential because it defines the output structure, guiding the node on how to arrange **'X'** and **'Y'** elements into the desired format.
    - Comfy dtype: [str]
    - Python dtype: Union[str, AlwaysEqualProxy]

# Output types
- X
    - Output **'X'** is a restructured sequence of elements from the original **'X'** input, now paired with elements in **'Y'** according to the specified direction. It represents half of the node’s output, transformed to meet horizontal or vertical alignment requirements.
    - Comfy dtype: COMBO[*]
    - Python dtype: List[Any]
- Y
    - Output **'Y'** structurally mirrors output **'X'**, but consists of elements from the **'Y'** input. It forms the other half of the node’s output, completing the paired dataset organized based on the chosen direction.
    - Comfy dtype: COMBO[*]
    - Python dtype: List[Any]

# Usage tips
- Infra type: CPU

# Source code
```
class xyAny:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'X': (AlwaysEqualProxy('*'), {}), 'Y': (AlwaysEqualProxy('*'), {}), 'direction': (['horizontal', 'vertical'], {'default': 'horizontal'})}}
    RETURN_TYPES = (AlwaysEqualProxy('*'), AlwaysEqualProxy('*'))
    RETURN_NAMES = ('X', 'Y')
    INPUT_IS_LIST = True
    OUTPUT_IS_LIST = (True, True)
    CATEGORY = 'EasyUse/Logic'
    FUNCTION = 'to_xy'

    def to_xy(self, X, Y, direction):
        new_x = list()
        new_y = list()
        if direction[0] == 'horizontal':
            for y in Y:
                for x in X:
                    new_x.append(x)
                    new_y.append(y)
        else:
            for x in X:
                for y in Y:
                    new_x.append(x)
                    new_y.append(y)
        return (new_x, new_y)
```