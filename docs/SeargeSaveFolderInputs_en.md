# Documentation
- Class name: SeargeSaveFolderInputs
- Category: Searge/_deprecated_/Inputs
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node class is designed to facilitate the process of saving data to a specified folder, acting as an intermediary between the user and the save function. It emphasizes ease of use and ensures data is directed to the correct location according to the user’s request.

# Input types
## Required
- save_to
    - The `save_to` parameter is crucial for determining the destination folder of the data. It is a string that specifies the path where the data will be saved, and its correct usage is essential for the node’s successful execution.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- save_to
    - The output `save_to` represents the confirmed folder path where the data will be saved. This is key information indicating the node’s successful operation and correct data routing.
    - Comfy dtype: str
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeSaveFolderInputs:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'save_to': (SeargeParameterProcessor.SAVE_TO, {'default': SeargeParameterProcessor.SAVE_TO[0]})}}
    RETURN_TYPES = ('SAVE_FOLDER',)
    RETURN_NAMES = ('save_to',)
    FUNCTION = 'get_value'
    CATEGORY = 'Searge/_deprecated_/Inputs'

    def get_value(self, save_to):
        return (save_to,)
```