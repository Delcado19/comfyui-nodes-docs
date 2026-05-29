# Documentation
- Class name: WLSH_Empty_Latent_Image_By_Ratio
- Category: WLSH Nodes/latent
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The 'generate' method of the WLSH_Empty_Latent_Image_By_Ratio node creates an empty latent image based on a specified aspect ratio and orientation. It computes the latent image dimensions and initializes it to zero, serving as a starting point for further image processing tasks.

# Input types
## Required
- aspect
- The 'aspect' parameter defines the aspect ratio of the latent image to be generated. It is critical because it directly determines the output image size.
    - Comfy dtype: str
    - Python dtype: str
- direction
- The 'direction' parameter specifies whether the image should be horizontal or vertical, affecting the allocation of width and height.
    - Comfy dtype: str
    - Python dtype: str
- shortside
- The 'shortside' parameter determines the length of the image's shorter side and is used to calculate the full dimensions based on the aspect ratio.
    - Comfy dtype: int
    - Python dtype: int
## Optional
- batch_size
- The 'batch_size' parameter indicates the number of images to generate in a single operation, improving efficiency when processing multiple images at once.
    - Comfy dtype: int
    - Python dtype: int

# Output types
- latent
- The output 'latent' is a tensor representing an empty latent image with dimensions calculated from the input parameters.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- width
- The output 'width' provides the calculated width of the latent image after considering the aspect ratio and orientation.
    - Comfy dtype: int
    - Python dtype: int
- height
- The output 'height' provides the calculated height of the latent image after considering the aspect ratio and orientation.
    - Comfy dtype: int
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class WLSH_Empty_Latent_Image_By_Ratio:
    aspects = ['1:1', '6:5', '5:4', '4:3', '3:2', '16:10', '16:9', '19:9', '21:9', '2:1', '3:1', '4:1']
    direction = ['landscape', 'portrait']

    def __init__(self, device='cpu'):
        self.device = device

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'aspect': (s.aspects,), 'direction': (s.direction,), 'shortside': ('INT', {'default': 512, 'min': 64, 'max': MAX_RESOLUTION, 'step': 64}), 'batch_size': ('INT', {'default': 1, 'min': 1, 'max': 64})}}
    RETURN_TYPES = ('LATENT', 'INT', 'INT')
    RETURN_NAMES = ('latent', 'width', 'height')
    FUNCTION = 'generate'
    CATEGORY = 'WLSH Nodes/latent'

    def generate(self, aspect, direction, shortside, batch_size=1):
        (x, y) = aspect.split(':')
        x = int(x)
        y = int(y)
        ratio = x / y
        width = int(shortside * ratio)
        width = width + 63 & -64
        height = shortside
        if direction == 'portrait':
            (width, height) = (height, width)
        adj_width = width // 8
        adj_height = height // 8
        latent = torch.zeros([batch_size, 4, adj_height, adj_width])
        return ({'samples': latent}, adj_width * 8, adj_height * 8)
```