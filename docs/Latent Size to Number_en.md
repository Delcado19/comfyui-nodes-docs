# Documentation
- Class name: WAS_Latent_Size_To_Number
- Category: WAS Suite/Number/Operations
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The 'latent_width_height' method of the WAS_Latent_Size_To_Number node is designed to extract and provide the width and height dimensions from a given tensor representing latent space data. This is critical for operations in the WAS suite that require spatial dimensions for further processing or analysis.

# Input types
## Required
- samples
    - The 'samples' parameter is critical because it serves as the input tensor containing latent space data. The node relies on this tensor to compute the width and height dimensions, which are essential for subsequent numerical operations or analysis.
    - Comfy dtype: LATENT
    - Python dtype: Union[torch.Tensor]

# Output types
- tensor_w_num
    - The 'tensor_w_num' output parameter represents the width of the input tensor's spatial dimensions. It is important for applications that need to know the tensor width for further processing.
    - Comfy dtype: INT
    - Python dtype: int
- tensor_h_num
    - The 'tensor_h_num' output parameter represents the height of the input tensor's spatial dimensions. It plays a key role in applications that require the tensor height for subsequent tasks.
    - Comfy dtype: INT
    - Python dtype: int
- width_float
    - The 'width_float' output provides the width of the input tensor in floating-point format. This is useful for algorithms that require decimal precision of the tensor width.
    - Comfy dtype: FLOAT
    - Python dtype: float
- height_float
    - The 'height_float' output provides the height of the input tensor with floating-point precision. It is particularly suitable for applications that require an accurate decimal representation of the tensor height.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Latent_Size_To_Number:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'samples': ('LATENT',)}}
    RETURN_TYPES = ('NUMBER', 'NUMBER', 'FLOAT', 'FLOAT', 'INT', 'INT')
    RETURN_NAMES = ('tensor_w_num', 'tensor_h_num')
    FUNCTION = 'latent_width_height'
    CATEGORY = 'WAS Suite/Number/Operations'

    def latent_width_height(self, samples):
        size_dict = {}
        i = 0
        for tensor in samples['samples'][0]:
            if not isinstance(tensor, torch.Tensor):
                cstr(f'Input should be a torch.Tensor').error.print()
            shape = tensor.shape
            tensor_height = shape[-2]
            tensor_width = shape[-1]
            size_dict.update({i: [tensor_width, tensor_height]})
        return (size_dict[0][0], size_dict[0][1], float(size_dict[0][0]), float(size_dict[0][1]), size_dict[0][0], size_dict[0][1])
```