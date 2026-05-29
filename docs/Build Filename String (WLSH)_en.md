# Documentation
- Class name: WLSH_Build_Filename_String
- Category: WLSH Nodes/text
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

This node generates a unique file name string by merging timestamp, model name, seed, and counter into a customizable template. It aims to create recognizable and organized file names for various applications.

# Input types
## Required
- filename
    - Base name, from which the final file name is constructed. It serves as a template for inserting other parameters.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- modelname
    - Name of the model, used to identify and include in the file name.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - A value to increase diversity and uniqueness of the file name.
    - Comfy dtype: INT
    - Python dtype: int
- counter
    - An integer, used to create a series of file names when used with the same base name and parameters.
    - Comfy dtype: SEED
    - Python dtype: int
- time_format
    - Defines the format for inserting the timestamp into the file name.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- filename
    - The final output is a formatted string representing the constructed file name, containing all the provided parameters.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WLSH_Build_Filename_String:

    def __init__(s):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'filename': ('STRING', {'%time_%seed': 'info', 'multiline': False})}, 'optional': {'modelname': ('STRING', {'default': '', 'multiline': False}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'counter': ('SEED', {'default': 0}), 'time_format': ('STRING', {'default': '%Y-%m-%d-%H%M%S', 'multiline': False})}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('filename',)
    FUNCTION = 'build_filename'
    CATEGORY = 'WLSH Nodes/text'

    def build_filename(self, filename='ComfyUI', modelname='model', time_format='%Y-%m-%d-%H%M%S', seed=0, counter=0):
        filename = make_filename(filename, seed, modelname, counter, time_format)
        return filename
```