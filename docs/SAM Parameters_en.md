# Documentation
- Class name: WAS_SAM_Parameters
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_SAM_Parameters node is designed to process and format input data for image masking operations in the WAS suite. It accepts points and labels to generate parameters that are crucial for subsequent masking processes. This node plays a key role in preparing the foundation work for accurate and efficient image segmentation tasks.

# Input types
## Required
- points
    - The “points” parameter is crucial for defining coordinates for masking in the image. It is a string containing a series of points, each represented by its x and y coordinates. This parameter directly affects the accuracy of the masking process by determining the areas of interest in the image.
    - Comfy dtype: STRING
    - Python dtype: str
- labels
    - The “labels” parameter assigns classification labels to the provided points, which is crucial for distinguishing different types of regions in the image during masking operations. It is a string containing a list of labels corresponding to each point. This parameter is essential for classifying and organizing image segments during the masking process.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- parameters
    - The “parameters” output is a structured representation of the input points and labels, formatted as a dictionary compatible with the requirements of the image masking process. It encapsulates the processed data, making it ready for downstream masking operations.
    - Comfy dtype: SAM_PARAMETERS
    - Python dtype: Dict[str, Union[np.ndarray, List[int]]]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_SAM_Parameters:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        return {'required': {'points': ('STRING', {'default': '[128, 128]; [0, 0]', 'multiline': False}), 'labels': ('STRING', {'default': '[1, 0]', 'multiline': False})}}
    RETURN_TYPES = ('SAM_PARAMETERS',)
    FUNCTION = 'sam_parameters'
    CATEGORY = 'WAS Suite/Image/Masking'

    def sam_parameters(self, points, labels):
        parameters = {'points': np.asarray(np.matrix(points)), 'labels': np.array(np.matrix(labels))[0]}
        return (parameters,)
```